import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Letter = () =>
<>
	<Header section='letters' title={ [ '19Oct93;;/letters/19931019', 'Intro' ] } />
	<main>
		I&apos;m sending this as fast as I can, for, as you will see,
		there is news which you might wish to impart to the slavering
		e-hordes.  As sure as egs is egs, I have also been compelled
		to come on line here and there to sort out one or two
		of the more inquisitive and/or misguided participants.  Oh-hoh! 
		<p />
		<Image className="float-right" width={250} height={250} alt="[signature]" src="https://v1.jazzbutcher.com/images/19931019/93Oct19_sig.gif" />
		I am broke, but excited about <Link href="/gigs/1993/Oct28.html">
		the Cale concert</Link>, the return of <Link href="/conspirators/richard_formby.html">Lenin</Link> and the
		man who will be dropping round this afternoon to take
		&#163;15 off me.  <Link href="/conspirators/martin_stebbing.html">Martin</Link>
		is here and there is a rave-up in London tomorrow,
		so I shall be going to that, and, with any luck, shall
		survive long enough to let you know what&apos;s going on at further length soon.
		<p className="clear_float" />
	</main>
	<Footer />
</>

export default Letter;
