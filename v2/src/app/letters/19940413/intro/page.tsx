import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LetterHeader from '@/components/LetterHeader';
import { expand } from '@/lib/defines';

const Letter = () =>
<>
	<Header section='letters' title={ [ '13Apr94;;/letters/19940413', 'Intro' ] } />
	<main>
		<LetterHeader title="13Apr94" />
		Checking in once again, to say hello and keep your crew
		of computer-abusers up to date with our latest peregrinations
		across the nations.  This is tax hell week, so any other
		activity is welcome to keep my mind off impending knock-on-the-door
		in-the-night scenarios.
		<p />
		I&apos;ve been checking out a man called {expand('hend')}, who appears
		likely to take a guitarist&apos;s role in the JBC quite soon.
		He lives here, and has played in a lot of dodgy middle-aged
		hipster revisionist bands before.  Now he is bored, and
		coming round my house to learn some new tunes.  He&apos;s
		very good, in an <Link href="/conspirators/max_eider.html">
		Eider</Link>-esque way.  He&apos;s got the soul thing and the
		country thing - the noise thing won&apos;t take long to sort
		out, I feel.  More news as it comes up.  This, as you
		will understand, in no way compromises the position of <Link href="/conspirators/richard_formby.html">Uncle Richard;</Link>
		just keeping the gene pool up to scratch...
		<p />
		Not much happening at the moment.  Spittle Rattle have
		done a couple of nice gigs, starting to get their faces
		around a little bit.  Primal Scream played here last week.
		The venue was
		HEAVING, and very good they were too.  They haven&apos;t thrown
		out the Screamadelica baby with the Black Crowes bathwater,
		you&apos;ll be pleased to hear, and the guitarists are playing
		better than ever.  A good show.  Saw Pulp recently, too.
		<p />
		Plans for the next few weeks involve trying to get this
		US trip moving, paying some attention to the long-neglected
		<Image className="float-right" width={300} height={300} alt="[signature]"
			src="https://v1.jazzbutcher.com/images/19940413/94Apr13_sig.gif" />
		Pat n Richard album, doing a couple of gigs in London
		and Belgium (the country, not the club!), and assembling
		demo tapes for the next LP.  Also, both my guitarists
		need medical attention.  Can&apos;t imaging why...  Spoke
		to the <Link href="/conspirators/martin_stebbing.html">Rev. Botus</Link>,
		who indicated a desire to do some JBC touring action.
		<p className="clear_float" />
	</main>
	<Footer />
</>

export default Letter;
