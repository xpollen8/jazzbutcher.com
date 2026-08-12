import { Suspense } from "react";
import Header from '@/components/Header';
import FilterPresses, { filterPressByTypePreshow } from '@/components/FilterPresses';

const Press = (props: any) => {
	return (<>
		<Header section='preshow' />
		<main>
			<Suspense>
				<FilterPresses filter={filterPressByTypePreshow} />
			</Suspense>
		</main>
	</>)
}

export default Press;
