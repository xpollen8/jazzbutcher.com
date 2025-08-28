"use client"

import Link from 'next/link';
import Image from 'next/image';

import { dateDiff, pluralize, truncAt, parseProject, parseImage } from '@/lib/utils';
import { expandAll } from '@/lib/defines';
import { removeHTML } from '@/components/GenericWeb';
import useReleases from '@/lib/useReleases';
import InfoTag from '@/components/InfoTag';

const AlbumCover = ({ album }: { album?: string }) => {
	const { data, isLoading, error } = useReleases();
	const release = data?.results?.find((a: any) => a.lookup === album);
	if (isLoading || !release?.thumb) return;
	return <Image className="w-full" src={parseImage(release?.thumb)?.thumb || ''} width={250} height={250} alt="album cover" />
}

const PressCards = ({ items, project, showAlbum, preventAutoExpand=false, title }: any) =>
	(!!items?.length) && <details open={(!preventAutoExpand) || items.length < 10}>
		<summary className="tagClickable">{(title) ? title : pluralize(items.length, 'Press item')}</summary>
		<div className="masonry">
		{items?.map((item: any, key: number) => {
			const thumb = truncAt(';;', item?.thumb || '');
			const info = item.type.replace(project, '').replace('nopat','').replace('wilson','').replace('sumo','').replace('eg','').replace(',,', ',').replace(/^,/, '').replace(/,$/, '');
			return (<div key={key} className='p-1'>
				<InfoTag>
				<>
				{item.dtpublished?.substr(0, 10).replace(/-00/g, '')}: {info}
				</>
				</InfoTag>
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
							{(item?.summary || (parseInt(item?.bodycount, 10) > 0) || (item?.dtadded)) && <div className="smalltext">
								<hr />
								{(parseInt(item?.bodycount, 10) > 0) && <div>{item?.bodycount.toLocaleString()} words</div>}
								{(item?.summary) && <div className="listItem">{expandAll(removeHTML(item.summary))}</div>}
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
