import Link from 'next/link';
import Image from 'next/image';
import moment from 'moment';
import songMap from './songMap';

export type RecordType = {
	[key: string]: any;
	matchedTerms?: string[];
}

export type HashedType = {
	[key: string]: any;
}

export type NewCommentType = {
	subject: string
	dtcreated?: string
	who: string
	whence: string
	comments: string
	parent_id?: number
	children?: NewCommentType[]
	has_children?: number
}

export type CommentType = NewCommentType & {
	feedback_id: number
}

export const htmlString = (x: any) => x ? <span dangerouslySetInnerHTML={{ __html: x }} /> : '';

export const linkExternal = (href: string, text?: string | React.ReactElement): React.ReactNode => <Link target="_new" href={autoHREF(href)}>{' '}{text || href}</Link>
export const linkInternal = (href: string, text?: string | React.ReactElement): React.ReactNode => <Link href={href}>{' '}{text || href}</Link>

export const parseYear = (datetime?: string): number => (datetime && parseInt(datetime.substr(0, 4), 10)) || 0;
export const parseMonth = (datetime: string): number => parseInt(localDate(datetime).substr(5, 2), 10);
export const parseMonthName = (datetime: string) => num2mon(parseMonth(datetime));
export const parseDay = (datetime: string): number => parseInt(localDate(datetime).substr(8, 2), 10);
export const parseHour = (datetime: string): number => parseInt(localDate(datetime).substr(11, 2), 10);
export const parseHourAMPM = (datetime: string) => moment(localDate(datetime)).format('LT')
export const parseDayOrdinal = (datetime: string) => moment.localeData().ordinal(parseDay(datetime))

export const localDate = (ts: string): string => moment.utc(ts).format('YYYY-MM-DD HH:mm:ss');
export const datesEqual = (ts1: string, ts2: string) => localDate(ts1) === localDate(ts2);

export const padZero = (s: any): string => {
	const str = String(s);
	return (!str || str?.length < 1) ? `00` : ((str?.length < 2) ? `0${str}` : str);
}

export const startSeconds = (str: any = ''): number => {
	if (!str || typeof(str) === 'number') return str;
	var p = str.split(':'),
			s = 0, m = 1;

	while (p.length > 0) {
			s += m * parseInt(p.pop(), 10);
			m *= 60;
	}

	return s;
}

export const monthNames = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', ];
export const monNames = monthNames.map((m: string) => m.substr(0, 3));
export const num2month = (num: any): string => monthNames[num - 1] || '';
export const num2mon = (num: any): string => monNames[num - 1] || '';
export const mon2num = (month: any): number => monNames.indexOf(String(month)) + 1;

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
			if (xx[0] === '0000-00-00 00:00:00') return;
			const [ orig, y, m, d, hh, mm, ss ] = xx;
			const [ iy, im, id, ihh, imm, iss ] = [y, m, d, hh, mm, ss ].map(f => (f && parseInt(f || '', 10)) || 0);
			const anyKnown = (iy || im || id);
			const unknownYear = anyKnown && (!iy) ? 'unknownYear' : '';
			const unknownMonth = anyKnown && (!im) ? 'unknownMonth' : '';
			const unknownDay = anyKnown && (!id) ? 'unknownDay' : '';
			//if (!iy) return;
			return [orig,iy,im || 1,id || 1,ihh,imm,iss, unknownYear, unknownMonth, unknownDay];
		}
		return;
	}
}

export const prettyDate = (dt: string) => moment(dt).format("ddd, MMM Do YYYY");

export const dateDisplay = (dt?: string, sep: string = ' - ') => {
	const [orig, iy,im,id,ihh,imm,iss, unknownYear, unknownMonth, unknownDay]: any = parseDate(dt) || [];
	if (!unknownYear) {
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
	return <span className={`date ${unknownYear}`} />
}

export const dateDiff = (dt?: string, sep: string = ' - ') => {
	const [orig, iy,im,id,ihh,imm,iss, unknownYear, unknownMonth, unknownDay]: any = parseDate(dt) || [];
	if (!unknownYear) {
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
			<span className="date">{prettyDate(display)}</span> <span className={`date ${unknownMonth} ${unknownDay}`}>({prettyAgo})</span>
		</>)
	}
	return <span className={`date ${unknownYear}`} />
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
export const ts2URI = (ts: string): string => {
	if (!ts) return '';
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
export const gigPage2Datetime = (href: string): string => {
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

export const autoHREF = (href: string) => {
	if (href?.includes('@') && !href?.includes('http')) {	// email address
		return `mailto:${href}`;
	} else {
		if (href?.includes('htt')) {	// full url
			return href;
		} else {
			if (href?.startsWith('/')) {	// local link
				return href;
			} else {	// was just a domain
				return `https://${href}`;
			}
		}
	}
}

export const linkSong = ({ title, href, audio, mp3, author, pdf }: {
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

export const songLinkMapped = (title: string, doit?: boolean) => {
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

export const parseCredit = (cr: string = '') => {
	const [ credit, crediturl, creditdate, creditcaption ] = parseCaptionSourceEtc(cr) || [];
	return {
		credit,
		crediturl,
		creditdate,
		creditcaption
	}
}

export const autoLink = songLinkMapped;

export const parseDomain = (str: string) => String(str?.trim()?.match(/^(?:https?:\/\/)?(?:[^@\/\n]+@)?(?:www\.)?([^:\/\n]+)/igm))?.replace('http://', '').replace('https://', '');

export const parseCaptionSourceEtc = (str?: string, captionsLast?: boolean) => {
	const parts = str?.split(';;')?.map((ch: string) => ch.length ? ch.replace('[remove]', '@') : undefined) || []
	if (!captionsLast) {
		return parts;
	}
	return [ parts[0], parts[4], parts[1], parts[2], parts[3] ];
}

export const parseCaptionsSourcesEtc = (str?: string, captionsLast?: boolean) => {
	if (!str) return;
	return str.split(/\$\$|--NEXT--/)?.filter((ch: any) => ch.length)?.map((ch: string) => parseCaptionSourceEtc(ch, captionsLast));
}

export const truncAt = (chop: string, str?: string) => {
	if (!str) return;
	const [ ret ] = str.split(chop);
	return ret || str;
}

export const parsePressTypes = (types?: string) => types?.split(';');

export const parseMediaOrdinal = (ordinalS?: string) => {
	const [ type, setnum, ordinal ] = ordinalS?.split(';;') || [];
	return {
		type: (setnum) ? type : undefined,
		setnum: (setnum?.length) ? setnum : undefined,
		ordinal: (ordinal?.length) ? ordinal : undefined
	};
}

const getImageBase = (str?: string) => {
	if (str?.match(/jpg/i) || str?.match(/jpeg/i)) {
		const buh = str?.split('.');
		const ext = buh.pop();
		const base = buh.join('.');
		return [ base, ext ];
	} else {
		return [ str, 'jpg' ];
	}
}

export const imageBase = (str?: string) => {
	return str && (str.includes('http') || str.startsWith('/assets')) ? str : 'https://v1.jazzbutcher.com' + str;
}

export const imageThumb = (str?: string, width: number = 250) => {
	const [ base, ext ] = getImageBase(str);
	return imageBase(base) + '_' + width + '.' + ext;
}

export const imageFull = (str?: string) => {
	const [ base, ext ] = getImageBase(str);
	return imageBase(base) + '.' + ext;
}

export const parseGigExtras = (extra?: string) => extra?.split(',') || [];

export const parseProject = (extra: string) => ['wilson','sumo','eg','solo','duo','nopat'].find((e: string) => parseGigExtras(extra).includes(e)) || '';

export const pressFiltersInclude = (filters: string, f: string) => filters.split(',').find((s: string) => s === f);

export const parseImage = (str?: string, width: number = 250) => {
	const raw = str && truncAt(';;', str || '')?.trim();
	return {
		thumb: raw && imageThumb(raw, width),
		image: raw && imageFull(raw),
	}
}

export const pluralize = (num: number, str: string, prefix?: string) => ((prefix) ? `${prefix} ` : '') + ((num) ? num : 'No') + ' ' + str + ((num !== 1) ? 's' : '');
