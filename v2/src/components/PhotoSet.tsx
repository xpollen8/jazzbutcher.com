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
			const { src, alt, credit, credit_url, credit_date, body } = w;
			const { image, thumb } = parseImage(src, 250);
			return <div key={key} className="text-center drop-shadow-sm border border-slate-400 rounded-sm">
				{(image) && <Link href={image}>{(thumb) && <Image className="rounded-sm" key={key} unoptimized src={thumb} width={350} height={350} alt={alt} />}</Link>}
				<div className="text-base font-light -mt-6">
				{(alt) && <span className="px-1">{alt}</span>}
				{(body) && <span className="px-1">&quot;<i>{body}</i>&quot;</span>}
				{(credit) && <span className="px-1"><br /><Credit g={credit} u={credit_url} d={credit_date} /></span>}
				</div>
			</div>
		})}
	</div>
</>

export default PhotoSet;
