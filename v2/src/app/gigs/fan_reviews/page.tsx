import { Suspense } from "react";
import Header from '@/components/Header';
import FilterPresses, { filterPressByTypeFanGigReview } from '@/components/FilterPresses';

const Press = (props: any) => {
	return (<>
		<Header section='fan_reviews' />
		<main>
			<Suspense>
				<FilterPresses filter={filterPressByTypeFanGigReview} />
			</Suspense>
		</main>
	</>)
}

export default Press;
