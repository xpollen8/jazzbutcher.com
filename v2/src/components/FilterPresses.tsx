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
			<div className="columns-2 gap-3 sm:columns-3 md:columns-4 xl:columns-6">
				{presses
					.map((item: any, key: number) => {
						const thumb = truncAt(';;', item.thumb);
						const album = (type === 'album') && releases.find((a: any) => {
							return a.lookup === item.album
						});
						return (<div key={key} className="group">
							<InfoTag text={`${item.dtpublished?.substr(0, 10)}: ${item.type.replace(project, '').replace(',,', ',').replace(/^,/, '').replace(/,$/, '')}`}/>
							<div className="outline outline-slate-300 drop-shadow-sm">
								<Link key={key} href={item.url}>
									{(album) && <Image className="w-full" src={`https://jazzbutcher.com${album.thumb}_250.jpg`} width={250} height={250} alt="album cover" />}
									{(thumb) && <Image className="w-full" src={`https://jazzbutcher.com/${thumb}_250.jpg`} width={250} height={250} alt="cover" />}
									<div className="mx-2">
										<div className="box-border h-6" />
										<div className="font-bold">{item.publication}</div>
										{(item.publication && item.title) && <hr />}
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
