"use client"

import { useSearchParams } from "next/navigation";
import usePresses from '@/lib/usePresses';
import { parseYear, pressFiltersInclude } from '@/lib/utils';
import PressCards from '@/components/PressCards';
import Loading from '@/components/Loading';
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

	// TODO - notType/noTitle are not being filtered out
	return base?.filter((item: any) => pressFiltersInclude(item?.type, type))?.filter((item: any) => !pressFiltersInclude(item?.type, notType))?.filter((item: any) => !item?.title.includes(noTitle));
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

export const filterPressByTypeClipping = (p: any, project?: string) => {
	const type = 'clipping';
	const base = sortPress(filterPressProject(p, project));

	return base?.filter((item: any) => (type) ? pressFiltersInclude(item?.type, type) : true);
}

export const filterPressByTypeInterview = (p: any, project?: string) => {
	const type = 'interview';
	const base = sortPress(filterPressProject(p, project));

	return base?.filter((item: any) => (type) ? pressFiltersInclude(item?.type, type) : true);
}

const filterOptions = [
	{ field: "type:album", display: "Album Reviews" },
	{ field: "type:interview", display: "Interviews", func: filterPressByTypeInterview },
	{ field: "type:clipping", display: "Short Clippings" },
	{ field: "type:retrospective", display: "Retrospectives" },
	{ field: "type:profile", display: "Profile Pieces" },
	{ field: "type:sumo", display: "Sumosonic" },
	{ field: "type:eg", display: "Black Eg" },
	{ field: "type:wilson", display: "Wilson" },
	{ field: "type:preshow", display: "Pre-show Press" },
	{ field: "type:gig", display: "Published Gig Reviews", exact: true },
//	{ field: "type:pat", display: "Pat's Gig Reviews" },
//	{ field: "title:Punter", display: "Fans' Gig Reviews" },
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

	return <Loading isLoading={isLoading} >
		{(() => {
			const options = filterOptions.filter((f: any) => {
				const [ type, value ] = f.field.split(':');
				return presses?.some((r: any) => r[type]?.includes(value)) &&
					!presses?.every((r: any) => r[type]?.includes(value));
			});
			if (options?.length <= 1) return;
			return <div className="listItem flex flex-wrap">{options.map((props: { field: string, display: string }, key:number) => <div key={key}><FilterButton filtersUsed={filtersUsed} {...props} /></div>)}</div>
		})()}
		<PressCards items={presses?.filter((item: any) => filterItemBy(item, filtersUsed, filterOptions))} project={project} showAlbum={showAlbum} preventAutoExpand={!filtersUsed?.length} />
	</Loading>
}

export default FilterPresses;
