import Header from '@/components/Header';
import FilterPresses, { filterPressByTypePreshow } from '@/components/FilterPresses';

const Press = (props: any) => {
	return (<>
		<Header section='preshow' />
		<main>
			<FilterPresses title="Pre-show Press" filter={filterPressByTypePreshow} />
		</main>
	</>)
}

export default Press;
