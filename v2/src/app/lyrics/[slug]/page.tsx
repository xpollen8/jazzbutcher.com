"use client"

import { Suspense } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Tag from '@/components/Tag';
import MakeAlbumBlurb from '@/components/MakeAlbumBlurb';
//import ReleaseBlurb from '@/components/ReleaseBlurb';
import useLyric from '@/lib/useLyric';
import useReleases from '@/lib/useReleases';

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
const Lyrics = (props: any) => {
	return (
		<blockquote key={props?.key}>
			<div className="lyrics" dangerouslySetInnerHTML={{__html: props?.lyrics?.replace(/<br\/>/g, '') }}/>
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
					return MakeAlbumBlurb({ ...release, key });
				})}
			</blockquote>
		</div>
	)
}

const PatSays = (props: any) => {
	return (
		<div key={props?.key}>
		</div>
	)
}

const OthersSay = (props: any) => {
	return (
		<div key={props?.key}>
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
	return (
		<div key={props?.key}>
		</div>
	)
}


const Lyric = ({ params }: { params?: any }) => {
	const { data, isLoading, error } = useLyric(params?.slug);
	const { data: dataX, isLoading: isX, error: errorX } = useReleases();

	const song = data?.results[0];
	const releases = dataX?.albums;

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
