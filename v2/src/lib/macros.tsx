import Link from 'next/link';
import Image from 'next/image';
import moment from 'moment';
import songMap from './songMap';
import apiData from './apiData';
import GigGraph, { types } from '../components/GigGraph';

//import * as Accordion from '@radix-ui/react-accordion';
//import { ChevronDownIcon } from '@radix-ui/react-icons';

export type RecordType = {
	[key: string]: any;
	matchedTerms?: string[];
}

export type Hashed = {
	[key: string]: any;
}

type QueryType = string;

const linkExternal = (href: string, text?: string): React.ReactNode => <Link target="_new" href={autoHREF(href)}>{' '}{text || href}</Link>
const linkInternal = (href: string, text?: string): React.ReactNode => <Link href={href}>{' '}{text || href}</Link>

const parseYear = (datetime: string): number => parseInt(datetime.substr(0, 4), 10);
const parseMonth = (datetime: string): number => parseInt(datetime.substr(5, 2), 10);
const parseDay = (datetime: string): number => parseInt(datetime.substr(8, 2), 10);
const parseHour = (datetime: string): number => parseInt(datetime.substr(11, 2), 10);

const padZero = (s: any): string => {
	const str = String(s);
	return (!str || str?.length < 1) ? `00` : ((str?.length < 2) ? `0${str}` : str);
}

const monthNames = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', ];
const num2mon = (num: any): string => monthNames[num - 1] || '';
const mon2num = (month: any): number => monthNames.indexOf(String(month)) + 1;

/*
	ts2URI
	
		inverse of gigPage2Datetime()

		ts2URI(`2023`) -> 2023.html
		ts2URI(`2023-10`) -> 2023/Nov.html
		ts2URI(`2023-10-04`) -> 2023/Nov4.html
		ts2URI(`2023-10-04 23`) -> 2023/Nov4_23.html
		ts2URI(`2023-10-04 23:30`) -> 2023/Nov4_2330.html
		ts2URI(`2023-10-04 23:30:05`) -> 2023/Nov4_2330.html
 */
const ts2URI = (ts: string): string => {
	const year = ts.substr(0, 4);
	const month = ts.substr(5, 2);
	const monthName = num2mon(month);
	const dayp = ts.substr(8, 2);
	const day = parseInt(dayp || '', 10);
	const hour = ts.substr(11, 2);
	const min = ts.substr(14, 2) || '00';
	if (!month) return `${year}.html`;
	if (!day) return `${year}/${monthName}.html`;
	if (!hour) return `${year}/${monthName}${day}.html`;
	return `${year}/${monthName}${day}_${hour}${min}.html`;
}

const gigURI2ts = (y: string, u: string): string => {
	const regs = [
		/(\d{4})\/([A-Za-z]{3})(\d{1,2})_(\d{2})(\d{2}).html/,
		/(\d{4})\/([A-Za-z]{3})(\d{1,2})_(\d{2}).html/,
		/(\d{4})\/([A-Za-z]{3})(\d{1,2}).html/,
		/(\d{4})\/([A-Za-z]{3}).html/,
		/(\d{4}).html/,
	];
		
	const res = regs.map(regex => {
		const match = u.match(regex);
		if (match) {
			let yy = match[1];
			let mm = mon2num(match[2] || 0);
			let dd = match[3] || '00';
			let hh = match[4] || '00';
			let min = match[5] || '00';
			return `${yy}-${padZero(mm)}-${padZero(dd)} ${hh}:${padZero(min)}:00`;
		}
	}).filter(f => f)[0] || '';
	return res;
}

/*
	gigPage2Datetime
		inverse of ts2URI()
 */
const gigPage2Datetime = (year: string, href: string): string => gigURI2ts(year, href);

const Nobr = ({ children }: { children: React.ReactNode }) => <span style={{ whiteSpace: 'nowrap' }}>{children}</span>

const Venue = ({ record }: { record: RecordType }) =>
<>
		<hr/>
		<div dangerouslySetInnerHTML={{__html: record?.venue}} style={{ fontWeight: '900', fontSize: '1.5em' }} />
		{record?.city}
		{' '}
		{record?.state}
		{' '}
		{record?.country}
		{' '}
		{record?.postalcode}
</>

const layoutPerformer = (record: RecordType, key: number) => {
	const { gig } = record;
	return <div key={key}>
		<Venue record={...gig} />
		<label>Musician</label>
		<div>
			{record?.performer}
		</div>
	</div>
}

const layoutSongs = (record: RecordType, key: number) => {
	const { gig } = record;
	return <div key={key}>
		<Venue record={...gig} />
		<div>Played:{' '}
		<i>
			&quot;{record?.song}&quot;
		</i>
		</div>
	</div>
}

const extras: string[] = Object.keys(types);

const determineStyles = (gig: RecordType) => {
	let ret: any;
	const useG = (gig?.gig) ? gig.gig : gig;
	//const extras = useG.extra?.split(',');
	extras.forEach((e: string) => {
		if (useG?.extra?.includes(e)) {
			ret = { type: e, ...types[e] };
		}
	})
	if (!ret) return { type: 'jbc', ...types['other'], extras: useG?.extra };
	return { type: ret.type, background: ret.background, color: ret.color, extras: useG?.extra }
}

const layoutGigs = (record: RecordType, key: number) => {
	return <div key={key}>
		<Venue record={record} />
		<div>
			<i>
				<div dangerouslySetInnerHTML={{__html: record?.blurb }}  style={{ background: 'lightGray', color: '#333', margin: '2px' }}/>
			</i>
			<i>
			<div dangerouslySetInnerHTML={{__html: record?.alsowith }} style={{ background: 'white', color: '#333', margin: '2px' }}/>
			</i>
		</div>
	</div>
}

// TODO - set up api routes on data.jbc.com for all search types
const cache: {
  [key: string]: any;
} = {}

const filterNone = (res: any, query: QueryType) => res;

const searchRegex = /[^a-z0-9'_ ]/gi;
const searchSplit = /(?<=^| )("[^"]*"|[^ ]+)(?= |$)/g;

// convert incoming query string into reasonable search terms
const searchTerms = (query: QueryType): string[] => {
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

const filterBy = (res: RecordType, query: QueryType, recordFilter: any) => {
	const terms = searchTerms(query);
	const filtered = res.results
		?.map((record: RecordType) => searchRecord(record, recordFilter(record), terms))	// add 'matchedTerms' to object
		.filter((r: RecordType) => r?.matchedTerms?.length)	// filter out non-matches
		.sort((a: any, b: any) => (b?.matchedTerms?.length || 0) - (b?.matchedTerms?.length || 0));	// sort by relevance

	return {
		...res,
		numResults: filtered.length,
		results: filtered,
		searchTerms: terms.join('" OR "'),
	}
}

const filterGigsByField = (res: any, query: QueryType, field: string) => {
	const recordFilter = ((record: RecordType) => record[field]?.toLowerCase());
	return filterBy(res, query, recordFilter);
}

const filterGigsByVenue = (res: any, query: QueryType) => filterGigsByField(res, query, 'venue');
const filterGigsByCity = (res: any, query: QueryType) => filterGigsByField(res, query, 'city');
const filterGigsByCountry = (res: any, query: QueryType) => filterGigsByField(res, query, 'country');
const filterGigsBySupport = (res: any, query: QueryType) => filterGigsByField(res, query, 'alsowith');
const filterGigsBySong = (res: any, query: QueryType) => filterGigsByField(res, query, 'song');
const filterGigsByPerformer = (res: any, query: QueryType) => {
	const recordFilter = ((record: RecordType) => {
		const field = 'performer';
		if (record[field]?.startsWith('[[person:')) {
			return record[field]?.toLowerCase();
		}
	});
	return filterBy(res, query, recordFilter);
}

const filterGigsByAnything = (res: RecordType, query: QueryType) => {
	// create a searchable string from record object
	const searchTarget = (record: RecordType) => JSON.stringify(
		Object.keys(record)
			.filter(k => !k.endsWith('_id'))	// ignore database id fields	// TODO - support `excludeFields` param
			.map(k => String(record[k]).replace(searchRegex, '').replace(/_/g, ' ').trim())
			.join(' ')
		).toLowerCase();

	return filterBy(res, query, (searchTarget));
}

const templateGigs = (results: RecordType, layout: any) => {
	const years: Hashed = {};
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
	const makeGigMonth = (year: number, month: number, gigs: RecordType[]) => {
		return (<div key={year+month}>
			<div  style={{ background: '#ededed', fontSize: '1.5em', paddingTop: '2px', paddingLeft: '5px', marginLeft: '3px', marginRight: '2px', border: '1px solid #666' }}>
				<span>{num2mon(month)}, {year}</span>
				{(gigs.length > 1) && <>
					{': '}
					<span>{gigs.length} gigs</span>
				</>}
			</div>
			<div className="flex flex-row gap-2 flex-wrap justify-center">
				{gigs?.sort((a: any, b: any) => parseDay(a.datetime) - parseDay(b.datetime)).map((record: RecordType, key: number) => {
					const useG = (record?.gig) ? record.gig : record;
					const styles = determineStyles(record);
					const datetime = record?.datetime.substring(0, 10).replace(/-/g, '');
					let poster = (useG?.extra?.includes('poster')) ? `https://jazzbutcher.com/images/${datetime}/${datetime}_poster.jpg` : null;
					if (!poster) {
						if  (useG?.extra?.includes('ticket')) {
							poster = `https://jazzbutcher.com/images/${datetime}/${datetime}_ticket.jpg`;
						}
					}
					if (!poster) {
						if  (useG?.extra?.includes('setlist')) {
							poster = `https://jazzbutcher.com/images/${datetime}/${datetime}_setlist.jpg`;
						}
					}
					if (!poster) {
						if  (useG?.extra?.includes('pix')) {
							poster = `https://jazzbutcher.com/images/iconPhoto.gif`;
						}
					}
					if (!poster) {
						if  (useG?.extra?.includes('recording')) {
							poster = `https://jazzbutcher.com/images/cassettes.gif`;
						}
					}
					if (!poster) {
						if  (useG?.extra?.includes('video')) {
							poster = `https://jazzbutcher.com/images/iconVideo.gif`;
						}
					}
					const cls = "gig_" + styles?.type;
					 return (<div
					 	key={key}
						style={{ ...styles, margin: '10px', padding: '3px', borderRadius: '5px', border: '2px solid #777'}}
						className={`flex flex-wrap border justify-center card`}
					 	>
					<div
						className={`${cls}`}
						style={{  width: `320px` }}
					>
						<hr/>
						<div>
							{num2mon(parseMonth(record?.datetime))} {moment.localeData().ordinal(parseDay(record?.datetime))}
							{' '}
							{(parseHour(record?.datetime) > 0) && <>{moment.utc(record?.datetime).format('LT')}</>}
							{', '}{year}
						</div>
						<div>
								{layout(record, record?.datetime)}
								<br/>
						</div>
							{/*
							{(useG?.extra?.includes('ticket')) && <li>[ticket stub]</li>}
							{(useG?.extra?.includes('review')) && <li>[fan reviews]</li>}
							{(useG?.extra?.includes('pat')) && <li>[pat reviews]</li>}
							{(useG?.extra?.includes('setlist')) && <li>[setlist]</li>}
							{(useG?.extra?.includes('songlist')) && <li>[songlist]</li>}
							{(useG?.extra?.includes('recording')) && <li>[audio recording]</li>}
							{(useG?.extra?.includes('video')) && <li>[video recording]</li>}
							{(useG?.extra?.includes('pix')) && <li>[photographs]</li>}
							*/}
						</div>
							{(poster) &&
								<Image alt='poster' width={320} height={320} src={poster} style={{ height: 'auto' }}/>
							}
					</div>)
				})}
			</div>
		</div>)
	}
	const makeGigYear = (year: number, gigs: RecordType[]) => {
		const months: Hashed = {};
		gigs.forEach(g => {
			const month = parseMonth(g.datetime);
			if (!months[month]) months[month] = [];
			months[month].push(g);
		});
		return <details key={year} className="group cursor-pointer">
			<summary className="p-2 font-bold flex items-center group-open:text-primary-red">
				<GigGraph scaling={scaling} year={year} gigs={gigs} />
			</summary>
			<div className="border py-2 bg-white">
			{Object.keys(months).sort((a: any, b: any) => a - b).map((m: any) => makeGigMonth(year, m, months[m]))}
			</div>
		</details>
	}
	return <>
		{(results?.results && results?.results[0]?.matchedTerms) &&
			<>
				<label>{results?.results?.length} gigs matched {searchOptions.find(so => so.noun === results?.type)?.text}</label> <i>&quot;{results?.results[0]?.matchedTerms.join('", "')}&quot;</i><br/>
			</>
		}
		{Object.keys(years).sort((a: any, b: any) => b - a).map((y: any) => makeGigYear(y, years[y]))}
	</>
}

const gigSearchOptions = (menu: boolean, noun: string, text: string, route: string) =>
({
	menu: true,
	noun,
	text, route,
	layout: layoutGigs,
	template: templateGigs,
	filter: (res: RecordType, query: string) => filterGigsByField(res, query, noun)
});

const searchOptions = [
	{ ...gigSearchOptions(false, 'archive', 'All Gigs', 'gigs'), menu: false },
	{ ...gigSearchOptions(true, 'venue', 'Venue', 'gigs') },
	{ ...gigSearchOptions(true, 'city', 'City', 'gigs') },
	{ ...gigSearchOptions(true, 'anything', 'Anywhere in details', 'gigs'),
		filter: filterGigsByAnything,
	},
	{ ...gigSearchOptions(true, 'song', 'Played this song..', 'gigsongs'),
		layout: layoutSongs,
	},
	{ ...gigSearchOptions(true, 'performer', 'Musician performed..', 'performances'),
		filter: filterGigsByPerformer,
		layout: layoutPerformer
	},
	{ ...gigSearchOptions(true, 'alsowith', 'Shared the bill..', 'gigs') },
]

const doSearch = (type: string, query: QueryType, settor: any, error: any): void => {
	if (!type) return;
	const option = searchOptions.find(o => o.noun === type);
	const route = option?.route;
	const filter = option?.filter || filterNone;
	settor([]);
	if (!route) {
		error(`search by ${type} not yet implemented`);
		return;
	}
	if (cache[route]) {
		// in-browser cache hit, yay
		error();
		settor(filter({ ...cache[route], type }, query));
		return;
	}
	// else hit the api for data
	apiData(route)
		.then(res => {
			cache[route] = res;
			error();
			const filtered = filter({ ...res, type }, query);
			if (!filtered?.results?.length) {
				error(`Nothing found for "${searchOptions.find(so => so.noun === type)?.text}: ${query}"`);
			}
			settor(filtered)
		})
		.catch(e => {
			error(`search by ${type} failed`);
			console.log("ERR", e);
		})
	/*
	api-side filtering method
	const action = `/api/${route}/${query}`;
	console.log("SEARCH1", { type, query, action, ENV: process.env });
	fetch(action)
		.then(e => e.json())
		.then(res => settor(res))
		.catch((e) => {
			alert('FAILED');
			console.log("ERR", e);
		});
		*/
}

const autoHREF = (href: string) => {
	if (href?.includes('@')) {	// email address
		return `mailto:${href}`;
	} else {
		if (href?.includes('htt')) {	// full url
			return href;
		} else {
			if (href.startsWith('/')) {	// local link
				return href;
			} else {	// was just a domain
				return `https://${href}`;
			}
		}
	}
}

const linkSong = ({ title, href, audio, mp3, author, pdf }: {
	title: string
	href: string
	audio?: string
	mp3?: string
	author?: string
	pdf?: string
}) =>
<span className='song'>
	{(() => {
		if (mp3?.length && href?.length) {
			return <i><a href={autoHREF(href)}>{title}</a></i>
		} else if (mp3?.length && title?.length) {
			return <i><a href={autoHREF(href)}>{title}</a></i>
		} else if (href?.length && title?.length) {
			return <i><a href={autoHREF(href)}>{title}</a></i>
		} else {
			return <i>{title}</i>
		}
	})()}

	{(author) && <span className="song_author">({author})</span>}
</span>

const songLinkMapped = (title: string) => {
	const tit = title?.replace(/ /g, '_').toLowerCase();
	const songMapped = songMap[tit];
	if (songMapped) {
		return linkSong({ title, href: `/lyrics/${songMapped}` });
	} else {
		return linkSong({ title, href: `/search?f=song&q=${title}` });
	}
}

const autoLink = songLinkMapped;

const parseDomain = (str: string) => String(str?.match(/^(?:https?:\/\/)?(?:[^@\/\n]+@)?(?:www\.)?([^:\/\n]+)/igm))?.replace('http://', '').replace('https://', '');

const dateDiff = (d: string) =>
<>
	{' '}
	<span className="hidden">{d}</span>
	<span className="date">{moment(d).format("dddd, MMM Do YYYY")}</span> <span className="date">( {moment(d).startOf('hour').fromNow()} )</span>
</>

const releaseByLookup = async (lookup: string) => {
	const releases = await apiData('releases');
	const release = releases?.albums?.find((r: any) => r?.lookup === lookup);
	if (release) return release;
	// try to find by other means
	const releaseByHREF = releases?.albums?.find((r: any) => r?.href?.includes(lookup));
	if (releaseByHREF) return releaseByHREF;
}

export { releaseByLookup, linkSong, songLinkMapped, parseDomain, dateDiff, autoLink, doSearch, searchOptions, Nobr, num2mon, mon2num, padZero, linkInternal, linkExternal, ts2URI, gigURI2ts, gigPage2Datetime, parseYear }
