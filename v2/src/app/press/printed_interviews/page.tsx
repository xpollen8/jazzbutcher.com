import Header from '@/components/Header';
import FilterPresses, { filterPressByTypeInterview } from '@/components/FilterPresses';

const Press = (props: any) => {
	return (<>
		<Header section='printed_interviews' />
		<main>
			<FilterPresses filter={filterPressByTypeInterview} />
		</main>
	</>)
}

export default Press;
