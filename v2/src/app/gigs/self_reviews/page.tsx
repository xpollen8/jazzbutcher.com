import { Suspense } from "react";
import Header from '@/components/Header';
import FilterPresses, { filterPressByTypePatGigReview } from '@/components/FilterPresses';

const Press = (props: any) => {
	return (<>
		<Header section='self_reviews' />
		<main>
			<Suspense>
				<FilterPresses filter={filterPressByTypePatGigReview} />
			</Suspense>
		</main>
	</>)
}

export default Press;
