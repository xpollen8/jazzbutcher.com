import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LetterHeader from '@/components/LetterHeader';
import { expand } from '@/lib/defines';

const Letter = () =>
<>
	<Header section='letters' title={ [ '13Sep94;;/letters/19940913', 'Sister Death' ] } />
	<main>
		<LetterHeader title=<>THE <Link href="/lyrics/sister_death.html">SISTER DEATH</Link> THING</> />
		<samp>
		&gt; Date: Mon, 15 Aug 1994 15:51:08 -0500<br />
		&gt; From: rstill@utdallas.edu<br />
		&gt; Subject: JBC query<br />
		&gt; This might be a FAQ (I&apos;m new here), but does anyone think<br />
		&gt; the song &quot;Sister Death&quot; is a reference to the character Death<br />
		&gt; from Gaiman&apos;s Sandman?<br />
		&gt; My case for Sister Death deriving from the Sandman<br />
		&gt; comic is somewhat circumstantial. First, Death is Dream&apos;s sister,<br />
		&gt; ergo Sister Death. Second, Death&apos;s role in Gaiman&apos;s cosmology is to<br />
		&gt; escort dying souls to their post-corporeal destinations--thus<br />
		&gt; accounting for the line &quot;Sister Death get me out of here&quot;
		</samp>
		<p />
		<hr />
		<p />
		<samp>
		&gt; Date: Mon, 15 Aug 1994 17:10:46 -0700 (PDT)<br />
		&gt; From: Glen Davis<br />
		&gt; Subject: JBC query (fwd)<br />
		&gt; Very interesting someone asked this today.<br />
		&gt; Sister Death is one of my favorite JBC songs and I was thinking<br />
		&gt; about its inspiration just yesterday.<br />
		&gt; I picked up a copy of Anne Rice&apos;s, &apos;Interview with the Vampire&apos;,<br />
		&gt; this week-end and was surprised to see that the &apos;main&apos; vampire,<br />
		&gt; Lestat, refers to a young vampire girl in the book as (among other<br />
		&gt; names), you guessed it, Sister Death.
		</samp>
		<blockquote className="annotation">
			Inspiration?
			<br />Explication!
			<p />
			The inspiration for this tune, initially, came from St. Francis of
			Assisi.  You know the chap - &quot;Hello, brother donkey.  Hello, Sister
			Milkfloat...&quot;  Big in the world of Poor-But-Honest Christianity.  Got
			made a saint...
			<p />
			Well, according to some source or other to which I was exposed under
			education, his last words were &quot;Come, Sister Death...&quot;
			<p />
			There you go.  Beyond that, the lyric was written very quickly and
			without much conscious thought, which means that it&apos;s The Real Stuff
			(as it were).  It also, however, means that - since I was listening to {expand('star')}&apos;s
			3rd LP an awful lot round that time (Dec. &apos;89) - I nicked
			the &quot;get me out of here&quot; line wholesale from <i>Night Time</i>.
			<p />
			St. Francis, Alex Chilton and Yer Actual Life - those are the main
			constituents.  I&apos;ve never seen <b>Sandman</b>.  I did read a little
			Anne Rice, but I thought it was a tad... muddled, if you like.  She
			seems to make the rules of Being Undead up as she goes along.  Having
			been raised on Uncle Terry&apos;s vampire pictures since the age of about
			six, I feel that i <b>know</b> the rules, and cling to what I learned
			as a youth.  Don&apos;t forget, folks - after you stake &apos;em, you got to
			CHOP OFF THE HEAD, or it ain&apos;t nothing but a sequel in the works.
		</blockquote>
	</main>
	<Footer />
</>

export default Letter;
