"use client"

import { Suspense } from 'react';

import Link from 'next/link';
import Image from 'next/image';

import { dateDiff, pluralize, truncAt, parseProject, parseImage } from '@/lib/utils';
import useReleases from '@/lib/useReleases';
import InfoTag from '@/components/InfoTag';

const AlbumCover = ({ album }: { album?: string }) => {
	const { data, isLoading, error } = useReleases();
	const release = data?.results?.find((a: any) => a.lookup === album);
	return <Suspense fallback=<>Loading...</> >
		{(!isLoading && data) && <Image className="w-full" src={parseImage(release?.thumb)?.thumb || ''} width={250} height={250} alt="album cover" />}
	</Suspense>
}

const PressCards = ({ items, project, showAlbum, preventAutoExpand=false }: any) =>
	(!!items?.length) && <details open={(!preventAutoExpand) || items.length < 10}>
		<summary className="tagClickable">{pluralize(items.length, 'Press item')}</summary>
		<div className="flex flex-wrap gap-3 justify-center">
		{items?.map((item: any, key: number) => {
			const thumb = truncAt(';;', item?.thumb || '');
			const info = item.type.replace(project, '').replace('nopat','').replace('wilson','').replace('sumo','').replace('eg','').replace(',,', ',').replace(/^,/, '').replace(/,$/, '');
			return (<div key={key} className='w-60'>
				<InfoTag text={`${item.dtpublished?.substr(0, 10).replace(/-00/g, '')}: ${info}`}/>
				<div className="outline outline-slate-300 drop-shadow-sm">
					<Link key={key} href={item.url}>
						<div className={`gig_${parseProject(item.type)}`} />
						{(showAlbum && item?.album) && <AlbumCover album={item?.album} />}
						{(thumb) ? <Image className="w-full" src={parseImage(thumb)?.thumb || ''} width={250} height={250} alt="cover" /> : <br />}
						<div className="text-sky-800 text-center px-2">
							<div className="h-1" />
							<div className="font-bold">{item.publication}</div>
							<div className="h-1" />
							{(item.publication && item.title) && <hr />}
							<div className="h-1" />
							<div className="font-light" dangerouslySetInnerHTML={{ __html: item.title }} />
							{((parseInt(item?.bodycount, 10) > 0) || (item?.dtadded)) && <div className="smalltext">
								<hr />
								{(parseInt(item?.bodycount, 10) > 0) && <div>{item?.bodycount.toLocaleString()} words</div>}
								{(item?.dtadded) && <div>{dateDiff(item.dtadded, 'added: ')}</div>}
							</div>}
						</div>
					</Link>
				</div>
			</div>)
		})}
	</div>
	</details>

export default PressCards;
