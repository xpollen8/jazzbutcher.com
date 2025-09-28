import Link from 'next/link';
import { type HashedType, prettyDate, dateAgo } from '@/lib/utils';
import { notFound } from 'next/navigation';
import messages from '@/../public/data/jbc-list.json';
import LetterHeader from '@/components/LetterHeader';
import { AutoLink } from '@/lib/defines';

const pad = (n: number) => String(n + 1).padStart(4, '0');

const JBCListNav = ({ year = '1989', id = 'date', next, prev }: any) => {
	const yi = parseInt(year);
	if (yi) {
		const py = (yi > 1989) ? yi - 1 : null;
		const ny = (yi < 2004) ? yi + 1 : null;
		if (!(yi >= 1989 && yi <= 2004)) return notFound();
		const i = parseInt(id);
		const mode = (i) ? <>Message: {i}</> : <>By: {id}</>;
		const subject_selected = (id === 'subject') ? 'email_nav_selected' : '';
		const date_selected = (id === 'date') ? 'email_nav_selected' : '';
		const sender_selected = (id === 'sender') ? 'email_nav_selected' : '';
		const yl = (i > 1) ? '' : `/${id}`;
		return <LetterHeader title=<>{`jbc-list: ${year}`} - {mode}</> subhead=<>
			{(py) && <>{' '}[<Link href={`/mailinglist/${py}${yl}`}>{py}</Link>]</>}
			{(ny) && <>{' '}[<Link href={`/mailinglist/${ny}${yl}`}>{ny}</Link>]</>}
			{' '}[<Link className={subject_selected} href={`/mailinglist/${year}/subject`}>By Subject</Link>]
			{' '}[<Link className={date_selected} href={`/mailinglist/${year}`}>By Date</Link>]
			{' '}[<Link className={sender_selected} href={`/mailinglist/${year}/sender`}>By Sender</Link>]
			{(prev) && <>{' '}[<Link href={`/mailinglist/${prev}`}>Prev</Link>]</>}
			{(next) && <>{' '}[<Link href={`/mailinglist/${next}`}>Next</Link>]</>}
		</>
		/>
	} else {
		return <>NAV</>
	}
}

export const JBCListing = ({ year, id = 'date' }: any) => {
	const doSubjects = (m: any, y: any, i: any) => {
		const subjects: HashedType = {};
		m?.forEach((m: any) => {
			const subject = m.subject;
			const [ re, sub ] = (subject || '').split('e:');
			if (re?.length && sub?.length) {
				const s = sub.trim();
				if (!subjects[s]) subjects[s] = [];
				subjects[s].push({ re: re + 'e:', ...m });
			} else {
				const s = subject.trim();
				if (!subjects[s]) subjects[s] = [];
				subjects[s].push(m);
			}
		})
		return <>
			<JBCListNav year={y} id={i} />
			{Object.keys(subjects).map((subject: string, key: number) => {
				return <ol className="email_listing" key={key}>
					<b>{subject}</b>
					{subjects[subject]?.map((m: any, key: number) => {
						return <li className="odd:bg-gray-100 border-b" key={key}>
							{m.date.substring(0, 10)}: <Link href={`/mailinglist/${m.msgId}`}>{m.re} {m.from}</Link>
						</li>
					})}
				</ol>
			})}
		</>
	}
	const doSenders = (m: any, y: any, i: any) => {
		const senders: HashedType = {};
		m?.forEach((m: any) => {
			const sender = m.from;
			if (!senders[sender]) senders[sender] = [];
			senders[sender].push(m);
		})
		return <>
			<JBCListNav year={y} id={i} />
			{Object.keys(senders).map((sender: string, key: number) => {
				return <ol className="email_listing" key={key}>
					<b><Link href={`/contributions/${sender}`}>{sender}</Link></b>
					{senders[sender]?.map((m: any, key: number) => {
						return <li className="odd:bg-gray-100 border-b" key={key}>
							{m.date.substring(0, 10)}: <Link href={`/mailinglist/${m.msgId}`}>{m.subject}</Link>
						</li>
					})}
				</ol>
			})}
		</>
	}
	const doDates = (m: any, y: any, i: any) => {
		const days: HashedType = {};
		m?.forEach((m: any) => {
			const day = m.date.substring(0, 10);
			if (!days[day]) days[day] = [];
			days[day].push(m);
		})
		return <>
			<JBCListNav year={y} id={i} />
			{Object.keys(days).map((day: string, key: number) => {
				const [ mm, dd ] = day.split('-');
				return <ol className="email_listing" key={key}>
					<b>{day}</b>
					{days[day]?.map((m: any, key: number) => {
						return <li className="odd:bg-gray-100 border-b" key={key}>
							<Link href={`/mailinglist/${m.msgId}`}>{m.subject}</Link>
						</li>
					})}
				</ol>
			})}
		</>
	}
	if (parseInt(year, 10) > 1988) {
		// @ts-ignore
		const yearMessages: HashedType = messages[year];
		if (id === 'subject') return doSubjects(yearMessages, year, id);
		if (id === 'sender') return doSenders(yearMessages, year, id);
		return doDates(yearMessages, year, id);
	}

	// @ts-ignore
	const m = Object.keys(messages)?.map((year: any) => [...messages[year]])?.flat();
	if (year === 'subject') return doSubjects(m, year, id);
	if (year === 'sender') return doSenders(m, year, id);
	return doDates(m, year, id);
}

const findPrevious = (year: number, yearIdx: number) => {
	// @ts-ignore
	const message = messages[year][yearIdx];
	if (message) return message;
	// try previous year
	// @ts-ignore
	const prevYear = messages[parseInt(year) - 1];
	if (prevYear) return prevYear[prevYear.length - 1];
}

const findNext = (year: number, yearIdx: number) => {
	// @ts-ignore
	const message = messages[year][yearIdx];
	if (message) return message;
	// try next year
	// @ts-ignore
	const nextYear = messages[parseInt(year) + 1];
	if (nextYear) return nextYear[0];
}

const subContrib = (chunk: string, key: number) => {
	const s = chunk?.replace(', ', ',');
	if (s?.endsWith('}}')) {
		const sc = s.substring(0, s.length - 2)?.trim();
		if (sc === 'jbc-list') {
			return <Link key={key} href={`/mailinglist`}>{sc}</Link>
		} else {
			return <Link key={key} href={`/contributions/${sc}`}>{sc}</Link>
		}
	} else {
		return s;
	}
}

const bodySubstitutions = (body: string) => {
	return body?.split('}}') // now we're an array
		?.map((w) => {
			if (!w?.includes('{{')) return w;
			const text = w + '}}';
			return text?.split('{{') ?.map(subContrib)?.flat();
	});
}

const JBCListMessage = ({ year = 1989, id = 1 }: any) => {
	// @ts-ignore
	const yearMessages = messages[year];
	if (!yearMessages) return notFound();
	const message = yearMessages[parseInt(id) - 1] || {};
	const thisMessageIdx = message?.msgId;
	if (!thisMessageIdx) return notFound();
	const yearIdx = yearMessages?.findIndex((m: any) => m === message);
	const { msgId: prevMsgId } = findPrevious(year, yearIdx - 1) || {};
	const { msgId: nextMsgId } = findNext(year, yearIdx + 1) || {};

	return <>
		<JBCListNav year={year} id={id} prev={prevMsgId} next={nextMsgId} />
		<div className="email">
			Date: {prettyDate(message.date)} {dateAgo(message.date)} <br />
			From: <Link href={`/contributions/${message.from}`}>{message.from}</Link>
			<br />Subject: <b>{message.subject}</b>
			<p />
			<div className="email_body">
				{
					// @ts-ignore
					bodySubstitutions(message.body)?.map((part: any, key: number) => <span key={key}>{part}</span>)
				}
			</div>
		</div>
	</>
}

export default JBCListMessage;
