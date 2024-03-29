import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LetterHeader from '@/components/LetterHeader';
import {
	FIDDLER, davis, boy, angels, monkey, sweet, odd, sis, party, drugs, ghost, rain, hour, skins, road, dooj, pat, hend, gab, pete,
	kathie, curt
} from '@/lib/defines';

const Letter = () =>
<>
	<Header section='letters' title={ [ '13Apr94;;/letters/19940413', 'Mean Fiddler' ] } />
	<main>
		<LetterHeader title=<>That {FIDDLER} Set List In Full</> subhead=<Link href="/gigs/1994/Apr8.html">8th April 1994</Link> />
		<dl>
		<dd>{davis}</dd>
		<dd>{boy}</dd>
		<dd>{angels}</dd>
		<dd>{monkey}</dd>
		<dd>{sweet}</dd>
		<dd>{odd}</dd>
		<dd>{sis}</dd>
		<dd>{party}</dd>
		<dd>{drugs}</dd>
		<dd>{ghost}</dd>
		<dd>{rain}</dd>
		<p />
		<dd>{hour}</dd>
		<dd>{skins}</dd>
		<dd>{road}</dd>
		</dl>
		<p />{dooj} : Bass, voice
		<p />{pat} : Guitar, voice
		<p />{hend} : Electric Guitar
		<p />{gab} : Drum, Cymbal
		<p />
		<p />The possee : {kathie}, {pete}, {curt}, Tony, Raj, Erika,
		Carlos (one is from Northampton)
		<p />The supports: Spittle Rattle (Michael, Catherine,
		Sophie) and Nick &quot;Gilbert O&apos;Sullivan Green&quot;
		<p />
		<blockquote className="annotation">
			There were rather more than three in attendance, weren&apos;t
			there, Matt? (Why didn&apos;t you say hello?) who seemed to
			like it a lot.  Both new players did very well, and are
			most likely here to stay, despite {pete}&apos;s recent disconcerting
			habits of buying us all hundreds of beers and trying
			to rejoin the band (bless &apos;im...)  There was much consumption
			of the Great God Jaegermeister and then we went home,
			satisfied.
		</blockquote>
	</main>
	<Footer />
</>

export default Letter;
