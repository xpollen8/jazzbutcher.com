import { Suspense } from "react";
import Header from '@/components/Header';
import FilterPresses, { filterPressByTypeRetrospective } from '@/components/FilterPresses';

const Press = (props: any) => {
	return (<>
		<Header section='retrospectives' />
		<main>
			<Suspense>
				<FilterPresses filter={filterPressByTypeRetrospective} />
			</Suspense>
		</main>
	</>)
}

export default Press;
