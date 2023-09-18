import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import moment from 'moment';
import songMap from './songMap';
import GigGraph, { types } from '@/components/GigGraph';

import IconSonglist from '@/svg/IconSonglist';
import IconPix from '@/svg/IconPix';
import IconVideo from '@/svg/IconVideo';
import IconRecording from '@/svg/IconRecording';
import IconPlayers from '@/svg/IconPlayers';
//import IconSetlist from '@/svg/IconSetlist';
import IconReview from '@/svg/IconReview';
import IconTicket from '@/svg/IconTicket';
import IconPress from '@/svg/IconPress';
import IconInterview from '@/svg/IconInterview';
//import IconPat from '@/svg/IconPat';

//import * as Accordion from '@radix-ui/react-accordion';
//import { ChevronDownIcon } from '@radix-ui/react-icons';

export type RecordType = {
	[key: string]: any;
	matchedTerms?: string[];
}

export type HashedType = {
	[key: string]: any;
}

export type CommentType = {
	subject: string
	dtcreated?: string
	who: string
	whence: string
	comments: string
}

const linkExternal = (href: string, text?: string | React.ReactNode): React.ReactNode => <Link target="_new" href={autoHREF(href)}>{' '}{text || href}</Link>
const linkInternal = (href: string, text?: string): React.ReactNode => <Link href={href}>{' '}{text || href}</Link>

const parseYear = (datetime: string): number => parseInt(localDate(datetime).substr(0, 4), 10);
const parseMonth = (datetime: string): number => parseInt(localDate(datetime).substr(5, 2), 10);
export const parseMonthName = (datetime: string) => num2mon(parseMonth(datetime));
const parseDay = (datetime: string): number => parseInt(localDate(datetime).substr(8, 2), 10);
const parseHour = (datetime: string): number => parseInt(localDate(datetime).substr(11, 2), 10);
export const parseHourAMPM = (datetime: string) => moment(localDate(datetime)).format('LT')
export const parseDayOrdinal = (datetime: string) => moment.localeData().ordinal(parseDay(datetime))

const localDate = (ts: string): string => moment.utc(ts).format('YYYY-MM-DD HH:mm:ss');
const datesEqual = (ts1: string, ts2: string) => localDate(ts1) === localDate(ts2);

const padZero = (s: any): string => {
	const str = String(s);
	return (!str || str?.length < 1) ? `00` : ((str?.length < 2) ? `0${str}` : str);
}

const monthNames = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', ];
const num2mon = (num: any): string => monthNames[num - 1] || '';
const mon2num = (month: any): number => monthNames.indexOf(String(month)) + 1;

/*
	accept:
		YYYY
		YYYY-MM
		YYYY-MM-DD
		YYYY-MM-DD HH:MM:SS
		YYYY-MM-DD[T]HH:MM:SS.XXXX[Z]
 */
export const parseDate = (str?: string) => {
	if (str?.length) {
		const patterns = [
			/^(\d\d\d\d)-(\d\d)-(\d\d)T(\d\d):(\d\d):(\d\d).(\d\d\d)Z/,
			/^(\d\d\d\d)-(\d\d)-(\d\d) (\d\d):(\d\d):(\d\d)/,
			/^(\d\d\d\d)-(\d\d)-(\d\d)/,
			/^(\d\d\d\d)-(\d\d)/,
			/^(\d\d\d\d)/,
		]
		const xx = patterns.map(p => {
			const matched = str?.match(p);
			return matched;
		}).find(f => f && f[1]);
		if (xx) {
			const [ orig, y, m, d, hh, mm, ss ] = xx;
			const unknownMonth = (!parseInt(m, 10)) ? 'unknownMonth' : '';
			const unknownDay = (!parseInt(d, 10)) ? 'unknownDay' : '';
			const [ iy, im, id, ihh, imm, iss ] = [y, m, d, hh, mm, ss ].map(f => (f && parseInt(f, 10)) || 1);
			if (!iy) return;
			return [orig,iy,im,id,ihh,imm,iss, unknownMonth, unknownDay];
		}
		return;
	}
}

export const prettyDate = (dt: string) => moment(dt).format("ddd, MMM Do YYYY");

const dateDisplay = (dt?: string, sep: string = ' - ') => {
	const [orig, iy,im,id,ihh,imm,iss, unknownMonth, unknownDay]: any = parseDate(dt) || [];
	if (iy) {
		const padDate = (dt: number[]) => {
			const [iy,im,id,ihh,imm,iss] = dt || [];
			return localDate(`${iy}-${padZero(im)}-${padZero(id)} ${padZero(ihh)}:${padZero(imm)}:${padZero(iss)}`);
		}
		const display = (orig?.length < 10) ? orig : padDate([iy,im,id,ihh,imm,iss]);
		return (<>
			{sep}
			<span className="date">{prettyDate(display)}</span> <span className={`date ${unknownDay} ${unknownMonth}`} />
		</>)
	}
}

const dateDiff = (dt?: string, sep: string = ' - ') => {
	const [orig, iy,im,id,ihh,imm,iss, unknownMonth, unknownDay]: any = parseDate(dt) || [];
	if (iy) {
		const padDate = (dt: number[]) => {
			const [iy,im,id,ihh,imm,iss] = dt || [];
			return localDate(`${iy}-${padZero(im)}-${padZero(id)} ${padZero(ihh)}:${padZero(imm)}:${padZero(iss)}`);
		}
		const display = (orig?.length < 10) ? orig : padDate([iy,im,id,ihh,imm,iss]);
		const compare = padDate([iy,im || 1,id || 1,ihh,imm,iss]);
		//const prettyDate = moment(display).format("ddd, MMM Do YYYY");
		const prettyAgo = moment(compare).startOf('hour').fromNow();
		return (<>
			{sep}
			<span className="date">{prettyDate(display)}</span> <span className={`date ${unknownMonth} ${unknownDay}`}>( {prettyAgo} )</span>
		</>)
	}
}

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
	return `${year}/${monthName}${day}_${hour}${min}.html`.replace('_0000.html', '.html');
}

/*
	gigPage2Datetime
		inverse of ts2URI()
 */
const gigPage2Datetime = (href: string): string => {
	const regs = [
		/(\d{4})\/([A-Za-z]{3})(\d{1,2})_(\d{2})(\d{2}).html/,
		/(\d{4})\/([A-Za-z]{3})(\d{1,2})_(\d{2}).html/,
		/(\d{4})\/([A-Za-z]{3})(\d{1,2}).html/,
		/(\d{4})\/([A-Za-z]{3}).html/,
		/(\d{4}).html/,
	];
		
	const res = regs.map(regex => {
		const match = href.match(regex);
		if (match) {
			let yy = match[1];
			let mm = mon2num(match[2] || 0);
			let dd = match[3] || '00';
			let hh = match[4] || '00';
			let min = match[5] || '00';
			return `${yy}-${padZero(mm)}-${padZero(dd)} ${hh}:${padZero(min)}:00`;
		}
	}).filter(f => f)[0] || '';
	return res.replace('_0000.html', '.html');
}

const Venue = ({ record }: { record: RecordType }) =>
<div style={{ paddingTop: '4px', paddingBottom: '6px' }}>
		{(record?.title) && <div className="gig_project">&quot;{record?.title}&quot;</div>}
		<div dangerouslySetInnerHTML={{__html: record?.venue}} style={{ fontWeight: '900', fontSize: '1.5em' }} />
		{record?.city}
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
			{record?.performer}
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
	</div>
}

const cache: {
  [key: string]: any;
} = {}

const searchRegex = /[^a-z0-9'_ ]/gi;
const searchSplit = /(?<=^| )("[^"]*"|[^ ]+)(?= |$)/g;

// convert incoming query string into reasonable search terms
const searchTerms = (query: string): string[] => {
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

const filterBy = (res: RecordType, query: string, recordFilter: any) => {
	const terms = searchTerms(query);
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

const bannerGigs = (results: HashedType, searchYear?: number) => {
		if (!results) return <></>;
		const searchType = getOptions(results?.type).text;
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

const templateGigs = (results: RecordType, layout: any) => {
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
					const cls = "gig_" + styles?.type;
					const icons = ['ticket', 'interview', 'players', 'press', 'review', 'setlist', 'songlist', 'recording', 'video', 'pix',
						// 'pat', 'setlist', 'self'
						]
						.filter((type: string) => useG?.extra?.includes(type));
					const gigLink = `/gigs/${ts2URI(record?.datetime)}`;

					return (
						<Link key={key}
								href={gigLink}
								style={{ textAlign: 'center', width: '320px', ...styles, margin: '10px', padding: '3px', borderRadius: '5px', border: '1px solid #555'}}
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
								<i>
								<div dangerouslySetInnerHTML={{__html: record?.alsowith }}/>
								</i>
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
								<Image alt='poster' width={320} height={320} src={poster} style={{ height: 'auto' }}/>
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
		return <details key={year}>
			<summary className="flex hover:outline">
				<GigGraph scaling={scaling} year={year} gigs={gigs} queryString={queryString} />
			</summary>
			<div style={{ background: 'white', padding: '5px', border: '1px solid #ddd', marginTop: '5px' }}>
				{Object.keys(months).sort((a: any, b: any) => a - b).map((m: any) => makeGigMonth(year, m, months[m]))}
			</div>
		</details>
	}

	return <div style={{ margin: '5px' }}>
		{Object.keys(years).sort((a: any, b: any) => b - a).map((y: any) => makeGigYear(queryString, y, years[y]))}
	</div>
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

const searchOptions: HashedType[] = [
	{ ...gigSearchOptions(false, 'all', 'All Gigs', 'gigs'), menu: false },
	{ ...gigSearchOptions(true, 'venue', 'Venue', 'gigs') },
	{ ...gigSearchOptions(true, 'city', 'City', 'gigs') },
	{ ...gigSearchOptions(true, 'anything', 'Anywhere in details', 'gigs'),
		filter: filterGigsByAnything,
	},
	{ ...gigSearchOptions(true, 'song', 'Played this song..', 'gigs_by_song'),
		layout: layoutSongs,
	},
	{ ...gigSearchOptions(true, 'performer', 'Musician performed..', 'gigs_by_musician'),
		filter: filterGigsByPerformer,
		layout: layoutPerformer
	},
	{ ...gigSearchOptions(true, 'alsowith', 'Shared the bill..', 'gigs') },
]

export const getOptions = (noun: string | undefined): HashedType => (noun && searchOptions.find(o => o.noun === noun)) || searchOptions[0];

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

const songLinkMapped = (title: string, doit?: boolean) => {
	if (doit) {
		const tit = title?.replace(/ /g, '_').toLowerCase();
		const songMapped = songMap[tit];
		if (songMapped) {
			return linkSong({ title, href: `/lyrics/${songMapped}` });
		} else {
			return linkSong({ title, href: `/gigs?f=song&q=${title}` });
		}
	} else {
		return title;
	}
}

export const censorEmail = (str: string) => {
	const deHTDB = str?.replace(/\[remove\].*/, '@');
	const len = deHTDB.length;
	const idx = deHTDB.indexOf('@') + 1;
	return deHTDB[0] + deHTDB.substr(1, idx - 1) + Array(len - idx - 1).join('.') + deHTDB[len - 1];
}

export const deHTDBifyText = (v: string) => v?.replace(/&#34;/g, "'").replace(/&#39;/g, "'").replace(/&#41;/g, ")").replace(/&#36;/g, "$").replace(/@/g, '[remove]').replace(/YourTown,/, '').replace(/USofA/, '').replace(/you\(at\)company.com/, '').replace(/\n/g, '<p />').replace(/\\t/g, ' ').replace(/&#92;/g, '').replace(/&#61;/g, '=');


export const parseCredit = (cr: string = '') => {
	const [ credit, crediturl, creditdate, creditcaption ] = cr.split(';;');
	return {
		credit,
		crediturl,
		creditdate,
		creditcaption: deHTDBifyText(creditcaption)
	}
}

const autoLink = songLinkMapped;

const parseDomain = (str: string) => String(str?.match(/^(?:https?:\/\/)?(?:[^@\/\n]+@)?(?:www\.)?([^:\/\n]+)/igm))?.replace('http://', '').replace('https://', '');

export { localDate, datesEqual, bannerGigs, linkSong, songLinkMapped, parseDomain, dateDisplay, dateDiff, autoLink, searchOptions, num2mon, mon2num, padZero, linkInternal, linkExternal, ts2URI, gigPage2Datetime, parseYear, parseDay, parseMonth }
