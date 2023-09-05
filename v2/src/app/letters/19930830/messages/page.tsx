import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Letter = () =>  {
	const title = <><Link href='/letters/19930830'>30Aug93</Link> | INDIVIDUAL MESSAGES</>
	return ( <>
		<Header section='letters' title={title} />
		<div className="letter">
		</div>
		<Footer />
	</>)
}

export default Letter;
/*
#define	messages.html
#live	if (getval(page) = messages.html)
	{headerLetters30Aug93(title=INDIVIDUAL MESSAGES)}

	<center>
	<b>INDIVIDUAL MESSAGES:</b>
	</center>
	<p>
	{ed}
		- I'm afraid your "virtual clippings" collection is
		indeed incomplete and inaccurate.
	<p>
		You're spot on about the Robin Gibson thing.
		In fact he has now carried the JBC crusade right home
		to bed, having recently had affairs with two of my recent
		ex-lovers.  Hmmm.  Sometime I ask him how the book is
		going, but he's always pissed so he just mumbles and
		looks worried.  His verdict on {family}, which I think
		might amuse you "Well, there's nothing wrong with the
		songs or the performances...but...you sound a bit...TINNY,
		man."
	<p>
		The 1990 "Live review of something else" was, actually,
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
		was the JBC.  She concluded by asking - "<b>NME</b>
		cover stars in my lifetime?  It's not impossible." The
		JBC, like Diana Ross, are Still Waiting.  Dame!
	<p>
		The <b>NME</b> review of {cult} was a bit more than 5
		lines.  It called me a "master fetishist" (how do he
		KNOW?) and gave the record eight out of ten, a score
		that would have won a more fashionable act a great deal
		of space, I suspect.  They did print a small photo, though.
	<p>
		The <Link href="{jbc_press}/90melody.html"><b>MM</b> also gave
		a positive review,</Link> and their Chris Roberts wrote
		a half-page feature, with photo, talking about things
		like "maverick genius".  <Link href="{jbc_press}/91select.html"><b>
		Select magazine</b> also printed a lengthy review with
		a photo</Link>.
		{blue} did not get reviewed in the weeklies, as far as
		I know, though I did see a quota from the <b>NME</b>'s
		Simon Williams from the summer of 1991 that called me
		"one of the country's most talented and personable story
		tellers" (aaaaaah) which suggest that there might have
		been a review there.  I was in L.A. all summer so i
		can't say.
	<p>
		The l.p. certainly attracted good reviews in <b>Select</b>
		(Dave Kavanagh, who later told me "{blue} is the first
		JBLP that I really LOVE") and <b>Vox</b> (Keith Cameron,
		winning my Writer Of The Year Award for "his trademark
		spooked misappropriation of classic guitar rock"), who
		also printed a photo.  All I'm really saying is that
		you shouldn't appoint yourself some kind of international
		press monitor simply on the strength of things that
		your pals might have chanced upon in the weeklies.  I
		feel that the monthly press in Britain is aimed at the
		older audience, so it doesn't surprise me if that's
		where our stuff gets the attention.  The weeklies, surely,
		are for students, and, being 35, I don't really have
		much to say to British students except "Get a fucking
		haircut!"  By the way, both <b>Select</b> and <b>Q Magazine</b>
		have published positive reviews of {family} too.
	<p>
		I'll tell you what, though, Ed.  If you send me some
		wedge to cover the photocopying, I'll send you a wad
		of US and European press that will keep you occupied
		for a long, long time.  We don't have a press agent
		(apart from some harassed youth at {creat}, who is
		probably kept busy all day sending out photos of Ride),
		so the lack of UK press is hardly suprising.  But then,
		hey, we don't even have a manager...
	<p>
		Your remark about headlining at the <b>Dingwalls</b>
		thing doesn't have much substance.  In
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
	<p>
		I enjoyed your remarks about the K.D. Land (fuck it,
		start again; kd lang) photo.
		<br/><Link href="https://jazzbutcher.com/images/pat_plays.jpg">
		<Image width=214 height=160 align=left
		hspace=5 src="https://jazzbutcher.com/images/spat_plays.gif" /></Link>
		<br/>I *know* this photograph!  The best lookalike story
		I know concern the {aero} when they supported
		<Link href="http://www.halcyon.com/rem/index.html">REM</Link>
		on the Green tour of the UK in 1989.  At the Birmingham
		NEC Peter Buck joined the Blue Aeroplanes guitar-army
		on the closing version of Tom
		Verlaine's <i>Breaking In My Heart</i>.  Two punters
		were overheard in conversation: "Who's that other geezer
		on the guitar?"  "Oh, that'll be the Jazz Butcher".
		I told Peter this story later, and it appealed to his
		sense of having a drink.

	{jbc_footer}
#live	endif
*/
