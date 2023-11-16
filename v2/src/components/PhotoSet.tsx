import Link from 'next/link';
import Image from 'next/image';
import Tag from '@/components/Tag';
import { parseImage } from '@/lib/utils';

import { Credit } from '@/components/GenericWeb';

const PhotoSet = ({ title, photos, pdf, description, credit, credit_url, credit_date }: {
	title?: string, photos: any[], pdf?: string, description?: string | React.ReactNode, credit?: string, credit_url?: string, credit_date?: string
}) => <>
	{(title) && <Tag> {title} </Tag>}
	{(description || credit || credit_url || pdf) && <div className="listItem">
		{(description) && <>{description}</>}
		{(credit || credit_url) && <>{(description) && <br />}<Credit g={credit} u={credit_url} d={credit_date} /></>}
		{(pdf) && <><br /><Link href={pdf}>Download this photoset as a single PDF</Link> (large file)</>}
	</div>}
	<div className="masonry listItem">
		{photos.map((w: any, key: number) => {
			const { src, alt, credit, credit_url, credit_date, body, location } = w;
			const { image, thumb } = parseImage(src, 250);
			return <div key={key} className="text-center drop-shadow-sm border border-slate-400 rounded-sm">
				{(image) && <Link href={image}>{(thumb) && <Image className="rounded-sm" key={key} unoptimized src={thumb} width={350} height={350} alt={alt} />}</Link>}
				<div className="text-sm font-light">
				{(credit_date?.length === 4) && <div>{credit_date}</div>}
				{(alt) && <div className="px-2">{alt}</div>}
				{(body) && <div className="px-2">&quot;<i>{body}</i>&quot;</div>}
				{(location) && <div className="px-2">{location}</div>}
				{(credit) && <div className="px-2"><Credit g={credit} u={credit_url} d={(credit_date?.length === 4) ? '' : credit_date} /></div>}
				</div>
			</div>
		})}
	</div>
</>

export default PhotoSet;
