"use client"

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

//import apiData from '@/lib/apiData';

import fetchFeedback from '@/lib/fetchFeedback';

//	/*
//	import { Metadata } from 'next';
//	import { useState } from 'react';
//	import Page, { setTitleFromURL }  from '@/components/Page';
//	import { fetchFeedback } from '@/lib/feedback';
//	import MakeDate from '@/components/MakeDate';
//	import SectionHeader from '@/components/SectionHeader';
//	import Item from '@/components/Item';
//	
//	export const metadata: Metadata = setTitleFromURL('/feedback');
//	*/
//	
//	
//	
//	/*
//	const Db = require('mywrap');
//	
//	let db;
//	
	const cleanValue = (v: string) => v.replace(/&#34;/g, "'").replace(/&#39;/g, "'").replace(/&#41;/g, ")").replace(/&#36;/g, "$").replace(/@/g, '[remove]').replace(/YourTown,/, '').replace(/USofA/, '').replace(/you\(at\)company.com/, '').replace(/\n/g, '<br/>');
//	
//	const	fetchFeedback = async (uri) => {
//		if (!db) { db = await new Db({
//			host: process.env['DATABASE_HOST'],
//			user: process.env['DATABASE_USER'],
//			username: process.env['DATABASE_USERNAME'],
//			password: process.env['DATABASE_PASSWORD'],
//			database: process.env['DATABASE_DATABASE'],
//		}).start(); }
//		return (await db.query(`select * from feedback where uri = ? and isdeleted='F' order by dtcreated desc`, uri)).map(f => JSON.parse(cleanValue(JSON.stringify(f))));
//	}
//	
//	const writeFeedback = async (body) => {
//		if (!db) { db = await new Db({
//			host: process.env['DATABASE_HOST'],
//			user: process.env['DATABASE_USER'],
//			username: process.env['DATABASE_USERNAME'],
//			password: process.env['DATABASE_PASSWORD'],
//			database: process.env['DATABASE_DATABASE'],
//		}).start(); }
//		return await db.query(`insert into feedback set dtcreated=now(), uri = ?, subject = ?, who = ?, whence = ?, comments = ?`,
//			[ 'htdb/index.html',
//			body.subject,
//			body.who,
//			body.whence,
//			body.comments ]);
//	}
//	
//	export { fetchFeedback, writeFeedback };
//	
//	*/
//	
//	/*
//	
	type Comments = {
		subject: string
		dtcreated?: string
		who: string
		whence: string
		comments: string
	}
//	
//	export async function getServerSideProps() {
//		const feedback: Feedback[] = await fetchFeedback('htdb/index.html');
//	  return {
//	    props: {
//				feedback
//			},
//	  }
//	}
//	
	const CleanContact = (str: string) => str && str.replace(/\[remove\].*/, '@...');

	const cleanComment = (comment: string) => {
		return (<div dangerouslySetInnerHTML={{__html: cleanValue(comment) }} />)
	}
	
	const Comment = ({ subject, dtcreated, who, whence, comments }: Comments, key: number) => (
		<div key={key}>
			<label>Subject</label>{subject} info={<> {whence} - {CleanContact(who)} </>}
			<div className="annotation">{cleanComment(comments)}</div>
		</div>
	)
	
	const Comments = ({ comments = [] }: { comments: Comments[] }) => <>{comments?.map(Comment)}</>
	
//	const AddComment = () => {
//		const [ feedback, setFeedback ] = useState({ subject: '', who: '', whence: '', comments: '' });
//		const [ result, setResult ] = useState(false);
//		const [ required, setRequired ] = useState(false);
//		if (result) {
//			return <p>Comments received</p>
//		} else {
//			return (
//			<form onSubmit={async (e) => {
//				e.preventDefault();
//				if (!(feedback?.subject?.length &&
//					feedback?.who?.length &&
//					feedback?.whence?.length &&
//					feedback?.comments?.length)) {
//					setRequired(true);
//					return;
//				}
//				fetch('/api/feedback', {
//					method: 'POST',
//					headers: { 'Content-type': 'application/json' },
//					body: JSON.stringify(feedback),
//				})
//				.then(r => r.json())
//				.then((r) => setResult(r?.posted));
//			}}>
//			{required && <p>All fields required</p>}
//			<table width="100%">
//			<tbody>
//			<tr>
//			<td>Subject:</td><td><input size={40} type="text" name="subject" defaultValue={feedback.subject} onChange={(e) => setFeedback({...feedback, subject: e.target.value})}/></td>
//			</tr>
//			<tr>
//			<td>Who:</td><td><input size={40} type="text" name="who" defaultValue={feedback.who}  onChange={(e) => setFeedback({...feedback, who: e.target.value})}/></td>
//			</tr>
//			<tr>
//			<td>Where:</td><td><input size={40} type="text" name="whence" defaultValue={feedback.whence}  onChange={(e) => setFeedback({...feedback, whence: e.target.value})}/></td>
//			</tr>
//			<tr>
//			<td>Comment:</td><td><textarea cols={40} name="comments"  defaultValue={feedback.comments} onChange={(e) => setFeedback({...feedback, comments: e.target.value})}/></td>
//			</tr>
//			<tr>
//			<td><button type="submit">Leave Feedback</button></td>
//			</tr>
//			</tbody>
//			</table>
//			</form>
//			);
//		}
//	}
//	*/

const Feedback = () => {
	const pathname = usePathname();
	const [ comments, setComments ] = useState([]);

	useEffect(() => {
		const getData = async () => {
			setComments(await fetchFeedback(pathname));
		}
		getData();
	}, [pathname]);

	return <><Comments comments={comments} /></>

//	/*
//		<Page link="/feedback">
//			{/*<AddComment />*/}
//			<Comments feedback={feedback} />
//		</Page>
//	)
//	*/
}

export default Feedback;
