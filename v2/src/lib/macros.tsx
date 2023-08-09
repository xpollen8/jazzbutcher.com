import Link from 'next/link';
import moment from 'moment';

type RecordType = {
	[key: string]: any;
	matchedTerms?: string[];
}

type QueryType = string;

const linkExternal = (url: string, text?: string): React.ReactNode => <Link target="_new" href={url}>{' '}{text || url}</Link>
const linkInternal = (url: string, text?: string): React.ReactNode => <Link href={url}>{' '}{text || url}</Link>

const parseYear = (datetime: string) => datetime.substr(0, 4);

const padZero = (s: any): string => {
	const str = String(s);
	return (!str || str?.length < 1) ? `00` : ((str?.length < 2) ? `0${str}` : str);
}

const monthNames = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', ];
const num2mon = (num: any): string => monthNames[num] || '';
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
const gigPage2Datetime = (year: string, url: string): string => gigURI2ts(year, url);

const Nobr = ({ children }: { children: React.ReactNode }) => <span style={{ whiteSpace: 'nowrap' }}>{children}</span>

const layoutGigs = (record: RecordType, key: number) => {
	return <div key={key}>
		{(record?.matchedTerms) &&
			<>
				<label>Matched Terms</label> <i>&quot;{record?.matchedTerms.join('", "')}&quot;</i><br/>
			</>
		}
		<label>Venue</label>
		{record?.venue}
		<label>Date</label>
		{record?.datetime}
		<label>Location</label>
		{record?.city}
		{record?.state}
		{record?.country}
		{record?.postalcode}
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

const filterBy = (res: RecordType, query: QueryType, target: any) => {
	const terms = searchTerms(query);
	const filtered = res.results
		?.map((record: RecordType) => searchRecord(record, target(record), terms))	// add 'matchedTerms' to object
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
	const target = ((record: RecordType) => record[field]?.toLowerCase());
	return filterBy(res, query, target);
}

const filterGigsByVenue = (res: any, query: QueryType) => filterGigsByField(res, query, 'venue');
const filterGigsByCity = (res: any, query: QueryType) => filterGigsByField(res, query, 'city');
const filterGigsByCountry = (res: any, query: QueryType) => filterGigsByField(res, query, 'country');
const filterGigsBySupport = (res: any, query: QueryType) => filterGigsByField(res, query, 'alsowith');

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

const gigSearchOptions = (noun: string, text: string, route: string) => ({
	noun,
	text, route,
	layout: layoutGigs,
	filter: (res: RecordType, query: string) => filterGigsByField(res, query, noun)
});

const searchOptions = [
	{ ...gigSearchOptions('venue', 'Venue', 'gigs') },
	{ ...gigSearchOptions('city', 'City', 'gigs') },
	{ noun: 'anything', text: 'Anywhere in gig details', route: 'gigs',
		layout: layoutGigs,
		filter: filterGigsByAnything
	},
	{ ...gigSearchOptions('country', 'Country', 'gigs') },
	{ noun: 'song', text: 'Played this song..', route: 'gigsongs',
		layout: layoutGigs,
		filter: filterGigsByAnything
	},
	{ noun: 'performer', text: 'This band member performed..', route: 'performances',
		layout: layoutGigs,
		filter: filterGigsByAnything
	},
	{ ...gigSearchOptions('alsowith', 'Shared the bill with JBC..', 'gigs') },
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
	const action = `/api/${route}`;
	fetch(action)
		.then(e => e.json())
		.then(res => {
			cache[route] = res;
			error();
			settor(filter({ ...res, type }, query))
		})
		.catch((e) => {
			error(`search by ${type} failed`);
			console.log("ERR", e);
		});
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

const autoLink = (str: string) => <>**AUTOLINK {str}**</>

const parseDomain = (str: string) => String(str?.match(/^(?:https?:\/\/)?(?:[^@\/\n]+@)?(?:www\.)?([^:\/\n]+)/igm))?.replace('http://', '').replace('https://', '');

const dateDiff = (d: string) =>
<>
	<span className="hiddendate">{d}</span>
	<span className="date">{moment(d).format("dddd, MMM Do YYYY")} - {moment(d).startOf('hour').fromNow()} </span>
</>

export { parseDomain, dateDiff, autoLink, doSearch, searchOptions, Nobr, num2mon, mon2num, padZero, linkInternal, linkExternal, ts2URI, gigURI2ts, gigPage2Datetime, parseYear }
