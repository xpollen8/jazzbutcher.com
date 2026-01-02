"use client"

import Link from 'next/link';
import { summaryBodySearch, removeHTML } from '@/components/GenericWeb';
import useContributions from '@/lib/useContributions';
import { type HashedType, parseCaptionsSourcesEtc, pluralize, dateAgo, ts2URI, parseCredit } from '@/lib/utils';
import Loading from '@/components/Loading';
import PhotoSet from '@/components/PhotoSet';
import Tag from '@/components/Tag';
import PressCards from '@/components/PressCards';
import LinkAudio from '@/components/LinkAudio';
import EmbedMedia from '@/components/EmbedMedia';
import ContributionChart from '@/components/ContributionChart';

const cleanDate = (dt?: string) => dt?.substring(0, 10)?.replace(/-00/g, '');

const isTypeImage = (type?: string) => {
	const lower = type?.toLowerCase();
	return lower?.includes('image') || lower?.includes('photo') || lower?.includes('poster') || lower?.includes('ticket') || lower?.includes('setlist');
}

const isTypeAudio = (type?: string) => {
	const lower = type?.toLowerCase();
	return lower?.includes('audio');
}

const isTypeVideo = (type?: string) => {
	const lower = type?.toLowerCase();
	return lower?.includes('video');
}

const Pictures = ({ pictures, name }: any) => {
	if (!pictures?.numResults) return;
	return <>
		<Tag>Photos tagged with &quot;{name}&quot;</Tag>
    <PhotoSet photos={pictures?.results?.map((p: any) => {
      return {
        ...p,
				caption: p?.image_caption,
        alt: p?.datetime?.substring(0, 10),
        href: ts2URI(p?.datetime),
        src: p?.image
      }
      })
    } />
	</>
}

const InPress = ({ inpress, name }: any) => {
	if (!inpress?.numResults) return;
	return <PressCards title={pluralize(inpress.numResults, 'press article', `"${name}" appears in`)} preventAutoExpand={true} items={inpress?.results?.map((p: any) => {
		return { ...p, summary: summaryBodySearch(p?.body, name, 200) }
	})} />
}

const IndividualContributions = ({ who, contributions, total, recent, open, justOneResult }: any) => {
	const uniques = contributions.reduce((acc: any, a: any) => {
		const key = JSON.stringify({ mediaurl: a?.video || a?.mediaurl, audio: a?.audio, who: a?.who, datetime: a?.datetime, type: a?.type, href: a?.href, added: a?.added, summary: isTypeImage(a?.type) ? '' : a?.summary, caption: isTypeImage(a?.type) ? '' : a?.caption });
		return { ...acc, [key]: (acc[key] || 0) + 1};
	}, {});

	const useData = Object.keys(uniques)?.map((x: any) => ({ count: uniques[x], ...JSON.parse(x) }))?.sort((a: any, b: any) => (b?.added || '').localeCompare(a?.added || ''));

	const showData = (x: any, key: number) => {
		const { count, type, datetime, added, summary, caption, href } = x;
		if (isTypeImage(type)) {
			// gather together images from the same datetime
			return <div key={key}  className="listItem odd:bg-gray-100 border-b">
				<PhotoSet
				title=<Link href={href || ts2URI(datetime)}>{cleanDate(datetime)} {type} {dateAgo(added,' - ',`added: ${added} - `)}</Link>
				photos={contributions?.filter((c: any) => c?.added === added && c?.type == type && c?.datetime === datetime && c?.href === href)?.map((c: any) => {
			return {
				src: c?.image,
				added: c?.added,
				alt: c?.caption || '',
			}
		})}
				/>
				</div>
			
		} else if (isTypeVideo(type)) {
			return <div key={key} className="odd:bg-gray-100 border-b">
				<EmbedMedia data={{...x}}>
				<Link href={href} ><div className="clickItem" style={{ color: '#444', marginTop: '5px' }}>
				<i>{pluralize(count, type, undefined, true)}</i>{' - '}
				{(cleanDate(datetime)) ? <>
					<b className="monospace" >{cleanDate(datetime)}</b> {summary}
					</> : <b className="monospace" >{summary}</b>
				}
				{' '}{caption && `"${caption}"`} {dateAgo(added,' - ',`added: ${cleanDate(added)} - `)}
				</div></Link>
				</EmbedMedia>
			</div>
		} else if (isTypeAudio(type)) {
			return <div key={key} className="odd:bg-gray-100 border-b">
				<LinkAudio mp3={x?.audio}>
				<Link href={href} ><div className="clickItem" style={{ color: '#444', marginTop: '5px' }}>
				<i>{pluralize(count, type, undefined, true)}</i>{' - '}
				{(cleanDate(datetime)) ? <>
					<b className="monospace" >{cleanDate(datetime)}</b> {summary}
					</> : <b className="monospace" >{summary}</b>
				}
				{' '}{caption && `"${caption}"`} {dateAgo(added,' - ',`added: ${cleanDate(added)} - `)}
				</div></Link>
				</LinkAudio>
			</div>
		} else {
			return <div key={key} className="clickItem odd:bg-gray-100 border-b"><Link href={href} >
				<div className="p-1" style={{ color: '#444' }}>
				<i>{pluralize(count, type, undefined, true)}</i>{' - '}
				{(cleanDate(datetime)) ? <>
					<b className="monospace" >{cleanDate(datetime)}</b> {summary}
					</> : <b className="monospace" >{summary}</b>
				}
				{' '}{caption && `"${caption}"`} {dateAgo(added,' - ',`added: ${cleanDate(added)} - `)}
			</div>
			</Link></div>
		}
	}

	if (justOneResult) {
		return <>
			<ContributionChart data={useData} stacked={true} />
			{useData?.map(showData)}
		</>
	}

	return <div className="listItem">
		<details open={open || (contributions.length === 1)}>
		<summary className="tagClickable">{who} {pluralize(contributions.length)}</summary>
		{useData?.map(showData)}
	</details>
	</div>
}

const AllContributions = ({ contributions, total, recent, label, options={} }: any) => {
	let useLabel = label;
	if (options?.filter?.value) {
		if (options?.all) {
			useLabel = `All contributions credited to "${options?.filter?.value}"`;
		} else {
			useLabel = `Recent contributions credited to "${options?.filter?.value}"`;
		}
	}
	const contributorArray = Object.keys(contributions)?.map((who: any) => contributions[who]?.map((c: any) => ({ who, ...c })));
	const justOneResult = (contributorArray?.length === 1);

	return <details open={justOneResult}>
		<summary className="tagClickable">{pluralize(total, useLabel)} {dateAgo(recent)}</summary>
		{contributorArray?.map((personcontributions: any, key: number) => {
			if (personcontributions?.length < 1) return;
			return <IndividualContributions key={key} contributions={personcontributions} who={personcontributions[0]?.who} open={(Object.keys(contributions).length === 1)} justOneResult={justOneResult} />
		})}
	</details>
}

const prettyType = (type: string, t?: string) => {
	const tl = type.toLowerCase();
	if (tl === 'audio') {
		if (t === 'set') return 'Live Audio';
		if (t === 'encore') return 'Encore Audio';
		if (t === 'warmup') return 'Warmup Audio';
	}
	if (tl === 'video') {
		if (t === 'set') return 'Live Video';
		if (t === 'encore') return 'Encore Video';
		if (t === 'warmup') return 'Warmup Video';
	}
	if (tl === 'text' && t === 'announcement') return 'Gig Announcement';
	if (tl === 'text' && t === 'bootlegger') return 'Taped the Show';
	if (tl === 'text' && t === 'recording') return 'Bootleg Description';
	if (t === 'poster') return 'Event Poster';
	if (t === 'ticket') return 'Event Ticket';
	if (t === 'setlist') return 'Event Setlist';
	if (t === 'pix') return 'Event Image';
	if (t === 'review') return 'Gig Review';
	if (t === 'selfreview') return 'Pat Gig Review';
	if (t === 'press') {
		if (tl === 'image') {
			return 'Press Article Image';
		}
		if (tl === 'audio') {
			return 'Press Article Audio';
		}
		if (tl === 'video') {
			return 'Press Article Video';
		}
		return 'Press Article';
	}
	return t + ' ' + type;
}

const Contributions = ({ options, label='Community contribution' }: HashedType) => {
	const { data, isLoading, error} = useContributions(options);
	if (!data) return;
	const { gigmedia, gigtext, gigsong, press, pressmedia, media, inpress, lyric, lyricmedia, jbclist, pictures } = data || {};
	const contributions: HashedType = {};
	const recent = [ gigmedia?.results[0]?.credit_date, gigsong?.results[0]?.added, gigtext?.results[0]?.credit_date, press?.results[0]?.dtadded ]?.sort((a: any, b: any) => b?.localeCompare(a))[0];
	let total = 0;

	const addInfo = (contributions: HashedType, info: any) => {
		const person = info?.person;
		if (!person || !contributions[person]) { contributions[person] = []; }
		contributions[person].push(info);
		total = total + 1;
	}
	gigsong?.results?.forEach((r: any) => {
		if (!r?.mediaurl?.length) return;
		addInfo(contributions,
			{
				person: r?.credit,
				type: prettyType(r?.mediaurl?.includes('.mp3') ? 'Audio' : 'Video', 'Event'),
				added: r?.added,
				datetime: r?.datetime,
				summary: r?.song,
				audio: r?.mediaurl?.includes('.mp3') ? r?.mediaurl : null,
				video: !r?.mediaurl?.includes('.mp3') ? r?.mediaurl : null,
				href: ts2URI(r?.datetime),
			}
		);
	});

	jbclist?.results?.forEach((r: any) => {
		addInfo(contributions,
			{
				person: r?.credit,
				type: 'jbc-list',
				added: r?.date,
				summary: r?.subject,
				caption: (r?.body) ? r.body?.substring(0, 500)?.replaceAll('{{', '')?.replaceAll('}}', '') + '...' : '',
				href: `/mailinglist/${r.msgId}`,
			}
		);
	});

	gigtext?.results?.forEach((r: any) => {
		addInfo(contributions,
			{
				person: r?.credit,
				type: prettyType('text', r?.type),
				added: r?.credit_date,
				datetime: r?.datetime,
				caption: (r?.body) ? removeHTML(r.body)?.replace(/<br\/>/gi, '')?.substring(0, 50) + '...' : '',
				//summary: (r?.body) ? removeHTML(r.body)?.replace(/<br\/>/gi, '')?.substring(20, 100) + '...' : '',
				href: ts2URI(r?.datetime),
			}
		);
	});

	media?.results?.forEach((r: any) => {
		/*
		only add media that do not already exist in gigsong
		 */
		if (gigsong?.results?.find((x: any) => {
			if (x?.mediaurl) {
				return x?.mediaurl === r?.href;
			}
			})) { return; }
		addInfo(contributions,
			{
				person: r?.credit,
				type: prettyType(r?.href?.includes('.mp3') || r?.mp3 ? 'Audio' : 'Video', 'Media'),
				//type: prettyType(r?.type, r?.subtype || ''),
				added: r?.credit_date,
				datetime: r?.datetime,
				summary: r?.name,
				href: ts2URI(r?.datetime) || r?.mp3,
				audio: r?.href?.includes('.mp3') ? r?.href : (r?.mp3 ? r.mp3 : null),
				video: !(r?.href?.includes('.mp3') || r?.mp3) ? r?.href : null,
				image: r?.image,
			}
		);
	});

	gigmedia?.results?.forEach((r: any) => {
		addInfo(contributions,
			{
				person: r?.credit,
				type: prettyType('image', r?.type),
				added: r?.credit_date,
				datetime: r?.datetime,
				summary: (r?.image_caption) ? removeHTML(r?.image_caption)?.substring(0, 50) + '...' : '',
				href: ts2URI(r?.datetime),
				image: r?.image,
				caption: removeHTML(r?.image_caption),
			}
		);
	});

	lyricmedia?.results?.forEach((r: any) => {
		/*
		only add media that do not already exist in gigsong
		 */
		if (gigsong?.results?.find((x: any) => {
			if (x?.mediaurl) {
				return x?.mediaurl === r?.audio || x?.mediaurl === r?.video;
			}
			})) { return; }
		addInfo(contributions,
			{
				person: r?.credit,
				type: prettyType(r?.type, 'Lyrics media'),
				added: r?.credit_date,
				href: r?.href,
				image: r?.image,
				audio: r?.audio,
				video: r?.video,
				summary: r?.caption,
			}
		);
	});

	pressmedia?.results?.forEach((r: any) => {
		addInfo(contributions,
			{
				person: r?.credit,
				type: prettyType(r?.type, 'press'),
				added: r?.credit_date,
				href: r?.href,
				image: r?.image,
				audio: r?.audio,
				summary: r?.title,
			}
		);
	});

	press?.results?.forEach((r: any) => {
		addInfo(contributions,
			{
				person: r?.credit,
				type: prettyType(r?.type, 'press'),
				added: r?.dtadded || r?.dtpublished,
				summary: r?.title || r?.publication,
				caption: (r?.headline || r?.publication || '')?.substring(0, 50) + '...',
				href: r?.url,
			}
		);
	});
	lyric?.results?.forEach(({ tablature_credit, title, href }: any) => {
		const { credit, crediturl, creditdate, creditcaption } = parseCredit(tablature_credit);
		addInfo(contributions,
			{
				person: credit,
				type: 'Song Tablature',
				added: creditdate,
				summary: title,
				href: `/lyrics/${href}`,
			}
		);
	});
	return <Loading isLoading={isLoading} >
		{(!!options?.filter?.value) && <Pictures pictures={pictures} name={options?.filter?.value} />}
		{(!!options?.filter?.value) && <InPress inpress={inpress} name={options?.filter?.value} />}
		{(!!total) && <AllContributions contributions={contributions} total={total} recent={recent} label={label} options={options} />}
	</Loading>
}

export default Contributions;
