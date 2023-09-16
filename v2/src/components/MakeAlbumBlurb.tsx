import { Credit, Contribution } from './GenericWeb';
import FeaturedItem from './FeaturedItem';
import { ReleaseType, ReleaseTypeWithChildren } from './Release';
import { parseCredit } from '@/lib/macros';

// TODO - make use of more of these fields!
const MakeAlbumBlurb = ({
	type,
	href,
	title,
	thumb,
	blurb,
	dtreleased,
	dtrecorded,
	studio,
	buy,
	project,
	lookup,
	label,
	catalog,
	media,
	country,
	credit: blurb_credit,
	contribution,
	children,
}: ReleaseTypeWithChildren, key: number | undefined) => {
	if (!title) return <></>;
	const { credit, crediturl, creditdate, creditcaption } = parseCredit(blurb_credit);
	return (
		<div key={key || 0}>
			<FeaturedItem
				className={`w-full gig_${project}`}
				link={href}
				media={media}
				label={label}
				buy={buy}
				title={title}
				image={thumb}
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
