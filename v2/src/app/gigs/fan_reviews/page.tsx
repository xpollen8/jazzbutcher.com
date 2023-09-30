import Header from '@/components/Header';
import FilterPresses, { filterPressByTypeFanGigReview } from '@/components/FilterPresses';

const Press = (props: any) => {
	return (<>
		<Header section='fan_reviews' />
		<main>
			<FilterPresses title="Fans Review Some Gigs" filter={filterPressByTypeFanGigReview} />
		</main>
	</>)
}

export default Press;
