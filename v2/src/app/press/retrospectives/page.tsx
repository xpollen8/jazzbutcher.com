import Header from '@/components/Header';
import FilterPresses, { filterPressByTypeRetrospective } from '@/components/FilterPresses';

const Press = (props: any) => {
	return (<>
		<Header section='retrospectives' />
		<main>
			<FilterPresses filter={filterPressByTypeRetrospective} />
		</main>
	</>)
}

export default Press;
