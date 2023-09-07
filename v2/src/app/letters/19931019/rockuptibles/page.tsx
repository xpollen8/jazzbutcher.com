import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LetterHeader from '@/components/LetterHeader';

const Letter = () =>
<>
	<Header section='letters' title={ [ '19Oct93;;/letters/19931019', 'Les Rockuptibles' ] } />
	<div className="etc">
		<LetterHeader title="LES ROCKUPTIBLES" />
		<samp>
			&gt; Wed, 2 Jun 93<br />
			&gt; joe@cetia.fr (Joe Nicholson)<br />
			&gt; Here is the translation of the review of the JBC<br />
			&gt; Waiting for the love bus album. <Link href="/press/93inrockuptible.html">Taken from Les Inrockuptibles,</Link><br />
			&gt; June 1993:
		</samp>
		<p />
		<i>..&quot;where even the guitars end up sounding like a harpsichord..&quot;</i>
		<p />
		<blockquote className="annotation">
			IT IS A FUCKING HARPSICHORD, YOU GALLIC DOLT!
			<p />
			(No, Joe, not you, the Gallic Dolt who wrote it in the
			first place! Good translation, too.  Allez!  Salut maintenant.)
		</blockquote>
	</div>
	<Footer />
</>

export default Letter;
