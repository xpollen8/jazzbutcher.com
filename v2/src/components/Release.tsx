"use client"

import { Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { removeHTML, Source } from '@/components/GenericWeb';
import Tag from '@/components/Tag';
import ImageStrip from '@/components/ImageStrip';
import MakeAlbumBlurb from '@/components/MakeAlbumBlurb';
import MakeReleasePress from '@/components/MakeReleasePress';
import EmbedMedia from '@/components/EmbedMedia';
import useReleaseSongs from '@/lib/useReleaseSongs';
import { gab, expand, AutoLinkPlayer, AutoLinkSong } from '@/lib/defines';
import { truncAt, parseCaptionsSourcesEtc } from '@/lib/macros';

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
	bishopsez?: string
	downloads?: string
	notes?: string
	contribution?: string
	Agroove?: string
	Bgroove?: string
	CDring?: string
	audio?: string
	video?: string
	annotated?: string
	is_instrumental?: string
}

export type ReleaseTypeWithChildren = ReleaseType & { children?: string | React.ReactElement }

const PerformanceCredits = ({ who, album_credits, song_credits }: { who: string, album_credits?: any, song_credits?: any }) => {
	const hasAlbumCredits = (Object.keys(album_credits)?.length > 0);
	const hasSongCredits = (Object.keys(song_credits)?.length > 0);
	return (<>
		{AutoLinkPlayer(who)} {(hasAlbumCredits) && <>{' - '}{album_credits}</>}
		{(hasSongCredits) && <>
			{' - '}
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

const ReleaseNotes = ({ release }: { release: ReleaseTypeWithChildren }) => {
	if (release?.notes) {
		const notes = parseCaptionsSourcesEtc(release?.notes);
		if (notes?.length) {
			return (<>
				<Tag>Notes</Tag>
				<blockquote>
				{notes?.map(([ note, source, sourceurl, sourcedate ]: any, key: number) =>
					<div className="listItem" key={key}>
						<div dangerouslySetInnerHTML={{ __html: note }} />
						{(source) && <Source g={source} u={sourceurl} d={sourcedate} />}
					</div>
				)}
				</blockquote>
			</>)
		}
	}
}

const ReleaseLiner = ({ release }: { release: ReleaseTypeWithChildren }) => {
	if (release?.liner) {
		const [ liner, source, sourceurl, sourcedate ] = release.liner.split(';;');
		return (<>
			<Tag>Liner Notes</Tag>
			<blockquote>
				<div dangerouslySetInnerHTML={{ __html: liner }} />
				{(source) && <Source g={removeHTML(source)} u={sourceurl} d={sourcedate} />}
			</blockquote>
		</>)
	}
}

const ReleaseBishopSez = ({ release }: { release: ReleaseTypeWithChildren }) => {
	if (release?.bishopsez) {
		const [ bishopsez, source, sourceurl, sourcedate ] = release?.bishopsez.split(';;');
		return (<>
			<Tag>{gab} Says</Tag>
			<blockquote>
				<div dangerouslySetInnerHTML={{ __html: bishopsez }} />
				{(source) && <Source g={source} u={sourceurl} d={sourcedate} />}
			</blockquote>
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

const ReleaseDownloads = ({ release }: { release: ReleaseTypeWithChildren }) => {
	if (release?.downloads) {
		const downloads = parseCaptionsSourcesEtc(release?.downloads);
		if (downloads?.length) {
			return (<>
				<Tag>Downloadable Media</Tag>
				<blockquote>
				{downloads?.filter(([ file, caption]: any) => file)?.map(([ file, caption ]: any, key: number) => (<>
					<Link key={key} href={`https://jazzbutcher.com${file}`} className="border">{caption}</Link>
					<br />
				</>)
				)}
				</blockquote>
			</>)
		}
	}
}

const ReleaseAudio = ({ release }: { release: ReleaseTypeWithChildren }) => {
	if (release?.audio) {
		const audio = parseCaptionsSourcesEtc(release?.audio);
		if (audio?.length) {
			return (<>
				<Tag>Audio</Tag>
				{audio?.map(([ file, title, source, sourceurl, sourcedate ]: any, key: number) => (<>
					<EmbedMedia key={key} data={{ song: title, mediaurl: file, parent: release.href, comment: release.title }} />
					{(source) && <Source g={source} u={sourceurl} d={sourcedate} />}
				</>))}
			</>)
		}
	}
}

const ReleaseVideos = ({ release }: { release: ReleaseTypeWithChildren }) => {
	if (release?.video) {
		const videos = parseCaptionsSourcesEtc(release?.video);
		if (videos?.length) {
			return (<>
				<Tag>Videos</Tag>
				{videos?.map((v: any, key: number) => {
					const [ videourl, source, sourceurl, sourcedate, caption ] = v;
					const extensionLessURL = videourl?.startsWith('/') ? truncAt('.', videourl) : videourl;
					return (<div key={key}>
						<center>
							<EmbedMedia data={{ mediaurl: extensionLessURL, mediacredit: source, mediacrediturl: sourceurl, mediacreditdate: sourcedate }}>
								<br />{caption}
							</EmbedMedia>
						</center>
					</div>)
				})}
			</>)
		}
	}
}

const ReleaseImages = ({ release }: { release: ReleaseTypeWithChildren }) => {
	if (release?.images) {
		const images = parseCaptionsSourcesEtc(`${release?.thumb}$$${release?.images}`);
		if (images?.length) {
			return (<>
				<Tag>Images</Tag>
				<ImageStrip className="flex flex-wrap flex-grow border bg-slate-50 justify-center p-5" images={images} />
			</>)
		}
	}
}

const ReleaseDetails = ({ release }: { release: ReleaseTypeWithChildren }) => {

	const labels = {
		type: "Release Type",
		onalbum: "Single From Album",
		title: "Release Title",
		dtreleased: "Released",
		label: "Label",
		catalog: "Catalogue",
		media: "Media",
		country: "Country",
		dtrecorded: "Recorded",
		studio: "Studio",
		Agroove: "A Groove",
		Bgroove: "B Groove",
		CDring: "CD Ring Text",
	};

	return (<div>
		<Tag>Details</Tag>
		<blockquote>
			{Object.keys(labels).map((label: string, key: number) => {
				// @ts-ignore
				if (release[label]) { return <div key={key}> {labels[label]}: {expand(release[label], true)} </div> }
			})}
		</blockquote>
	</div>)
}

const Release = ({ release }: { release: ReleaseTypeWithChildren }, key: number) => {
	const lookup = release?.lookup ?? '';
	const { data, isLoading, error } = useReleaseSongs(lookup);
	const { results, credits } = data || {};
	return (
		<Suspense fallback=<>Loading...</>>
			{(!isLoading && release) && (<>
				<div key={key}><MakeAlbumBlurb {...release} /></div>
				<ReleaseDetails release={release} />
				<ReleaseDownloads release={release} />
				<ReleaseVideos release={release} />
				<ReleaseImages release={release} />
				{(release?.contribution) ? <ReleaseContribution release={release} /> : <ReleaseSongList songs={results} />}
				<ReleaseCredits credits={credits} />
				<ReleaseLiner release={release} />
				<ReleaseThanks release={release} />
				<ReleaseNotes release={release} />
				<ReleaseAudio release={release} />
				<ReleasePatSez release={release} />
				<ReleaseBishopSez release={release} />
				<MakeReleasePress lookup={lookup} />
				<p />
			</>)}
		</Suspense>
	)
}

export default Release;
