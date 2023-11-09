"use client"

import { Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useReleases from '@/lib/useReleases';
import { type ReleaseType } from '@/components/Release';
import { parseImage, truncAt, parseYear } from '@/lib/utils';
import { expand } from '@/lib/defines';
import InfoTag from '@/components/InfoTag';

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
			<div className="flex flex-wrap gap-3 justify-center">
				{releases?.filter((rel: any) => filterItemBy(rel, filtersUsed))
					.map((item: ReleaseType, key: number) => {
						const { thumb, image } = parseImage(item?.thumb);
						return (<div key={key} className="drop-shadow-sm w-80">
							<InfoTag text={`${parseYear(item.dtreleased)}: ${item?.type?.replace('project', '').replace(',,', ',').replace(/^,/, '').replace(/,$/, '')}`}/>
							<div className={`gig_${item?.project}`}/>
							<div className="outline outline-slate-300 drop-shadow-sm">
								{(thumb) ?
								<>
								{(item?.href) ?
									<Link href={item?.href}><Image className="w-full" src={thumb} width={250} height={250} alt="cover" /></Link>
									:
									<Image className="w-full" src={thumb} width={250} height={250} alt="cover" />
									}
								</>
								:
								<div className="p-7" />
								}
								<Link href={item?.href || ''}><div className="text-center text-sky-800 px-2">
									{(item.project) && <><b>{expand(item.project)}</b><hr /></>}
									{(item.collaboration) && <><b>{item.collaboration}</b><hr /></>}
									<span className="font-light">{item?.title?.replace('&amp;', '&')}</span>
								</div></Link>
							</div>
						</div>)
					})}
				</div>
			</>}
		</Suspense>
}

export default FilterReleases;
