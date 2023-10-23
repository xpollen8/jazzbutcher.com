import Link from 'next/link';
import Image from 'next/image';
import { parseDomain, linkInternal, linkExternal } from '@/lib/utils';
import { expand } from '@/lib/defines';

const FeaturedItem = ({ link, image, alt='thumbnail', title, buy, buy_title, label, media, className, children }: {
	link?: string
	image?: string
	label?: string
	media?: string
	alt?: string
	title?: string | React.ReactElement
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
			useImage = `https://v1.jazzbutcher.com${image}.jpg`;
		}
		useThumb = useImage.replace('.jpg', `_${width}.jpg`);
	}
	return (
		<div className="release">
			<div className="album_details">
				<div className={className} />
				{!!(useImage?.length && useThumb?.length) &&
					<div className="float-right text-center">
					<Link href={link || useImage}>
						<Image className="border border-slate-600 ml-2 rounded-md" src={useThumb} width={200} height={200} alt={alt} />
					</Link>
					<div className="smalltext">{(typeof label === 'string') ? <div style={{ width: '200px' }} className="grid grid-cols-1 -mt-5">{label?.split(',').map((x: string, key: number) => <div className="break-keep" key={key}>{expand(x)}<br /></div>)}</div> : label} {media}</div>
					</div>
				}
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
		<p className="clear_float" />
		</div>
	)
}

export default FeaturedItem;
