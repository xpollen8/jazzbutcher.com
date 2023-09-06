import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LetterHeader from '@/components/LetterHeader';
import {
	creat, bus, fishco, dj,
} from '@/lib/defines';

const Letter = () =>  {
	const title = <><Link href='/letters/19940913'>13Sep94</Link> | News</>
	return ( <>
		<Header section='letters' title={title} />
		<div className="etc">
			<LetterHeader title='THE BAD NEWS' />
			<p />
			<blockquote>
			We shall not be coming to America or Canada in 1994.
			<p />
			We are simply NOT getting the support of record companies
			in that part of the world, especially in Canada, where
			Sony are showing no sign of either (i) Intelligence,
			or (ii) Any desire to make money out of anything ever.
			This we can only put down to a virulent case of Corporate
			Mentality.  Never mind.
			<p />
			We are, actually, slightly re-assured that the problems
			stem from the arrangement that Sony have entered into
			with {creat}.  We are afraid that the problems were
			beginning with a lack of interest in London, which then
			radiated out to places where it would undermine whatever
			work we had done ourselves.
			<p />
			Now, however, it appears that {creat} have been experiencing
			these difficulties with Sony over a number of artists
			and in a number or territories.  The point of this is
			that it IS something that {creat} are trying to sort
			out.  Thus, we can at least count on them in this situation.
			Likewise, we know that something IS being done.  It could
			have been worse, guys.
			<p />
			Next LP, at least we will know what we are up against,
			and prepare in advance.  Further, we should look at a
			simultaneous release Here and There, which will enable
			us to move a lot more quickly and co-ordinatedly.  This
			wasn&apos;t possible last time, because {bus} came out here
			before the Sony Thing was fully set up.  next time, we
			shan&apos;t waste so much time.
			</blockquote>
			<p />
			<LetterHeader title='THE GOOD NEWS' />
			<p />
			<blockquote>
			It&apos;s been a long time since {bus} came out here.  If we can&apos;t take it round North
			America right now, then we might as well get in and record
			a new LP.
			<p />
			And that is what we&apos;re going to do.  We&apos;ve got the money
			off {creat}, and the studio is booked.  We go in on
			16th October.  Release is planned for the end of January.
			We should be moving into Europe around March &apos;95, and
			then go on more or less directly to North America.  (Pretty
			much a copy of the schedule for {fishco})  The live
			band will do the &quot;core&quot; of the LP, with help from the
			Provisional Members.  Musical Direction will be down
			to me; mixing will be done by {dj}.
			</blockquote>
			<p />
			<LetterHeader title='THE ORDINARY NEWS' />
			<p />
			<blockquote>
			We shall be playing at <b>The Boat Race</b>, Cambridge,
			England on <Link href="/gigs/1994/Oct7.html">7th October 1994</Link>.
			After we finish the LP, in mid-November, we are aiming
			for a few European dates to take us up to Christmas.
			<p />
			The JBC Christmas Party will take place in December at Slurps,
			Northampton.  They will have a proper music license by
			then, so it will be a full-band-and-guests spectacular.
			</blockquote>

		</div>
		<Footer />
	</>)
}

export default Letter;
