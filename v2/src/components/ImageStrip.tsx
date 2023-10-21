import Link from 'next/link';
import Image from 'next/image';
import { Attribution } from '@/components/GenericWeb';

const ImageStrip = (props: any) => {
	const images = props?.images;
	const width = props?.width || 250;
	const style = props?.style;
	const className = props?.className;
	return images && images?.length && <div style={style} className={className}>
		{images?.map(([ image, caption, source, sourceurl, sourcedate ]: any, key: number) =>
		<Link key={key} href={`https://v1.jazzbutcher.com${image}.jpg`}>
			<div >
				<Image
					alt={caption || 'album image'}
					width={width * 3} height={width * 3}
					src={(image.startsWith('http')) ? `${image}_250.jpg` : `https://v1.jazzbutcher.com${image}_250.jpg`}
				/>
				{(caption) && <><i>{caption}</i><br/></>}
				{(source) && <Attribution g={source} u={sourceurl} d={sourcedate} />}
			</div>
		</Link>
	)}
	</div>
}

export default ImageStrip;
