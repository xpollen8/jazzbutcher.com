"use client"

import Link from 'next/link';
import { removeHTML } from '@/components/GenericWeb';
import useContributions from '@/lib/useContributions';
import { type HashedType, pluralize, dateAgo, ts2URI } from '@/lib/utils';
import Loading from '@/components/Loading';
import PhotoSet from '@/components/PhotoSet';

const IndividualContributions = ({ who, contributions, total, recent, open, justOneResult }: any) => {
	const uniques = contributions.reduce((acc: any, a: any) => {
		const key = JSON.stringify({ who: a?.who, datetime: a?.datetime, type: a?.type, href: a?.href, added: a?.added, summary: (a?.type?.includes('photo') || a?.type?.includes('image')) ? '' : a?.summary });
		return { ...acc, [key]: (acc[key] || 0) + 1};
	}, {});

	const useData = Object.keys(uniques)?.map((x: any) => ({ count: uniques[x], ...JSON.parse(x) }))?.sort((a: any, b: any) => (b?.added || '').localeCompare(a?.added || ''));

	const showData = (x: any, key: number) => {
		const { count, type, datetime, added, summary, href } = x;
		const typeIsImage = (type?.includes('photo') || type?.includes('image'));
		const photos = (!typeIsImage) ? [] : contributions?.filter((c: any) => c?.type == type && c?.datetime === datetime)?.map((c: any) => {
			return {
				src: c?.image,
				added: c?.added,
				alt: removeHTML(c?.caption) || '',
			}
		});
		return <div key={key}  className="clickListItem odd:bg-gray-100 border-b">
			{(!!photos?.length) ? <PhotoSet title=<Link href={ts2URI(datetime)}>{datetime?.substr(0, 10)}: {type} {dateAgo(added,' - ',`added: ${added} - `)}</Link>  photos={photos?.filter((f: any) => f?.added == added)} /> : 
			<>
			<Link className="monospace" href={href} >{datetime?.substr(0, 10)}</Link> {pluralize(count, type, undefined, true)} {summary && `"${summary}"`} {dateAgo(added,' - ',`added: ${added} - `)}
			</>}
		</div>
	}

	if (justOneResult) {
		return <>
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
	if (t === 'pix') return 'event photo';
	if (t === 'review') return 'gig review';
	if (t === 'selfreview') return 'Pat gig review';
	return t + ' ' + type;
}

const Contributions = ({ options, label='Community contribution' }: HashedType) => {
	const { data, isLoading, error} = useContributions(options);
	if (!data) return;
	const { gigmedia, gigtext, gigsong, press } = data || {};
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
				summary: (r?.body) ? removeHTML(r.body)?.replace(/<br\/>/gi, '')?.substr(0, 50) + '...' : '',
				href: ts2URI(r?.datetime),
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
				summary: (r?.image_caption) ? removeHTML(r?.image_caption)?.substr(0, 50) + '...' : '',
				href: ts2URI(r?.datetime),
				image: r?.image,
				caption: r?.image_caption,
			}
		);
	});

	press?.results?.forEach((r: any) => {
		addInfo(contributions,
			{
				person: r?.credit,
				type: 'press',
				added: r?.dtadded,
				datetime: r?.dtpublished,
				summary: [r?.publication, r?.issue, r?.title, r?.headline]?.filter((x: string) => x)?.join(' - ')?.substr(0, 50) + '...',
				href: r?.url,
			}
		);
	});
	return <Loading isLoading={isLoading} >
		{(!!total) && <AllContributions contributions={contributions} total={total} recent={recent} label={label} options={options} />}
	</Loading>
}

export default Contributions;
