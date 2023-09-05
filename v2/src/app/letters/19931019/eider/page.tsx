import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { max, dj, vu } from '@/lib/defines';

const Letter = () =>  {
	const title = <><Link href='/letters/19931019'>19Oct93</Link> | EIDER</>
	return ( <>
		<Header section='letters' title={title} />
		<div className="letter">
			<b>WHERE IS EIDER MAN?</b>
			<p />
			<samp>
				&gt; Tue, 23 Mar 1993<br />
				&gt; Rick.G.Karr@gagme.chi.il.us (Rick G. Karr)<br />
				&gt; What&apos;s become of our Maximillian Theodore, where is he now<br />
				&gt; and is he still playing?
			</samp>
			<p />
			{max} is, of course, a member of the ongoing {dj} collective.
			He&apos;s also been working as an editor on TV scripts, including
			one about an &quot;up and coming indie band&quot;, which must have
			caused him considerable mirth.  I see virtually nothing
			of him, as he&apos;s London based and I tend to spend most
			of my time here in the Bad Neighborhood, but I saw him
			briefly at the {vu} looking as dapper as any man possibly could.
			Stupidy, the D.J. ensemble currently find themselves without a
			record deal.  Any constructive suggestions can be passed on via me.
		</div>
		<Footer />
	</>)
}

export default Letter;
