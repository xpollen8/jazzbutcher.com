"use client"

import Link from 'next/link';
import { removeHTML } from '@/components/GenericWeb';
import useContributions from '@/lib/useContributions';
import { type HashedType, pluralize, dateAgo, ts2URI } from '@/lib/utils';
import Loading from '@/components/Loading';

const IndividualContributions = ({ who, contributions, total, recent, open, justOneResult }: any) => {
	const uniques = contributions.reduce((acc: any, a: any) => {
		const key = JSON.stringify(a);
		return { ...acc, [key]: (acc[key] || 0) + 1};
	}, {});

	const useData = Object.keys(uniques)?.map((x: any) => ({ count: uniques[x], ...JSON.parse(x) }))?.sort((a: any, b: any) => ('' + b?.added || '').localeCompare(a?.added || ''));

	const showData = (x: any, key: number) => {
		const { count, type, datetime, added, summary } = x;
		return <div key={key}  className="clickListItem">
			<Link className="monospace" href={`/gigs/${ts2URI(datetime)}`}>{datetime?.substr(0, 10)}</Link> {pluralize(count, type, null, true)} {dateAgo(added)} {summary && `"${summary}"`}
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
	if (t === 'pix') return 'photo from live gig';
	if (t === 'review') return 'gig review';
	if (t === 'selfreview') return 'Pat gig review';
	return t + ' ' + type;
}

const Contributions = ({ options, label='Community contribution' }: HashedType) => {
	const { data, isLoading, error} = useContributions(options);
	if (!data) return;
	const { gigmedia, gigtext, gigsong } = data || {};
	const contributions: HashedType = {};
	const total = gigmedia?.results?.length + gigtext?.results?.length + gigsong?.results?.length;
	const recent = gigmedia?.results[0]?.credit_date;
	gigsong?.results?.forEach((r: any) => {
		if (!r?.mediaurl?.length) return;
		const type = prettyType(r?.mediaurl?.includes('.mp3') ? 'audio' : 'video', r?.type);
		const person = removeHTML(r?.mediacredit);
		const datetime = r?.datetime;
		const added = r?.added;
		if (!contributions[person]) { contributions[person] = []; }
		contributions[person].push({
			type,
			added,
			datetime,
			summary: r?.song,
		});
	});
	gigtext?.results?.forEach((r: any) => {
		const type = prettyType('text', r?.type);
		const person = removeHTML(r?.credit);
		const datetime = r?.datetime;
		const added = r?.credit_date;
		if (!contributions[person]) { contributions[person] = []; }
		contributions[person].push({
			type,
			added,
			datetime,
			summary: (r?.body) ? removeHTML(r.body)?.replace(/<br\/>/gi, '')?.substr(0, 50) + '...' : '',
		});
	});
	gigmedia?.results?.forEach((r: any) => {
		const type = prettyType('image', r?.type);
		const person = removeHTML(r?.credit);
		const datetime = r?.datetime;
		const added = r?.credit_date;
		if (!contributions[person]) { contributions[person] = []; }
		contributions[person].push({
			type,
			added,
			datetime,
			summary: (r?.image_caption) ? removeHTML(r?.image_caption)?.substr(0, 50) + '...' : '',
		});
	});
	return <Loading isLoading={isLoading} >
		<AllContributions contributions={contributions} total={total} recent={recent} label={label} options={options} />
	</Loading>
}

export default Contributions;
