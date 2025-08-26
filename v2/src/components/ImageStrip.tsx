import Link from 'next/link';
import Image from 'next/image';
import { Attribution } from '@/components/GenericWeb';
import { parseImage } from '@/lib/utils';
import { person } from '@/lib/defines';

const ImageStrip = (props: any) => {
	const images = props?.images;
	const width = props?.width || 350;
	const style = props?.style;
	const className = props?.className || "imageStrip outline outline-slate-400 flex flex-wrap gap-3 bg-slate-100 text-center drop-shadow-lg";
	return images && images?.length && <div style={style} className={className}>
		{images?.map(([ inImage, caption, source, sourceurl, sourcedate ]: any, key: number) => {
			const { image, thumb='' } = parseImage(inImage);
			const { href } = person(source) || {};
			return image && <div key={key}>
			<Link href={image}>
				<Image
					className="drop-shadow-md"
					alt={caption || 'album image'}
					width={width} height={width}
					src={thumb}
				/>
			</Link>
				{(caption) && <><i>{caption}</i><br/></>}
				{(source) && <Attribution g={source} u={sourceurl || `/contributions/${source}`} d={sourcedate} />}
			</div>
		}
	)}
	</div>
}

export default ImageStrip;
