"use client"

import { Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { Source } from '@/components/GenericWeb';
import Tag from '@/components/Tag';
import MakeAlbumBlurb from '@/components/MakeAlbumBlurb';
import MakeReleasePress from '@/components/MakeReleasePress';
import useRelease from '@/lib/useRelease';
import { expand, AutoLinkPlayer, AutoLinkSong } from '@/lib/defines';

export type ReleaseType =  {
	type?: string
	href?: string
	title?: string
	thumb?: string
	images?: string
	blurb?: string
	dtreleased?: string
	dtrecorded?: string
	studio?: string
	liner?: string
	thanks?: string
	buy?: string
	project?: string
	lookup?: string
	label?: string
	catalog?: string
	media?: string
	country?: string
	credit?: string
	patsez?: string
	notes?: string
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

const ReleaseSongList = ({ songs }: { songs: any[] }) => {
	if (!songs?.length) return;
	return (<>
		<Tag>Songs</Tag>
		<blockquote>
			{songs?.map((title: any, key: number) => <div key={key}><i>{AutoLinkSong(title)}</i></div>)}
		</blockquote>
	</>)
}

const ReleaseCredits = ({ credits }: { credits: {[key: string]: any} }) => {
	const creds = Object.keys(credits); 
	if (!creds?.length) return;
	return (<>
		<Tag>Credits</Tag>
		<blockquote>
			{creds?.map((who: any, key: number) => {
				const { album_credits={}, song_credits={} } = credits[who];
				return (<div key={key}>
					<PerformanceCredits who={who} album_credits={album_credits} song_credits={song_credits} />
				</div>)
			})}
		</blockquote>
	</>)
}

const ReleaseContribution = ({ release }: { release: ReleaseTypeWithChildren }) => {
	if (release?.contribution) {
		return (<>
			<Tag>Contribution</Tag>
			<blockquote>
				{AutoLinkSong(release?.contribution)}
			</blockquote>
		</>)
	}
}

const ReleaseLiner = ({ release }: { release: ReleaseTypeWithChildren }) => {
	if (release?.liner) {
		return (<>
			<Tag>Liner Notes</Tag>
			<blockquote dangerouslySetInnerHTML={{ __html: release?.liner }} />
		</>)
	}
}

const ReleasePatSez = ({ release }: { release: ReleaseTypeWithChildren }) => {
	if (release?.patsez) {
		const [ patsez, source, sourceurl, sourcedate ] = release?.patsez.split(';;');
		return (<>
			<Tag>Pat Says</Tag>
			<blockquote>
				<div dangerouslySetInnerHTML={{ __html: patsez }} />
				{(source) && <Source g={source} u={sourceurl} d={sourcedate} />}
			</blockquote>
		</>)
	}
}

const ReleaseThanks = ({ release }: { release: ReleaseTypeWithChildren }) => {
	if (release?.thanks) {
		return (<>
			<Tag>Thanks</Tag>
			<blockquote dangerouslySetInnerHTML={{ __html: release?.thanks }} />
		</>)
	}
}

const parseReleaseImages = (str?: string) => {
	if (!str) return;
	const chunks = str.split('$$');
	const images = chunks?.filter((ch: any) => ch.length)?.map((ch: any) => {
		const [ image, caption, source, sourceurl, sourcedate ] = ch.split(';;');
		return { image, caption, source, sourceurl, sourcedate };
	});
	return images;
}

const ReleaseImages = ({ release }: { release: ReleaseTypeWithChildren }) => {
	if (release?.images) {
		const images = parseReleaseImages(`${release?.thumb}$$${release?.images}`);
		if (images?.length) {
			return (<>
				<Tag>Images</Tag>
				<blockquote className="flex flex-wrap flex-grow border bg-slate-50 justify-center">
				{images?.map(({ image, caption, source, sourceurl, sourcedate }: any, key: number) =>
					<Link key={key} href={`https://jazzbutcher.com${image}.jpg`}>
						<div className="m-2" style={{ maxWidth: '250px' }}>
							<Image
								alt={caption || 'album image'}
								width={250} height={250}
								src={`https://jazzbutcher.com${image}_250.jpg`}
							/>
							{(caption) && <><i>{caption}</i><br/></>}
							{(source) && <Source g={source} u={sourceurl} d={sourcedate} />}
						</div>
					</Link>
				)}
				</blockquote>
			</>)
		}
	}
}

const ReleaseDetails = ({ release }: { release: ReleaseTypeWithChildren }) => {

	const labels = {
		type: "Release Type",
		title: "Release Title",
		dtreleased: "Released",
		label: "Label",
		catalog: "Catalogue",
		media: "Media",
		country: "Country",
		dtrecorded: "Recorded",
		studio: "Studio",
		notes: "Notes",
	};

	return (<div className={`gig_${release?.project}`}>
		<Tag>Details</Tag>
		<blockquote>
			{Object.keys(labels).map((label: string, key: number) => {
				// @ts-ignore
				if (release[label]) { return <div key={key}> {labels[label]}: {expand(release[label])} </div> }
			})}
		</blockquote>
	</div>)
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
				<ReleaseDetails release={release} />
				<ReleaseImages release={release} />
				{(release?.contribution) ? <ReleaseContribution release={release} /> : <ReleaseSongList songs={songs} />}
				<ReleaseCredits credits={credits} />
				<ReleaseLiner release={release} />
				<ReleaseThanks release={release} />
				<ReleasePatSez release={release} />
				<MakeReleasePress lookup={lookup} />
			</>)}
		</Suspense>
	</>)
}

export default Release;
