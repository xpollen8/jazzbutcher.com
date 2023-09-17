"use client"

import { Suspense } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Tag from '@/components/Tag';
import MakeAlbumBlurb from '@/components/MakeAlbumBlurb';
import { releaseByLookup } from '@/lib/macros';
import useLyric from '@/lib/useLyric';

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
const Lyrics = async (props: any) => {
	return (
		<blockquote key={props?.key}>
			<div className="lyrics" dangerouslySetInnerHTML={{__html: props?.lyrics?.replace(/<br\/>/g, '') }}/>
		</blockquote>
	)
}

const FoundOn = async (props: any) => {
	const releases = props.found_on?.split("..");	// sex .. bath .. blue, etc
	return (
		<div key={props?.key}>
			<Tag>Found On</Tag>
			<blockquote>
			{releases.map(async (lookup: string, key: number) => {
				const album = await releaseByLookup(lookup?.trim());
				return album && MakeAlbumBlurb(album, key)
				}
			)}
			</blockquote>
		</div>
	)
}

const PatSays = async (props: any) => {
	return (
		<div key={props?.key}>
		</div>
	)
}

const OthersSay = async (props: any) => {
	return (
		<div key={props?.key}>
		</div>
	)
}

const Tablature = async (props: any) => {
	return (
		<div key={props?.key}>
		</div>
	)
}

const LiveStats = async (props: any) => {
	return (
		<div key={props?.key}>
		</div>
	)
}

const Media = async (props: any) => {
	return (
		<div key={props?.key}>
		</div>
	)
}


const Lyric = ({ params }: { params?: any }) => {
	const { data, isLoading, error } = useLyric(params?.slug);

	const lyric = data?.results[0];

	const tabs = [
			{ label: 'Lyrics', lookup: (data: any) => { return data?.lyrics }, func: Lyrics },
			{ label: 'Found On', lookup: (data: any) => (data?.found_on), func: FoundOn },
			{ label: 'Pat Says', lookup: (data: any) => (data?.pat_says), func: PatSays },
			{ label: 'Others Say', lookup: (data: any) => (data?.others_say), func: OthersSay },
			{ label: 'Tablature', lookup: (data: any) => (data?.tablature), func: Tablature },
			{ label: 'Live Stats', lookup: (data: any) => ({}), func: LiveStats },
			{ label: 'Media', lookup: (data: any) => (data?.media), func: Media },
	];

	return (
		<Suspense fallback=<>Loading...</> >
			{(!isLoading) && (<>
				<Header project={lyric?.project} section="lyrics" title={lyric?.title} />
				<Tag>{lyric?.title}</Tag>
				{tabs.filter(t => t.lookup(lyric))?.map(async (t: any, key: number) => await t?.func(lyric, key))}
			</>)}
			<Footer />
		</Suspense>
	)
}

export default Lyric;
