"use client"

import { Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import usePresses from '@/lib/usePresses';
import useReleases from '@/lib/useReleases';
import { truncAt, parseYear } from '@/lib/macros';
import InfoTag from '@/components/InfoTag';
import LetterHeader from '@/components/LetterHeader';

const	FilterPresses = ({ project, type, album }: { project?: string, type?: string, album?: string }) => {
	const { data, isLoading, error } = usePresses();
	const { data: releasesData, isLoading: releasesIsLoading, error: releasesError } = useReleases();
	const presses = data?.results
		?.sort((a: any, b: any) => parseYear(b.dtpublished) - parseYear(a.dtpublished))
		.filter((a: any) => {
			if (project) {
				return a?.type?.split(',')?.includes(project);
			} else {
				return !a?.project;
			}
		})
		.filter((item: any) => (type) ? item?.type?.split(',').includes(type) : true);
	const releases = releasesData?.results;

	return <Suspense fallback=<>Loading...</> >
		{(!isLoading && !releasesIsLoading && presses && releases) && <div className="listItem">
			<LetterHeader title="Press Articles" />
			<div className="flex flex-wrap gap-3 justify-center">
				{presses
					.map((item: any, key: number) => {
						const thumb = truncAt(';;', item.thumb);
						const album = (type === 'album') && releases.find((a: any) => {
							return a.lookup === item.album
							});
						return (<div className="drop-shadow-sm">
							<InfoTag text={`${item.dtpublished?.substr(0, 10)}: ${item.type.replace(project, '').replace(',,', ',').replace(/^,/, '').replace(/,$/, '')}`}/>
							<div style={{ maxWidth: '250px' }} className="outline outline-slate-300 drop-shadow-sm">
								<Link key={key} href={item.url}>
									{(album) && <Image src={`https://jazzbutcher.com${album.thumb}_250.jpg`} width={250} height={250} alt="album cover" />}
									{/*(thumb) && <Image src={`https://jazzbutcher.com/${thumb}_250.jpg`} width={250} height={250} alt="cover" />*/}
									<div className="box-border h-4 w-60" />
									<div className="mt-5 mx-2 p-1">
										 <div className="font-bold">{item.publication}</div>
										 <hr />
										 <div dangerouslySetInnerHTML={{ __html: item.title }} />
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
