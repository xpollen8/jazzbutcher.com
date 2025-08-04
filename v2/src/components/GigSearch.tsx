import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';
import { type RecordType, type HashedType } from '@/lib/utils';
import { parseYear, parseMonth, parseDayOrdinal, parseHour, parseHourAMPM, parseDay, num2mon, ts2URI, htmlString } from '@/lib/utils';
import { removeHTML } from '@/components/GenericWeb';
import GigGraph, { GigBarTypes } from '@/components/GigGraph';
import { AutoLinkPlayer, AutoLinkSong, AutoLinkAct } from '@/lib/defines';

import IconSonglist from '@/svg/IconSonglist';
import IconPix from '@/svg/IconPix';
import IconVideo from '@/svg/IconVideo';
import IconRecording from '@/svg/IconRecording';
import IconPlayers from '@/svg/IconPlayers';
import IconReview from '@/svg/IconReview';
import IconTicket from '@/svg/IconTicket';
import IconPress from '@/svg/IconPress';
import IconInterview from '@/svg/IconInterview';
//import IconPat from '@/svg/IconPat';
//import IconSetlist from '@/svg/IconSetlist';

type SearchResultRecord = {
	[key: string]: any
}

type SearchResultType = {
	type?: string
	noun?: string
	numResults?: number
	key?: string
	results?: SearchResultRecord[]
	searchTerms?: string[]
}

export const GigSearchDialog = () => {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const [isPending, startTransition] = useTransition();

	const [f, setF] = useState(searchParams.get('f') || 'anything');
	const [q, setQ] = useState(searchParams.get('q'));

	const setNavigation = (_f: string = 'anything', _q: string | null) => {
		startTransition(() => {
			if (_q) {
				const searchParams = new URLSearchParams();
				searchParams.set('f', _f);
				searchParams.set('q', _q);
				router.replace(`${pathname}?${searchParams.toString()}`);
			} else {
				router.replace(pathname);
			}
		});
	}
	const debounce = (func: any) => {
		const timeout = 0;
		let timer: any;
		return (...args: any) => {
			if (timer) {
				clearTimeout(timer);
			}
			timer = setTimeout(() => {
				func.apply(this, args);
			}, timeout);
		}
	}
	return (<>
		<form onSubmit={async (ev) => {
			ev.preventDefault();
			setNavigation(f, q);
		}}
		>
		<div style={{
			padding: '3px',
			background: '#eee',
			margin: '5px',
			}}
			className="flex flex-wrap justify-center space-x-5"
		>
				<div className="m-1">
					<select className="p-2" value={f as string || 'anything'} onChange={(e) => {
							setF(e.target.value);
						}}>
						{/*<option key={'blank'} className="-1">Find..</option>*/}
						{gigSearchOptions.map((o, key) => <option key={key} value={o.noun}>{o.text}</option>)}
					</select>
				</div>
				<div className="p-1">
					<input type="text" value={q as string || ''} placeholder="contains.." onChange={(e) => {
						setQ(e.target.value);
					}} className="p-1" />
				</div>
				<span className="w-1/4">
					<button type="submit" className="rounded-full m-2 border bg-slate-300 hover:border-black hover:bg-slate-100 w-1/4">Go!</button>
					{(f && q) && <button onClick={(ev) => {
						ev.preventDefault();
							setF('anything');
							setQ(null);
							setNavigation('anything', null);
						}} type="submit" className="rounded-full m-2 border bg-slate-300 hover:border-black hover:bg-slate-100 w-1/4">Clear!</button>}
				</span>
		</div>
		</form>
		</>
	)
}

export const GigSearchResults = ({ results={}, banner, preventAutoExpand }: { results: SearchResultType, banner?: any, preventAutoExpand?: boolean }): React.ReactNode => {
	const options = gigSearchOptionsByType(results?.type);
	const layout = options.layout;
	const template = options?.template;

	return (
		<>
			{(banner) && banner(results)}
			{(template) && template(results, layout, preventAutoExpand)}
		</>
	)
}

export const BannerGigs = (results: HashedType, searchYear?: number) => {
		if (!results) return <></>;
		const searchType = gigSearchOptionsByType(results?.type).text;
		const numMatched = results?.numResults ?? 0;
		const bannerYear = (searchYear) ? `In ${searchYear}, ` : '';
		const bannerTerms = (searchType && results?.searchTerms) ? `${searchType}: ${results?.searchTerms}` : '';
		const bannerClass = (numMatched) ? 'search found' : 'search notfound';
		const bannerText = `${bannerYear}${numMatched} gig${(numMatched === 1) ? '' : 's'} matched`;

		return (
			<div style={{ textAlign: 'center', fontSize: '2em' }}>
				{bannerText} {(bannerTerms) && <span className={bannerClass}>{bannerTerms}</span>}
			</div>
		)
}

const Venue = ({ record }: { record: RecordType }) =>
<div style={{ paddingTop: '4px', paddingBottom: '6px' }}>
		{(record?.title) && <div className="gig_project">&quot;{record?.title}&quot;</div>}
		<div style={{ fontWeight: '900', fontSize: '1.5em' }} >{htmlString(record?.venue)}</div>
		{htmlString(record?.city)}
		{' '}
		{record?.state}
		{' '}
		{record?.country}
		{' '}
		{record?.postalcode}
</div>

const layoutPerformer = (record: RecordType, key: number) => {
	const { gig } = record;
	return <div key={key}>
		<Venue record={...gig} />
		<div style={{ marginBottom: '15px' }}>Musician:{' '}
		<i>
			{AutoLinkPlayer(record?.performer)}
		</i>
		</div>
	</div>
}

const layoutSongs = (record: RecordType, key: number) => {
	const { gig } = record;
	return <div key={key}>
		<Venue record={...gig} />
		<div style={{ marginBottom: '15px' }}>Played:{' '}
		<i>
			&quot;{AutoLinkSong(record?.song)}&quot;
		</i>
		</div>
	</div>
}

const extras: string[] = Object.keys(GigBarTypes);

const determineStyles = (gig: RecordType) => {
	let ret: any;
	const useG = (gig?.gig) ? gig.gig : gig;
	extras.forEach((e: string) => {
		if (useG?.extra?.includes(e)) {
			ret = { type: e, ...GigBarTypes[e] };
		}
	})
	if (!ret) return { type: 'jbc', ...GigBarTypes['other'], extras: useG?.extra };
	return { type: ret.type, background: ret.background, color: ret.color, extras: useG?.extra }
}

const layoutGigs = (record: RecordType, key: number) => {
	return <div key={key}>
		<Venue record={record} />
	</div>
}

// special chars which exist in seartchable JBC venus and city names
const searchRegex = /[^a-z0-9'_ü,&éßΔΣ ]/gi;

const filterBy = (res: RecordType, query: string, recordFilter: any) => {
	// convert incoming query string into reasonable search terms
	const searchTerms = (query: string): string[] => {
		const searchSplit = /(?<=^| )("[^"]*"|[^ ]+)(?= |$)/g;
		const terms = query
			?.match(searchSplit)
			?.map((t: string) => t.replace(/"/g, ''))	// clean up quoted terms
			.map(term => term.trim().toLowerCase())	// normalize
			.filter(term => term)	// remove blanks
			.flat()	// and flatten to a single array of terms
		 || [];
		const deduped: string[] = [];
		terms.forEach((t: string) => {
			if (!deduped.includes(t)) deduped.push(t);
		})

		return deduped;	// dedupe
	}

	const terms = searchTerms(query);

	const searchRecord = (record: RecordType, target: string, terms: string[]) => (
		{
			...record,
			matchedTerms: terms.filter(term => {
				// need to remove quote/space from possibly quoted search terms
				// in order to match the already cleaned-up target string
				const X = term.replace(searchRegex, '').replace(/["]/g, '').trim();
				return target?.includes(X)
				}
			)
		}
	)

	const filtered = res.results
		?.map((record: RecordType) => searchRecord(record, recordFilter(record), terms))	// add 'matchedTerms' to object
		.filter((r: RecordType) => r?.matchedTerms?.length)	// filter out non-matches
		.sort((a: any, b: any) => (b?.matchedTerms?.length || 0) - (b?.matchedTerms?.length || 0));	// sort by relevance

	return {
		...res,
		numResults: filtered.length,
		results: filtered,
		searchTerms: terms.join('" AND "'),
	}
}

const filterGigsByField = (res: any, query: string, field: string) => {
	const recordFilter = ((record: RecordType) => record[field]?.toLowerCase());
	//console.log("FILTER", query, field);
	return filterBy(res, query, recordFilter);
}

const filterGigsByVenue = (res: any, query: string) => filterGigsByField(res, query, 'venue');
const filterGigsByCity = (res: any, query: string) => filterGigsByField(res, query, 'city');
const filterGigsByState = (res: any, query: string) => filterGigsByField(res, query, 'state');
const filterGigsByCountry = (res: any, query: string) => filterGigsByField(res, query, 'country');
const filterGigsBySupport = (res: any, query: string) => filterGigsByField(res, query, 'alsowith');
const filterGigsBySong = (res: any, query: string) => filterGigsByField(res, query, 'song');
const filterGigsByPerformer = (res: any, query: string) => {
	const recordFilter = ((record: RecordType) => {
		const field = 'performer';
		if (record[field]?.startsWith('[[person:')) {
			return record[field]?.toLowerCase();
		}
	});
	return filterBy(res, query, recordFilter);
}

const filterGigsByAnything = (res: RecordType, query: string) => {
	// create a searchable string from record object
	const searchTarget = (record: RecordType) => JSON.stringify(
		Object.keys(record)
			.filter(k => !k.endsWith('_id'))	// ignore database id fields	// TODO - support `excludeFields` param
			.map(k => String(record[k]).replace(searchRegex, '').replace(/_/g, ' ').trim())
			.join(' ')
		).toLowerCase();

	return filterBy(res, query, (searchTarget));
}

const templateGigs = (results: RecordType, layout: any, preventAutoExpand: boolean) => {
	const years: HashedType = {};
	results?.results?.forEach((r: RecordType) => {
		const year = parseYear(r.datetime);
		if (!years[year]) years[year] = [];
		years[year].push(r)
	});
	let scaling = 0;
	Object.keys(years).forEach(y => {
		if (years[y].length > scaling) {
			scaling = years[y].length
		}
	})

	const gigsType = results?.type;
	const gigsQuery = results?.query;
	const queryParams = new URLSearchParams();
	if (gigsType) queryParams.set('f', gigsType);
	if (gigsQuery) queryParams.set('q', gigsQuery);
	const queryString = (gigsType && gigsQuery) ? `?${queryParams.toString()}` : '';

	const makeGigMonth = (year: number, month: number, gigs: RecordType[]) => (
		<div key={year+month}>
			<div style={{ textAlign: 'center', background: '#ededed', fontSize: '1.5em', paddingTop: '2px', paddingLeft: '5px', margin: '5px', border: '1px solid #666'}} className="drop-shadow-md">
				{num2mon(month)}, {year}
				{(gigs.length > 1) && <>
					{': '}
					{gigs.length} gigs
				</>}
			</div>
		{/*
			</summary>
		*/}
			<div
				style={{
					display: 'flex',
					flexWrap: 'wrap',
					justifyContent: 'center',
					}}
				>
				{gigs?.sort((a: any, b: any) => parseDay(a.datetime) - parseDay(b.datetime))
					.map((record: RecordType, key: number) => {
					const useG = (record?.gig) ? record.gig : record;
					const styles = determineStyles(record);
					const datetime = record?.datetime.substring(0, 10).replace(/-/g, '');
					let poster = (useG?.extra?.includes('poster')) ? `https://v1.jazzbutcher.com/images/${datetime}/${datetime}_poster_250.jpg` : undefined;
					if (!poster) {
						if  (useG?.extra?.includes('ticket')) {
							poster = `https://v1.jazzbutcher.com/images/${datetime}/${datetime}_ticket_250.jpg`;
						}
					}
					if (!poster) {
						if  (useG?.extra?.includes('setlist')) {
							poster = `https://v1.jazzbutcher.com/images/${datetime}/${datetime}_setlist_250.jpg`;
						}
					}
					const cls = "gig_" + styles?.type;
					const icons = ['ticket', 'interview', 'players', 'press', 'review', 'setlist', 'songlist', 'recording', 'video', 'pix',
						// 'pat', 'setlist', 'self'
						]
						.filter((type: string) => useG?.extra?.includes(type));
					const gigLink = `/gigs/${ts2URI(record?.datetime)}`;

					return (
						<Link key={key}
								href={gigLink}
								style={{ textAlign: 'center', width: '255px', ...styles, margin: '10px', padding: '3px', borderRadius: '5px', border: '1px solid #555'}}
								className={`${cls} drop-shadow-md hover:outline`}
							>
							<div style={{ background: 'white', color: '#333', borderRadius: '5px' }} className="drop-shadow-md">
								{num2mon(parseMonth(record?.datetime))} {parseDayOrdinal(record?.datetime)}
								{' '}
								{(parseHour(record?.datetime) > 0) && <>{parseHourAMPM(record?.datetime)}</>}
								{', '}{year}
								<b>
									<div dangerouslySetInnerHTML={{__html: record?.blurb }}/>
								</b>
								{record?.alsowith?.split(',')?.map((a: string, key: number) => {
									return !!a?.length && <div key={key} className="listItem">{AutoLinkAct(removeHTML(a.trim()))}</div>
									}
									)}
							</div>
							{layout(record, record?.datetime)}
							{!!(icons?.length) && (
								<div className="flex flex-wrap drop-shadow-md" style={{ padding: '5px', justifyContent: 'center', background: 'white'}}>

									{/*(icons.includes('setlist')) && <IconSetlist height={25} width={25} style={{ padding: '3px' }} />*/}
									{/*(icons.includes('pat')) && <IconPat height={25} width={25} style={{ padding: '3px' }} />*/}
									{/*(icons.includes('self')) && <IconPatReview height={25} width={25} style={{ padding: '3px' }} />*/}

									{(icons.includes('songlist')) && <IconSonglist height={25} width={25} style={{ padding: '3px' }} />}
									{(icons.includes('pix')) && <IconPix height={25} width={25} style={{ padding: '3px' }} />}
									{(icons.includes('video')) && <IconVideo height={25} width={25} style={{ padding: '3px' }} />}
									{(icons.includes('recording')) && <IconRecording height={25} width={25} style={{ padding: '3px' }} />}
									{(icons.includes('review')) && <IconReview height={25} width={25} style={{ padding: '3px' }} />}
									{(icons.includes('ticket')) && <IconTicket height={25} width={25} style={{ padding: '3px' }} />}
									{(icons.includes('interview')) && <IconInterview height={25} width={25} style={{ padding: '3px' }} />}
									{(icons.includes('press')) && <IconPress height={25} width={25} style={{ padding: '3px' }} />}
									{(icons.includes('players')) && <IconPlayers height={25} width={25} style={{ padding: '3px' }} />}
								</div>
							)}
							{(poster) &&
								<Image alt='poster' width={250} height={250} src={poster} style={{ height: 'auto' }}/>
							}
						</Link>
					)
				})}
			</div>
		</div>
	)

	const makeGigYear = (queryString: string, year: number, gigs: RecordType[]) => {
		const months: HashedType = {};
		gigs.forEach(g => {
			const month = parseMonth(g.datetime);
			if (!months[month]) months[month] = [];
			months[month].push(g);
		});
		return <details key={year} open={(!preventAutoExpand) && (gigs?.length === 0 || Object.keys(years)?.length === 1)}>
			<summary className="flex hover:outline" style={{ marginBottom: '5px' }}>
				<GigGraph scaling={scaling} year={year} gigs={gigs} queryString={queryString} />
			</summary>
			<div style={{ background: 'white', border: '1px solid #ddd' }}>
				{Object.keys(months).sort((a: any, b: any) => a - b).map((m: any) => makeGigMonth(year, m, months[m]))}
			</div>
		</details>
	}

	return <div style={{ margin: '3px' }}>
		{Object.keys(years).sort((a: any, b: any) => b - a).map((y: any) => makeGigYear(queryString, y, years[y]))}
	</div>
}

const buildGigSearchOptions = (noun: string, text: string, route: string) =>
({
	noun,
	text, route,
	layout: layoutGigs,
	template: templateGigs,
	filter: (res: RecordType, query: string) => filterGigsByField(res, query, noun)
});

const gigSearchOptions: HashedType[] = [
	{ ...buildGigSearchOptions('venue', 'Venue', 'gigs') },
	{ ...buildGigSearchOptions('city', 'City', 'gigs') },
	{ ...buildGigSearchOptions('state', 'State', 'gigs') },
	{ ...buildGigSearchOptions('anything', 'Anywhere in details', 'gigs'),
		filter: filterGigsByAnything,
	},
	{ ...buildGigSearchOptions('song', 'Played this song..', 'gigs_by_song'),
		layout: layoutSongs,
	},
	{ ...buildGigSearchOptions('performer', 'Musician performed..', 'gigs_by_musician'),
		filter: filterGigsByPerformer,
		layout: layoutPerformer
	},
	{ ...buildGigSearchOptions('alsowith', 'Shared the bill..', 'gigs') },
]

export const gigSearchOptionsByType = (noun: string | undefined): HashedType => (noun && gigSearchOptions.find(o => o.noun === noun)) || gigSearchOptions[0] || [];
