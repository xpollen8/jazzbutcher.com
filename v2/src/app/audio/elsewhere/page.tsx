import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EmbedMedia from '@/components/EmbedMedia';
import { Source } from '@/components/GenericWeb';
import { dateDiff } from '@/lib/utils';
import Tag from '@/components/Tag';

const podcasts = [
		{
			mediaurl: "https://www.mixcloud.com/SharonLouise/05-11-2021-special-guest-pat-fish-aka-the-jazz-butcher-tribute-replay-originally-07-12-2018/",
			title: "05 11 2021 Special guest Pat Fish - aka The Jazz Butcher Tribute replay (originally 07 12 2018)",
			datetime: "2021-11-05",
			children: <>
			05 11 2021 The Weekend Warm Up.
			Special guest Pat Fish - aka The Jazz Butcher.
			Tribute replay (originally aired 07 12 2018) on Beat Route Radio.
			</>
		},
		{
			mediaurl: "https://www.mixcloud.com/darrenharte/archive-interview-with-pat-fish-on-darren-hartes-hfm-radio-show-in-september-2018/",
			title: "Archive interview with Pat Fish on Darren Harte's HFM Radio Show in September 2018",
			datetime: "2018-09",
			children: <>
			</>
		},
		{
			mediaurl: "https://podomatic.com/embed/html5/episode/6738834",
			title: "Jughead's Basement, Episode 10 - The Jazz Butcher's A Scandal in Bohemia",
			datetime: "2013-11-06",
			children: <>
				In this episode, John cuts deep into the Jazz Butcher&apos;s 1984 album, A Scandal In Bohemia. Featuring interviews with band members, Pat Fish, Max Eider, Owen Jones, and David J.
			</>
		},
		{
			mediaurl: "https://podomatic.com/embed/html5/episode/10011300",
			title: "GYYP GNOP - Episode -6 Pat Fish The Jazz Butcher",
			datetime: "2021-04-16",
			children: <>
				Greg and Chris visit with the Jazz Butcher himself, Pat Fish. Pat reminisces about the Jazz Butcher Conspiracy and the new Solo project.
			</>
		},
		{
			mediaurl: "https://www.mixcloud.com/FrenchSpurs1/retropopic-205-pat-fish-early-days-to-jazz-butchers-first-release-in-bath-of-bacon/",
			title: "RETROPOPIC 205 - PAT FISH: EARLY DAYS TO JAZZ BUTCHER'S FIRST RELEASE 'IN BATH OF BACON'",
			datetime: "2019",
			children: <>
				What was Pat&apos;s childhood like? How did he get on at school? What guitar music inspired him growing up? In what unusual way did he learn to play the guitar? What are his memories of meeting Max Eider? How were the names Pat Fish, Max Eider & The Jazz Butcher arrived at?
			</>
		},
		{
			mediaurl: "https://www.mixcloud.com/FrenchSpurs1/retropopic-315-pat-fish-the-jazz-butcher-talks-london-calling/",
			title: "RETROPOPIC 315 - PAT FISH, THE JAZZ BUTCHER TALKS &apos;LONDON CALLING&apos;",
			datetime: "2019",
			children: <>
				Singer-songwriter Pat Fish talks to The Saint of RETROPOPIC RADIO about his deep appreciation of The Clash&apos;s album &apos;London Calling&apos;.
				<p />
				Why was he so disappointed by &apos;Give &apos;Em Enough Rope&apos;? What are his memories of first hearing the album? Which are his favorite songs? What does he think was The Clash&apos;s manifesto on &apos;London Calling&apos;? Why was the album so important?
			</>,
		},
		{
			mediaurl: "https://www.mixcloud.com/FrenchSpurs1/retropopic-632-pat-fish-1957-2021-a-story-of-my-life/",
			title: "RETROPOPIC 632 - PAT FISH (1957-2021): 'A STORY OF MY LIFE....'",
			datetime: "2021-10-10",
			children: <>
				The Jazz Butcher Conspiracy, over two hours Pat Fish tells The Saint of RETROPOPIC RADIO his life&apos;s story....
			</>
		},
		{
			mediaurl: "https://www.mixcloud.com/bluebeatpete/the-jazz-butcher-the-vital-hour-radio-show-knon-1989/",
			title: "The Jazz Butcher - The Vital Hour Radio Show KNON 1989",
			datetime: "1989-12-12",
			children: <>
				1 hour of The Jazz Butcher music and facts. From a KNON radio show in 1989
			</>,
		},
		{
			mediaurl: "https://soundcloud.com/spacemenpod/spacemen-pod-episode-7",
			title: "Spacemen Pod Episode 7",
			datetime: "2022-01-11",
			children: <>
				In this episode, we walk with Jesus as we discuss one of Spacemen 3&apos;s most famous songs. Ian and Mark disect the many recorded versions, and are joined by Pat Fish of The Jazz Butcher for a chat about a couple of versions where Pat supplied vocals. Plus contributions from a few other fans for which this is a favourite song.
			</>
		},
		{
			mediaurl: "https://soundcloud.com/spacemenpod/spacemen-pod-episode-8",
			title: "Spacemen Pod Episode 8",
			datetime: "2021-12-30",
			children: <>
				We take a look back at Spacemen 3&apos;s performance at Watermans Arts Centre from 19 August 1988, the gig everyone now calls Dreamweapon. With contributions from Spaceman for the night Steve Evans, bassist Will Carruthers, taper Andy Jackson, Vinita Joshi of Rocket Girl Records, Steve Mitchell of Fierce Recordings, attendees Col Todd and Paul Thorpe from the band The Loveblobs, latter-day Spaceman Mark Refoy, and the late, great, Pat Fish.
			</>
		},
];

const AudioElsewhere = () => {
	return (<>
		<Header section="audio/elsewhere" />
		<main>
		    <Tag>Some podcasts</Tag>    <blockquote>    {podcasts.map((p: any, key: number) => <div key={key} className="listItem"><EmbedMedia data={...p} ><blockquote><i>{p?.children}</i><br /><Source g={p.source} /><br />{dateDiff(p.datetime, '')}</blockquote></EmbedMedia></div>)}
				    </blockquote>
		</main>
		<Footer />
	</>)
}

export default AudioElsewhere;
