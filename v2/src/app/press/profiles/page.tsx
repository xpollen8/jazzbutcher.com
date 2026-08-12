import { Suspense } from "react";
import Header from '@/components/Header';
import FilterPresses, { filterPressByTypeProfile } from '@/components/FilterPresses';

const Press = (props: any) => {
	return (<>
		<Header section='profiles' />
		<main>
			<Suspense>
				<FilterPresses filter={filterPressByTypeProfile} />
			</Suspense>
		</main>
	</>)
}

export default Press;
