"use client"

import { useTransition, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
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
				<Link className="ml-10" href={`/lyrics/${lyric?.href}`}>{lyric?.title}</Link> <span className="smalltext">{lyric?.tablature ? '(Tablature)' : ''} {lyric?.annotated ? '(Annotated)' : ''} {lyric?.is_instrumental ? '(Instrumental)' : ''} {lyric?.project ? lyric.project : ''}</span>
			</div>)
		})}
	</>)
}

const Lyrics = () => {
	const { data, isLoading, error } = useLyrics();
	const [ filtersUsed, setFiltersUsed ] = useState(parseFilters(useSearchParams().get('filters') || '') || []);

	return (<>
		<Header section='lyrics' />
		<div className="listItem flex flex-wrap">
			<FilterButton filtersUsed={filtersUsed} setFiltersUsed={setFiltersUsed} field="project:wilson" display="Wilson" />
			<FilterButton filtersUsed={filtersUsed} setFiltersUsed={setFiltersUsed} field="project:sumosonic" display="Sumosonic" />
			<FilterButton filtersUsed={filtersUsed} setFiltersUsed={setFiltersUsed} field="boolean:is_instrumental" display="Instrumentals" />
			<FilterButton filtersUsed={filtersUsed} setFiltersUsed={setFiltersUsed} field="exists:tablature" display="w/Tablature" />
			<FilterButton filtersUsed={filtersUsed} setFiltersUsed={setFiltersUsed} field="exists:video" display="w/Video" />
			<FilterButton filtersUsed={filtersUsed} setFiltersUsed={setFiltersUsed} field="boolean:annotated" display="w/Annotations" />
		</div>
		<Suspense fallback=<>Loading...</> >
			{(!isLoading) && <LyricList lyrics={data?.results?.filter((lyric: any) => filterItemBy(lyric, filtersUsed))} />}
		</Suspense>
		<Footer />
	</>);
}

export default Lyrics;
