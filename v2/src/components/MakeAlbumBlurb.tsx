import { Credit, Contribution } from './GenericWeb';
import FeaturedItem from './FeaturedItem';
import { type ReleaseType, type ReleaseTypeWithChildren } from './Release';
import { truncAt, parseCredit } from '@/lib/utils';
import { expand } from '@/lib/defines';

const MakeAlbumBlurb = (props: ReleaseTypeWithChildren, key: number | undefined) => {
	const { type, href, title, thumb, blurb, dtreleased, dtrecorded, studio, buy, lookup,
		label, catalog, media, country, contribution, children, inPage=false } = props; 
	const blurb_credit = props?.credit;

	if (!title) return <></>;
	const { credit, crediturl, creditdate, creditcaption } = parseCredit(blurb_credit);
	return (
		<div key={key || 0}>
			<FeaturedItem
				className={`w-full`}
				link={inPage ? undefined : href}
				media={media !== 'NULL' ? media : ''}
				label={label}
				buy={buy}
				title=<>{title} {(type?.includes('demo')) ? <span className="smalltext">(Demo)</span> : ''}</>
				image={truncAt(';;', thumb || '')}
				alt={`${title} cover`}
			>
					<>
					<Contribution titles={contribution} />
					{(blurb) && <div dangerouslySetInnerHTML={{__html: blurb }} />}
					<Credit g={credit} u={crediturl} d={creditdate} />
					{children}
					</>
			</FeaturedItem>
		</div>
	)
}

export default MakeAlbumBlurb;
