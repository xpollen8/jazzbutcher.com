import { Credit, Contribution } from './GenericWeb';
import FeaturedItem from './FeaturedItem';
import { ReleaseType, ReleaseTypeWithChildren } from './Release';

// TODO - make use of more of these fields!
const MakeAlbumBlurb = ({
	type,
	href,
	title,
	thumb,
	blurb,
	year,
	buy,
	project,
	lookup,
	label,
	catalog,
	media,
	country,
	credit_g,
	credit_u,
	credit_d,
	contribution,
	children,
}: ReleaseTypeWithChildren, key: number | undefined) => {
	if (!title) return <></>;
	return (
		<div key={key || 0}>
			<FeaturedItem
				link={href}
				buy={buy}
				title={title}
				image={thumb}
				alt={`${title} cover`}
			>
				<>
					<Contribution titles={contribution} />
					{(blurb) && <div dangerouslySetInnerHTML={{__html: blurb }} />}
					<Credit g={credit_g} u={credit_u} d={credit_d} />
					{children}
				</>
			</FeaturedItem>
		</div>
	)
}

export default MakeAlbumBlurb;
