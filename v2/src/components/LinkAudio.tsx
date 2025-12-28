"use client"

import Link from 'next/link';
import Image from 'next/image';
import { parseImage, truncAt, autoLink, linkExternal, ts2URI } from '@/lib/utils';
import { AutoLinkSong } from '@/lib/defines';
import useRelease from '@/lib/useRelease';
import Loading from '@/components/Loading';

const LinkAudio = ({ lookup, version, parent, datetime, venue, city, title, comment, wav, mp3, url, artist, author, autolink = false, setnum, ordinal, children }: {
	title?: string
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
	collection?: string
	autolink?: boolean
	children?: React.ReactNode
}) => {
	const { data, isLoading } = useRelease(lookup);
	const release = data?.results && data?.results[0];
	title = title?.replace(/\\/g, '');	// get rid of HTDB backslashes
	const { thumb, image } = parseImage(release?.thumb);

	const fixDomain = (url: string) => url.replace('http://jazzbutcher.com/audio', 'https://v1.jazzbutcher.com/audio');

	return <Loading isLoading={isLoading} >
		<div className="audioPlayer listItem">
			<span className="audio_title">
			{(setnum && (typeof setnum === 'string') && !['set','NULL'].includes(setnum)) && <>{setnum?.replace('side', '')}{': '}</>}
			{(!!ordinal) && <span className='listenItemOrdinal'>{ordinal}.</span>}{' '}
			{(city?.length && venue?.length && datetime?.length && !datetime.match(/0000-00-00 00:00:00/)) && <>
				{(parent) && <Link href={parent}><b>{datetime?.substring(0, 10)}</b></Link>}
				{!(parent) && <Link href={ts2URI(datetime)}><b>{datetime?.substring(0, 10)}</b></Link>}
				{(city && venue) && <>{' '}{city}{', '}{venue}<br /></>}
			</>}
			<i>
				{(() => {
					if (url) {
						return <a href={url}>{title}</a>
					} else if (title?.endsWith('.html') || title?.includes(':')) {
						return title;
					} else if (autolink) {
						return title && autoLink(title, autolink)
					} else {
						return AutoLinkSong(title);
					}
				})()}
			</i>
			</span>
			{(artist) && <b>{artist}</b>} {(author && (typeof author === 'string') && !author.includes('NULL')) && <span className="smalltext pl-3"> ({author}) </span>} {(version) && <span className="smalltext pl-3"> ({version}) </span>}
			{(comment) && <span className="smalltext"> <i>(<span dangerouslySetInnerHTML={{ __html: comment }} /></i>)</span>}
			<div className="flex">
				{(lookup && thumb) && <>
					<Link href={release?.href}>
						<Image width={60} height={60} alt={lookup} src={thumb} />
					</Link>
				</> }
				<div className="w-full">
				{(mp3) &&
				<audio controls title={title} preload="none" className="audio_player">
					<source src={fixDomain(mp3)} type="audio/mpeg" />
					Your browser does not support the audio element.
				</audio>
				}
				{(wav) &&
				<audio controls title={title} preload="none" className="audio_player">
					<source src={fixDomain(wav)} type="audio/wav" />
					Your browser does not support the audio element.
				</audio>
				}
				</div>
			</div>
			{(lookup && thumb && release?.title) && <div className="smalltext">Taken from: &quot;{release?.title}&quot; ({release?.type})</div>}
			{children}
		</div>
	</Loading>
}

export default LinkAudio;
