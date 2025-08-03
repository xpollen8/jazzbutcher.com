"use client"

import { Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Tag from '@/components/Tag';
import EmbedMedia from '@/components/EmbedMedia';
import useRecentUpdates from '@/lib/useRecentUpdates';
import { dateDiff, ts2URI } from '@/lib/utils';
import { feedbackURI2Pathname } from '@/lib/usePageComments';
import InfoTag from '@/components/InfoTag';
import { Attribution } from '@/components/GenericWeb';

const RecentPress = (props: any) => {
	const { press } = props;
	if (!press?.numResults) return;
	return <details>
		<summary className="tagClickable">Recent press updates: {press.numResults}</summary>
		<blockquote>
			{press.results.map((p: any, key: number) => {
				return <div key={key} className="listItem">
					<div className="date">{dateDiff(p.dtadded, '')}</div>
					<Link href={p.url}><b>{!!p.publication?.length && p.publication + ':'} {p.title}</b></Link> <div className="date">Published: {p?.dtpublished?.substr(0, 10)?.replace(/-00/g, '')}</div>
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

const RecentGigMedia = (props: any) => {
	const { gigmedia } = props;
	if (!gigmedia?.numResults) return;
	const results = {};
	gigmedia.results?.forEach((p: any) => {
		// @ts-ignore
		if (!results[p.type]) { results[p.type] = []; }
		// @ts-ignore
		results[p.type].push(p);
	});
	return <details>
		<summary className="tagClickable">Recent gig-related images: {gigmedia.numResults}</summary>
		<blockquote>
			{Object.keys(results)?.map((p: any, key: number) => {
				// @ts-ignore
				const items = results[p];
				return <div key={key} className="listItem">
					<details>
					<summary className="tagClickable">{p}: {items.length}</summary>
					<blockquote>
						{items.map((p: any, key: number) => {
						const href = `https://v1.jazzbutcher.com/${p.image.trim()}`;
						const thumb = href.replace(/.jpg/, '_250.jpg');
						return <div key={key} className="listItem">
							<Link href={href}><Image src={thumb} width={250} height={250} alt={p.image_caption || p.type} /></Link>
							<div className="date"><Link href={`/gigs/${ts2URI(p.datetime)}`}>{dateDiff(p.datetime, '')}</Link></div>
							{/*// @ts-ignore */}
							<Attribution g={p.credit} d={p.credit_date} x={(p.image_caption) ? <span className="date">{p.image_caption}<br /></span> : ''} />
						</div>
						})}
					</blockquote>
					</details>
				</div>
			})}
		</blockquote>
	</details>
}

const RecentMedia = (props: any) => {
	const { media } = props;
	if (!media?.numResults) return;
	return <details>
		<summary className="tagClickable">Recent media updates: {media.numResults}</summary>
		<blockquote>
			{media.results.map((p: any, key: number) => {
				return <div key={key} className="listItem">
					<div className="date">{dateDiff(p.dtcreated || p.added, '')}</div>
					<EmbedMedia data={p} />
				</div>
			})}
		</blockquote>
	</details>
}

const RecentReleases = (props: any) => {
	const { releases } = props;
	if (!releases?.numResults) return;
	return <details>
		<summary className="tagClickable">Recent releases updates: {releases.numResults}</summary>
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

const RecentUpdates = () => {
	const { data, isLoading, error} = useRecentUpdates();
	const { press, media, gigmedia, feedback, releases } = data || {};
	return (<Suspense fallback={<>Loading...</>}>
		<RecentPress press={press} />
		<RecentReleases releases={releases} />
		<RecentFeedback feedback={feedback} />
		<RecentMedia media={media} />
		<RecentGigMedia gigmedia={gigmedia} />
	</Suspense>)
}

export default RecentUpdates;
