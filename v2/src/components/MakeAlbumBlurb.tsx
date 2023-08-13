import { Credit, Contribution } from './GenericWeb';
import FeaturedItem from './FeaturedItem';

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
}: {
	type?: string
	href?: string
	title?: string
	thumb?: string
	blurb?: string
	year?: string
	buy?: string
	project?: string
	lookup?: string
	label?: string
	catalog?: string
	media?: string
	country?: string
	credit_g?: string
	credit_u?: string
	credit_d?: string
	contribution?: string
	children?: string | React.ReactElement
}) => {
	if (!title) return <></>;
	return (
		<>
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
		</>
	)
}

export default MakeAlbumBlurb;
