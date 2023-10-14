import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
	strange, paul, haus,
} from '@/lib/defines';

const Letter = () =>
<>
	<Header section='letters' title={ [ '13Sep94;;/letters/19940913', 'Intro' ]} />
	<main>
		Hello, Boss.
		<p />
		Thanks for writing and keeping me up to date with Internet
		developments here in the Physical World.  All us bog
		people sure does appreciate it, sir...
		<p />
		Actually, I wish I knew a way of getting onto a computer
		so that I could see some of this stuff.  I may even be
		able to access it via a pal at the local college.  We&apos;ll
		see, I guess.  Will anyone recognise me?  Well, that&apos;s for the future.
		<p />
		Here, as normal, is a bunch of stuff in response to what&apos;s
		been on lately, plus various updates.  Life here in Northampton
		has been hectic and enjoyable since the
		<Link href="/letters/94Sep13/gigs.html">Fridge Two series
		of gigs</Link>; the party vibe just didn&apos;t dissipate somehow.
		This has been expensive, exhausting, not particularly
		productive and lots o fun.
		<p />
		I&apos;ve seen {strange} a couple of times (my opinion: Grand/{paul}&apos;s
		opinion: {haus}), played a little bit with my band (see the
		accompanying), formed a formidable desire for Feta cheese
		At All Times Of Day And Night, and some other things
		that I&apos;ve forgotten.  Little Jake is fine.  Kathie remains
		a tower of strength, organisation and Reasonableness. (Also foxy).
		<p />
		Shrike have split up - it all just got too much.  Alan
		is performing and demoing &quot;solo&quot;, with a spot of vocal
		help from Sophie the &apos;cello.  He calls his act Best Ever
		Redemption, which may be overdoing it, but it&apos;s a fair
		title all the same.  Julie Starchild has also been making
		tapes by herself.  I haven&apos;t heard these, but I hear
		they&apos;re smart, so maybe I shall.  Paul and Musical Dave
		and Sophie are headlong into the Ubu Swirl (Hobo Swill)
		thing.  They&apos;ve made a demo and seem quite positive.
		<p />
		<Image className="float-right" width={176} height={176} alt="[signature]" src="https://jazzbutcher.com/images/19940913/94Sep13_sig.gif" />
		(Jake has just caught the Biggest Dragonfly in Europe.)
		<p />
		(And eaten it.)
		<p />
		Kathie sez &quot;Hi&quot;, so do I.
		Hope all is rockin&apos;
		<p className="clear_float" />
	</main>
	<Footer />
</>

export default Letter;
