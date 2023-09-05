import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { bacon, aero } from '@/lib/defines';

const Letter = () =>  {
	const title = <><Link href='/letters/19931019'>19Oct93</Link> | PRESIDENT CHANG</>
	return ( <>
		<Header section='letters' title={title} />
		<div className="letter">
			<b>&quot;STARPOINT STUDIO&quot;</b>
			<p />
			<samp>
				&gt; Mon, 21 Jun 1993<br />
				&gt; Rick.G.Karr@gagme.chi.il.us (Rick G. Karr)<br />
				&gt; Does anybody know if &quot;Starpoint Studios in Beautiful<br />
				&gt; Downtown Clapham&quot; (From the opening cut of {bacon})<br />
				&gt; is the same as &quot;ReMaximum&quot; studios there?
			</samp>
			<p />
			In fact, the place was called STARFORCE Studio, and it
			was on St.  John&apos;s Hill just by Clapham Junction Station
			(&quot;Welcome to Britain&apos;s busiest railway station!&quot;), more
			or less next door to the venue now called The Grand.
			It was very very cheap and slightly dodgy, an 8-track.
			It was run by a gentleman called Martin K. Daley, the Prime
			Minister Of Funk.  Other records made there in the early
			eighties include many of the TV
			Personalities&apos; early discs and a solo l.p. by a chap called 
			Jedrech Dmokowski, who - oddly enough - is the brother
			of the sweaty dancer chap in the {aero}.  Jed does a mean Marc Bolan
			impression, and can be heard singing the chorus
			on the Aeroplanes song <i>Tolerance</i>.  I really don&apos;t
			know if Starforce was at any time known as &quot;ReMaximum&quot;,
			but i sort of doubt it.
		</div>
		<Footer />
	</>)
}

export default Letter;
