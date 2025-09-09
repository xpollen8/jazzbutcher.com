import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LetterHeader from '@/components/LetterHeader';
import { expand } from '@/lib/defines';

const Letter = () =>
<>
	<Header section='letters' title={ [ '13Apr94;;/letters/19940413', 'Mean Fiddler' ] } />
	<main>
		<LetterHeader title=<>That Mean Fiddler Set List In Full</> subhead=<Link href="/gigs/1994/Apr8.html">8th April 1994</Link> />
		<dl>
		<dd>{expand('davis')}</dd>
		<dd>{expand('boy')}</dd>
		<dd>{expand('angels')}</dd>
		<dd>{expand('monkey')}</dd>
		<dd>{expand('sweet')}</dd>
		<dd>{expand('odd')}</dd>
		<dd>{expand('sis')}</dd>
		<dd>{expand('party')}</dd>
		<dd>{expand('drugs')}</dd>
		<dd>{expand('ghost')}</dd>
		<dd>{expand('rain')}</dd>
		<p />
		<dd>{expand('hour')}</dd>
		<dd>{expand('skins')}</dd>
		<dd>{expand('road')}</dd>
		</dl>
		<p />{expand('dooj')} : Bass, voice
		<p />{expand('pat')} : Guitar, voice
		<p />{expand('hend')} : Electric Guitar
		<p />{expand('gab')} : Drum, Cymbal
		<p />
		<p />The possee : {expand('kathie')}, {expand('pete')}, {expand('curt')}, Tony, Raj, Erika,
		Carlos (one is from Northampton)
		<p />The supports: Spittle Rattle (Michael, Catherine,
		Sophie) and Nick &quot;Gilbert O&apos;Sullivan Green&quot;
		<p />
		<blockquote className="annotation">
			There were rather more than three in attendance, weren&apos;t
			there, Matt? (Why didn&apos;t you say hello?) who seemed to
			like it a lot.  Both new players did very well, and are
			most likely here to stay, despite {expand('pete')}&apos;s recent disconcerting
			habits of buying us all hundreds of beers and trying
			to rejoin the band (bless &apos;im...)  There was much consumption
			of the Great God Jaegermeister and then we went home,
			satisfied.
		</blockquote>
	</main>
	<Footer />
</>

export default Letter;
