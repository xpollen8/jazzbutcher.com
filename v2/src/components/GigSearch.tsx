import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useEffect, useState, useTransition } from 'react';
import { type RecordType, type HashedType } from '@/lib/utils';
import { parseYear, parseMonth, parseDayOrdinal, parseHour, parseHourAMPM, parseDay, num2mon, ts2URI, htmlString, prettyDate, num2month } from '@/lib/utils';
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

	useEffect(() => {
		setQ(searchParams.get('q') || '');
	// @ts-ignore
	}, [searchParams]);

	useEffect(() => {
		setF(searchParams.get('f') || 'anything');
	// @ts-ignore
	}, [searchParams]);

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
	const { layout, template } = gigSearchOptionsByType(results?.type);

	return <>
		{(banner) && banner(results)}
		{(template) && template(results, layout, preventAutoExpand)}
	</>
}

export const BannerGigs = (results: HashedType, searchYear?: number) => {
	const searchType = gigSearchOptionsByType(results?.type).text;
	const numMatched = results?.numResults ?? 0;
	const bannerYear = (searchYear) ? `In ${searchYear}, ` : '';
	const bannerTerms = (results?.searchTerms || results?.query) ? <>{searchType}: <i>&quot;{results?.searchTerms || results?.query?.replace(/"/g, '')}&quot;</i></> : '';
	const bannerClass = (numMatched) ? 'search found' : 'search notfound';
	const bannerText = `${bannerYear}${numMatched} gig${(numMatched === 1) ? '' : 's'} matched`;

	return <>
		{(bannerTerms) && <div className={bannerClass}>{bannerTerms}</div>}
		<div className="search count">{bannerText}</div>
	</>
}

const Venue = ({ record }: { record: RecordType }) =>
<div style={{ paddingTop: '4px', paddingBottom: '6px' }}>
		{(record?.title) && <div className="gig_project">&quot;{record?.title}&quot;</div>}
		<div style={{ fontWeight: '600', fontSize: '1.25em' }} >{htmlString(record?.venue)}</div>
		<Location {...record} simple={true} />
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

const determineTypes = (gig: RecordType) => {
	let ret: any;
	const useG = (gig?.gig) ? gig.gig : gig;
	const types: any[] = [];
	extras.forEach((e: string) => {
		if (useG?.extra?.includes(e)) {
			types.push(e);
		}
	})
	if (!types.length) { types.push('jbc') }
	return types;
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
		searchTerms: terms?.find((t: any) => t?.match(/"/)) ? terms.join(' OR ') : terms.join('" OR "'),
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
const filterGigsBySupport = (res: any, query: string) => res;
const filterGigsBySong = (res: any, query: string) => res;
const filterGigsByPerformer = (res: any, query: string) => res;

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

const countriesPlayed = [
	{ full: 'Austria', iso: 'at' },
	{ full: 'Belgium', iso: 'be' },
	{ full: 'Canada', iso: 'ca' },
	{ full: 'England', iso: 'gb' },
	{ full: 'France', iso: 'fr' },
	{ full: 'Germany', iso: 'de' },
	{ full: 'Hungary', iso: 'hu' },
	{ full: 'Ireland', iso: 'ie' },
	{ full: 'Italy', iso: 'it' },
	{ full: 'Japan', iso: 'jp' },
	{ full: 'Netherlands', iso: 'nl' },
	{ full: 'Norway', iso: 'no' },
	{ full: 'Scotland', iso: 'gb-sct' },
	{ full: 'Spain', iso: 'es' },
	{ full: 'Sweden', iso: 'sw' },
	{ full: 'Switzerland', iso: 'ch' },
	{ full: 'USA', iso: 'us' },
	{ full: 'Wales', iso: 'gb-wls' },
];

const country2Flag = (country?: string) => {
	const iso = countriesPlayed.find((c: any) => c?.full?.toLowerCase() === country?.toLowerCase())?.iso;
	if (iso) {
		const className = `fi fi-${iso}`;
		return <span className={className} />
	} else {
		return country;
	}
}

const	Location = (args: any) => {
	const { address, city, state, country, postalcode, simple } = args;
	let strs;
	if (simple) {
		strs = [ city, state, ]?.filter(f => f)?.join(', ');
	} else {
		strs = [ address, city, state, postalcode ]?.filter(f => f)?.join(', ');
	}
	return <>{country2Flag(country)} {strs}</>;
}

export const templateGigs = (data: RecordType, layout: any, preventAutoExpand: boolean) => {
	const years: HashedType = {};
	data?.results?.forEach((r: RecordType) => {
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

	const gigsType = data?.type;
	const gigsQuery = data?.query;
	const queryParams = new URLSearchParams();
	if (gigsType) queryParams.set('f', gigsType);
	if (gigsQuery) queryParams.set('q', gigsQuery);
	const queryString = (gigsType && gigsQuery) ? `?${queryParams.toString()}` : '';

	const makeGigRow = (record: RecordType, key: number) => {
		const useG = (record?.gig) ? record.gig : record;
		const types = determineTypes(record);
		const datetime = record?.datetime?.substring(0, 10).replace(/-/g, '');
		const year = parseYear(datetime);
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
		const extras = [
			{ type: 'songlist', func: IconSonglist },
			{ type: 'pix', func: IconPix },
			{ type: 'video', func: IconVideo },
			{ type: 'recording', func: IconRecording },
			{ type: 'review', func: IconReview },
			{ type: 'ticket', func: IconTicket },
			{ type: 'interview', func: IconInterview },
			{ type: 'press', func: IconPress },
			{ type: 'players', func: IconPlayers },
			//{ type: 'setlist', func: IconSetlist },
			//{ type: 'pat', func: IconPat },
			//{ type: 'self', func: IconPatReview },
			].filter((a: any) => useG?.extra?.includes(a?.type));;

		return (<div className="tagClickable w-full mt-3" style={{ background: '#cceeff', border: '1px solid #777', paddingLeft: '3px' }}>
			<Link key={key} href={ts2URI(record?.datetime)} style={{ color: '#333' }}>
				{types?.map((type: string, key: number) => <div key={key} className={`gig_${type}`}/>)}
				<div style={{ background: '#ccccdd' }} > {prettyDate(record?.datetime)} </div>
				<div className="flex justify-between">
					<div className="w-full">
						{layout(record, record?.datetime)}
						<div className="m-1">
							<div className="m-1 flex flex-wrap float-right">
							{extras?.map((ex: any, key: number) => ex.func({ key, height: 25, width: 25, style: { padding: '3px' } }))}
							</div>
							{(record?.alsowith) && <div className="pt-1">{record?.alsowith?.split(',')?.map((a: string, key: number) => {
								const [ nameX, akaX ] = removeHTML(a.trim())?.toLowerCase()?.split('(') || [];
								const name = nameX?.trim();
								const aka = akaX?.replace(')', '')?.trim();
								const query = gigsQuery?.replace(/"/g, '')?.toLowerCase();
								const akaLink = aka && <>({aka === query ? aka : AutoLinkAct(aka)})</>;
								return !!a?.length && <span key={key} className="listItem smalltext ml-1">{(gigsType === 'alsowith' && name === query) ? name : AutoLinkAct(name)} {akaLink}</span>
								}
							)}</div>}
							</div>
					</div>
					{(poster) && <div className=""><Image alt='poster' width={100} height={100} src={poster}/></div>}
				</div>
			</Link>
		</div>)
	}

	const makeGigMonth = (year: number, month: number, gigs: RecordType[]) => <div key={year + month}>
		<div className="tag mt-3" >
			{num2month(month)}, {year}
			{(gigs.length > 1) && <>
				{': '}
				{gigs.length} gigs
			</>}
		</div>
		{gigs?.sort((a: any, b: any) => parseDay(a.datetime) - parseDay(b.datetime))
			.map(makeGigRow)}
	</div>

	const makeGigYear = (queryString: string, year: number, gigs: RecordType[]) => {
		const months: HashedType = {};
		gigs.forEach(g => {
			const month = parseMonth(g.datetime);
			if (!months[month]) months[month] = [];
			months[month].push(g);
		});
		return <details key={year} open={(!preventAutoExpand) && (gigs?.length === 0 || Object.keys(years)?.length === 1)}>
			<summary className="flex hover:outline mb-1">
				<GigGraph scaling={scaling} year={year} gigs={gigs} queryString={queryString} />
			</summary>
			{Object.keys(months).sort((a: any, b: any) => a - b).map((m: any) => makeGigMonth(year, m, months[m]))}
		</details>
	}

	return <div className="m-1">
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
		//filter: filterGigsBySong,
		layout: layoutSongs,
	},
	{ ...buildGigSearchOptions('performer', 'Musician performed..', 'gigs_by_musician'),
		filter: filterGigsByPerformer,
		layout: layoutPerformer
	},
	{ ...buildGigSearchOptions('alsowith', 'Shared the bill..', 'gigs_by_act'),
		filter: filterGigsBySupport,
	},
]

export const gigSearchOptionsByType = (noun: string | undefined): HashedType => (noun && gigSearchOptions.find(o => o.noun === noun)) || gigSearchOptions[0] || [];
