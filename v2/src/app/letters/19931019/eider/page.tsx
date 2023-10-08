import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LetterHeader from '@/components/LetterHeader';
import { max, dj, vu } from '@/lib/defines';

const Letter = () =>
<>
	<Header section='letters' title={ [ '19Oct93;;/letters/19931019', 'Eider' ] } />
	<main className="etc">
		<LetterHeader title="WHERE IS EIDER MAN?" />
		<samp>
			&gt; Tue, 23 Mar 1993<br />
			&gt; Rick.G.Karr@gagme.chi.il.us (Rick G. Karr)<br />
			&gt; What&apos;s become of our Maximillian Theodore, where is he now<br />
			&gt; and is he still playing?
		</samp>
		<p />
		<blockquote className="annotation">
			{max} is, of course, a member of the ongoing {dj} collective.
			He&apos;s also been working as an editor on TV scripts, including
			one about an &quot;up and coming indie band&quot;, which must have
			caused him considerable mirth.  I see virtually nothing
			of him, as he&apos;s London based and I tend to spend most
			of my time here in the Bad Neighborhood, but I saw him
			briefly at the {vu} looking as dapper as any man possibly could.
			Stupidy, the D.J. ensemble currently find themselves without a
			record deal.  Any constructive suggestions can be passed on via me.
		</blockquote>
	</main>
	<Footer />
</>

export default Letter;
