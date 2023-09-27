import Link from 'next/link';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MakeSimpleURI from '@/components/MakeSimpleURI';
import LetterHeader from '@/components/LetterHeader';
import { expand } from '@/lib/defines';

const music_projects = [
	{ uri: '/project/black_eg', text: 'The Black Eg', aux: "The brothers Von Dammerung" },
	{ uri: '/project/sumosonic', text: 'Sumosonic', aux: "Aka Audio Aquatic" },
	{ uri: '/project/wilson', text: 'Wilson', aux: "Northampton 'super group'",
		children: <>
		In the early aughts, Pat inadvertently assembled a supergroup - <b>Wilson</b> -
		with ex-Sumosonic members and well known Northampton musicians.
		<b>Wilson</b> layered guitar-riffs and shouty-pop over solid
		sequencing and live percussion. Nearly 100 live shows were played, and a live DVD was
		self-released at the end of a decade-long run.
		</>
	},
];

const with_others = [
	{ uri: '/project/drones_club', text: 'Drones Club', aux: "Bass for Medieval Drum and Bass band",
		children: <>
			<b>{expand('dronesclub')}</b> started in 2014 in a medieval pub in Northampton.
			{expand('pat')} joining on bass resulted in what’s been described as a Medieval Drum
			and Bass sound combined with Hendrix style Bagpipes.
		</>
		},
	{ uri: '/project/stranger_tractors', text: "Stranger Tractors", aux: "Drums for Curtis E. Johnson's group" },
];

const collaborations = [
	{ text: "Four One And Only's", aux: "Vocals for 'The U.F.O. Man'",
		children: <>
			In 1994, Pat provided voice on a Jonathan Richman track backed by
			the Dutch group &quot;Four One And Only&apos;s&quot;. This track appeared on two
			different Jonathan Richman tribute albums:
			<Link href="/releases/va_canyoutalktothedude_1">Can You Talk To The Dude? #1</Link>
			and
			<Link href="/releases/va_canyoutalktothedude_2">Can You Talk To The Dude? #2</Link>
		</>
	},
	{ uri: '/project/cambodia', text: 'Cambodia', aux: "w/Cole Coonce" },
	{ uri: '/project/vaguely_familiar', text: 'Vaguely Familiar', aux: "w/Richard Formby + Sumishta Brahm"  },
	{ uri: '/project/trampling_tokyo', text: "With Alan Moore", aux: "The 'Trampling Tokyo' single" },
	{ uri: '/project/the_undertakers', text: "The Undertakers", aux: "Unrehearsed covers, live",
		children: <>
		Formed as the house band of Slurp&apos;s Bar, Northampton,
		<b>The Undertakers</b> feature {expand('pat')}, {expand('mark_refoy')} and {expand('jonny_mattock')} ({expand('space')},
		Spiritualized), and Tim Harris (Everything But The Girl, Doctor Didg).
		They don&apos;t rehearse, they only play covers (Can, Velvets, Creedence, Kraftwerk, Plastic Ono Band, etc),
		and a total of about 43 people have ever seen them play live.
		</>
	},
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
