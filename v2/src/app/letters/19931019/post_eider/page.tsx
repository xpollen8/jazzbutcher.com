import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { bacon, ben, pete, girls, creat } from '@/lib/defines';

const Letter = () =>  {
	const title = <><Link href='/letters/19931019'>19Oct93</Link> | PRESIDENT CHANG</>
	return ( <>
		<Header section='letters' title={title} />
		<div className="etc">
			<b>MORE MAXIMILIANA</b>
			<p />
			<samp>
				&gt; Wed, 24 Mar 93<br />
				&gt; frendlicats.UCSC.EDU<br />
				&gt; since at least a year ago there was a twin bill on dollar<br />
				&gt; night at the local venue (The Catalyst) of The Best Kissers<br />
				&gt; in the World along with The Butchers.
			</samp>
			<p />
			Yes, I&apos;ve wondered about The Best Kissers In The World,
			too.  Arik, I even saw an advert for that double bill
			with the Butchers (in San Francisco, I think), which
			set me wondering harder than ever.  I&apos;ve not been able
			to find out anything about either band, however.
			Perhaps one of the American correspondents has an idea
			what&apos;s going on.
			<p />
			<samp>
				&gt; Mon, 21 Jun 1993<br />
				&gt; Rick.G.Karr@gagme.chi.il.us (Rick G. Karr)<br />
				&gt; I held the belief for a long time that<br />
				&gt; Distressed Gentlefolk was the zenith of the _original_ JBC (I know<br />
				&gt; there were lineup changes in there, but the main strength<br />
				&gt; of the band seemed to me to be the interplay between Max and<br />
				&gt; Pat). After the split, I was thoroughly impressed by The<br />
				&gt; Best Kisser.
			</samp>
			<p />
			<blockquote className="annotation">
				Post-<Link href="/conspirators/max_eider.html">Eider</Link>
				Revisionism?  Whoa!  It&apos;s true that over the years since
				he left the group I&apos;ve been practising really hard on
				the guitar, to the point where I&apos;ve just about reached
				the general sort of standard that Max displayed back
				on {bacon}.  You know, you discover things on a guitar
				and you sort of think &quot;Oh, YEAAAH - I see what he was
				up to...&quot;  So now and again (check the intro to {ben},
				for example) I do &quot;impressions&quot;.
				<p />
				But, yeh, obviously that kind of guitar playing was kinda
				special to the JBC, so if we can still have a bit of
				that sort of thing on our discs, even though Max isn&apos;t
				there to do it, well, of course that&apos;s nice.  (Check {pete}&apos;s
				solo on {girls}, for another example I&apos;ve just thought of.)
				And it...well...it hardly suggests that I want to bury
				or disavow the Eider sound, and I certainly wouldn&apos;t
				slag it off.  So I&apos;d argue that post-Eider Revisionism
				(or PER, as we call it here at the Submarine Sound Facility)
				was hardly a factor in the band&apos;s scheme of things.  Perhaps
				it was more a perceived thing among listeners.
				<p />
				I shan&apos;t expect ever to master Max&apos;s jazzy style of playing,
				though.  His playing became so good that I felt his pop
				sensibilities were getting kinda buried in the jazz thing.
				It was leading him to write and play a different, more
				sophisticated kind of music than I&apos;m comfortable with.
				I like listening to it, but it&apos;s not for me to make.
				And that, of course, is how we came to stop doing it.
				But, as a writer, I was never really interested in pursuing
				too jazzy a line, so it&apos;s not suprising that that element
				of things came to a halt with Max&apos;s leaving.  There was
				a bit of friction/ugliness during Max&apos;s last few months
				in the band, most of it related to stupid things like
				paying van drivers, and hardly interesting to discuss.
				Max was smart enough to move before things became impossible
				and get on with his own thing.  It&apos;s only bad luck in
				business that his record didn&apos;t do better.  He was sunk
				by a crooked Californian Record Company run by a crooked
				Australian.  The JBC were actually
				about three hours from signing with the same people at
				that time.  We never signed, and escaped to {creat}.
				It&apos;s a lottery, this game.
				<p />
				There are no huge great dark lurking things about the
				Butcher/Eider collaboration.  We did it for fun (often
				probably having too much fun at the expense of the paying
				public - I was there) and when it looked like it wasn&apos;t
				going to be fun anymore we stopped.
			</blockquote>
		</div>
		<Footer />
	</>)
}

export default Letter;
