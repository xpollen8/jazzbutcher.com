import Link from 'next/link';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MakeSimpleURI from '@/components/MakeSimpleURI';
import LetterHeader from '@/components/LetterHeader';
import Tag from '@/components/Tag';
import { expand } from '@/lib/defines';

const music_projects = [
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

const with_others = [
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
	{ uri: 'releases/va_canyoutalktothedude_2', text: "Four One And Only's", aux: "Vocals for 'The U.F.O. Man'", },
	{ uri: '/projects/cambodia', text: 'Cambodia', aux: "w/Cole Coonce" },
	{ uri: '/projects/vaguely_familiar', text: 'Vaguely Familiar', aux: "w/Richard Formby + Sumishta Brahm"  },
	{ uri: '/releases/trampling_tokyo', text: "With Alan Moore", aux: "The 'Trampling Tokyo' single" },
	{ uri: '/projects/the_undertakers', text: "The Undertakers", aux: "Unrehearsed covers, live",
		children: <>
		Formed as the house band of Slurp&apos;s Bar, Northampton,
		<b>The Undertakers</b> feature {expand('pat')}, {expand('mark_refoy')} and {expand('jonny_mattock')} ({expand('space')},
		Spiritualized), and Tim Harris (Everything But The Girl, Doctor Didg).
		They don&apos;t rehearse, they only play covers (Can, Velvets, Creedence, Kraftwerk, Plastic Ono Band, etc),
		and a total of about 43 people have ever seen them play live.
		</>
	},
	{ uri: '/projects/prime_evils', text: "Prime Evils", aux: <>Bass, Joe Woolley and Jonny Mattock (ref: <Link href='/gigs/2006/Jul27'>2006-07-27</Link>)</> },
];

const other = [
	{ uri: '/projects/masters_of_budvar', text: 'The Masters of Budvar', aux: "Pat's hosted music series" },
	{ uri: '/projects/bookstore', text: "Pat's Bookstore" },
];

const Project = () => 
<>
	<Header section="projects" />
		<main>
		<LetterHeader title="Music Side Projects" subhead="Pat-driven music groups" />
		{music_projects.map(MakeSimpleURI)}
		<LetterHeader title="Music With Others" subhead="Pat in other groups" />
		{with_others.map(MakeSimpleURI)}
		<LetterHeader title="Short Collaborations" subhead="one-offs and projects-based efforts" />
		{collaborations.map(MakeSimpleURI)}
		<LetterHeader title="Not necessarily music" />
		{other.map(MakeSimpleURI)}
<Tag>Productions</Tag>
<ol style={{ marginLeft: '10px' }} className="listItem">
	<li>Love Ambassadeux - Black Mischief (single, Rumpo Records, 1985)</li>
	<li>13 Frightened Girls - Lost at Sea (3 track 12", Foundation, 1991)</li>
	<li>Venus Fly Trap - Pandora's Box (LP, Danceteria 1992)</li>
	<li>Chelsea Paris - Tramway (LP, Virgin France, 1992)</li>
	</ol>
	<Tag>Contributions</Tag>
	<ol style={{ marginLeft: '10px' }} className="listItem ml-5">
	<li>David J - Crocodile Tears & The Velvet Cosh (LP, 1985) - Flute</li>
	<li>Blue Moods turning Tail (EP 1986) - glockenspiel</li>
	<li>On Glass (LP 1986) - Glockenspiel, vocals</li>
	<li>Venus Fly Trap - Rocket USA (single, 1989) - Tenor sax</li>
	<li>M Walking on the Water - Pluto (LP, 1989) - Vocals</li>
	<li>Blue Aeroplanes - Beatsongs (LP 1991) - Vocals</li>
	<li>Up in a Down World (EP 1993) - Vocals, co-writing credit on "Meantime"</li>
	<li>Rough Music (LP 1994) - Guitar, organ, co-writing credit on "Whatever Happened to our Golden Birds?"</li>
	<li>Spacemen 3 - Recurring (LP 1990) - Tenor sax, flute</li>
	<li>Sonic Boom - Spectrum (LP 1989) - Finger pops, vocals</li>
	<li>Spectrum - Soul Kiss (Glide Divine) (LP, 1992) - Tenor sax</li>
	<li>Indian Summer (single, 1993) - Electric guitar</li>
	<li>Dave Kusworth & The Bounty Hunters - All the Heartbreak Stories (LP, 1991) - Flute, tenor sax</li>
	<li>Chelsea Paris - Tramway (LP 1992) - Guitar, vocals</li>
	<li>The Field Trip - Take to the Streets (EP, 1993) - Tenor sax</li>
	<li>The Black Watch - Jiggery-Pokery (LP, 2002) - Vocals (listen@youtube)</li>
	<li>The Four One And Only's - Holy (LP, 1996) - Vocals</li>
	<li>Stranger Tractors - Vibration (CD single, 1995) - Drums, vocals</li>
	<li>The Purelove - King Pop (Marsh Marigold Records, 1997) - Guitar</li>
	<li>The Purelove - Live (1997 tour of Germany): Guitar</li>
</ol>
		</main>
	<Footer />
</>

export default Project;
