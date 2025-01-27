"use client"

import { Suspense } from 'react';
import useReleases from '@/lib/useReleases';
import { type ReleaseType } from '@/components/Release';
import { parseYear } from '@/lib/utils';
import ReleaseCards from '@/components/ReleaseCards';

import FilterButton, { type TypeFilterEntry, parseFilters, filterItemBy } from '@/components/FilterButton';

const filterOptions = [
	{ field: "type:album", display: "Albums" },
	{ field: "type:single", display: "Singles" },
	{ field: "type:compilation", display: "Compilations" },
	{ field: "type:collaboration", display: "Collaborations" },
	{ field: "type:project", display: "Projects" },
	{ field: "type:various", display: "Various" },
	{ field: "type:EP", display: "EPs" },
	{ field: "type:demo", display: "Demos" },
	{ field: "type:live", display: "Live" },
	{ field: "media:dvd", display: "DVDs" },
	{ field: "media:CDR", display: "CDRs" },
	{ field: "media:cassette", display: "Cassettes" },
];

const	FilterReleases = ({ project, filters }: { project?: string, filters?: any }) => {
	const filtersUsed = parseFilters(filters || '') || [];
	const { data, isLoading, error } = useReleases();
	const releases = data?.results?.sort((a: ReleaseType, b: ReleaseType) => parseYear(b.dtreleased) - parseYear(a.dtreleased)).filter((a: ReleaseType) => (project) ? a?.project === project : true);
	return <Suspense fallback=<>Loading...</> >
		{(!isLoading && releases) && <>
			{(() => {
				const options = filterOptions.filter((f: any) => {
					const [ type, value ] = f.field.split(':');
					return releases?.some((r: any) => r[type].includes(value)) &&
						!releases?.every((r: any) => r[type].includes(value));
				});
				if (options?.length <= 1) return;
				return <div className="listItem flex flex-wrap">{options.map((props: { field: string, display: string }, key:number) => <div key={key}><FilterButton filtersUsed={filtersUsed} {...props} /></div>)}</div>
			})()}
			<ReleaseCards items={releases?.filter((rel: any) => filterItemBy(rel, filtersUsed, []))} preventAutoExpand={!filtersUsed?.length} />
			</>}
		</Suspense>
}

export default FilterReleases;
