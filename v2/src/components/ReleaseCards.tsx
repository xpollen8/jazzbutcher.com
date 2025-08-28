import Link from 'next/link';
import Image from 'next/image';

import { parseImage, parseYear, pluralize } from '@/lib/utils';
import { expand } from '@/lib/defines';
import InfoTag from '@/components/InfoTag';
import { type ReleaseType } from '@/components/Release';

const ReleaseCards = ({ items, preventAutoExpand=false, title='Release' }: any) =>
  !!items?.length && <details open={(!preventAutoExpand) || items.length < 10}>
	<summary className="tagClickable">{pluralize(items.length, title)}</summary>
	<div className="masonry">
		{items.map((item: ReleaseType, key: number) => {
				const { thumb, image } = parseImage(item?.thumb);
				return (<div key={key} className="drop-shadow-sm w-60 p-2 m-1">
					<InfoTag>
						<>
						{parseYear(item.dtreleased)}: {item?.type?.replace('project', '').replace(',,', ',').replace(/^,/, '').replace(/,$/, '')}
						</>
					</InfoTag>
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
							<span className="font-bold">{item?.title?.replace('&amp;', '&')}</span>
						</div></Link>
						{(item?.summary) && <div className="listItem">{item.summary}</div>}
					</div>
				</div>)
			})}
		</div>
	</details>

export default ReleaseCards;
