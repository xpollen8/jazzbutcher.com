"use client"

import Link from 'next/link';
import Image from 'next/image';
import EmbedMedia from '@/components/EmbedMedia';
import useRecentUpdates from '@/lib/useRecentUpdates';
import { pluralize, dateDiff, ts2URI } from '@/lib/utils';
import { feedbackURI2Pathname } from '@/lib/usePageComments';
import { Attribution } from '@/components/GenericWeb';
import { CommentBubble } from '@/components/PageComments';
import Loading from '@/components/Loading';

const RecentPress = (props: any) => {
	const { press } = props;
	if (!press?.numResults) return;
	return <details>
		<summary className="tagClickable">{pluralize(press.numResults, 'press', 'Recently added')}</summary>
			{press.results.map((p: any, key: number) => {
				return <div key={key} className="listItem clickListItem">
					<div className="date">{dateDiff(p.dtadded, '')}</div>
					<Link href={p.url}><b>{!!p.publication?.length && p.publication + ':'} {p.title}</b></Link> <div className="date">Published: {p?.dtpublished?.substr(0, 10)?.replace(/-00/g, '')}</div>
				</div>
			})}
	</details>
}

const RecentFeedback = (props: any) => {
	const { feedback } = props;
	if (!feedback?.numResults) return;
	return <details>
		<summary className="tagClickable">{pluralize(feedback.numResults, 'website comment', 'Recent')} <CommentBubble className="commentBubbleSimple"/></summary>
		{feedback.results.map((p: any, key: number) => {
			return <div key={key} className="listItem clickListItem">
				<b><Link href={feedbackURI2Pathname(p.uri)}>{p.uri}</Link></b> <span className="date">{dateDiff(p.dtcreated, '')}</span>
				<div className="listItem">
				<b>{p.subject}</b>
				<blockquote>
				{p.comments}
				<br />
				<b>{p.whence}</b>
				</blockquote>
				</div>
			</div>
		})}
	</details>
}

const RecentGigMedia = (props: any) => {
	const { gigmedia } = props;
	if (!gigmedia?.numResults) return;
	const results: Record<string, any[]> = {};
	gigmedia.results?.forEach((p: any) => {
		if (!results[p.type]) { results[p.type] = []; }
		results[p.type]?.push(p);
	});
	return <details>
		<summary className="tagClickable">{pluralize(gigmedia.numResults, 'gig image', 'Recently added')}</summary>
		{Object.keys(results)?.map((p: any, key: number) => {
			const items = results[p];
			return <div key={key} className="clickListItem">
				<details>
				<summary className="tagClickable">{pluralize(items?.length, p, 'Recently added')}</summary>
					{items?.map((p: any, key: number) => {
					const href = `https://v1.jazzbutcher.com/${p.image.trim()}`;
					const thumb = href.replace(/.jpg/, '_250.jpg');
					return <div key={key} className="listItem">
						<Link href={href}><Image src={thumb} width={250} height={250} alt={p.image_caption || p.type} /></Link>
						<div className="date"><Link href={`/gigs/${ts2URI(p.datetime)}`}>{dateDiff(p.datetime, '')}</Link></div>
						{/*// @ts-ignore */}
						<Attribution g={p.credit} d={p.credit_date} x={(p.image_caption) ? <span className="date">{p.image_caption}<br /></span> : ''} />
					</div>
					})}
				</details>
			</div>
		})}
	</details>
}

const RecentMedia = (props: any) => {
	const { media } = props;
	if (!media?.numResults) return;
	return <details>
		<summary className="tagClickable">{pluralize(media.numResults, 'audio', 'Recent')}</summary>
			{media.results.map((p: any, key: number) => {
				return <div key={key} className="listItem clickListItem">
					<div className="date">{dateDiff(p.dtcreated || p.added, '')}</div>
					<EmbedMedia data={p} />
				</div>
			})}
	</details>
}

const RecentReleases = (props: any) => {
	const { releases } = props;
	if (!releases?.numResults) return;
	return <details>
		<summary className="tagClickable">{pluralize(releases.numResults, 'release', 'Recently added')}</summary>
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
	return <Loading isLoading={isLoading} >
		<RecentGigMedia gigmedia={gigmedia} />
		<RecentPress press={press} />
		<RecentReleases releases={releases} />
		<RecentMedia media={media} />
		<RecentFeedback feedback={feedback} />
	</Loading>
}

export default RecentUpdates;
