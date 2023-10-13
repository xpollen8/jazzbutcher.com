import Header from '@/components/Header';
import SectionOptions from '@/components/SectionOptions';
import FilterPresses from '@/components/FilterPresses';

const Press = (props: any) => {
	return (<>
		<Header section='press' />
		<main>
			<FilterPresses />
		</main>
	</>)
}

export default Press;
