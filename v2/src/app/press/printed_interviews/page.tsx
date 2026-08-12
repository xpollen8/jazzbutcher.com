import { Suspense } from "react";
import Header from '@/components/Header';
import FilterPresses, { filterPressByTypeInterview } from '@/components/FilterPresses';

const Press = (props: any) => {
	return (<>
		<Header section='printed_interviews' />
		<main>
			<Suspense>
				<FilterPresses filter={filterPressByTypeInterview} />
			</Suspense>
		</main>
	</>)
}

export default Press;
