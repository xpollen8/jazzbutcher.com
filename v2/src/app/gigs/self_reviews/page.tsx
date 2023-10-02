import Header from '@/components/Header';
import FilterPresses, { filterPressByTypePatGigReview } from '@/components/FilterPresses';

const Press = (props: any) => {
	return (<>
		<Header section='self_reviews' />
		<main>
			<FilterPresses title="Pat Reviews Some Gigs" filter={filterPressByTypePatGigReview} />
		</main>
	</>)
}

export default Press;
