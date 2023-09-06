import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { sweet, richard, dj, cale, green, dooj, paul, lix, strange } from '@/lib/defines';

const Letter = () =>  {
	const title = <><Link href='/letters/19931019'>19Oct93</Link> | NEWS</>
	return ( <>
		<Header section='letters' title={title} />
		<div className="etc">
			<b>NEWS</b> (I know you want it)
			<p />
			I have recorded two tracks with Alan Moore, the comics
			writer.  One is called <i>Trampling Tokyo</i> with music
			by {richard} and words by Alan.  It is a pacific little
			number about how Godzilla is sick of his job and would
			like to retire to Monster Island.  The other is called
			<i>London</i>.  It has music by me and lyrics by Alan
			and is DEEPLY GRIM but ROCKING.  I&apos;m mixing them on saturday.
			I don&apos;t know what will happen to them.  Alan is also
			planning sessions with {dj} and others.
			<p />
			I have a solo gig on <Link href="/gigs/1993/Oct28.html">28th October at <b>The Forum</b></Link> (formerly the <b>Town
			& Country Club</b>) in London.  I&apos;m opening for {cale}.
			I&apos;m on at eight o&apos;clock.  I&apos;m very afraid.  Please come
			and help me out.  Help!
			<p />
			STOP PRESS -  {green} secured for sax and moral support!
			<p />
			The JBC (currently standing at Fish, {dooj}, {paul} and {richard} as {lix} has returned to his Real Group, {strange})
			have two gigs in October.
			We will be at <b>The Racehorse</b> in Northampton on <Link href="/gigs/1993/Oct22.html">Friday 22nd October</Link>.
			Support act is Spittle Rattle, and extraordinary folk-goth-blues
			outfit.  Then we will be playing at the festival in <b>St.
			Quentin</b> in Northen France on <Link href="/gigs/1993/Oct30.html">Saturday 30th October</Link>.
			In November we will be playing dates in
			<Link href="/gigs/1993/Nov19.html">Paris</Link>,
			<Link href="/gigs/1993/Nov13.html">Colmar</Link>
			and elsewhere in France.
			<p />
			Touring in central Europe has been put back to January/February.
			The Germans have, however, now issued {sweet} as a single,
			and we await radio reports.
			<p />
			I have no money, so if anyone has just won a million
			dollars or anything, please send large sums of cash for
			immediate bootleg cassette deluge.
			<p />
			<Image className="float-right" width={250} height={250} alt="[signature]" src="https://jazzbutcher.com/images/19931019/93Oct19_sig.gif" />
			Somebody said something about a second <Link
			href="/gigs/bootlegs.html#petermurphy">Black Eg</Link> album.
			If you send enough money NOW I may still be in a position
			to do something about preventing this AWFUL THING from
			happening.
			<p />
			Survive and thrive, take no truck from the passengers,
			<p />
			<p className="clear_float" />
		</div>
		<Footer />
	</>)
}

export default Letter;
