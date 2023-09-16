"use client"

import { Suspense } from 'react';

import MakeAlbumBlurb from './MakeAlbumBlurb';
import useRelease from '@/lib/useRelease';
import { AutoLinkPlayer, AutoLinkSong } from '@/lib/defines';

export type ReleaseType =  {
	type?: string
	href?: string
	title?: string
	thumb?: string
	blurb?: string
	dtreleased?: string
	dtrecorded?: string
	studio?: string
	liner?: string
	buy?: string
	project?: string
	lookup?: string
	label?: string
	catalog?: string
	media?: string
	country?: string
	credit?: string
	contribution?: string
}

export type ReleaseTypeWithChildren = ReleaseType & { children?: string | React.ReactElement }

const PerformanceCredits = ({ who, album_credits, song_credits }: { who: string, album_credits?: any, song_credits?: any }) => {
	const hasAlbumCredits = (Object.keys(album_credits)?.length > 0);
	const hasSongCredits = (Object.keys(song_credits)?.length > 0);
	return (<>
		{AutoLinkPlayer(who)}{' - '} {(hasAlbumCredits) && <>{album_credits}</>}
		{(hasAlbumCredits && hasSongCredits) && <>{' - '}</>}
		{(hasSongCredits) && <>
			{Object.keys(song_credits).map((song: string, key: number) => {
				return <span key={key}>
					{(key > 0) && <>{' - '}</>}
					{song_credits[song].join(', ')} on {song}
				</span>
			})}
		</> }
	</>)
}

const Release = ({ release }: { release: ReleaseTypeWithChildren }, key: number) => {
	const lookup = release?.lookup ?? '';
	const { data, isLoading, error } = useRelease(lookup);
	const { results, credits } = data || {};
	const songs: any[] = results;
	return (<>
		<div key={key}><MakeAlbumBlurb {...release} /></div>
		<Suspense fallback=<>Loading...</>>
			{(!isLoading) && (<>
				<blockquote>
					{songs?.map((title: any, key: number) => <div key={key}><i>{AutoLinkSong(title)}</i></div>)}
				</blockquote>
				<hr />
				{Object.keys(credits)?.map((who: any, key: number) => {
					const { album_credits={}, song_credits={} } = credits[who];
					return (<div key={key}>
						<PerformanceCredits who={who} album_credits={album_credits} song_credits={song_credits} />
					</div>)
				})}
			</>)}
		</Suspense>
	</>)
}

export default Release;
