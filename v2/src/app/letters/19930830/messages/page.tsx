import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { NME, aero, blue, creat, cult, ed, family, mbv, momus, } from '@/lib/defines';

const Letter = () =>  {
	const title = <><Link href='/letters/19930830'>30Aug93</Link> | INDIVIDUAL MESSAGES</>
	return ( <>
		<Header section='letters' title={title} />
		<div className="letter">
			<center>
				<b>INDIVIDUAL MESSAGES:</b>
			</center>
			<p>
			{ed}
				- I&apos;m afraid your &quot;virtual clippings&quot; collection is
				indeed incomplete and inaccurate.
			</p>
			<p>
				You&apos;re spot on about the Robin Gibson thing.
				In fact he has now carried the JBC crusade right home
				to bed, having recently had affairs with two of my recent
				ex-lovers.  Hmmm.  Sometime I ask him how the book is
				going, but he&apos;s always pissed so he just mumbles and
				looks worried.  His verdict on {family}, which I think
				might amuse you &quot;Well, there&apos;s nothing wrong with the
				songs or the performances...but...you sound a bit...TINNY,
				man.&quot;
			</p>
			<p>
				The 1990 &quot;Live review of something else&quot; was, actually,
				a 1988 live review of the <Link href="/gigs/1988/Aug7_2200.html">
				Doing For The Kids concert in London.</Link>
				Barbara Ellen quite rightly hated The House
				Of Love and that boring old pervert {momus}, slept through
				{mbv}, ignored 
				Felt (who were good that day) and was personally
				abusive to just about everyone else in the building,
				ranting nobly - but in this case a little misguidedly
				- about students, sad indie scum and the like.  The
				only band of the day that got a good review from her
				was the JBC.  She concluded by asking - &quot;<b>NME</b>
				cover stars in my lifetime?  It&apos;s not impossible.&quot; The
				JBC, like Diana Ross, are Still Waiting.  Dame!
			</p>
			<p>
				The <b>NME</b> review of {cult} was a bit more than 5
				lines.  It called me a &quot;master fetishist&quot; (how do he
				KNOW?) and gave the record eight out of ten, a score
				that would have won a more fashionable act a great deal
				of space, I suspect.  They did print a small photo, though.
			</p>
			<p>
				The <Link href="/press/90melody.html"><b>MM</b> also gave
				a positive review,</Link> and their Chris Roberts wrote
				a half-page feature, with photo, talking about things
				like &quot;maverick genius&quot;.  <Link href="/press/91select.html"><b>
				Select magazine</b> also printed a lengthy review with
				a photo</Link>.
				{blue} did not get reviewed in the weeklies, as far as
				I know, though I did see a quota from the <b>{NME}</b>&apos;s
				Simon Williams from the summer of 1991 that called me
				&quot;one of the country&apos;s most talented and personable story
				tellers&quot; (aaaaaah) which suggest that there might have
				been a review there.  I was in L.A. all summer so i
				can&apos;t say.
			</p>
			<p>
				The l.p. certainly attracted good reviews in <b>Select</b>
				(Dave Kavanagh, who later told me &quot;{blue} is the first
				JBLP that I really LOVE&quot;) and <b>Vox</b> (Keith Cameron,
				winning my Writer Of The Year Award for &quot;his trademark
				spooked misappropriation of classic guitar rock&quot;), who
				also printed a photo.  All I&apos;m really saying is that
				you shouldn&apos;t appoint yourself some kind of international
				press monitor simply on the strength of things that
				your pals might have chanced upon in the weeklies.  I
				feel that the monthly press in Britain is aimed at the
				older audience, so it doesn&apos;t surprise me if that&apos;s
				where our stuff gets the attention.  The weeklies, surely,
				are for students, and, being 35, I don&apos;t really have
				much to say to British students except &quot;Get a fucking
				haircut!&quot;  By the way, both <b>Select</b> and <b>Q Magazine</b>
				have published positive reviews of {family} too.
			</p>
			<p>
				I&apos;ll tell you what, though, Ed.  If you send me some
				wedge to cover the photocopying, I&apos;ll send you a wad
				of US and European press that will keep you occupied
				for a long, long time.  We don&apos;t have a press agent
				(apart from some harassed youth at {creat}, who is
				probably kept busy all day sending out photos of Ride),
				so the lack of UK press is hardly suprising.  But then,
				hey, we don&apos;t even have a manager...
			</p>
			<p>
				Your remark about headlining at the <b>Dingwalls</b>
				thing doesn&apos;t have much substance.  In
				<Link href="/gigs/1988/index.html">1988</Link> we played
				37 shows in the UK and Ireland (including one at
				<Link href="/gigs/1988/Feb27.html"><b>The Venue</b>,
				Edinburgh</Link>), which, I suspect, were more the result
				of efforts made by our agent than the desire of one
				crazed news editor from Paisely.  Train-spotters will
				need to know that we also played 30 dates in Continental
				Europe, 14 in the USA and 15 in Canada.
				In fact, those who need to know could conceivably get
				<Link href="/letters/94Jun24/all_the_gigs.html">a list
				of every live JBC manifestation ever</Link> from this very
				writer... if they really want it.
			</p>
			<p>
				I enjoyed your remarks about the K.D. Land (fuck it,
				start again; kd lang) photo.
				<br/>
				<Link href="https://jazzbutcher.com/images/pat_plays.jpg">
					<Image alt="not kd lang" width={214} height={160} style={{ float: 'left', padding: '5px' }}
						src="https://jazzbutcher.com/images/spat_plays.gif" />
				</Link>
				<br/>
				I *know* this photograph!  The best lookalike story
				I know concern the {aero} when they supported
				REM on the Green tour of the UK in 1989.  At the Birmingham
				NEC Peter Buck joined the {blue} guitar-army
				on the closing version of Tom
				Verlaine&apos;s <i>Breaking In My Heart</i>.  Two punters
				were overheard in conversation: &quot;Who&apos;s that other geezer
				on the guitar?&quot;  &quot;Oh, that&apos;ll be the Jazz Butcher&quot;.
				I told Peter this story later, and it appealed to his
				sense of having a drink.
			</p>
			<div className="clear-both" />
		</div>
		<Footer />
	</>)
}

export default Letter;
