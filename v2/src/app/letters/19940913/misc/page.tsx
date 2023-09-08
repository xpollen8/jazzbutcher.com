import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LetterHeader from '@/components/LetterHeader';
import {
	aero, bwatch, haus, joea, jules, levit, lix, paul, rachel, strange, vu,
} from '@/lib/defines';

const Letter = () =>
<>
	<Header section='letters' title={ [ '13Sep94;;/letters/19940913', 'Odds & Ends' ] } />
	<div className="etc">
		<LetterHeader title='GROLSCH' />
		<samp>
		&gt; Date: Mon, 6 Jun 94 11:34:19 BST<br />
		&gt; From: smeats@lincoln.gpsemi.COM (Sad Git on the Internet)<br />
		&gt; Subject: Re: Black Eg<br />
		&gt; Don&apos;t drink too much Grolsch. It makes yer head hurt.
		</samp>
		<blockquote className="annotation">
		I too much Grolsch, your head Will Hurt.  More than with
		many other beers, I might point out to the sceptical.
		Grolsch has a very attractive old-fashioned bottle, and
		its bizarre name leads the Unwary to imagine that it
		must be the product of generations of dedicated Germanic
		brewing obsessives.  Well, it&apos;s not.  It&apos;s Dutch and
		it will make your Head Hurt.
		</blockquote>
		<LetterHeader title="RIDE" />
		<samp>
		&gt; Date: Wed, 8 Jun 94 11:26:10 BS<br />
		&gt; From: joe@anvil.co.uk (Joe Nicholson)<br />
		&gt; Subject: e.g. black undrugged<br />
		&gt; Undrugged: Albert Hall, 4th June<br />
		&gt; Lowlights: The Creations (over the hill hippies), Ride (under the<br />
		&gt; hill hippies)
		</samp>
		<blockquote className="annotation">
		Yes, they were Bloody Awful at the Albert Hall, weren&apos;t
		they?  A rented sitar!  Sophie the cellist, who ought
		to know, said that the string section (yes, &quot;string section&quot;)
		had been really badly arranged.  My guess is that it
		must have been the work of Andy &quot;I&apos;m A Genius And My
		Swedish Wife Has A Record Contract Of Her Own, Thank
		You Very Much&quot; Bell.  Good old Andy.  It was like watching
		Free!  Rock shat.
		</blockquote>
		<LetterHeader title="HELLO MISTER MITCHELL R. DICKERMAN : THIS ONE'S FOR YOU" />
		<samp>
		&gt; Date: Sun, 14 Aug 1994 11:52:04 -0400 (EDT)<br />
		&gt; From: mrd@world.std.com (Mitchell R Dickerman)<br />
		&gt; Subject: {strange}, {bwatch}<br />
		&gt; In the &apos;thank you&apos;s on The Black Watch&apos;s latest, _Amphetamines_,<br />
		&gt; they thank Butchie. Anyone know the connection? Did they open for<br />
		&gt; him on his last trip to the West Coast, where they&apos;re from?<br />
		&gt; Oh, and the album is excellent, strongly recommended.<br />
		&gt; I&apos;m surprised there hasn&apos;t been more talk about Strangelove.<br />
		&gt; After leaving the Blue Aeroplanes (whose new album, _Life Model_,<br />
		&gt; is good but misses his touch), Alex Lee formed Strangelove.
		</samp>
		<blockquote className="annotation">
		{bwatch} come from L.A.  We have got to know them
		pretty well since we met on tour in 1989.  They&apos;re good
		people.  They opened for us at <b>The Roxy</b> in
		<Link href="/gigs/1992/Jun5.html">June
		1992</Link>.  J&apos;Anne Jacobi, their violin vixen, played with
		us that night on {rachel}, which REALLY dragged out the
		{vu} influences, as you can imagine.  I&apos;m glad they gave
		me a credit.  I&apos;d be gladder if they gave me a copy of
		the LP.  We would like to play with them again in America.
		<p />
		{strange} are grand.  They are
		<blockquote>
		<br />{lix} - Guitar, songwriter,
		Provisional Member Of The JBC In Perpetuity.
		<br />John Langley - Drums, ex {aero}, brother of Gerard,
		all round leading human being.
		<br />Patrick Duff - Singer, not really as miserable as all that...
		<br />{joea}- Bass, ex-{levit}, played all the bass on <Link href="/releases/blue.html">Condition Mandrax.</Link>
		<br />{jules} - Guitar, played
		lead with the JBC on 1990 tour of USA and Canada.
		</blockquote>
		I&apos;ve seen them twice on the recent U.K. tour and they were very good.
		A severely cranked {paul}
		however, watching the London show, pronounced: &quot;It&apos;s fuckin&apos; {haus},
		innit?&quot;  I don&apos;t know about any touring plans for
		Strangelove in the US.  Sorry.
		</blockquote>
	</div>
	<Footer />
</>

export default Letter;
