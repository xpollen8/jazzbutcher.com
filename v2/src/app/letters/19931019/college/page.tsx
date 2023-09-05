import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Letter = () =>  {
	const title = <><Link href='/letters/19931019'>19Oct93</Link> | COLLEGE</>
	return ( <>
		<Header section='letters' title={title} />
		<div className="letter">
		  <b>COLLEGE</b>
			<p /> 
			<samp>
			&gt; Mon, 21 Jun 1993<br />
			&gt; Rick.G.Karr@gagme.chi.il.us (Rick G. Karr)<br />
			&gt; Is it true that Pat, while studying classics at Oxford,<br />
			&gt; frequently used to busk at sunrise in his college Quad?<br />
			&gt; And which college was it?
			</samp>
			<p />
			I went to Merton College, Oxford, but it&apos;s not true about
			the busking.  I never do anything at sunrise.
		</div>
		<Footer />
	</>)
}

export default Letter;
