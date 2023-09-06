import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
		gerard, pat, dooj, paul, walk, boy, sweet, davis, odd, jungle, monkey, ghost, party, sis, angels, hour, road, FIDDLER,
} from '@/lib/defines';

const Letter = () =>  {
	const title = <><Link href='/letters/19940413'>13Apr94</Link> | Garage gig</>
	return ( <>
		<Header section='letters' title={title} />
		<div className="letter">
			<center>
			<b>UPSTAIRS AT THE GARAGE, LONDON -
				<Link href="/gigs/1994/Mar10.html">10th MARCH 1994</Link></b>
				</center>
			<hr/>
			A new &quot;acoustic&quot; venue in the heart of fashionable Islington
			plays host to something which my agent calls THE JAZZ
			BUTCHER ACOUSTIC CONSPIRACY... the wag!
			<p />
			For tonight the line-up is:
			<ul>
			<li>{pat} - Guitar, voice;</li>
			<li>{dooj} - Bass, voice;</li>
			<li>{paul} - Bongos, guitar, voice</li>
			</ul>
			<p />
			The set was:
			<dl>
			<dd><i>Introduction in A-minor-nothing</i></dd>
			<dd>{walk}</dd>
			<dd>{boy}</dd>
			<dd><i>Stereoqueen</i></dd>
			<dd>{sweet}</dd>
			<dd>{davis}</dd>
			<dd>{odd}</dd>
			<dd>{jungle}</dd>
			<dd>{monkey}</dd>
			<dd>{ghost}</dd>
			<dd>{party}</dd>
			<dd>{sis}</dd>
			<dd>{angels}</dd>
			</dl>
			Encores:
			<dl>
			<dd>{hour}</dd>
			<dd>{road}</dd>
			</dl>
			<p />
			The support came from Spittle Rattle (in their normal
			three piece line-up), the trucking was by Kathie and
			the beer on the rider was Oranjeboom.  Lots of people
			came and applauded, and - best of all - {gerard}
			had to pay to get in!!!
			<p />
			The next manifestation of the Jazz Butcher Acoustic Conspiracy
			will be at The {FIDDLER} Acoustic Room in London
			on <Link href="/gigs/1994/Apr8.html">Friday 8th April 1994.</Link>
		</div>
		<Footer />
	</>)
}

export default Letter;
