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
	<div className="flex flex-wrap justify-center gap-3 listItem">
		{photos.map((w: any, key: number) => {
			const { src, alt, credit, credit_url, credit_date, body } = w;
			const { image, thumb } = parseImage(src);
			return <div key={key} className="p-1 drop-shadow-sm border border-slate-500 text-center w-80">
				{(image) && <Link href={image}>{(thumb) && <Image className="w-full" key={key} unoptimized src={thumb} width={350} height={350} alt={alt} />}</Link>}
				{alt}
				{(body) && <><p />&quot;<i>{body}</i>&quot;</>}
				{(credit) && <><br /><Credit g={credit} u={credit_url} d={credit_date} /></>}
			</div>
		})}
	</div>
</>

export default PhotoSet;
