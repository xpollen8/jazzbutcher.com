import { Attribution, Contribution } from './GenericWeb';
import FeaturedItem from './FeaturedItem';
import { type ReleaseType, type ReleaseTypeWithChildren } from './Release';
import { truncAt, parseCaptionsSourcesEtc } from '@/lib/utils';
import { expand } from '@/lib/defines';

const MakeAlbumBlurb = (props: ReleaseTypeWithChildren, key: number | undefined) => {
	const { type, href, title, thumb, blurb, dtreleased, dtrecorded, studio, buy, lookup,
		label, catalog, media, country, contribution, children, inPage=false } = props; 
	const parsed_blurb = parseCaptionsSourcesEtc(blurb) || [];
	const blurb0 = parsed_blurb[0] || [];
	const [ blurb_text, blurb_credit, blurb_crediturl, blurb_creditdate ] = blurb0;

	if (!title) return <></>;
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
					{(blurb_text) && <div dangerouslySetInnerHTML={{__html: blurb_text}} />}
					{(blurb_credit) && <Attribution g={blurb_credit} u={blurb_crediturl} d={blurb_creditdate} />}
					{children}
				</>
			</FeaturedItem>
		</div>
	)
}

export default MakeAlbumBlurb;
