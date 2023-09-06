import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LetterHeader from '@/components/LetterHeader';
import { chang, richard } from '@/lib/defines';

const Letter = () =>  {
	const title = <><Link href='/letters/19931019'>19Oct93</Link> | PRESIDENT CHANG</>
	return ( <>
		<Header section='letters' title={title} />
		<div className="etc">
			<LetterHeader title="PRESIDENT CHANG" />
			<samp>
				&gt; Thu, 2 Sep 93<br />
				&gt; 6500nag@ucsbuxa.ucsb.edu (Naggi Asmar)<br />
				&gt; Truly aweful, and racist as well.  This is where it starts to<br />
				&gt; fall apart for me.<br />
			</samp>
			<p />
			<blockquote className="annotation">
				Naggi, Naggi, Naggi.  I&apos;m sorry it&apos;s got to you this
				way...but...  {chang}? Racist? I&apos;ve spent most of this
				afternoon wondering what you were thinking of.  Is it
				the name Chang?  I hope so, coz at least that way I can
				offer a defence.  You see, &quot;Chang&quot; or &quot;Changa&quot; is currently
				a London street term for my very least favourite pharmaceutical,
				cocaine.  Figure that the <i>President Chang</i> character
				in the tune is, like, King Coke or something, and it
				will probably all start to make a lot more sense.
				<p />
				The Jazz Butcher Conspiracy do not tolerate racism, or
				those who practice it.  We are, however, almost as intolerant
				of Political Correctness.
				<p />
				Just be glad that we didn&apos;t start putting in the football
				results, like &quot;Chelsea thrashed by Reds&quot;...  Sorry to
				have offended, Naggi.  It&apos;s not you that we seek to offend.
				I hope it&apos;s a misunderstanding.  If not, be specific
				and we&apos;ll have a look at ourselves.
				<p />
				As for the music... NO APOLOGIES.  We jammed this fucker
				live in the studio, and we&apos;re all stupidly proud of it.
				I think {richard}&apos;s rhythm guitar is fucking wonderful.
				Hey - I like a lot of different music, you know?  Sorry
				we missed you in Los Osos.  It was an incredible night,
				one of my favourite nights out that year.  There was
				a bush outside the venue with new-born kittens in it,
				a large fridge and lots of JAEGERMEISTER.
			</blockquote>
		</div>
		<Footer />
	</>)
}

export default Letter;
