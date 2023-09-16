import { Credit, Contribution } from './GenericWeb';
import FeaturedItem from './FeaturedItem';
import { ReleaseType, ReleaseTypeWithChildren } from './Release';
import { parseCredit } from '@/lib/macros';
import { expand } from '@/lib/defines';

const truncAt = (chop: string, str: string) => {
	const [ ret ] = str?.split(chop);
	return ret || str;
}

const MakeAlbumBlurb = (props: ReleaseTypeWithChildren, key: number | undefined) => {
	const { type, href, title, thumb, blurb, dtreleased, dtrecorded, studio, buy, project, lookup,
		label, catalog, media, country, contribution, children, } = props; 
	const blurb_credit = props?.credit;

	if (!title) return <></>;
	const { credit, crediturl, creditdate, creditcaption } = parseCredit(blurb_credit);
	return (
		<div key={key || 0}>
			<FeaturedItem
				className={`w-full gig_${project}`}
				link={href}
				media={media}
				label={expand(label)}
				buy={buy}
				title={title}
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
