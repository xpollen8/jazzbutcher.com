import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EmbedMedia from '@/components/EmbedMedia';
import LetterHeader from '@/components/LetterHeader';

const items = [
	{ data: {
		mediaurl: "https://www.mixcloud.com/FrenchSpurs1/retropopic-632-pat-fish-1957-2021-a-story-of-my-life/",
		title: "RETROPOPIC 632 - PAT FISH (1957-2021): 'A STORY OF MY LIFE....'",
		datetime: "2021-10-10",
		},
		children:
		<>
			The Jazz Butcher Conspiracy, over two hours Pat Fish tells The Saint of RETROPOPIC RADIO his life&apos;s story....
		</>
	},

	{ data: {
		mediaurl: "https://soundcloud.com/spacemenpod/spacemen-pod-episode-7",
		title: "Spacemen Pod Episode 7",
		datetime: "2022-01-11",
		},
		children:
		<>
			In this episode, we walk with Jesus as we discuss one of Spacemen 3&apos;s most famous songs. Ian and Mark disect the many recorded versions, and are joined by Pat Fish of The Jazz Butcher for a chat about a couple of versions where Pat supplied vocals. Plus contributions from a few other fans for which this is a favourite song.
		</>
	},

	{ data: {
		mediaurl: "https://soundcloud.com/spacemenpod/spacemen-pod-episode-8",
		title: "Spacemen Pod Episode 8",
		datetime: "2021-12-30",
		},
		children:
		<>
			We take a look back at Spacemen 3&apos;s performance at Watermans Arts Centre from 19 August 1988, the gig everyone now calls Dreamweapon. With contributions from Spaceman for the night Steve Evans, bassist Will Carruthers, taper Andy Jackson, Vinita Joshi of Rocket Girl Records, Steve Mitchell of Fierce Recordings, attendees Col Todd and Paul Thorpe from the band The Loveblobs, latter-day Spaceman Mark Refoy, and the late, great, Pat Fish.
		</>
	},
];

const AudioElsewhere = () => {
	return (<>
		<Header section="elsewhere" />
		<main>
			<LetterHeader title="Audio online" subhead="not yet archived here" />
			{items.map((props: any) => <div className="listItem"><EmbedMedia data={props.data}><blockquote>{props.children}</blockquote></EmbedMedia></div>)}
		</main>
		<Footer />
	</>)
}

export default AudioElsewhere;
