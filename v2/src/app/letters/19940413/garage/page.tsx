import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LetterHeader from '@/components/LetterHeader';
import { expand } from '@/lib/defines';

const Letter = () =>
<>
	<Header section='letters' title={ [ '13Apr94;;/letters/19940413', 'Garage' ] } />
	<main>
		<LetterHeader title="UPSTAIRS AT THE GARAGE, LONDON" subhead=<Link href="/gigs/1994/Mar10.html">10th MARCH 1994</Link> />
		<blockquote>
		A new &quot;acoustic&quot; venue in the heart of fashionable Islington
		plays host to something which my agent calls THE JAZZ
		BUTCHER ACOUSTIC CONSPIRACY... the wag!
		<p />
		For tonight the line-up is:
		<ul>
		<li>{expand('pat')} - Guitar, voice;</li>
		<li>{expand('dooj')} - Bass, voice;</li>
		<li>{expand('paul')} - Bongos, guitar, voice</li>
		</ul>
		<p />
		The set was:
		<dl>
		<dd><i>Introduction in A-minor-nothing</i></dd>
		<dd>{expand('walk')}</dd>
		<dd>{expand('boy')}</dd>
		<dd><i>Stereoqueen</i></dd>
		<dd>{expand('sweet')}</dd>
		<dd>{expand('davis')}</dd>
		<dd>{expand('odd')}</dd>
		<dd>{expand('jungle')}</dd>
		<dd>{expand('monkey')}</dd>
		<dd>{expand('ghost')}</dd>
		<dd>{expand('party')}</dd>
		<dd>{expand('sis')}</dd>
		<dd>{expand('angels')}</dd>
		</dl>
		Encores:
		<dl>
		<dd>{expand('hour')}</dd>
		<dd>{expand('road')}</dd>
		</dl>
		<p />
		The support came from Spittle Rattle (in their normal
		three piece line-up), the trucking was by Kathie and
		the beer on the rider was Oranjeboom.  Lots of people
		came and applauded, and - best of all - {expand('gerard')} had to pay to get in!!!
		<p />
		The next manifestation of the Jazz Butcher Acoustic Conspiracy
		will be at The Mean Fiddler Acoustic Room in London
		on <Link href="/gigs/1994/Apr8.html">Friday 8th April 1994.</Link>
		</blockquote>
	</main>
	<Footer />
</>

export default Letter;
