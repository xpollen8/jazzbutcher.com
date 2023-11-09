"use client"

import { Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { removeHTML, Attribution, Source } from '@/components/GenericWeb';
import Tag from '@/components/Tag';
import ImageStrip from '@/components/ImageStrip';
import MakeReleasePress from '@/components/MakeReleasePress';
import EmbedMedia from '@/components/EmbedMedia';
import useReleaseSongs from '@/lib/useReleaseSongs';
import { gab, expand, AutoLinkPlayer, AutoLinkSong } from '@/lib/defines';
import { linkExternal, parseDomain, truncAt, parseCaptionsSourcesEtc } from '@/lib/utils';

export type ReleaseType =  {
	[key: string]: any;	// make indexable as hash
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
	source?: string
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
	collaboration?: string
	dtadded?: string
	inPage?: boolean
}

export type ReleaseTypeWithChildren = ReleaseType & { children?: string | React.ReactElement }

const PerformanceCredits = ({ who, album_credits, song_credits }: { who: string, album_credits?: any, song_credits?: any }) => {
	const hasAlbumCredits = (Object.keys(album_credits)?.length > 0);
	const hasSongCredits = (Object.keys(song_credits)?.length > 0);
	return (<>
		• {AutoLinkPlayer(who)} {(hasAlbumCredits) && <>{' - '}{album_credits}</>}
		{(hasSongCredits) && <>
			{' - '}
			{Object.keys(song_credits).map((song: string, key: number) => {
				const songs = song.split('$$');
				const linkedSongs = songs.map((s: string, i: number) => <span key={i}>{AutoLinkSong(s)}</span>);
				return <span key={key}>
					{(key > 0) && <>{' - '}</>}
					{song_credits[song].join(', ')}: {linkedSongs.map((l: any, i: number) => <span key={i}>{l}{(i < linkedSongs.length - 1) ? ', ' : ''}</span>)}
				</span>
			})}
		</> }
	</>)
}

const ReleaseSongList = ({ songs }: { songs: any[] }) => {
	if (!songs?.length) return;
	return (<>
		<Tag>Tracks</Tag>
		<blockquote>
			{songs?.sort((a: any, b: any) => a.type.localeCompare(b.type))?.map((item: any, key: number) => {
				if (item?.author === 'NULL') item.author = null;
				if (item?.media === 'NULL') item.media = null;
				if (item?.version === 'NULL') item.version = null;
				return <div key={key}>
					{(item?.media?.length) ?
						<div style={{ marginLeft: '-7px' }}>
						<EmbedMedia data={{ mediaurl: item.media, ...item, setnum: item?.type, autolink: true }} />
						</div>
					:
					<>
					{(!['set','NULL'].includes(item?.type)) && <>{item.type.replace('side', '')}{': '}</>}
						<span>{item?.ordinal}.</span> <i>{AutoLinkSong(item?.title)}</i> {(item?.author) && <span className="date">({item?.author})</span>} {(item?.version) && <span className="date">({item?.version})</span>} {(item?.variant) && <span className="date">({item?.variant})</span>}
					</>
					}
				</div>
			})}
		</blockquote>
	</>)
}

const ReleaseCredits = ({ credits }: { credits: {[key: string]: any} }) => {
	const creds = credits && Object.keys(credits); 
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

const parseSource = (str: string, className: string = 'listItem') => {
	const notes = parseCaptionsSourcesEtc(str);
	if (notes?.length) {
		return (<>
			{notes?.map(([ note, source, sourceurl, sourcedate ]: any, key: number) =>
				<span className={className} key={key}>
					<span dangerouslySetInnerHTML={{ __html: note }} />
					{(source) && <><p /><Source g={source} u={sourceurl} d={sourcedate} /></>}
				</span>
			)}
		</>)
	}
}

const ReleaseNotes = ({ release }: { release: ReleaseTypeWithChildren }) => {
	if (release?.notes || release?.blurb) {
		return (<>
			<Tag>Notes</Tag>
			<blockquote>
				{parseSource(release?.notes + '$$' + release?.blurb, 'block')}
			</blockquote>
		</>)
	}
}

const ReleaseLiner = ({ release }: { release: ReleaseTypeWithChildren }) => {
	if (release?.liner) {
		const [ liner='', source, sourceurl, sourcedate ] = release.liner.split(';;');
		return (<>
			<Tag>Liner Notes</Tag>
			<blockquote>
				<div dangerouslySetInnerHTML={{ __html: liner }} />
				{(source) && <Attribution g={removeHTML(source)} u={sourceurl} d={sourcedate} />}
			</blockquote>
		</>)
	}
}

const ReleaseBishopSez = ({ release }: { release: ReleaseTypeWithChildren }) => {
	if (release?.bishopsez) {
		const [ bishopsez='', source, sourceurl, sourcedate ] = release?.bishopsez.split(';;');
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
		const [ patsez='', source, sourceurl, sourcedate ] = release?.patsez.split(';;');
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
			<blockquote dangerouslySetInnerHTML={{ __html: release.thanks }} />
		</>)
	}
}

const ReleaseDownloads = ({ release }: { release: ReleaseTypeWithChildren }) => {
	if (release?.downloads) {
		const downloads = parseCaptionsSourcesEtc(release.downloads);
		if (downloads?.length) {
			return (<>
				<Tag>Downloadable Media</Tag>
				<blockquote>
				{downloads?.filter(([ file, caption]: any) => file)?.map(([ file, caption ]: any, key: number) => (<div key={key}>
					<Link href={`https://v1.jazzbutcher.com${file}`} className="border">{caption}</Link>
					<br />
				</div>)
				)}
				</blockquote>
			</>)
		}
	}
}

const ReleaseAudio = ({ release }: { release: ReleaseTypeWithChildren }) => {
	if (release?.audio) {
		const audio = parseCaptionsSourcesEtc(release.audio);
		if (audio?.length) {
			return (<>
				<Tag>Audio</Tag>
				<blockquote>
				{audio?.map(([ file, song, credits ]: any, key: number) => {
					const [ title, ordinal, version ] = song?.split('::');
					//const people = credits?.split('^^') || [];
					return <EmbedMedia key={key} data={{ ...release, song: title, mediaurl: file, parent: release.href, version, ordinal }} />
				})}
				</blockquote>
			</>)
		}
	}
}

const ReleaseVideos = ({ release }: { release: ReleaseTypeWithChildren }) => {
	if (release?.video) {
		const videos = parseCaptionsSourcesEtc(release.video);
		if (videos?.length) {
			return (<>
				<Tag>Videos</Tag>
				<blockquote className="flex flex-wrap">
				{videos?.map((v: any, key: number) => {
					const [ videourl, source, sourceurl, sourcedate, caption ] = v;
					const extensionLessURL = videourl?.startsWith('/') ? truncAt('.', videourl) : videourl;
					return (<div key={key}>
							<div className="w-80 float-right p-1">
								<EmbedMedia data={{ mediaurl: extensionLessURL, mediacredit: source, mediacrediturl: sourceurl, mediacreditdate: sourcedate }} />
							</div>
							{(caption) && <blockquote dangerouslySetInnerHTML={{ __html: caption }} />}
					</div>)
				})}
				</blockquote>
			</>)
		}
	}
}

const ReleaseImages = ({ release }: { release: ReleaseTypeWithChildren }) => {
	if (release?.images || release?.thumb) {
		const images = parseCaptionsSourcesEtc(release.thumb + '$$' + release.images);
		if (images?.length) {
				return <ImageStrip images={images} />
		}
	}
}

const ReleaseDetails = ({ release }: { release: ReleaseTypeWithChildren }) => {
	type LabelsType = {
		[key: string]: any;	// make indexable as hash
	}
	const labels: LabelsType = {
		type: "Release Type",
		onalbum: "Single From Album",
		collaboration: "Collaborateurs",
		project: "Side Project",
		//title: "Release Title",
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
		source: "Source",
	};

	const doBuy = ({ buy }: { buy?: string }) => (buy) && (<>
		<div className="album_purchase"> {linkExternal(buy, 'Purchase Now')} </div>
		<span className="smalltext"> ( {parseDomain(buy)} ) </span>
	</>)

	const doIt = (label?: string) => {
		if (label && typeof label !== 'string') { return label };
		return label?.split(',')?.map((l: string, key: number, mx: string[]) => <span key={key}>{expand(l, true)}{(key !== mx?.length - 1) && <>{', '}</>}</span>);
	}
	return (<div>
		<Tag>
			<span className="text-2xl" dangerouslySetInnerHTML={{ __html: release?.title || '' }} />
			{(release.collaboration || release.project) &&
				<span className="text-md">
					{(release.collaboration) && <>(collaboration: {release.collaboration})</>}
					{(release.project) && <>(project: {release.project})</>}
				</span>
			}
			{doBuy(release)}
		</Tag>
		<div className="listItem" style={{ border: '1px solid', background: '#eeffee' }}>
			<div className="flex flex-wrap gap-1">
			{Object.keys(labels).map((label: string, key: number) => {
				if (release[label]) {
					let val = release[label];
					let source;
					if (label === 'source' || release[label]?.includes(';;')) {
						const parsed = parseCaptionsSourcesEtc(release[label]) || [];
						const [ name, url, date ] = parsed[0] || [];
						val = '';
						source = <Attribution g={name} u={url} d={date} />
					}
					return <span key={key} className="break-keep outline outline-1 outline-cyan-500 m-1"> <b>{labels[label]}</b> {doIt(val)}{source} </span>
				}
			})}
			</div>
		</div>
	</div>)
}

const Release = ({ release }: { release: ReleaseTypeWithChildren }, key: number) => {
	const lookup = release?.lookup ?? '';
	const { data, isLoading, error } = useReleaseSongs(lookup);
	const { songs, credits } = data || {};
	return (
		<Suspense fallback=<>Loading...</>>
			{(!isLoading && songs) && (<>
				<ReleaseImages release={release} />
				<ReleaseDetails release={release} />
				<ReleaseNotes release={release} />
				<ReleaseSongList songs={songs?.results} />
				<ReleaseDownloads release={release} />
				<ReleaseCredits credits={credits} />
				<ReleaseLiner release={release} />
				<ReleaseThanks release={release} />
				<ReleaseAudio release={release} />
				<ReleasePatSez release={release} />
				<ReleaseBishopSez release={release} />
				<ReleaseVideos release={release} />
				<MakeReleasePress lookup={lookup} />
				<p />
			</>)}
		</Suspense>
	)
}

export default Release;
