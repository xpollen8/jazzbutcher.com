import Link from 'next/link';

const linkExternal = (url: string, text: string) : React.ReactNode => <Link target="_new" href={url}>{text || url}</Link>

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

// TODO - set up api routes on data.jbc.com for all search types
const searchOptions = [
	{ noun: 'venue', text: 'venue', route: 'gigs_by_venue' },
	{ noun: 'city', text: 'city' },
	{ noun: 'country', text: 'country' },
	{ noun: 'act', text: 'shared the bill with JBC..' },
	{ noun: 'performer', text: 'this band member performed..' },
	{ noun: 'song', text: 'played this song..' },
]

const doSearch = (type: string, query: null | string, settor: any): void => {
	if (!type) return;
	const route = searchOptions.find(o => o.noun === type)?.route;
	if (!route) {
		alert(`search by ${type} not yet implemented`);
		return;
	}
	const action = `/api/${route}/${query}`;
	console.log("SEARCH1", { type, query, action, ENV: process.env });
	fetch(action)
		.then(e => e.json())
		.then(res => settor(res))
		.catch((e) => {
			alert('FAILED');
			console.log("ERR", e);
		});
}

export { doSearch, searchOptions, Nobr, num2mon, mon2num, padZero, linkExternal, ts2URI, gigURI2ts, gigPage2Datetime, parseYear }
