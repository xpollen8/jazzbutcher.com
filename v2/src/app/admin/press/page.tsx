"use client"

import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useEffect, useState, useTransition } from 'react';

import { Suspense } from 'react';
import Header from '@/components/Header';
import PressItem from '@/components/PressItem';
import { parseProject, pressFiltersInclude } from '@/lib/macros';

import usePressesAdmin from '@/lib/usePressesAdmin';

const Press = (props: any) => {
	const { data, isLoading, error } = usePressesAdmin();

	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const [isPending, startTransition] = useTransition();
	const [filtersUsed, setFiltersUsed] = useState(searchParams.get('filters') || '');
	const [pressID, setPressID] = useState(searchParams.get('pressID'));

	const filters = [
		{ name: 'interviews', func: (item: any) => filtersInclude(item.type, 'interview') && !item.url.includes('.mp3') },
		{ name: 'audio_interviews', func: (item: any) => filtersInclude(item.type, 'interview') && item.url.includes('.mp3') },
		{ name: 'retrospectives', func: (item: any) => filtersInclude(item.type, 'retrospective') },
		{ name: 'album_reviews', func: (item: any) => filtersInclude(item.type, 'album') },
		{ name: 'band_profiles', func: (item: any) => filtersInclude(item.type, 'profile') },
		{ name: 'preshow_press', func: (item: any) => filtersInclude(item.type, 'preshow') },
		{ name: 'gig_reviews', func: (item: any) => filtersInclude(item.type, 'gig') },
		{ name: 'official_band_bios', func: (item: any) => filtersInclude(item.type, 'kit') },
		{ name: 'wilson', func: (item: any) => filtersInclude(item.type, 'wilson') },
		{ name: 'sumo', func: (item: any) => filtersInclude(item.type, 'sumo') },
		{ name: 'eg', func: (item: any) => filtersInclude(item.type, 'eg') },
		];

	const filterRecord = (p: any) => {
		if (p.title.includes('Punter Gig Review')) return false;
		if (p.title.includes("Pat's Gig Review")) return false;
		if (!filtersUsed.length) return true;

		return filtersUsed.split(',').some((f: string) => {
			const func = filters.find((ff: any) => ff.name === f)?.func;
			if (func) {
				return func(p)
			} else {
				return true;
			}
		});
	}

	const presses = data?.results?.sort((a: any, b: any) => a.press_id - b.press_id).filter(filterRecord);

	const onChange = (ev: React.FormEvent<HTMLFormElement>) => {
		ev.preventDefault();
	}
	const setNav = (filters: string, id: string | null) => {
		const searchParams = new URLSearchParams();
		if (filters?.length) searchParams.set('filters', filters);
		if (id?.length) searchParams.set('pressID', id);
		startTransition(() => {
			router.replace(`${pathname}?${searchParams.toString()}`)
		})
	}
	const changeFilter = (ev: React.ChangeEvent<HTMLInputElement>) => {
		ev.preventDefault();
		let newFilters;
		if (ev.target.checked) {
			newFilters = filtersUsed.split(',').concat(ev.target.name).join(',');
		} else {
			newFilters = filtersUsed.split(',').filter((e: string) => e !== ev.target.name).join(',');
		}
		newFilters = newFilters?.replace(/^,/, '');
		setFiltersUsed(newFilters);
		setNav(newFilters, pressID);
	}

	return (<Suspense fallback=<>Loading..</> >
		<Header section='admin' />
		<main>
			{(!isLoading && presses) && <>
				<form onChange={onChange}>
					{filters.map((f: any, key: number) =>
						<div key={key}>
							<label>{f.name}</label>:
							<input type='checkbox' name={f.name} checked={filtersInclude(filtersUsed, f.name)} onChange={changeFilter} />
						</div>
					)}
					<hr />
					{presses.length} records match
					<hr />
					<select className="p-2 outline" value={pressID || ''}
						onChange={(e) => {
							setPressID(e.target.value)
							setNav(filtersUsed, e.target.value);
						}}
					>
						<option key={-1} value={''}>-- choose --</option>
						{presses?.map((p: any, key: number) => {
							return <option key={key} value={p.press_id}>#{p.press_id} : {p.dtpublished.substr(0, 10)} : {parseProject(p.type)} {p.title} : {p.publication}</option>
						})}
					</select>
					{(pressID) && (() => {
						const item = presses.find((p: any) => parseInt(p.press_id, 10) === parseInt(pressID, 10));
						return <PressItem item={item} />
					})()}
				</form>
			</>}
		</main>
	</Suspense>)
}

export default Press;
