import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LetterHeader from '@/components/LetterHeader';
import { expand } from '@/lib/defines';

const Letter = () =>
<>
	<Header section='letters' title={ [ '13Sep94;;/letters/19940913', 'David Lynch' ]} />
	<main>
		<LetterHeader title=<>DAVID LYNCH AND <Link href="/lyrics/angels.html">ANGELS</Link></> />
		<samp>
		&gt; Date: Sat, 30 Jul 94 15:17:26 EST<br />
		&gt; From: George Heard<br />
		&gt; Subject: Look out - Western Family again<br />
		&gt; The version of &quot;Angels&quot; off this CD has a reference I haven&apos;t picked<br />
		&gt; up on before until just now. In the middle of the song, Pat sings<br />
		&gt;<br />
		&gt; &quot;In heaven, everything is fine<br />
		&gt; In heaven, everything is fine...&quot;<br />
		&gt;<br />
		&gt; EXACTLY the same as in &quot;Eraserhead&quot;.<br />
		&gt; Yay! Now I have a link between the JBC and David Lynch as well as a<br />
		&gt; link between the JBC and Laurie Anderson<br />
		&gt; George (now seeking a link between Laurie Anderson and David Lynch)<br />
		</samp>
		<p />
		<blockquote className="annotation">
		Well, hello Tasmania!  I am, let me say, ASTONISHED that
		people (well, a person) are buying our stuff so far from
		home!  Hope you like it there.
		<p />
		The &quot;Heaven&quot; bit on {expand('angels')} is, of course, a total steal
		from <b>Eraserhead</b>.  It was {expand('dooj')}&apos;s idea, and it
		fitted perfectly with the mood of the time.  There it is.
		<p />
		See also the <b>Twin Peaks</b> reference in {expand('honey')} on {expand('blue')}.
		By the way, George,
		David Lynch
		and Laurie Anderson use the same pet-psychologist.
		Dogs on Prozac - it&apos;s already happening!
		</blockquote>
	</main>
	<Footer />
</>

export default Letter;
