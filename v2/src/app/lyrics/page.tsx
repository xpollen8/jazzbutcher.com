"use client"

import Link from 'next/link';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import useLyrics from '@/lib/useLyrics';
import Loading from '@/components/Loading';

import Tag from '@/components/Tag';
import FilterButton, { type TypeFilterEntry, parseFilters, filterItemBy } from '@/components/FilterButton';

const LyricList = (props: { lyrics: any[] }) => {
	const { lyrics } = props;
	let chr: string;
	return (<>
		{lyrics?.map((lyric: any, key: number) => {
			let banner;
			if (lyric?.title?.substring(0, 1) !== chr) {
				chr = lyric?.title?.substring(0, 1);
				banner = <div className="mt-2"><Tag>{chr}</Tag></div>;
			}
			return (<div key={key}>
				{banner}
				<Link className="ml-5" href={`/lyrics/${lyric?.href}`}>{lyric?.title}</Link> <span className="smalltext">{lyric?.tablature ? '(Tablature)' : ''} {lyric?.annotated ? '(Annotated)' : ''} {lyric?.is_instrumental ? '(Instrumental)' : ''} {lyric?.project ? lyric.project : ''} {lyric?.video?.length ? '(Video)' : ''} {lyric?.mp3?.includes('mp3') ? '(Audio excerpt)' : ((lyric?.mp3?.length) ? '(Audio)' : '')} {lyric?.images?.includes('notebook') ? '(Notebook)' : ''}</span> 
			</div>)
		})}
	</>)
}

const filters = [
	 { field: "exists:mp3", display: "w/Audio" },
	 { field: "exists:video", display: "w/Video" },
	 { field: "boolean:annotated", display: "w/Annotations" },
	 { field: "images:notebook", display: "w/Notebook" },
	 { field: "exists:tablature", display: "w/Tablature" },
	 { field: "boolean:is_instrumental", display: "Instrumentals" },
	 { field: "project:wilson", display: "Wilson" },
	 { field: "project:sumosonic", display: "Sumosonic" },
]

const Lyrics= (props: any) => {
	const { data, isLoading, error } = useLyrics();
	const filtersUsed = parseFilters(props?.searchParams?.filters || '') || [];

	return (<>
		<Header section='lyrics' />
		<Loading isLoading={isLoading} >
			<main>
				<div className="listItem flex flex-wrap">
					{filters.map((props: { field: string, display: string }, key:number) => <div key={key}><FilterButton filtersUsed={filtersUsed} {...props} /></div>)}
				</div>
				<LyricList lyrics={data?.results?.filter((lyric: any) => filterItemBy(lyric, filtersUsed, []))} />
			</main>
			<Footer />
		</Loading>
	</>);
}

export default Lyrics;
