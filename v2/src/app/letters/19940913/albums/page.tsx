import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LetterHeader from '@/components/LetterHeader';
import { expand } from '@/lib/defines';

const Letter = () =>
<>
	<Header section='letters' title={ [ '13Sep94;;/letters/19940913', 'Re-issues' ] } />
	<main>
		<LetterHeader title="RE-ISSUES"
			subhead=<> {expand('bacon')}!  {expand('scandal')}!  {expand('sex')}!</>
		/>
		<blockquote className="annotation">
		We are continuing our negotiations over the re-releases
		of these fairly amusing recordings.  Fire Records have
		accepted our version of the contract, and we have given
		a permissable amount of space to them.
		<p />
		There remains one enormous sticking point (a legal nicety
		which would bore you all to tears, but which means Real
		Money to Fire and to us), so nobody hold their breath
		yet, okay.  Nonetheless, progress is being made.
		<p />
		I don&apos;t suppose the &quot;product&quot; will appear in very altered
		form.  After all, they were &quot;good enough&quot; to go out that
		way at the time.  It seems like cheating to &quot;soup up&quot;
		and LP for re-release.  That said, {expand('sex')} will probably be
		slightly extended.  All in the best possible taste, of course...
		</blockquote>
		<p />
		<samp>
		&gt; Date: Sat, 18 Jun 1994 16:11:00 BST<br />
		&gt; From: Cliff Lovelock<br />
		&gt; Subject: So what were the elephants doing there, apart from sinking?<br />
		&gt; Ed seems to think that this re-release (of the Glass material) will<br />
		&gt; be selective, i.e. only &quot;good&quot; albums will be chosen (Good job<br />
		&gt; &quot;Condition Snooze&quot; wasn&apos;t released on Glass or we&apos;d never hear of it<br />
		&gt; again - which might not be such a bad thing).<br />
		&gt; Cheers, Cliff.
		</samp>
		<blockquote className="annotation">
		Cliff - &quot;Condition Snooze&quot; is rude.
		<br />
		Might I ask you to listen again - with a bucket of crystal meth if necessary?
		</blockquote>
		<samp>
		&gt; Date: Tue, 21 Jun 94 16:45:07 EDT<br />
		&gt; From: Mojo90210@aol.com<br />
		&gt; Subject: Condition Blue = Masterwork<br />
		&gt; Gang, no two ways, {expand('blue')} is the best LP Pat&apos;s done and may<br />
		&gt; ever do (if Love Bus is any indication). So much stuff on other discs<br />
		&gt; is borderline &quot;novelty&quot; music, Condition Blue stands tall from start<br />
		&gt; to finish. I really value the other stuff, but Condition Blue demands<br />
		&gt; to be taken seriously. (I&apos;m only sorry that Pat had to go through hell<br />
		&gt; to inspire it.)<br />
		&gt; Vaya Con Dios,<br />
		&gt; Mojo
		</samp>
		<blockquote className="annotation">
		Oh, and THANKS, Mojo!  Vaya con Dios yourself, hombre.
		<p />
		See Cliff? SOMEONE was nice about the fucker.
		</blockquote>
	</main>
	<Footer />
</>

export default Letter;
