import { Suspense } from "react";
import Header from '@/components/Header';
import SectionOptions from '@/components/SectionOptions';
import FilterPresses from '@/components/FilterPresses';

const Press = (props: any) => {
	return (<>
		<Header section='press' />
		<main>
			<Suspense>
				<FilterPresses />
			</Suspense>
		</main>
	</>)
}

export default Press;
