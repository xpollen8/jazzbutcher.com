"use client"

import { Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useReleases from '@/lib/useReleases';
import { ReleaseType } from '@/components/Release';
import { truncAt, parseYear } from '@/lib/macros';
import InfoTag from '@/components/InfoTag';
import LetterHeader from '@/components/LetterHeader';

const	FilterReleases = ({ project, types }: { project?: string, types?: string[] }) => {
	const { data, isLoading, error } = useReleases();
	const releases = data?.results?.sort((a: ReleaseType, b: ReleaseType) => parseYear(b.dtreleased) - parseYear(a.dtreleased)).filter((a: ReleaseType) => (project) ? a?.project === project : !a?.project);
	return <Suspense fallback=<>Loading...</> >
		{(!isLoading && releases) && <div className="listItem">
			<LetterHeader title="Releases" />
			<div className="flex flex-wrap gap-3 justify-center">
				{releases
					.filter((item: ReleaseType) => (types) ? types.filter((x: string) => item?.type?.split(',').includes(x)) : true)
					.map((item: ReleaseType, key: number) => {
						const thumb = truncAt(';;', item?.thumb);
						return (<div key={key} className="drop-shadow-sm">
							<InfoTag text={`${parseYear(item.dtreleased)}: ${item?.type?.replace('project', '').replace(',,', ',').replace(/^,/, '').replace(/,$/, '')}`}/>
							{/*<div className={`gig_${item?.project}`}/>*/}
							<div style={{ maxWidth: '250px' }} className="outline outline-slate-300 drop-shadow-sm">
								{(item?.href) && <Link key={key} href={item?.href}><Image src={`https://jazzbutcher.com/${thumb}_250.jpg`} width={250} height={250} alt="cover" /></Link>}
								{(!item?.href) && <Image src={`https://jazzbutcher.com/${thumb}_250.jpg`} width={250} height={250} alt="cover" />}
								<div className="-mt-5 mx-2 p-1 font-bold">
									{item.title}
								</div>
							</div>
						</div>)
					})}
				</div>
			</div>}
		</Suspense>
}

export default FilterReleases;
