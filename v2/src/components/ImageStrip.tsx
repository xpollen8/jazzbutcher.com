import Link from 'next/link';
import Image from 'next/image';
import { Attribution } from '@/components/GenericWeb';
import { parseImage } from '@/lib/utils';

const ImageStrip = (props: any) => {
	const images = props?.images;
	const width = props?.width || 350;
	const style = props?.style;
	const className = props?.className;
	return images && images?.length && <div style={style} className={className}>
		{images?.map(([ inImage, caption, source, sourceurl, sourcedate ]: any, key: number) => {
			const { image, thumb } = parseImage(inImage);
			return <Link key={key} href={image}>
				<div >
					<Image
						alt={caption || 'album image'}
						width={width} height={width}
						src={thumb}
					/>
					{(caption) && <><i>{caption}</i><br/></>}
					{(source) && <Attribution g={source} u={sourceurl} d={sourcedate} />}
				</div>
			</Link>
		}
	)}
	</div>
}

export default ImageStrip;
