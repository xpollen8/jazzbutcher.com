import Header from '@/components/Header';
import FilterPresses, { filterPressByTypeBio } from '@/components/FilterPresses';

const Press = (props: any) => {
	return (<>
		<Header section='bios' />
		<main>
			<FilterPresses title="Band Bios" filter={filterPressByTypeBio} />
		</main>
	</>)
}

export default Press;
