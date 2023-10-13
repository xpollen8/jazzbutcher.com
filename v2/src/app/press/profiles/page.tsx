import Header from '@/components/Header';
import FilterPresses, { filterPressByTypeProfile } from '@/components/FilterPresses';

const Press = (props: any) => {
	return (<>
		<Header section='profiles' />
		<main>
			<FilterPresses filter={filterPressByTypeProfile} />
		</main>
	</>)
}

export default Press;
