import Header from '@/components/Header';
import SectionOptions from '@/components/SectionOptions';
import FilterPresses from '@/components/FilterPresses';

const Press = (props: any) => {
	return (<>
		<Header section='press' />
		<main>
			<SectionOptions section='press' />
			<FilterPresses title="All Press" />
		</main>
	</>)
}

export default Press;
