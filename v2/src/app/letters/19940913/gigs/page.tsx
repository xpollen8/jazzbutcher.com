import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { expand } from '@/lib/defines';

const Letter = () =>
<>
	<Header section='letters' title={ [ '13Sep94;;/letters/19940913', 'Gigs' ] } />
	<main>
		{expand('green')} now fully re-assimilated into live line-up, alongside
		{expand('dooj')}, {expand('gab')}, {expand('hend')} and myself.  Since when we have played:
		<p />
		<Link href="/gigs/1994/Sep.html">
		<b>FESTIVAL ROCK AU MAXIMUM, CLERMONT-FERRAND, FRANCE</b></Link>
		<blockquote>
		Very good.  Big hall, big P.A., big crowd.  Also on the
		bill; The Posies, who all wore dresses, and Nyan Ferties,
		who, being Scots, all wore kilts.  Thus, it was left to the
		JBC to wear the trousers, which we duly did.  Dooj&apos;s were
		exceptional.  {expand('filth')} made its live debut and worked well.
		</blockquote>
		<b>FRIDGE TWO at SLURPS, NORTHAMPTON</b>
		<Link href="/gigs/1994/Aug3.html">
		3 Aug 94</Link>
		<blockquote>
		As detailed already by Matt Cockerill, who had a chat with me that
		evening.  Very enjoyable to be able to put on the whole band
		here in Northampton, and - indeed - the local folks seemed
		glad that we had bothered.  Lots of mad decor out in the
		yard where we played; it looked more &quot;Apocalypse Now!&quot; to
		me, with all the drunks stumbling about in the psychedelic
		half-dark, but I guess early Floyd is pretty cool, too.  A
		deliberately good-natured set, complete with gratuitous {expand('vu')}
		cover right at the top.
		</blockquote>
		<Link href="/gigs/1994/Aug6.html">
		6 Aug 94</Link>
		<blockquote>
		Transambient Communications were billed to open, but
		recording commitments prevented them.  Instead their
		collaborator, Dave Kirby, presented his live sound system.
		On the dark and stormy night, under lights, it was hypnotic.
		{expand('eg')}, on the other hand,
		were just chaotic.
		Amid rumours that {expand('karel')}
		was being impersonated by someone else, and
		confusion as to the origins of the mystery live vocals that
		had no visible source, violence broke out between the
		audience, the promoters, the bar owner, and, eventually, the
		band.  The event closed in confusion, during which it was
		observed that neither the brothers, not any member of the
		JBC could be found.  We were here getting pissed.
		</blockquote>
		<b>THE BORDERLINE, LONDON ENGLAND</b>
		<Link href="/gigs/1994/Aug17.html">
		<br />17 Aug 94</Link>
		<blockquote>
		JBC in business success shock horror!  Pissed at our agent
		for being useless, we booked this ourselves.  As a
		consequence we were sent a contract more suited to joke
		pub-rock groups from Petersborough.  You know the sort of
		thing: &quot;You get 47&#190; of the door between 8:45 and 10:17,
		minus &#163;125 for the lights&quot;.  Very un-trusting, and a
		bit insulting, really.  Well, we went down there and played,
		and it looked like there were a good few civilians there.
		When Kathie went to get paid they gave her just over
		&#163;400, which is twice what we would have asked for in
		the bloody first place!  Still, if that&apos;s the way they
		wanted to do it, hey gang?
		<p />
		The show was loud and swinging.  It seemed a little chaotic
		to me here and there, but Gabriel, who is fussier than me in
		this department, said he thought it was the best that this
		line-up has played.  So that&apos;s okay, then.  Also, we met an
		old friend who is now organising tours (for The Cramps,
		among others), who was well into the band, and who has since
		replaced that scaley and unemployable agent.  Nice evening!
		Also re-united with Harry, of Magic Stick fame (US &apos;89), who
		had turned up, having just returned to London from living in
		Germany.  Yes, a lovely night.
		</blockquote>
		<b>FLEECE AND FLIRKIN BRISTOL ENGLAND</b>
		<Link href="/gigs/1994/Jul26.html">
		<br />26 Jul 94</Link>
		<blockquote>
		Nearly forgot this one, as it came before Northampton and London.
		A smallish crowd, but perfectly formed.  All of {expand('strange')}
		showed up with wives, girlfriends and family pets, as did
		half {expand('aero')}, and Donald Ross-Skinner.  We played well, the
		P.A. was fine, and the party afterwards was long.
		{expand('hend')}, Dylan nut, had been warned not to talk {expand('gerard')} about
		the Big Z., but went ahead and did it anyway.  Most
		amusing.
		</blockquote>
	</main>
	<Footer />
</>

export default Letter;
