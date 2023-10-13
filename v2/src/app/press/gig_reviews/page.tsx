import Header from '@/components/Header';
import FilterPresses, { filterPressByTypeGigReview } from '@/components/FilterPresses';

const Press = (props: any) => {
	return (<>
		<Header section='gig_reviews' />
		<main>
			<FilterPresses filter={filterPressByTypeGigReview} />
		</main>
	</>)
}

export default Press;
