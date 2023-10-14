import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
	filth, levit, strange, astor, eg, hend, FR,
} from '@/lib/defines';

const Letter = () =>  {
	return ( <>
		<Header section='letters' title='6Jun94' />
		<main>
			I have passed the time since <Link href="/letters/19940604">[4Jun94]</Link> ruthlessly instilling
			an iron discipline within the ranks, and things are starting
			to happen.  Like - would you believe?  - a live version of
			{filth}!
			<p />
			I have seen {levit} with their new American singer (whom
			they all appear to hate) - very powerful and strong,
			but rather pointless, in a very &quot;modern&quot; ways and {strange}
			- quite splendid!
			<p />
			Have succeeded in booking {strange} for the second annual
			&quot;It&apos;s Got To Be Belgium&quot; festival here - at a price of... NOTHING!
			Ha!Ha!Ha!  It will be their first gig after the l.p. comes out.
			I love doing this - it annoys the local promoters SO
			much! The guy came last year when we put on {astor} and
			he just stood in the corner asking &quot;How?&quot; Excellent!
			Also lined up for the fest are Curt&apos;s mob, &quot;Stranger
			Tractors&quot;, Spittle Rattle, Transambient Communications
			and, coup of coups!, a band from Vienna called {eg}.
			<p />
			This is all across 8th-10th August in the garden at Belgium.
			The Eg are also playing a rave in London on 22nd July
			at The Fortress, King&apos;s Cross, and they have been invited
			to Ibiza too!  Vibornye!
			<p />
			On Friday night {hend} and I will be doing an acoustic
			show in Rugby.  The next proper JBC show is at La Maison
			Du Peuple (!) in Clermont-Ferrand{FR}, on 7th July.
			<p />
			We have achieved a Canadian release (Sony), and so renewed
			energy has been given to the North American campaign.
			We&apos;re aiming for September, so that we can relieve all
			the students of the dough their loving parents have just
			given them at the start of the semester.  (See? I can
			speak American.)
			<p />
			I&apos;ve begun a little writing; favourite lines at this
			early stage rhyme &quot;civilised way&quot; with &quot;drivel I say&quot;...
			hmmmm...
			<p />
			Here is the price of free Publicity - a list of every
			JBC date that I can recall.  I think I missed one in
			June 1985 at a teacher-training college in London, the
			night before we flew to Rome for the Foro Tevere.  Also
				<Image className="float-right" width={270} height={122} alt="[signature]" src="https://jazzbutcher.com/images/19940624/94Jun24_sig.gif" />
			I&apos;ve neglected to put in all the in-store type things
			and the legendary Clare&apos;s Party, Hammersmith in the fall
			of 1985.  Apart from these errors, which I spotted too
			late for the list, I think you&apos;ll find that you have
			The Definitive Word on JBC live action since the year zero.
			<p />
			God - what it is to have a head full of trivial cak, hey?
			<p />
			Hope that all is groovy out west and that you are having
			as much fun with the World Cup as I currently am.
			<p className="clear_float" />
		</main>
		<Footer />
	</>)
}

export default Letter;
