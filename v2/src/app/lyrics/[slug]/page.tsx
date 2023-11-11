"use client"

import { Suspense } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Tag from '@/components/Tag';
import ImageStrip from '@/components/ImageStrip';
import { GigSearchResults } from '@/components/GigSearch';
import EmbedMedia from '@/components/EmbedMedia';
import MakeAlbumBlurb from '@/components/MakeAlbumBlurb';
import { removeHTML, Credit, Attribution } from '@/components/GenericWeb';
import useLyric from '@/lib/useLyric';
import { ts2URI, parseCredit, parseYear, truncAt, parseCaptionSourceEtc, parseCaptionsSourcesEtc } from '@/lib/utils';

const	LyricVideo = ({ video }: any) => {
	if (!video) return;
	const videos = parseCaptionsSourcesEtc(video);

	return <div className="imageStrip">
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

const	LyricAudio = ({ mp3, caption }: any) => {
	if (mp3) {
		const mp3s = parseCaptionsSourcesEtc(mp3);
		return mp3s?.map((m: any, key: number) => {
			const [ mediaurl, mediacredit, mediacrediturl, mediacreditdate, media_caption ] = m;
			return <EmbedMedia key={key} data={{ mediaurl, title: media_caption || removeHTML(caption), mediacredit, mediacrediturl, mediacreditdate }} />
		})
	}
	//return foundon?.filter((f: any) => f.media !== 'NULL')?.map((f: any) => <EmbedMedia data={{ mediaurl: f.media, lookup: f.lookup }} />)
}

const	LyricMedia = ({ media }: any) => {
	if (!media) return;
	const [ media_href, media_caption, media_source, media_sourceurl, media_sourcedate ] = parseCaptionsSourcesEtc(media) || [];
	return <>MEDIA</>;
}

const	LyricImages = ({ images }: any) => <ImageStrip images={parseCaptionsSourcesEtc(images, true)} />;

const Lyrics = (props: any, foundon: any[]) => {
	const { mp3, video, media, images, lyrics, key, caption } = props;
	return (
		<>
			<LyricImages images={images} />
			<LyricVideo video={video} />
			<LyricAudio mp3={mp3} caption={caption} />
			<LyricMedia media={media} />
			<blockquote className="listItem">
				<div dangerouslySetInnerHTML={{__html: lyrics }}/>
			</blockquote>
		</>
	)
}

const FoundOn = (releases: any) =>
	!!(releases?.length) && <>
		<Tag>Found On</Tag>
		<blockquote className="listItem">
			{releases?.sort((a: any, b: any) => parseYear(b.dtreleased) - parseYear(a.dtreleased))?.map(MakeAlbumBlurb)}
		</blockquote>
	</>

const XSays = (comments: any[], title: string) => (comments?.length) && <>
	<Tag>{title}</Tag>
	{comments?.map((c: any, key: number) => {
		const [ body, media_source, media_sourceurl, media_sourcedate ] = c;
		return <blockquote key={key} className="annotation">
			<div dangerouslySetInnerHTML={{ __html: body }} />
			<br />
			<Attribution g={removeHTML(media_source)} u={media_sourceurl} d={media_sourcedate} />
		</blockquote>
	})}
</>

const PatSays = (props: any) => XSays(parseCaptionsSourcesEtc(props?.pat_says) || [], 'Pat Says');

const OthersSay = (props: any) => XSays(parseCaptionsSourcesEtc(props?.others_say) || [], 'Others Say');

const Tablature = (props: any) => {
	const [ g, u, d ] = props?.tablature_credit?.split(';;');
	return (
		<div key={props?.key}>
			<Tag>Tablature</Tag>
			<pre>
				<blockquote dangerouslySetInnerHTML={{ __html: props?.tablature }} />
			</pre>
			<blockquote>
				{(g) && <Credit g={g} u={u} d={d} />}
			</blockquote>
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

const exists = (str?: string) => (str && str?.length && str !== ';;;;') ? str : null;

const Medias = (props: any) => {
	const { medias } = props;
	if (!medias?.results?.length) return;
	return (
		<>
		<Tag>Recorded Performances</Tag>
		<blockquote>
			{medias?.results?.map((p: any, key: number) => {
				const { author,
					collection,
					comment,
					credit,
					datetime,
					dtcreated,
					href,
					images,
					lookup,
					media_id,
					mp3,
					name,
					ordinal,
					//parent,
					project,
					subtype,
					type,
				} = p;
				const { credit: mediacredit, crediturl: mediacrediturl, creditdate: mediacreditdate } = credit?.includes(';;') && parseCredit(credit);
				const { credit: venue, crediturl: city, creditdate: country } = collection?.includes(';;') && parseCredit(collection);
				const parent = (!datetime.match(/0000-00-00 00:00:00/)) ? `/gigs/${ts2URI(datetime)}` : undefined;
				return <div key={key} className={(type === 'video') ? 'listItem' : ''}><EmbedMedia data={{ mediaurl: (!href.includes('.html') && exists(href)) || exists(mp3), mediacredit, mediacrediturl, mediacreditdate, song: name, comment: exists(comment) ? comment : (!venue) ? collection : '', venue, city, datetime, parent }} /></div>
				})}
		</blockquote>
		</>
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

const LiveAudio = (props: any) => {
	const { live } = props;
	return live && (
		<>
		<Tag>{live?.length} Live Performances</Tag>
		<blockquote>
			<GigSearchResults results={{ results: live }} preventAutoExpand={true} />
		</blockquote>
		</>
	)
}

const Lyric = ({ params }: { params?: any }) => {
	const { data, isLoading, error } = useLyric(params?.slug);
	const { lyrics, live, releaseAudio, releaseVideo, foundon, medias } = data || {};
	const song = {
		...lyrics?.results[0],
		medias,
		live: live?.numResults ? live?.results : undefined,
		releaseAudio: releaseAudio?.numResults ? releaseAudio?.results : undefined,
		releaseVideo: releaseVideo?.numResults ? releaseVideo?.results : undefined,
	};

	const tabs = [
			{ label: 'Lyrics', lookup: (song: any) => { return song?.lyrics }, func: Lyrics },
			{ label: 'Pat Says', lookup: (song: any) => (song?.pat_says), func: PatSays },
			{ label: 'Others Say', lookup: (song: any) => (song?.others_say), func: OthersSay },
			{ label: 'Tablature', lookup: (song: any) => (song?.tablature), func: Tablature },
			{ label: 'Live Stats', lookup: (song: any) => ({}), func: LiveStats },
			{ label: 'Live Performances', lookup: (song: any) => (song.live), func: LiveAudio },
			{ label: 'Audio', lookup: (song: any) => (song?.mp3 || song.live || song.releaseAudio), func: Audio },
			{ label: 'Media', lookup: (song: any) => (song?.media), func: Media },
			{ label: 'Medias', lookup: (song: any) => (song?.medias), func: Medias },
	];

	return (<><Suspense fallback=<>Loading...</> >
		{(!isLoading && song) && (() => {
			return (<>
				<Header project={song?.project} section="lyrics" title={song?.title} />
				<main>
					<Tag>{song?.title}</Tag>
					{tabs.filter(t => t.lookup(song))?.map((t: any, key: number) => <div key={key}>{t?.func(song, foundon, medias)}</div>)}
					{FoundOn(foundon)}
				</main>
			</>)
		})()}
		<Footer />
	</Suspense></>)
}

export default Lyric;
