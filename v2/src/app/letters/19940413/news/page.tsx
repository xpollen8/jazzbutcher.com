import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
	scandal, sex, fire_records, dooj
} from '@/lib/defines';

const Letter = () =>
<>
	<Header section='letters' title={ [ '13Apr94;;/letters/19940413', 'News' ] } />
	<div className="etc">
		<b>Those Old Records</b>
		<p />
		It now looks more likely than ever that {scandal} and
		{sex}, at least, will appear this year, most probably
		on {fire_records} (21a Maury Road, London N16 7BP) in the
		U.K. and RESTLESS RECORDS (1616 Vista Del Mar Ave, Hollywood
		CA) in the States.  We are almost at an agreement, I
		think.  More news as it comes up.
		<p />
		<h2>Coming Soon</h2>
		U.S./Canadian tour news: we don&apos;t know anything yet,
		but the wheels of industry have been set in motion, so
		we should have something for you in a few weeks.
		<p />
		The Glass re-issues: Again, the process has been set
		in motion, but again it&apos;s going to take some time, as
		we are taking great care not to be stitched up by any
		record companies this time.  We&apos;ll be having a meeting
		shortly, and will report to you soonish.
		<p />
		New JBC live activities includes a trip to Belgium at
		the end of April, a date in Lincoln in May, and a brief
		European tour at the start of July.
		<p />
		A new touring line-up?  Not impossible.  More news as
		and when it solidifies.
		<p />
		{dooj} hacked to death in the streets by crazed Christian
		fundamentalists? No, actually.  Not yet, anyway.
	</div>
	<Footer />
</>

export default Letter;
