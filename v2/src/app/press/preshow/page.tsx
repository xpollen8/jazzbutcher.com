import Header from '@/components/Header';
import FilterPresses, { filterPressByTypePreshow } from '@/components/FilterPresses';

const Press = (props: any) => {
	return (<>
		<Header section='preshow' />
		<main>
			<FilterPresses filter={filterPressByTypePreshow} />
		</main>
	</>)
}

export default Press;
