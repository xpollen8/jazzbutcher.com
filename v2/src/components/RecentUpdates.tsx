"use client"

import { Suspense } from 'react';
import Link from 'next/link';
import Tag from '@/components/Tag';
import EmbedMedia from '@/components/EmbedMedia';
import News from '@/components/News';
import useRecentUpdates from '@/lib/useRecentUpdates';
import { dateDiff } from '@/lib/utils';
import { feedbackURI2Pathname } from '@/lib/usePageComments';

const RecentPress = (props: any) => {
	const { press } = props;
	if (!press?.numResults) return;
	return <details>
		<summary className="tagClickable">Recent updates to press items: {press.numResults}</summary>
		<blockquote>
			{press.results.map((p: any, key: number) => {
				return <div key={key} className="listItem">
					<div className="date">{dateDiff(p.dtadded, '')}</div>
					<Link href={p.url}><b>{!!p.publication?.length && p.publication + ':'} {p.title}</b></Link>
				</div>
			})}
		</blockquote>
	</details>
}

const RecentFeedback = (props: any) => {
	const { feedback } = props;
	if (!feedback?.numResults) return;
	return <details>
		<summary className="tagClickable">Recent website comments: {feedback.numResults}</summary>
		<blockquote>
			{feedback.results.map((p: any, key: number) => {
				return <div key={key} className="listItem">
					<div className="date">{dateDiff(p.dtcreated, '')}</div>
					<Link href={feedbackURI2Pathname(p.uri)}><b>{p.subject}</b></Link>
				</div>
			})}
		</blockquote>
	</details>
}

const media2Embed = (p: any) => {
	const { media_id, lookup, type, subtype, ordinal, project, collection, name, comment,
		mp3, href, author, credit, parent, datetime, images, dtcreated } = p;
	return {
		mediaurl: mp3 || href,
		collection,
		comment,
		title: name,
		project,
		author,
		collection,
	}
}

const RecentMedia = (props: any) => {
	const { media } = props;
	if (!media?.numResults) return;
	return <details>
		<summary className="tagClickable">Recent media updates: {media.numResults}</summary>
		<blockquote>
			{media.results.map((p: any, key: number) => {
				return <div key={key} className="listItem">
					<div className="date">{dateDiff(p.dtcreated, '')}</div>
					<EmbedMedia data={media2Embed(p)} />
				</div>
			})}
		</blockquote>
	</details>
}

const RecentReleases = (props: any) => {
	const { releases } = props;
	if (!releases?.numResults) return;
	return <details>
		<summary className="tagClickable">Recent updates to releases: {releases.numResults}</summary>
		<blockquote>
			{releases.results.map((p: any, key: number) => {
				return <div key={key} className="listItem">
					<div className="date">{dateDiff(p.dtadded, '')}</div>
					<Link href={p.href}><b>{p.title}</b></Link>
				</div>
			})}
		</blockquote>
	</details>
}

const RecentNews = () => {
	return <details>
		<summary className="tagClickable">Full website update log</summary>
			<News />
	</details>
}
const RecentUpdates = () => {
	const { data, isLoading, error} = useRecentUpdates();
	const { press, media, feedback, releases } = data || {};
	return (<Suspense fallback={<>Loading...</>}>
		<p />
		<RecentPress press={press} />
		<RecentReleases releases={releases} />
		<RecentFeedback feedback={feedback} />
		<RecentMedia media={media} />
		<RecentNews />
		<p />
	</Suspense>)
}

export default RecentUpdates;
