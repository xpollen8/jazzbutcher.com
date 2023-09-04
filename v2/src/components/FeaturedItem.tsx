import Link from 'next/link';
import Image from 'next/image';
import { parseDomain, linkInternal, linkExternal } from '@/lib/macros';

const FeaturedItem = ({ link, image, alt='thumbnail', title, buy, buy_title, className, children }: {
	link?: string
	image?: string
	alt?: string
	title?: string
	buy?: string
	buy_title?: string
	className?: string
	children?: string | React.ReactElement
}): React.ReactNode => {
	if (!title) return <></>;
	let useImage: string = '';
	let useThumb: string = '';
	const width = 250;
	if (image) {
		if (image.startsWith('http')) {
			useImage = `${image}.jpg`;
		} else {
			useImage = `https://jazzbutcher.com${image}.jpg`;
		}
		useThumb = useImage.replace('.jpg', `_${width}.jpg`);
	}
	return (
		<div className="release">
			<div className="album_details">
				<div className={className} />
				<span className="album_title">
					{(link?.length) ? (<>
							{(link?.startsWith('http'))
								?
								<>{linkExternal(link, title)}</>
								:
								<>{linkInternal(link, title)}</>
							}
					</>) : <>{title}</>}
				</span>
				<div className="album_blurb">
					{children}
				</div>
				{(buy) && (<>
					<div className="album_purchase">
						{linkExternal(buy, buy_title || 'Purchase Now')}
					</div>
					<span className="smalltext">
						( {parseDomain(buy)} )
					</span>
				</>)}
			</div>
			<div style={{ maxWidth: '350px', flex: 1 }}>
				{(useImage?.length && useThumb?.length) &&
					<Link href={useImage}>
						<Image src={useThumb} width={width} height={width} alt={alt} />
					</Link>
				}
			</div>
		</div>
	)
}

export default FeaturedItem;
