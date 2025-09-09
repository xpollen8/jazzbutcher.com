import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LetterHeader from '@/components/LetterHeader';
import { expand } from '@/lib/defines';

const Letter = () =>
<>
	<Header section='letters' title={ [ '13Sep94;;/letters/19940913', 'Politics' ] } />
	<main>
		<div id="chang" />
		<LetterHeader title="How can you tell when a politician is lying?" subhead="Their lips move" />
		<samp>
		&gt; Date: Mon, 01 Aug 94 09:42:10 EDT<br />
		&gt; From: BertieV@aol.com  (John Ford)<br />
		&gt; Subject: Politics, toilet training, etc..<br />
		&gt; David, I was in particular thinking of an interview I read in the<br />
		&gt; mid-eighties --a long time ago, to be sure--in which he referred<br />
		&gt; rather even-handedly to the U.S. as &apos;the most evil regime the world<br />
		&gt; has ever created&apos;
		</samp>
		<blockquote className="annotation">
		As {expand('del')}
		pointed out &quot;Why Vote For The Lesser Evil?&quot; is a slogan
		from a crazed bunch of Americans who set up their own
		political &quot;party&quot; at the last election.  The party, in fact,
		of The Great Cthulhu.
		<p />
		Who was an enormous, unspeakable evil and ancient... THING in the
		works of H.P. Lovecraft.  So you can see what they were saying!  It
		seemed a neat response to the common modern problem;
		whoever you vote for they all behave the same.  And let
		me say it again, <i>&quot;Chang&quot;</i> is London slang for Columbia&apos;s
		No. 1 Export.  As far as that song goes, I reckon things
		couldn&apos;t be clearer.  If the line &quot;He never smokes, but
		he sure inhales&quot; reminds anyone of a contemporary politician...
		well, hey, it&apos;s topical, and it also says exactly what
		I want to say.
		<p />
		If John read an interview with me from the mid-eighties,
		yes, he would be in a position to call some things &quot;sophomoric&quot;
		(fortunately, I speak American and do not need to have
		this term explained to me..)
		<p />
		Two things about interviews and the mid-eighties:
		<blockquote>
			1) Before we first visited America (which was the summer of &apos;86, not
				long after the &quot;still-hasn&apos;t-been-justified&quot; bombing of Tripoli in
				Libya) we saw things from the typical young European viewpoint.  A
				distant, probably hostile land gave us an easy focus; it&apos;s easy to
				blame all of the world&apos;s evils on the mechinations of a sinister,
				powerful, far-away state of which one knows very little.  (Remember,
				&quot;The Evil Empire&quot; and all that cak about Moscow?)  Hanging out, as we
				were, with young, idealistic Europeans, whose countries had twice been
				racked with war in the last sixty years, and who were clearly worried
				about a Superpower confrontation taking place on their turf, it was
				easy for us to build up a bad view of America.  Eventually, continued
				exposure to Real Life in the US caused us to change our views a bit.
				So did historical developments.  Not before &apos;88 at the earliest,
				though.  These things take time.
		</blockquote>
		<blockquote>
			2) In the mid-eighties there were still a lot of people who would want
			to meet us or interview us because we seemed like a new group to them,
			and we might perhaps be famous, or something.  Thus we got interviewed
			by a lot of people who weren&apos;t really interested in the JBC or what it
			thought.  People who wouldn&apos;t necessarily understand our experiences
			(in terms of &quot;where we were coming from&quot;), wouldn&apos;t be sufficiently
			interested to cop for anything more than the usual &quot;lefty band&quot;
			schtick, and who - in an inevitable few cases - wouldn&apos;t actually be
			that bright!  Even a really enjoyable interview comes out with things
			in it that are hard to recognise as your own opinions or remarks.  A
			mediocre interview, carried out with a dull and disinterested person
			by a bored and unsympathetic band, can come out making Ronald
			MacDonald looking like Geoffrey Dahlmer (in fact, now I come to
			mention it, they do have a couple of points in common, don&apos;t they?).
			</blockquote>
		</blockquote>
	</main>
	<Footer />
</>

export default Letter;


