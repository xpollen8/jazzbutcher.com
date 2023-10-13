import Header from '@/components/Header';
import FilterPresses, { filterPressByTypePatGigReview } from '@/components/FilterPresses';

const Press = (props: any) => {
	return (<>
		<Header section='self_reviews' />
		<main>
			<FilterPresses filter={filterPressByTypePatGigReview} />
		</main>
	</>)
}

export default Press;
