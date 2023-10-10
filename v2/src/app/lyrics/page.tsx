"use client"

import { useTransition, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import useLyrics from '@/lib/useLyrics';

import { useRouter, usePathname } from 'next/navigation';
import Tag from '@/components/Tag';

type TypeFilterEntry = [
	string,
	string[]
];

const unparseFilters = (filters?: TypeFilterEntry[]) => {
	let ret = '';
	filters?.forEach((filter: TypeFilterEntry) => {
		const [ field, values ] = filter;
		if (values?.length) {
			ret = ret + field + ';;'
			values?.forEach((value: string) => {
				ret = ret + value + ',';
			});
			ret = ret + '$$';
		}
	});
	return ret?.replace(/,\$/g, '$').replace(/\$\$$/, '');
}

const parseFilters = (used?: string): TypeFilterEntry[] | [] => {
	if (used?.length) {
		return used.split('$$')
			?.map((p: string) => {
				const [ field, rest ] = p.split(';;');
				return [ field, rest?.split(',') ];
			})
	}
	return []
}

const addFilter = (used: TypeFilterEntry[], name: string, value: string) => {
	const obj = used.find(([ field, values ]: TypeFilterEntry) => field === name);
	if (!obj) {
		used.push([name, [ value ]]);
	} else {
		if (!obj[1].includes(name)) {
			obj[1].push(value);
		}
	}
	return used;
}

const rmFilter = (used: TypeFilterEntry[], name: string, value: string) => {
	const obj = used.find(([ field, values ]: TypeFilterEntry) => field === name);
	if (obj) {
		obj[1] = obj[1].filter((v: string) => v !== value);
		if (!obj[1]?.length) {
			used = used.filter(([ a, b ]: TypeFilterEntry) => a !== obj[0]);
		}
	}
	return used;
}

const filterItemBy = (object: any, filters: TypeFilterEntry[]) => {
	if (!filters.length) return object;
	return filters.some(([field, values]: TypeFilterEntry) => {
		if (values.some((value: string) => object[field].includes(value))) {
			return object;
		}
	});
}

const filterIsSet = (used: TypeFilterEntry[], name: string, value: string) => {
	const obj = used?.find(([ field, values ]: TypeFilterEntry) => field === name);
	if (obj) return obj[1].includes(value);
	return false;
}

const FilterButton = (props: { field: string, display: string, setFiltersUsed: any, filtersUsed: TypeFilterEntry[] }) => {
	const { field, display, setFiltersUsed, filtersUsed } = props;
	const [ fieldName, fieldValue ] = field.split(':');
	const [ isChecked, setIsChecked ] = useState(filterIsSet(filtersUsed, fieldName, fieldValue));
	const router = useRouter();
	const pathname = usePathname();

	const setNav = (filters: TypeFilterEntry[]) => {
		const searchParams = new URLSearchParams();
		if (filters?.length) {
			searchParams.set('filters', unparseFilters(filters));
		}
		router.replace(`${pathname}?${searchParams.toString()}`)
	}
	const changeFilter = () => {
		let newFilters;
		if (isChecked) {
			newFilters = rmFilter(filtersUsed, fieldName, fieldValue);
		} else {
			newFilters = addFilter(filtersUsed, fieldName, fieldValue);
		}
		setIsChecked(!isChecked);
		setNav(newFilters);
		console.log("newFilters", newFilters);
		setFiltersUsed(newFilters);
	}
	return <button name={fieldValue} className={`drop-shadow-sm px-3 m-2 border rounded-full text-xl ${isChecked ? 'bg-blue-300' : 'bg-slate-100'}`} onClick={changeFilter} >{display}</button>
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
	const filters = parseFilters(useSearchParams().get('filters') || '') || [];
	const [ filtersUsed, setFiltersUsed ] = useState(filters);

	return (<>
		<Header section='lyrics' />
		<div className="listItem flex">
			<FilterButton filtersUsed={filtersUsed} setFiltersUsed={setFiltersUsed} field="project:wilson" display="Wilson" />
			<FilterButton filtersUsed={filtersUsed} setFiltersUsed={setFiltersUsed} field="project:sumosonic" display="Sumosonic" />
			{/*
			<FilterButton filtersUsed={filtersUsed} setFiltersUsed={setFiltersUsed} field="boolean:is_instrumental" display="Instrumentals" />
			<FilterButton filtersUsed={filtersUsed} setFiltersUsed={setFiltersUsed} field="boolean:tablature" display="Tablature" />
			<FilterButton filtersUsed={filtersUsed} setFiltersUsed={setFiltersUsed} field="boolean:annotated" display="Annotated" />
			*/}
		</div>
		<Suspense fallback=<>Loading...</> >
			{(!isLoading) && <LyricList lyrics={data?.results?.filter((lyric: any) => filterItemBy(lyric, filters))} />}
		</Suspense>
		<Footer />
	</>);
}

export default Lyrics;
