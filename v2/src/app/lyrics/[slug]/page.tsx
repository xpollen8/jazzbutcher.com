"use client"

import { Suspense } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Tag from '@/components/Tag';
import ImageStrip from '@/components/ImageStrip';
import EmbedMedia from '@/components/EmbedMedia';
import MakeAlbumBlurb from '@/components/MakeAlbumBlurb';
//import ReleaseBlurb from '@/components/ReleaseBlurb';
import useLyric from '@/lib/useLyric';
import useReleases from '@/lib/useReleases';
import { truncAt, parseCaptionsSourcesEtc } from '@/lib/macros';

/*
      project: '',
      href: 'sea_madness.html',
      title: 'Sea Madness',
      mp3: '',
      mp4: '',
      embed_link: '',
      caption: '',
      found_on: 'highest',
      pat_says: '',
      others_say: '',
      credits: '',
      tablature: '',
      tablature_credit: '',

 ${begTab(Lyrics)}
 ${begTab(Found On)}
 ${begTab(Pat Says)}
 ${begTab(Others Say)}
 ${begTab(Tablature)}
 ${begTab(Live Stats)}
 ${begTab(Media)}

*/
const	LyricVideo = ({ video }: any) => {
	if (!video) return;
	const videos = parseCaptionsSourcesEtc(video);

	return <div className="clear_float imageStrip" style={{ width: '263px' }}>
		{videos?.map((v: any, key: number) => {
			const [ videourl, source, sourceurl, sourcedate, caption ] = v;
			const extensionLessURL = videourl?.startsWith('/') ? truncAt('.', videourl) : videourl;
			return (<div key={key}>
				<EmbedMedia data={{ mediaurl: extensionLessURL, mediacredit: source, mediacrediturl: sourceurl }}>
					{caption}
				</EmbedMedia>
			</div>)
		})}
	</div>;
}

const	LyricMedia = ({ media }: any) => {
	if (!media) return;
	const [ media_href, media_caption, media_source, media_sourceurl, media_sourcedate ] = parseCaptionsSourcesEtc(media);
	return <>MEDIA</>;
}

const	LyricImages = ({ images }: any) => <ImageStrip className="imageStrip clear_float" images={parseCaptionsSourcesEtc(images, true)} />;

const Lyrics = (props: any) => {
	const { video, media, images, lyrics, key } = props;
	return (
		<blockquote key={key}>
			<LyricVideo video={video} />
			<LyricImages images={images} />
			<LyricMedia media={media} />
			<div className="lyrics" dangerouslySetInnerHTML={{__html: lyrics?.replace(/<br\/>/g, '') }}/>
		</blockquote>
	)
}

const FoundOn = (song: any, key: number, releases: any) => {
	const foundon = song.found_on?.split("..");	// sex .. bath .. blue, etc
	return (
		<div key={key}>
			<Tag>Found On</Tag>
			<blockquote>
				{/* WHY NOT? foundon.map((props: any) => { console.log("P", props); return ReleaseBlurb(props) }) */}
				{foundon.map((lookup: string, key: number) => {
					const release = releases?.find((a: any) => a.lookup === lookup?.trim());
					return MakeAlbumBlurb(release, key);
				})}
			</blockquote>
		</div>
	)
}

const PatSays = (props: any) => {
	const { pat_says } = props;
	return (
		<div key={props?.key}>
			{pat_says}
		</div>
	)
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


const Lyric = ({ params }: { params?: any }) => {
	const { data, isLoading, error } = useLyric(params?.slug);
	const { data: dataX, isLoading: isX, error: errorX } = useReleases();

	const song = data?.results[0];
	const releases = dataX?.results;

	const tabs = [
			{ label: 'Lyrics', lookup: (song: any) => { return song?.lyrics }, func: Lyrics },
			{ label: 'Found On', lookup: (song: any) => (song?.found_on), func: (song: any, key: number) => FoundOn(song, key, releases) },
			{ label: 'Pat Says', lookup: (song: any) => (song?.pat_says), func: PatSays },
			{ label: 'Others Say', lookup: (song: any) => (song?.others_say), func: OthersSay },
			{ label: 'Tablature', lookup: (song: any) => (song?.tablature), func: Tablature },
			{ label: 'Live Stats', lookup: (song: any) => ({}), func: LiveStats },
			{ label: 'Media', lookup: (song: any) => (song?.media), func: Media },
	];

	return (<><Suspense fallback=<>Loading...</> >
		{(!isLoading && !isX) && (() => {
			return (<>
				<Header project={song?.project} section="lyrics" title={song?.title} />
				<Tag>{song?.title}</Tag>
				{tabs.filter(t => t.lookup(song))?.map((t: any, key: number) => t?.func(song, key))}
			</>)
		})()}
		<Footer />
	</Suspense></>)
}

export default Lyric;
