"use client"

import { useTransition, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import useLyrics from '@/lib/useLyrics';
//import FilterButton, { filterItemBy } from '@/components/FilterButton';

import { useRouter, usePathname } from 'next/navigation';
import Tag from '@/components/Tag';

const FilterButton = (props: { field: string, value: string, setFiltersUsed: any, filtersUsed: string }) => {
	const { field, value, setFiltersUsed, filtersUsed } = props;
	const [ isChecked, setIsChecked ] = useState(filtersUsed.includes(value));
	const router = useRouter();
	const pathname = usePathname();
	const setNav = (filters: string) => {
		const searchParams = new URLSearchParams();
		if (filters?.length) searchParams.set('filters', filters);
		router.replace(`${pathname}?${searchParams.toString()}`)
	}
	const changeFilter = () => {
		let newFilters;
		if (isChecked) {
			newFilters = filtersUsed.split(',').filter((e: string) => e !== value).join(',');
		} else {
			newFilters = filtersUsed.split(',').concat(value).join(',');
		}
		setIsChecked(!isChecked);
		newFilters = newFilters?.replace(/^,/, '');
		setFiltersUsed(newFilters);
		setNav(newFilters);
	}
	return <button name={value} className={`drop-shadow-sm px-3 m-2 border rounded-full text-xl ${isChecked ? 'bg-blue-300' : 'bg-slate-100'}`} onClick={changeFilter} >{value}</button>
}

const filterItemBy = (object: any, filtersUsed: string, field: string) => {
	const filters = filtersUsed?.split(',');
	if (!filters.length) return object;
	if (filters.some((f: string) => object[field].includes(f))) return object;
}

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
	const [ filtersUsed, setFiltersUsed ] = useState(useSearchParams().get('filters') || '');

	return (<>
		<Header section='lyrics' />
		<div className="listItem flex">
			<FilterButton filtersUsed={filtersUsed} setFiltersUsed={setFiltersUsed} field="project" value="wilson" />
			<FilterButton filtersUsed={filtersUsed} setFiltersUsed={setFiltersUsed} field="project" value="sumosonic" />
		</div>
		<Suspense fallback=<>Loading...</> >
			{(!isLoading) && <LyricList lyrics={data?.results?.filter((lyric: any) => filterItemBy(lyric, filtersUsed, 'project'))} />}
		</Suspense>
		<Footer />
	</>);
}

export default Lyrics;
