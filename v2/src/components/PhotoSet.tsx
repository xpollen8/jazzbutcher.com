import Link from 'next/link';
import Image from 'next/image';
import Tag from '@/components/Tag';
import { parseImage } from '@/lib/utils';
import { expandAll } from '@/lib/defines';
import { removeHTML } from '@/components/GenericWeb';

import { Credit } from '@/components/GenericWeb';

const PhotoSet = ({ title, photos, pdf, description, credit, credit_url, credit_date }: {
	title?: string | React.ReactNode, photos: any[], pdf?: string, description?: string | React.ReactNode, credit?: string, credit_url?: string, credit_date?: string
}) => <>
	{(title) && <Tag> {title} </Tag>}
	{(description || credit || credit_url || pdf) && <div className="listItem">
		{(description) && <>{description}</>}
		{(credit || credit_url) && <>{(description) && <br />}<Credit g={credit} u={credit_url} d={credit_date} /></>}
		{(pdf) && <><br /><Link href={pdf}>Download this photoset as a single PDF</Link> (large file)</>}
	</div>}
	{(!!photos?.length) && <div className="masonry listItem">
		{photos.map((w: any, key: number) => {
			if (!w) return;
			const { href, src, alt, credit, credit_url, credit_date, body, location, caption } = w;
			const { image, thumb } = parseImage(src, 250);
			const useCredit = removeHTML(credit);
			const useURL = (useCredit) ? `/contributions/${useCredit}` : credit_url;
			const useLink: any = href || image;
			return <div key={key} className="text-center drop-shadow-sm border border-slate-400 rounded-sm">
				{(image) && <Link href={useLink}>{(thumb) && <Image className="rounded-sm" key={key} unoptimized src={thumb} width={350} height={350} alt={alt} />}</Link>}
				<div className="text-sm font-light">
				{(credit_date?.length === 4) && <div>{credit_date}</div>}
				{(caption) && <div>{expandAll(caption)}</div>}
				{(alt) && <div>{expandAll(alt)}</div>}
				{(body) && <div className="px-2">&quot;<i>{body}</i>&quot;</div>}
				{(location) && <div className="px-2">{location}</div>}
				{(useCredit) && <div className="px-2"><Credit g={useCredit} u={useURL} d={(credit_date?.length === 4) ? '' : credit_date} /></div>}
				</div>
			</div>
		})}
	</div>}
</>

export default PhotoSet;
