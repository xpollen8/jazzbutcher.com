"use client"

import { Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { truncAt, autoLink, linkExternal } from '@/lib/utils';
import { AutoLinkSong } from '@/lib/defines';
import useRelease from '@/lib/useRelease';

const LinkAudio = ({ lookup, version, parent, datetime, venue, city, title, comment, wav, mp3, url, artist, author, autolink = false, setnum, ordinal, children }: {
	title: string
	setnum?: string
	ordinal?: string
	lookup?: string
	version?: string
	parent?: string
	datetime?: string
	venue?: string
	city?: string
	comment?: string
	artist?: string
	mp3?: string
	wav?: string
	url?: string
	author?: string | React.ReactNode
	autolink?: boolean
	children?: React.ReactNode
}) => {
	const rel = useRelease(lookup);
	const release = rel && rel?.data && rel?.data?.results && rel?.data?.results[0];
	title = title?.replace(/\\/g, '');	// get rid of HTDB backslashes
	return <Suspense fallback=<>Loading...</> >
		<div className="audioPlayer">
			<span className="audio_title">
			{(setnum && (typeof setnum === 'string') && !['set','NULL'].includes(setnum)) && <>{setnum?.replace('side', ': ')}</>}
			{(!!ordinal) && <span className='listenItemOrdinal'>{ordinal}.</span>}{' '}
			{(city?.length && venue?.length && datetime?.length && !datetime.match(/0000-00-00 00:00:00/)) && <>
				{(parent) && <Link href={parent}><b>{datetime?.substring(0, 10)}</b></Link>}
				{!(parent) && <b>{datetime?.substring(0, 10)}</b>}
				{(city && venue) && <>{' '}{city}{', '}{venue}<br /></>}
			</>}
			<i>
				{(() => {
					if (url) {
						return <a href={url}>{title}</a>
					} else if (title?.endsWith('.html') || title?.includes(':')) {
						return title;
					} else if (autolink) {
						return autoLink(title, autolink)
					} else {
						return AutoLinkSong(title);
					}
				})()}
			</i>
			</span>
			{(artist) && <b>{artist}</b>} {(author && !author.includes('NULL')) && <span className="smalltext pl-3"> ({author}) </span>} {(version) && <span className="smalltext pl-3"> ({version}) </span>}
			{(comment) && <span className="smalltext"> <i>(<span dangerouslySetInnerHTML={{ __html: comment }} /></i>)</span>}
			{(release?.thumb) && <div className="-mt-1 ml-2 smalltext">From: &quot;{release?.title}&quot; ({release?.type})</div>}
			<div className="flex">
				{(lookup && !rel?.isLoading && release && release?.thumb) && <>
					<Link href={release?.href}>
						<Image width={60} height={60} alt={lookup} src={`https://v1.jazzbutcher.com${truncAt(';;', release?.thumb)}_250.jpg`} />
					</Link>
				</> }
				<div className="w-full">
				{(mp3) &&
				<audio controls title={title} preload="none" className="audio_player">
					<source src={mp3} type="audio/mpeg" />
					Your browser does not support the audio element.
				</audio>
				}
				{(wav) &&
				<audio controls title={title} preload="none" className="audio_player">
					<source src={wav} type="audio/wav" />
					Your browser does not support the audio element.
				</audio>
				}
				</div>
			</div>
			{children}
		</div>
	</Suspense>
}

export default LinkAudio;
