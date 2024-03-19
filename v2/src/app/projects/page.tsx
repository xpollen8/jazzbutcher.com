import Link from 'next/link';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MakeSimpleURI from '@/components/MakeSimpleURI';
import LetterHeader from '@/components/LetterHeader';
import Tag from '@/components/Tag';
import { expand } from '@/lib/defines';

const projects = [
	{ uri: '/projects/black_eg', text: 'The Black Eg', aux: "The brothers Von Dämmerung" },
	{ uri: '/projects/sumosonic', text: 'Sumosonic', aux: "Aka Audio Aquatic" },
	{ uri: '/projects/wilson', text: 'Wilson', aux: "Northampton 'super group'",
		children: <>
		In the early aughts, Pat inadvertently assembled a supergroup - <b>Wilson</b> -
		with ex-Sumosonic members and well known Northampton musicians.
		<b>Wilson</b> layered guitar-riffs and shouty-pop over solid
		sequencing and live percussion. Nearly 100 live shows were played, and a live DVD was
		self-released at the end of a decade-long run.
		</>
	},
];

const inbands = [
	{ uri: '/projects/drones_club', text: 'Drones Club', aux: "Bass for Medieval Drum and Bass band",
		children: <>
			<b>{expand('dronesclub')}</b> started in 2014 in a medieval pub in Northampton.
			{expand('pat')} joining on bass resulted in what’s been described as a Medieval Drum
			and Bass sound combined with Hendrix style Bagpipes.
		</>
		},
	{ uri: '/projects/stranger_tractors', text: "Stranger Tractors", aux: "Drums for Curtis E. Johnson's group" },
];

const collaborations = [
	{ uri: '/releases/collaboration_cambodia', text: 'Cambodia', aux: "w/Cole Coonce" },
	{ uri: '/releases/project_vaguely_familiar', text: 'Vaguely Familiar', aux: "w/Richard Formby + Sumishta Brahm"  },
	{ uri: '/releases/collaboration_trampling_tokyo', text: "With Alan Moore", aux: "'Trampling Tokyo', 'London'" },
];

const live = [
	{ uri: '/projects/the_undertakers', text: "The Undertakers", aux: "Unrehearsed covers, live",
		children: <>
		Formed as the house band of Slurp&apos;s Bar, Northampton,
		<b>The Undertakers</b> feature {expand('pat')}, {expand('mark_refoy')} and {expand('jonny_mattock')} ({expand('space')},
		Spiritualized), and Tim Harris (Everything But The Girl, Doctor Didg).
		They don&apos;t rehearse, they only play covers (Can, Velvets, Creedence, Kraftwerk, Plastic Ono Band, etc),
		and a total of about 43 people have ever seen them play live.
		</>
	},
	{ uri: '/gigs/2006/Jul27', text: "Prime Evils", aux: "Pat on Bass, with Joe Woolley and Jonny Mattock", },
];

const contributions = [
	{ text: 'David J - Crocodile Tears & The Velvet Cosh (LP, 1985)', aux: 'Flute', },
	{ text: 'Blue Moods turning Tail (EP 1986)', aux: 'glockenspiel', },
	{ text: 'On Glass (LP 1986)', aux: 'Glockenspiel, vocals', },
	{ text: 'Venus Fly Trap - Rocket USA (single, 1989)', aux: 'Tenor sax', },
	{ text: 'M Walking on the Water - Pluto (LP, 1989)', aux: 'Vocals', },
	{ text: 'Blue Aeroplanes - Beatsongs (LP 1991)', aux: 'Vocals', },
	{ text: 'Up in a Down World (EP 1993)', aux: 'Vocals, co-writing credit on "Meantime"', },
	{ text: 'Rough Music (LP 1994)', aux: 'Guitar, organ, co-writing credit on "Whatever Happened to our Golden Birds?"', },
	{ text: 'Spacemen 3 - Recurring (LP 1990)', aux: 'Tenor sax, flute', },
	{ text: 'Sonic Boom - Spectrum (LP 1989)', aux: 'Finger pops, vocals', },
	{ text: 'Spectrum - Soul Kiss (Glide Divine) (LP, 1992)', aux: 'Tenor sax', },
	{ text: 'Indian Summer (single, 1993)', aux: 'Electric guitar', },
	{ text: 'Dave Kusworth & The Bounty Hunters - All the Heartbreak Stories (LP, 1991)', aux: 'Flute, tenor sax', },
	{ text: 'Chelsea Paris - Tramway (LP 1992)', aux: 'Guitar, vocals', },
	{ text: 'The Field Trip - Take to the Streets (EP, 1993)', aux: 'Tenor sax', },
	{ text: 'The Black Watch - Jiggery-Pokery (LP, 2002)', aux: 'Vocals', },
	{ uri: '/projects/stranger_tractors', text: 'Stranger Tractors - Vibration (CD single, 1995)', aux: 'Drums, vocals', },
	{ uri: '/releases/va_canyoutalktothedude_2', text: "Four One And Only's - Holy (LP, 1996)", aux: "Vocals for 'The U.F.O. Man'", },
	{ text: 'The Purelove - King Pop (Marsh Marigold Records, 1997)', aux: 'Guitar', },
	{ text: 'The Purelove - Live (1997 tour of Germany)', aux: 'Guitar', },
	{ text: 'Shorty - The Bridge Over The River Nene (2020)', aux: 'Electric Guitar', uri: 'https://www.youtube.com/embed/75mdACIrqww'},
];

const producer = [
	{ text: "Love Ambassadeux - Black Mischief", aux: "(single, Rumpo Records, 1985)", },
	{ text: "13 Frightened Girls - Lost at Sea", aux: '(3 track 12", Foundation, 1991)', },
	{ text: "Venus Fly Trap - Pandora's Box", aux: "(LP, Danceteria 1992)", },
	{ text: "Chelsea Paris - Tramway", aux: "(LP, Virgin France, 1992)", },
];

const other = [
	{ uri: '/projects/masters_of_budvar', text: 'The Masters of Budvar', aux: "Pat's hosted music series" },
	{ uri: '/projects/bookstore', text: "Pat's Bookstore" },
];

const meta = [
			{ title: "Musical Side Projects", subhead: "Where Pat is the guiding force", data: projects },
			{ title: "In Others' Bands", subhead: "Where Pat is a musician in another's group", data: inbands },
			{ title: "Pub Bands", subhead: "Where Pat plays in live bands with friends", data: live },
			{ title: "Collaborations", subhead: "Project-based, small group/collaborative efforts", data: collaborations },
			{ title: "Contributions", subhead: "As a producer, studio musician/one-time efforts", data: contributions },
			{ title: "Producer", data: producer },
			{ title: "Other Substantial Efforts", data: other },
];

const Project = () => 
<>
	<Header section="projects" />
		<main>
			{meta.map((m: any, key: number) => {
				return <div key={key} className="mt-5">
					<Tag>{m.title} {(m.subhead) && <span className="smalltext">- {m.subhead}</span>}</Tag>
						<p />
					<div className="listItem">
						{m.data.map(MakeSimpleURI)}
					</div>
				</div>
			})}
		</main>
	<Footer />
</>

export default Project;
