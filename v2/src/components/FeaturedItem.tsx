import Link from 'next/link';
import Image from 'next/image';
import { parseImage, parseDomain, linkInternal, linkExternal } from '@/lib/utils';
import { expand } from '@/lib/defines';
import { removeHTML } from '@/components/GenericWeb';

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
	const width = 250;
	const { image: useImage, thumb: useThumb } = parseImage(image);
	return (
		<div className="release">
			<div className="album_details">
				<div className={className} />
				{!!(useImage?.length && useThumb?.length) &&
					<div className="float-right text-center">
					<Link href={link || useImage}>
						<Image className="border border-slate-600 ml-2 rounded-md" src={useThumb} width={200} height={200} alt={alt} />
					</Link>
					<div className="smalltext">{(typeof label === 'string') ? <div style={{ width: '200px' }} className="grid grid-cols-1">{label?.split(',').map((x: string, key: number) => {
						const exp = expand(x);
						return <div className="break-keep" key={key}>{(typeof exp === 'string') ? removeHTML(exp) : exp}<br /></div>
						})}</div> : label} {media}</div>
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
