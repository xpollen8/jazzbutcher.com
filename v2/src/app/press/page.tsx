import Link from 'next/link';

import Header from '@/components/Header';
import SectionOptions from '@/components/SectionOptions';
//import PressItems from '@/components/PressItems';
import FilterPresses from '@/components/FilterPresses';

const Lsections = [
	{ uri: '/press/interviews', text: 'Published Interviews' },
	{ uri: '/press/reviews/gig', text: 'Published Gig Reviews' },
	{ uri: '/press/albums', text: 'Published Album Reviews' },
	{ uri: '/press/obits', text: 'Published Rememberences' },
	{ uri: '/press/promos', text: 'JBC Promotional Material and Bios' },
	{ uri: '/press/reviews/fan', text: "'I Was There' Gig Reviews" },
	{ uri: '/writings/albums', text: "Pat Reviews His Albums" },
	{ uri: '/writings/gigs', text: "Pat Reviews His Gigs" },
	{ uri: '/writings', text: "Pat Reviews Other Things" },
	{ uri: '/press/audio', text: 'Audio Interviews', aux: "radio and online" },
	{ uri: '/press/black_eg', text: 'Press for Black Eg' },
	{ uri: '/press/wilson', text: 'Press for Wilson' },
	{ uri: '/press/sumosonic', text: 'Press for Sumosonic' },
];

const Press = (props: any) => {
	return (<>
		<Header section='press' />
		<main>
			<SectionOptions section='press' />
			<FilterPresses />
			{/*<PressItems />*/}
		</main>
	</>)
}

export default Press;
