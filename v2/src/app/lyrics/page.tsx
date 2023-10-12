"use client"

import { Suspense } from 'react';
import Link from 'next/link';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import useLyrics from '@/lib/useLyrics';

import Tag from '@/components/Tag';
import FilterButton, { TypeFilterEntry, parseFilters, filterItemBy } from '@/components/FilterButton';

const LyricList = (props: { lyrics: any[] }) => {
	const { lyrics } = props;
	let chr: string;
	return (<>
		{lyrics?.map((lyric: any, key: number) => {
			let banner;
			if (lyric?.title?.substr(0, 1) !== chr) {
				chr = lyric?.title?.substr(0, 1);
				banner = <Tag>{chr}</Tag>;
			}
			return (<div key={key}>
				{banner}
				<Link className="ml-5" href={`/lyrics/${lyric?.href}`}>{lyric?.title}</Link> <span className="smalltext">{lyric?.tablature ? '(Tablature)' : ''} {lyric?.annotated ? '(Annotated)' : ''} {lyric?.is_instrumental ? '(Instrumental)' : ''} {lyric?.project ? lyric.project : ''}</span>
			</div>)
		})}
	</>)
}

const filters = [
	 { field: "project:wilson", display: "Wilson" },
	 { field: "project:sumosonic", display: "Sumosonic" },
	 { field: "boolean:is_instrumental", display: "Instrumentals" },
	 { field: "exists:tablature", display: "w/Tablature" },
	 { field: "exists:video", display: "w/Video" },
	 { field: "boolean:annotated", display: "w/Annotations" },
]

const Lyrics= (props: any) => {
	const { data, isLoading, error } = useLyrics();
	const filtersUsed = parseFilters(props.searchParams?.filters || '') || [];

	return (<>
		<Header section='lyrics' />
		<main>
			<div className="listItem flex flex-wrap">
				{filters.map((props: { field: string, display: string }, key:number) => <div key={key}><FilterButton filtersUsed={filtersUsed} {...props} /></div>)}
			</div>
			<Suspense fallback=<>Loading...</> >
				{(!isLoading) && <LyricList lyrics={data?.results?.filter((lyric: any) => filterItemBy(lyric, filtersUsed))} />}
			</Suspense>
		</main>
		<Footer />
	</>);
}

export default Lyrics;
