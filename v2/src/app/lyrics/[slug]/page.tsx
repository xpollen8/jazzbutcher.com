"use client"

import { Suspense } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Tag from '@/components/Tag';
import ImageStrip from '@/components/ImageStrip';
import EmbedMedia from '@/components/EmbedMedia';
import MakeAlbumBlurb from '@/components/MakeAlbumBlurb';
import { Attribution } from '@/components/GenericWeb';
import useLyric from '@/lib/useLyric';
import { truncAt, parseCaptionSourceEtc, parseCaptionsSourcesEtc } from '@/lib/macros';

const	LyricVideo = ({ video }: any) => {
	if (!video) return;
	const videos = parseCaptionsSourcesEtc(video);

	return <div className="clear_float imageStrip drop-shadow-md" style={{ width: '263px' }}>
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
	</div>;
}

const	LyricAudio = ({ mp3 }: any) => {
	if (!mp3) return;
	return <EmbedMedia data={{ mediaurl: mp3 }} />
}

const	LyricMedia = ({ media }: any) => {
	if (!media) return;
	const [ media_href, media_caption, media_source, media_sourceurl, media_sourcedate ] = parseCaptionsSourcesEtc(media) || [];
	return <>MEDIA</>;
}

const	LyricImages = ({ images }: any) => <ImageStrip className="drop-shadow-md imageStrip clear_float text-center" images={parseCaptionsSourcesEtc(images, true)} />;

const Lyrics = (props: any) => {
	const { mp3, video, media, images, lyrics, key } = props;
	return (
		<blockquote key={key}>
			<LyricVideo video={video} />
			<LyricImages images={images} />
			<LyricMedia media={media} />
			<LyricAudio mp3={mp3} />
			<div className="lyrics" dangerouslySetInnerHTML={{__html: lyrics?.replace(/<br\/>/g, '') }}/>
			<div className="clear_float" />
		</blockquote>
	)
}

const FoundOn = (song: any, key: number, releases: any) =>
	<div key={key}>
		<Tag>Found On</Tag>
		<blockquote>
			{releases.map(MakeAlbumBlurb)}
		</blockquote>
	</div>

const PatSays = (props: any) => {
	const { pat_says } = props;
	const comments = parseCaptionsSourcesEtc(pat_says) || [];
	return <>
		<Tag>Pat Says</Tag>
		{comments?.map((c: any, key: number) => {
		const [ body, media_source, media_sourceurl, media_sourcedate ] = c;
		return <blockquote key={key} className="annotation">
			<div dangerouslySetInnerHTML={{ __html: body }} />
			<br />
			<Attribution g={media_source} u={media_sourceurl} d={media_sourcedate} />
		</blockquote>
	})}
	</>
}

// TODO: 'annotated', 'is_instrumental', 'images'

const OthersSay = (props: any) => {
	const { others_say } = props;
	return (
		<div key={props?.key}>
			{others_say}
		</div>
	)
}

const Tablature = (props: any) => {
	return (
		<div key={props?.key}>
		</div>
	)
}

const LiveStats = (props: any) => {
	return (
		<div key={props?.key}>
		</div>
	)
}

const Media = (props: any) => {
	const { media } = props;
	return (
		<div key={props?.key}>
			{media}
		</div>
	)
}

const Audio = (props: any) => {
	const { audio } = props;
	return (
		<div key={props?.key}>
			{audio}
		</div>
	)
}

const Lyric = ({ params }: { params?: any }) => {
	const { data, isLoading, error } = useLyric(params?.slug);
	const { lyrics, foundon } = data || {};
	const song = lyrics?.results[0];

	const tabs = [
			{ label: 'Lyrics', lookup: (song: any) => { return song?.lyrics }, func: Lyrics },
			{ label: 'Pat Says', lookup: (song: any) => (song?.pat_says), func: PatSays },
			{ label: 'Others Say', lookup: (song: any) => (song?.others_say), func: OthersSay },
			{ label: 'Tablature', lookup: (song: any) => (song?.tablature), func: Tablature },
			{ label: 'Live Stats', lookup: (song: any) => ({}), func: LiveStats },
			{ label: 'Media', lookup: (song: any) => (song?.media), func: Media },
			{ label: 'Audio', lookup: (song: any) => (song?.mp3), func: Audio },
	];

	return (<><Suspense fallback=<>Loading...</> >
		{(!isLoading && song) && (() => {
			return (<>
				<Header project={song?.project} section="lyrics" title={song?.title} />
				<Tag>{song?.title}</Tag>
				{tabs.filter(t => t.lookup(song))?.map((t: any, key: number) => t?.func(song, key))}
				{FoundOn(song, 999, foundon)}
			</>)
		})()}
		<Footer />
	</Suspense></>)
}

export default Lyric;
