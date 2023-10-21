import Link from 'next/link';
import Image from 'next/image';
import Tag from '@/components/Tag';

import { Credit } from '@/components/GenericWeb';

const PhotoSet = ({ title, photos, description, credit, credit_url, credit_date }: {
	title?: string, photos: any[], description?: string | React.ReactNode, credit?: string, credit_url?: string, credit_date?: string
}) => <>
	{(title) && <Tag> {title} </Tag>}
	{(description) && <blockquote>{description}</blockquote>}
	{(credit || credit_url) && <blockquote><Credit g={credit} u={credit_url} d={credit_date} /></blockquote>}
	<div className="flex flex-wrap justify-center gap-3 listItem">
		{photos.map((w: any, key: number) => {
			const { src, alt, credit, credit_url, credit_date, body } = w;
			const [ part, ext ] = src.split('.');
			return <div key={key} className="p-1 drop-shadow-sm border border-slate-500 text-center w-64">
				<Link href={src}><Image key={key} unoptimized src={`${part}_250.${ext}`} width={250} height={250} alt={alt} /></Link>
				{alt}
				{(body) && <><p />&quot;<i>{body}</i>&quot;</>}
				{(credit) && <><br /><Credit g={credit} u={credit_url} d={credit_date} /></>}
			</div>
		})}
	</div>
</>

export default PhotoSet;
