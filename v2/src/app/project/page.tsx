import Link from 'next/link';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MakeSimpleURI from '@/components/MakeSimpleURI';
import LetterHeader from '@/components/LetterHeader';

const music_projects = [
	{ uri: '/project/black_eg', text: 'The Black Eg', aux: "The brothers Von Dammerung" },
	{ uri: '/project/sumosonic', text: 'Sumosonic', aux: "Aka Audio Aquatic" },
	{ uri: '/project/wilson', text: 'Wilson', aux: "Northampton 'super group'" },
];

const with_others = [
	{ uri: '/project/drones_club', text: 'Drones Club', aux: "Bass for Medieval Drum and Bass band" },
	{ uri: '/project/stranger_tractors', text: "Stranger Tractors", aux: "Drums for Curtis E. Johnson's group" },
];

const collaborations = [
	{ uri: '/project/cambodia', text: 'Cambodia', aux: "w/Cole Coonce" },
	{ uri: '/project/vaguely_familiar', text: 'Vaguely Familiar', aux: "w/Richard Formby + Sumishta Brahm"  },
	{ uri: '/project/trampling_tokyo', text: "With Alan Moore", aux: "The 'Trampling Tokyo' single" },
	{ uri: '/project/the_undertakers', text: "The Undertakers", aux: "Unrehearsed covers, live" },
	{ uri: '/project/prime_evils', text: "Prime Evils", aux: <>Bass, Joe Woolley and Jonny Mattock (ref: <Link href='/gigs/2006/Jul27'>2006-07-27</Link>)</> },
];

const other = [
	{ uri: '/project/masters_of_budvar', text: 'The Masters of Budvar', aux: "Pat's hosted music series" },
	{ uri: '/project/bookstore', text: "Pat's Bookstore" },
];

const Project = () => 
<>
	<Header section="project" />
		<LetterHeader title="Music Side Projects" subhead="Pat-driven music groups" />
		{music_projects.map(MakeSimpleURI)}
		<LetterHeader title="Music With Others" subhead="Pat in other groups" />
		{with_others.map(MakeSimpleURI)}
		<LetterHeader title="Short Collaborations" subhead="one-offs and project-based efforts" />
		{collaborations.map(MakeSimpleURI)}
		<LetterHeader title="Not necessarily music" />
		{other.map(MakeSimpleURI)}
	<Footer />
</>

export default Project;
