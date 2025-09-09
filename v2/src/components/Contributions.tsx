"use client"

import Link from 'next/link';
import { summaryBodySearch, removeHTML } from '@/components/GenericWeb';
import useContributions from '@/lib/useContributions';
import { type HashedType, parseCaptionsSourcesEtc, pluralize, dateAgo, ts2URI, parseCredit } from '@/lib/utils';
import Loading from '@/components/Loading';
import PhotoSet from '@/components/PhotoSet';
import PressCards from '@/components/PressCards';
import ContributionChart from '@/components/ContributionChart';

const cleanDate = (dt?: string) => dt?.substring(0, 10)?.replace(/-00/g, '');

const InPress = ({ inpress, name }: any) => {
	if (!inpress?.numResults) return;
	return <PressCards title={pluralize(inpress.numResults, 'press article', `"${name}" appears in`)} preventAutoExpand={true} items={inpress?.results?.map((p: any) => {
		return { ...p, summary: summaryBodySearch(p?.body, name, 200) }
	})} />
}

const IndividualContributions = ({ who, contributions, total, recent, open, justOneResult }: any) => {
	const uniques = contributions.reduce((acc: any, a: any) => {
		const key = JSON.stringify({ who: a?.who, datetime: a?.datetime, type: a?.type, href: a?.href, added: a?.added, summary: (a?.type?.includes('image')) ? '' : a?.summary, caption: (a?.type?.includes('image')) ? '' : a?.caption });
		return { ...acc, [key]: (acc[key] || 0) + 1};
	}, {});

	const useData = Object.keys(uniques)?.map((x: any) => ({ count: uniques[x], ...JSON.parse(x) }))?.sort((a: any, b: any) => (b?.added || '').localeCompare(a?.added || ''));

	const showData = (x: any, key: number) => {
		const { count, type, datetime, added, summary, caption, href } = x;
		const typeIsImage = type?.includes('image');
		const photos = (!typeIsImage) ? [] : contributions?.filter((c: any) => c?.type == type && c?.datetime === datetime && c?.href === href)?.map((c: any) => {
			return {
				src: c?.image,
				added: c?.added,
				alt: c?.caption || '',
			}
		});
		return <div key={key}  className="clickListItem odd:bg-gray-100 border-b">
			{(!!photos?.length) ? <PhotoSet title=<Link href={href || ts2URI(datetime)}>{cleanDate(datetime)} {type} {dateAgo(added,' - ',`added: ${added} - `)}</Link>  photos={photos?.filter((f: any) => f?.added == added)} /> : 
			<>
			<Link className="monospace" href={href} >{cleanDate(datetime) || summary}</Link> {pluralize(count, type, undefined, true)} {caption && `"${caption}"`} {dateAgo(added,' - ',`added: ${cleanDate(added)} - `)}
			</>}
		</div>
	}

	if (justOneResult) {
		return <>
			<ContributionChart data={useData} stacked={true} />
			{useData?.map(showData)}
		</>
	}

	return <div className="clickListItem">
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
	if (type === 'audio' || type === 'video') {
		if (t === 'set') return 'live ' + type;
		if (t === 'encore') return 'encore ' + type;
		if (t === 'warmup') return 'warmup ' + type;
	}
	if (type === 'text' && t === 'bootlegger') return 'taped the show';
	if (type === 'text' && t === 'recording') return 'bootleg description';
	if (t === 'pix') return 'event image';
	if (t === 'review') return 'gig review';
	if (t === 'selfreview') return 'Pat gig review';
	return t + ' ' + type;
}

const Contributions = ({ options, label='Community contribution' }: HashedType) => {
	const { data, isLoading, error} = useContributions(options);
	if (!data) return;
	const { gigmedia, gigtext, gigsong, press, pressmedia, media, inpress, lyric, lyricmedia } = data || {};
	const contributions: HashedType = {};
	const recent = [ gigmedia?.results[0]?.credit_date, gigsong?.results[0]?.added, gigtext?.results[0]?.credit_date, press?.results[0]?.dtadded]?.sort((a: any, b: any) => b?.localeCompare(a))[0];
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
				type: prettyType(r?.mediaurl?.includes('.mp3') ? 'audio' : 'video', r?.type),
				added: r?.added,
				datetime: r?.datetime,
				summary: r?.song,
				href: ts2URI(r?.datetime),
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
				summary: (r?.body) ? removeHTML(r.body)?.replace(/<br\/>/gi, '')?.substring(0, 50) + '...' : '',
				href: ts2URI(r?.datetime),
			}
		);
	});

	media?.results?.forEach((r: any) => {
		addInfo(contributions,
			{
				person: r?.credit,
				type: prettyType(r?.type, r?.subtype || ''),
				added: r?.credit_date,
				datetime: r?.datetime,
				summary: r?.name,
				href: ts2URI(r?.datetime),
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
				type: prettyType(r?.type, 'Press article'),
				added: r?.credit_date,
				href: r?.href,
				image: r?.image,
				audio: r?.audio,
				summary: r?.caption,
			}
		);
	});

	press?.results?.forEach((r: any) => {
		addInfo(contributions,
			{
				person: r?.credit,
				type: prettyType(r?.type, 'Press article'),
				added: r?.dtpublished,
				summary: r?.title || r?.publication,
				caption: (r?.headline || r?.publication)?.substring(0, 50) + '...',
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
		{(!!options?.filter?.value) && <InPress inpress={inpress} name={options?.filter?.value} />}
		{(!!total) && <AllContributions contributions={contributions} total={total} recent={recent} label={label} options={options} />}
	</Loading>
}

export default Contributions;
