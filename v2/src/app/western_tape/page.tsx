import Link from 'next/link';
import Image from 'next/image';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Attribution } from '@/components/GenericWeb';
import { expand } from '@/lib/defines';

const WesternTape = () =>
<>
	<Header section="etc" title="Western Family Tape" />
		<div className="etc">
			<Link href="/releases/western.html"><Image
					src="https://jazzbutcher.com/images/western_250.jpg"
					height={250} width={250} alt="western cover" className="float-left m-3" /></Link>
			<br />
			{expand('family')},
			the 1992 live album released on {expand('creation_records')}, is not the record
			it could have been..
			<p />
			This release was made entirely from live to-DAT
			recordings I made as I followed the merry Conspiracy through the USA
			and Canada.  During the tour, it had not yet been decided <i>if</i>
			a live recording was actually being made - I was simply doing what I love
			to do; preserving the moment for my own amusement.
			<p />
			As it happened, Pat decided to go ahead and construct a live release
			from my master tapes.  After the tour, Pat and
			{expand('rev')} went into Battery Studio in
			Chicago and worked my tapes over.
			<p />
			Somewhere in the process, my master tapes were <b>lost</b> and what was sent
			to {expand('creation_records')} for the pressing was worked over further by minions unknown, and the
			final release sounds, basically, rather poor.
			<p />
			I had resigned myself to this let-down until a sort-of miracle occurred:
			<b>a pre-master for Western Family has surfaced</b> -
			tunes from beyond the grave.
			<p />
			So, I will be offering dubs of this better-than-the-release DAT
			to those interested.
			<p />
			<Attribution g="David Whittemore" d="2005-11-15" />
			<div className="clear_float" />
		</div>
	<Footer />
</>

export default WesternTape;
