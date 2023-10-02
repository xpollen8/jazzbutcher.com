"use client"

import { Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import usePresses from '@/lib/usePresses';
import useReleases from '@/lib/useReleases';
import { truncAt, parseYear, parseProject } from '@/lib/macros';
import InfoTag from '@/components/InfoTag';
import LetterHeader from '@/components/LetterHeader';

export const filterPassThru = (p: any, project?: string) => sortPress(filterPressProject(p, project));

const sortPress = (p: any) => p?.sort((a: any, b: any) => parseYear(b.dtpublished) - parseYear(a.dtpublished));

const	filterPressProject = (p: any, project?: string) => p?.filter((a: any) => (project) ? a?.type?.split(',')?.includes(project) : !a?.project);

export const filterPressByTypeProfile = (p: any, project?: string) => {
	const type = 'profile';
	const base = sortPress(filterPressProject(p, project));

	return base?.filter((item: any) => (type) ? (item?.type?.split(',').includes(type)) : true);
}

export const filterPressByTypeXGigReview = (p: any, title: string, project?: string) => {
	const type = 'gig';
	const base = sortPress(filterPressProject(p, project));

	return base?.filter((item: any) => (type) ? (item?.type?.split(',').includes(type) && item?.title?.includes(title)) : true);
}

export const filterPressByTypePatGigReview = (p: any, project?: string) => filterPressByTypeXGigReview(p, "Pat's Gig Review", project);

export const filterPressByTypeFanGigReview = (p: any, project?: string) => filterPressByTypeXGigReview(p, "Punter Gig Review", project);

export const filterPressByTypeGigReview = (p: any, project?: string) => {
	const type = 'gig';
	const notType = 'pat';
	const noTitle = 'Punter Gig Review';
	const base = sortPress(filterPressProject(p, project));

	return base?.filter((item: any) => (type) ? (item?.type?.split(',').includes(type) && !item?.type?.split(',').includes(notType) && !item?.title.includes(noTitle)) : true);
}

export const filterPressByTypeRetrospective = (p: any, project?: string) => {
	const type = 'retrospective';
	const base = sortPress(filterPressProject(p, project));

	return base?.filter((item: any) => (type) ? item?.type?.split(',').includes(type) : true);
}

export const filterPressByTypeAlbumReview = (p: any, project?: string) => {
	const type = 'album';
	const base = sortPress(filterPressProject(p, project));

	return base?.filter((item: any) => (type) ? item?.type?.split(',').includes(type) : true);
}

export const filterPressByTypeInterview = (p: any, project?: string) => {
	const type = 'interview';
	const base = sortPress(filterPressProject(p, project));

	return base?.filter((item: any) => (type) ? item?.type?.split(',').includes(type) : true);
}

const AlbumCover = ({ album }: { album?: string }) => {
	const { data, isLoading, error } = useReleases();
	const release = data?.results?.find((a: any) => a.lookup === album);
	return <Suspense fallback=<>Loading...</> >
		{(!isLoading && data) && <Image className="w-full" src={`https://jazzbutcher.com${release?.thumb}_250.jpg`} width={250} height={250} alt="album cover" />}
	</Suspense>
}

const	FilterPresses = ({ project, title, showAlbum, filter=filterPassThru }: { title: string, project?: string, showAlbum?: boolean, filter?: any }) => {
	const { data, isLoading, error } = usePresses();
	const presses = data?.results && filter(data?.results, project);

	return <Suspense fallback=<>Loading...</> >
		{(!isLoading && presses) && <div className="listItem">
			<LetterHeader title={title} />
			<div className="flex flex-wrap gap-3 justify-center">
				{presses
				.map((item: any, key: number) => {
					const thumb = truncAt(';;', item.thumb);
					return (<div key={key} className={`w-64`}>
						<InfoTag text={`${item.dtpublished?.substr(0, 10)}: ${item.type.replace(project, '').replace(',,', ',').replace(/^,/, '').replace(/,$/, '')}`}/>
						<div className={`outline outline-slate-300 drop-shadow-sm gig_${parseProject(item.type)}`}>
							<Link key={key} href={item.url}>
								{(showAlbum && item?.album) && <AlbumCover album={item?.album} />}
								{(thumb) && <Image className="w-full" src={`https://jazzbutcher.com/${thumb}_250.jpg`} width={250} height={250} alt="cover" />}
								<div className="mx-2 text-center">
									{(!(item?.album || thumb)) && <div className="h-5" />}
									<div className="h-2" />
									<div className="font-bold">{item.publication}</div>
									<div className="h-1" />
									{(item.publication && item.title) && <hr />}
									<div className="h-1" />
									<div dangerouslySetInnerHTML={{ __html: item.title }} className="-mb-5" />
								</div>
							</Link>
						</div>
					</div>)
				})}
			</div>
		</div>}
	</Suspense>
}

export default FilterPresses;
