"use client"

import { Suspense } from 'react';
import Image from 'next/image';
import { useSearchParams } from "next/navigation";
import Link from 'next/link';
import usePresses from '@/lib/usePresses';
import useReleases from '@/lib/useReleases';
import { parseImage, truncAt, parseYear, parseProject, pressFiltersInclude } from '@/lib/utils';
import InfoTag from '@/components/InfoTag';
import Tag from '@/components/Tag';
import FilterButton, { type TypeFilterEntry, parseFilters, filterItemBy } from '@/components/FilterButton';

export const filterPassThru = (p: any, project?: string) => sortPress(filterPressProject(p, project));

const sortPress = (p: any) => p?.sort((a: any, b: any) => parseYear(b.dtpublished) - parseYear(a.dtpublished));

const	filterPressProject = (p: any, project?: string) => p?.filter((a: any) => (project) ? a?.type?.split(',')?.includes(project) : !a?.project);

export const filterPressByTypeProfile = (p: any, project?: string) => {
	const type = 'profile';
	const base = sortPress(filterPressProject(p, project));

	return base?.filter((item: any) => (type) ? pressFiltersInclude(item?.type, type) : true);
}

export const filterPressByTypeBio = (p: any, project?: string) => {
	const type = 'kit';
	const base = sortPress(filterPressProject(p, project));

	return base?.filter((item: any) => (type) ? pressFiltersInclude(item?.type, type) : true);
}

export const filterPressByTypePreshow = (p: any, project?: string) => {
	const type = 'preshow';
	const base = sortPress(filterPressProject(p, project));

	return base?.filter((item: any) => (type) ? pressFiltersInclude(item?.type, type) : true);
}

export const filterPressByTypeXGigReview = (p: any, title: string, project?: string) => {
	const type = 'gig';
	const base = sortPress(filterPressProject(p, project));

	return base?.filter((item: any) => (type) ? (pressFiltersInclude(item?.type, type) && item?.title?.includes(title)) : true);
}

export const filterPressByTypePatGigReview = (p: any, project?: string) => filterPressByTypeXGigReview(p, "Pat's Gig Review", project);

export const filterPressByTypeFanGigReview = (p: any, project?: string) => filterPressByTypeXGigReview(p, "Punter Gig Review", project);

export const filterPressByTypeGigReview = (p: any, project?: string) => {
	const type = 'gig';
	const notType = 'pat';
	const noTitle = 'Punter Gig Review';
	const base = sortPress(filterPressProject(p, project));

	return base?.filter((item: any) => (type) ? (pressFiltersInclude(item?.type, type) && !pressFiltersInclude(item?.type, notType) && !item?.title.includes(noTitle)) : true);
}

export const filterPressByTypeRetrospective = (p: any, project?: string) => {
	const type = 'retrospective';
	const base = sortPress(filterPressProject(p, project));

	return base?.filter((item: any) => (type) ? pressFiltersInclude(item?.type, type) : true);
}

export const filterPressByTypeAlbumReview = (p: any, project?: string) => {
	const type = 'album';
	const base = sortPress(filterPressProject(p, project));

	return base?.filter((item: any) => (type) ? pressFiltersInclude(item?.type, type) : true);
}

export const filterPressByTypeInterview = (p: any, project?: string) => {
	const type = 'interview';
	const base = sortPress(filterPressProject(p, project));

	return base?.filter((item: any) => (type) ? pressFiltersInclude(item?.type, type) : true);
}

const AlbumCover = ({ album }: { album?: string }) => {
	const { data, isLoading, error } = useReleases();
	const release = data?.results?.find((a: any) => a.lookup === album);
	return <Suspense fallback=<>Loading...</> >
		{(!isLoading && data) && <Image className="w-full" src={parseImage(release?.thumb)?.thumb || ''} width={250} height={250} alt="album cover" />}
	</Suspense>
}

const filterOptions = [
	{ field: "type:album", display: "Album Reviews" },
	{ field: "type:interview", display: "Interviews" },
	{ field: "type:retrospective", display: "Retrospectives" },
	{ field: "type:profile", display: "Profile Pieces" },
	{ field: "type:sumo", display: "Sumosonic" },
	{ field: "type:eg", display: "Black Eg" },
	{ field: "type:wilson", display: "Wilson" },
	{ field: "type:preshow", display: "Pre-show Press" },
	{ field: "type:pat", display: "Pat's Gig Reviews" },
	{ field: "title:Punter", display: "Fans' Gig Reviews" },
	{ field: "type:kit", display: "Band Bios" },
	{ field: "audio:audio", display: "W/Audio" },
	{ field: "type:radio", display: "Radio" },
	{ field: "type:podcast", display: "Podcasts" },
];

const	FilterPresses = ({ project, filter=filterPassThru }: { project?: string, filter?: any }) => {
	const searchParams = useSearchParams();
	const filters = searchParams.get('filters');
	const filtersUsed = parseFilters(filters || '') || [];
	const { data, isLoading, error } = usePresses();
	const presses = data?.results && filter(data?.results, project);
	const showAlbum = (filters?.includes('album'));

	return <Suspense fallback=<>Loading...</> >
		{(!isLoading && presses) && <>
			{(() => {
				const options = filterOptions.filter((f: any) => {
					const [ type, value ] = f.field.split(':');
					return presses?.some((r: any) => r[type]?.includes(value));
				});
				if (options?.length <= 1) return;
				return <div className="listItem flex flex-wrap">{options.map((props: { field: string, display: string }, key:number) => <div key={key}><FilterButton filtersUsed={filtersUsed} {...props} /></div>)}</div>
			})()}
			<div className="flex flex-wrap gap-3 justify-center">
				{presses
				?.filter((art: any) => filterItemBy(art, filtersUsed))
				.map((item: any, key: number) => {
					const thumb = truncAt(';;', item?.thumb || '');
					const info = item.type.replace(project, '').replace('nopat','').replace('wilson','').replace('sumo','').replace('eg','').replace(',,', ',').replace(/^,/, '').replace(/,$/, '');
					return (<div key={key} className='w-64'>
						<InfoTag text={`${item.dtpublished?.substr(0, 10).replace(/-00/g, '')}: ${info}`}/>
						<div className="outline outline-slate-300 drop-shadow-sm">
							<Link key={key} href={item.url}>
								<div className={`gig_${parseProject(item.type)}`} />
								{(showAlbum && item?.album) && <AlbumCover album={item?.album} />}
								{(thumb) ? <Image className="w-full" src={parseImage(thumb)?.thumb || ''} width={250} height={250} alt="cover" /> : <br />}
								<div className="text-sky-800 text-center px-2">
									{(!(item?.album || thumb)) && <div className="h-5" />}
									<div className="h-3" />
									<div className="font-bold">{item.publication}</div>
									<div className="h-1" />
									{(item.publication && item.title) && <hr />}
									<div className="h-1" />
									<div className="font-light" dangerouslySetInnerHTML={{ __html: item.title }} />
									{(parseInt(item?.bodycount, 10) > 0) && <div className="smalltext">{item?.bodycount.toLocaleString()} words</div>}
								</div>
							</Link>
						</div>
					</div>)
				})}
			</div>
		</>}
	</Suspense>
}

export default FilterPresses;
