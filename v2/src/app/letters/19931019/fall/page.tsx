import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LetterHeader from '@/components/LetterHeader';
import { loony, smiff, smith, rolo, tops, owen } from '@/lib/defines';

const Letter = () =>  {
	const title = <><Link href='/letters/19931019'>19Oct93</Link> | THE FALL</>
	return ( <>
		<Header section='letters' title={title} />
		<div className="etc">
			<LetterHeader title="JBC -vs- The Fall" />
			<samp>
				&gt; Mon, 21 Jun 1993<br />
				&gt; Rick.G.Karr@gagme.chi.il.us (Rick G. Karr)<br />
				&gt; JBC-Fall coincidences never fail to impress. Start with<br />
				&gt; their mutual use of Mr Legras&apos; artwork. Then go back to,<br />
				&gt; uhn, 1985, is it? &quot;McGinty thought he could fool the Fall<br />
				&gt; with his imitation speeds but he could not know the psychic<br />
				&gt; nose....&quot; (--Pat-Trip Dispenser M.E.  Smith, et al)<br />
				&gt; Pat? Trip dispenser? Surely he couldn&apos;t mean...  ? I asked<br />
				&gt; Pat last time he was in town: &quot;Is Pat-Trip Dispenser about<br />
				&gt; you?&quot; The cryptic response: &quot;Well, Smith does shout &apos;McGinty!&apos;<br />
				&gt; at the end.  And {smiff} was released the week<br />
				&gt; before.&quot; (Or was it the week after? I can&apos;t remember.)<br />
				&gt; So: What&apos;s this &quot;McGinty&quot; stuff? Was this two bands slaggign<br />
				&gt; each other off on vinyl? Was Pat bonking Brixie? (After all,<br />
				&gt; we all know how much he likes American women.) Were he and<br />
				&gt; Smith just havin&apos; fun? There&apos;s something here.  I know it.
			</samp>
			<p />
			<blockquote className="annotation">
				We put out the single {smith} in the autumn of 1983.  The
				Fall&apos;s <b>C.R.E.E.P.</b>, with <i>Pat, Trip Dispenser</i>
				on the b-side, came out about the same time.  Therefore,
				I feel that it must have been recorded some time BEFORE
				the Fall could have heard our single.  Our bassist at
				the time (and on the single) was none other than {rolo}
				({tops}).  Accordingly, the combination of the Fall title
				and Smith&apos;s strangled cries of &quot;McGinty!&quot; on the record
				did make for rather spooky listening, but I believe it&apos;s
				just a co-incidence.  A little later we received a letter
				from The Fall, from which we gathered that they dug our
				record, and later we did quite a few dates supporting
				them.  No one ever had sex with Brix (honest!), but she
				did punch Mr Jones in the head once.  Coming off stage
				at a show in <Link href="/gigs/1985/Mar7.html"><b>Hammersmith
				Town Hall</b> in March &apos;85</Link>, {owen} was a touch peeved
				about the fact that he&apos;d just had to play for forty five
				minutes with no monitor mix worthy of the name, and,
				in disgust, KICKED open the door to what he thought was
				OUR dressing room.  Of course, it wasn&apos;t, and THAT is
				how Owen got a smack in the mush from an astonished and
				alarmed Brixie.  After she realised what had happened,
				though, she chilled right out and gave him a BIG KISS.
				<p />
				{loony} has always been a Fall fan (well, you DO, don&apos;t
				you?) and was very happy to start working with them a
				couple of years ago, but I don&apos;t actually know how this
				came to pass.  We&apos;re not really in touch with The Fall right now.
				<p />
				Incidentally, the last Fall l.p. not only has cover by
				Pascal, it was also produced by Rex Sergent, who has
				worked with the JBC as a live sound engineer on tours
				in the UK and Spain.  He&apos;s ALSO the house sound engineer
				for the Love Kittens.  But they&apos;ve split up now.
			</blockquote>
		</div>
		<Footer />
	</>)
}

export default Letter;
