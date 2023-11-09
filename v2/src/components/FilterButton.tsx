"use client"

import { useState } from 'react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

export type TypeFilterEntry = [
	string,
	string[]
];

const unparseFilters = (filters: TypeFilterEntry[]) => {
	let ret = '';
	filters.forEach((filter: TypeFilterEntry) => {
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

const addFilter = (used: TypeFilterEntry[], name: string, value: string): TypeFilterEntry[] => {
	const obj = used.find(([ field, values ]: TypeFilterEntry) => field === name);
	if (!obj) {
		used.push([name, [ value ]]);
	} else {
		if (obj[1] && !obj[1]?.includes(name)) {
			obj[1].push(value);
		}
	}
	return used;
}

const rmFilter = (used: TypeFilterEntry[], name: string, value: string): TypeFilterEntry[] => {
	const obj = used.find(([ field, values ]: TypeFilterEntry) => field === name);
	if (obj) {
		obj[1] = obj[1]?.filter((v: string) => v !== value);
		if (!obj[1]?.length) {
			used = used.filter(([ a, b ]: TypeFilterEntry) => a !== obj[0]);
		}
	}
	return used;
}

export const parseFilters = (used: string): TypeFilterEntry[] => {
	let ret: TypeFilterEntry[] = [];
	if (used?.length) {
		return used.split('$$')
			?.map((p: string): TypeFilterEntry => {
				const [ field, rest ] = p.split(';;');
				return [ field || '', rest?.split(',') || [] ];
			})
	}
	return ret;
}

export const filterItemBy = (object: any, filters: TypeFilterEntry[]) => {
	if (!filters.length) return object;
	return filters.some(([field, values]: TypeFilterEntry) => {
		if (field === 'boolean') {
			return values?.some((value: string) => object[value] === 'yes');
		} if (field === 'exists') {
			return values?.some((value: string) => object[value]?.length);
		} else if (values?.some((value: string) => object[field].includes(value))) {
			return object;
		}
	});
}

const filterIsSet = (used: TypeFilterEntry[], name: string, value: string) => {
	const obj = used?.find(([ field, values ]: TypeFilterEntry) => field === name);
	if (obj) return obj[1].includes(value);
	return false;
}

const FilterButton = (props: { field: string, display: string, filtersUsed: TypeFilterEntry[] }) => {
	const { field, display, filtersUsed } = props;
	const [ fieldName='', fieldValue='' ] = field.split(':');
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
		let newFilters: TypeFilterEntry[];
		if (isChecked) {
			newFilters = rmFilter(filtersUsed, fieldName, fieldValue);
		} else {
			newFilters = addFilter(filtersUsed, fieldName, fieldValue);
		}
		setIsChecked(!isChecked);
		setNav(newFilters);
	}
	return <button name={fieldValue} className={`drop-shadow-sm px-3 m-2 hover:outline border rounded-full text-md ${isChecked ? 'bg-blue-300' : 'bg-slate-100'}`} onClick={changeFilter} >{display}</button>
}

export default FilterButton;
