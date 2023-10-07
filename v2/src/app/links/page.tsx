import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MakeSimpleURI from '@/components/MakeSimpleURI';
import LetterHeader from '@/components/LetterHeader';
import { joe_woolley, space, owen, gab, rolo, sonic, curt, iain, bwatch, mercer, wolfi, davidj, pete, max, del } from '@/lib/defines';

const links = [
	{
		uri: "http://www.maxeider.com",
		text: "Max Eider",
		children: <>{max}&apos;s website.  sick and fun and completely necessary.</>,
	},
	{
		uri: "cellartime.info@virgin.net",
		text: "Cellartime",
		children:
			<>
			{pete} has now finished his solo album.
			The act is called Cellartime and the album is called &quot;As It Went Down&quot;.
			Right now folks can get a copy of the CD by sending Crouchy $10:00. Bargain!
			Find out exactly how to pull off this feat of impeccable taste by contacting Pete.
			</>
	},
	{
		uri: "http://www.davidjonline.com",
		text: "David J.",
		children: <>The official website for {davidj}</>,
	},
	{
		uri: "http://www.wolfgangtschegg.de",
		text: "Wolfgang Tschegg",
		children:
			<>
			{wolfi} has wandered online...
			<p />
			Bug him for a copy of any of his records - they are inventive and beautiful.
			</>
	},
	{
		uri: "http://www.tomhall.org.uk",
		text: "Tom Hall",
		children: <>Got this from Di Hall</>,
	},
	{
		uri: "http://www.mickmercer.com",
		text: "Mick Mercer",
		children:
			<>
			{mercer} is one of The Butcher&apos;s favourite journalists and all-round gentleman adventurers
			is flogging all manner of priceless pop pictures for the discerning at
			</>
	},
	{
		uri: "http://www.theblackwatchmusic.com",
		text: "The Black Watch",
		children:
		<>
			I first encountered The Black Watch at the end of the eighties in Los
			Angeles, where they live.
			I can&apos;t recall the connection, though it may have been that very, very,
			very, very, very bad man {iain}, who has been working with them for a long time now. Bless their whimsical
			souls, they call him &quot;Higgledy&quot;.
			<p />
			I got to know the band better during my self-imposed LA exile in 1991. John
			is an astonishingly erudite geezer With A Past, J&apos;Anna is sweet and
			brilliant, and - for one night in September &apos;91 at least - bassist Roger and
			I were going to get married. (This is probably O&apos;Higgins&apos; fault. Suffice to
			say that Roger left the band shortly thereafter and has not been heard from
			again...)
			<p />
			When we played <Link href="/gigs/1992/Jun5">The Roxy in 1992</Link> the Black Watch opened for us, and J&apos;Anna
			joined the JBC with her violin for a version of Racheland. So now you know
			the best musician we ever worked with.
			<p />
			John and J&apos;Anna were in at the death of NN1&apos;s Interwaffle Cafe (home of the
			club that {curt} and I used to run, &quot;Escalation&quot;)
			on New Year&apos;s Eve &apos;98/&apos;99. Despite being assailed by wreathes of smoke and
			menaced by strange natives on every side, they coped bravely and a good time
			was had by all.
			<p />
			The Black Watch keep producing lovely, melodic records and you can find out
			more about these - and even download a copy of John&apos;s novel.
		</>
	},
	{
		uri: "http://www.thepurelove.de/",
		text: "The Purelove",
		children:
			<>
			From Hamburg, Germany -
			Their work found it&apos;s peak in the recordings of
			their debut album &quot;King Pop&quot; in 1996
			supported by their friend and idol Pat Fish aka
			The Jazz Butcher (guitars).
		</>
	},
	{
		uri: "https://hobbu.com",
		text: "Desmond Hobbubu",
		children:
		<>
			Hello, I do not understand.  It must be mistake.
			You have missed my VERY IMPORTANT website.
			</>
	},
	{
		uri: "http://www.lmhr.org.uk",
		text: "Love Music, Hate Racism",
	},
	{
		uri: "http://www.thewarlocks.com",
		text: "The Warlocks",
		children: <>
			Good new rock band alert!
			<p />
			The Warlocks are a fine bunch of drone-rockers from Los Angeles. (The NME thinks they come from San
			Francisco. They do not.)
			They actually <Link href="/gigs/1999/Sep9.html">opened for the JBC at the Troubadour on 9/9/99</Link>,
			but we didn&apos;t get to see much of them that night.
			Last week they came to NN1 and {sonic} and I went to see them. They have really come on, and
			anybody who likes Spacemen 3 is going to dig this band. Sonic even joined them for a couple of
			numbers, doing his feedback thing.
			<p />
			The Warlocks are currently touring the USA with Interpol. Tour dates and a whole lot more at:
			www.thewarlocks.com .
			UK listeners will have to wait until they come back over here in April.
			<p />
			<i>Mon Feb 24 09:12:15 PST 2003</i>
		</>
	},
	{
		uri: "http://www.geocities.com/Nashville/Stage/8818/favorite.htm",
		text: "Stranger Tractors",
		children: <> The band of {curt}</>,
	},
	{
		uri: "http://www.onkel-jose.de",
		text: "Owen Jones",
		children: <>{owen}&apos;s new website</>,
	},
	{
		uri: "http://www.badapplesmusic.com",
		text: "Bad Apples",
		children: <> {rolo}&apos;s new band - drums, double bass, piano and two guitars.</>,
	},
	{
		uri: "http://www.tobermoryweb.co.uk",
		text: "Tobermory",
		children: <>{gab}&apos;s new band, Tobermory, are doing good things, heading out into Germany every once in a while.</>
	},
	{
		uri: "http://www.thesummersite.org",
		text: "Songs For Summer",
		children:
			<>
			A young man from
			California asked me to contribute to a charity compilation album in memory
			<Link href="http://mill.net/dumyhead">of his unfortunate girlfriend</Link> who
			died real young. The money goes to help disadvantaged and abused kids with art projects.
			<p />
			I contributed a track, recorded on Curtis&apos; computer.
			It&apos;s a version of &quot;Indian Summer&quot; as written by the Beat Happening, and
			recorded by Luna and Spectrum.
			The record also features Jonathan Richman, B-52s, Pansy Division, G-Love and
			a bunch of others.  At your favourite online store now!
			</>
	},
	{
		uri: "http://www.nmp-online.co.uk",
		text: "NMP Online",
		children: <>The dope on what&apos;s going on in the NN1 music scene...and the rest</>,
	},
	{
		uri: "http://www.willcarruthers.co.uk",
		text: "Will Curruthers",
		children: <> Homepage of the one-time {space} and Spiritualised bassist with new music to download</>,
	},
	{
		uri: "http://www.racehorse.moonfruit.com",
		text: "The Racehorse",
	},
	{
		uri: "http://slipstreamweb.co.uk",
		text: "Slipstream",
		children:
			<>
			Slipstream have a website going. It is possibly the only place in the world where you can find Wilson
			listed next door to the Pet Shop Boys.
			</>
	},
	{
		uri: "http://www.joewoolley.com",
		text: "Joe Woolley",
		children: <>{joe_woolley}&apos;s new website.</>,
	},
];

const ETC = () => <>
	<Header section='Etc' title="Pat's Recommended Links" />
	<main className="etc">
		<LetterHeader title="Pat's Recommended Links" subhead="Historical Artifact (c. 2003)" />
		{links.map(MakeSimpleURI)}
	</main>
	<Footer />
</>

export default ETC;
