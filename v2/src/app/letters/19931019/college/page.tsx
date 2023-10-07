import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LetterHeader from '@/components/LetterHeader';

const Letter = () =>
<>
	<Header section='letters' title={ [ '19Oct93;;/letters/19931019', 'College' ] } />
	<main className="etc">
		<LetterHeader title="COLLEGE" />
		<samp>
		&gt; Mon, 21 Jun 1993<br />
		&gt; Rick.G.Karr@gagme.chi.il.us (Rick G. Karr)<br />
		&gt; Is it true that Pat, while studying classics at Oxford,<br />
		&gt; frequently used to busk at sunrise in his college Quad?<br />
		&gt; And which college was it?
		</samp>
		<blockquote className="annotation">
			I went to Merton College, Oxford, but it&apos;s not true about
			the busking.  I never do anything at sunrise.
		</blockquote>
	</main>
	<Footer />
</>

export default Letter;
