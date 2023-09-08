import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LetterHeader from '@/components/LetterHeader';

const Letter = () =>
<>
	<Header section='letters' title={ [ '13Sep94;;/letters/19940913', 'Peter Lorre' ]} />
	<div className="etc">
		<LetterHeader title=<Link href="/lyrics/peter_lorre.html">PETER LORRE</Link> />
		<samp>
		&gt; Date: Fri, 29 Jul 1994 19:09:53 -0400<br />
		&gt; From: Christopher Camfield (ccamfiel@undergrad.math.uwaterloo.ca)<br />
		&gt; Subject: Peter Lorre question<br />
		&gt; I was typing up the lyrics for Peter Lorre earlier and a question<br />
		&gt; floated into my mind - Is the song supposed to be serious or sarcastic?<br />
		&gt; I&apos;ve only seen Peter Lorre in _Casablanca_, _The Maltese Falcon_,<br />
		&gt; and _All through the night_. In _Falcon_ and _All through..._ he is<br />
		&gt; rather NOT like he&apos;s described in the song - he&apos;s NOT the guy you&apos;d<br />
		&gt; want to trust, like the song says, and in _Falcon_ he is scared of<br />
		&gt; Sydney Greenstreet&apos;s character. Is anyone on the list a b&w film buff,<br />
		&gt; who can say a bit more about Peter Lorre? I presume the song was written<br />
		&gt; because he died not long before? I don&apos;t know.<br />
		&gt; Chris
		</samp>
		<blockquote className="annotation">
		He looks really cool.  I was not fully sober when I first
		had the idea of writing about him.  It&apos;s an imaginative
		thing; yeah, he was the bad guy, but imagine some scary-intrigue-casbah
		type picture where he was your pal.  Yeah?
		</blockquote>
	</div>
	<Footer />
</>

export default Letter;
