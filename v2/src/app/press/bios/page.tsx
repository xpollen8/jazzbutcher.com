import { Suspense } from "react";
import Header from '@/components/Header';
import FilterPresses, { filterPressByTypeBio } from '@/components/FilterPresses';

const Press = (props: any) => {
	return (<>
		<Header section='bios' />
		<main>
			<Suspense>
				<FilterPresses filter={filterPressByTypeBio} />
			</Suspense>
		</main>
	</>)
}

export default Press;
