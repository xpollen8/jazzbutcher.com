import Link from 'next/link';
import Image from 'next/image';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Attribution } from '@/components/GenericWeb';
import { family, rev, creation_records } from '@/lib/defines';
import GigPlayer, { GigPlayerHeader, GigPlayerFooter } from '@/components/GigPlayer';

const startSeconds = (str = '') => {
	if (typeof(str) === 'number') return str;
	var p = str.split(':'),
			s = 0, m = 1;

	while (p.length > 0) {
			s += m * parseInt(p.pop() || '0', 10);
			m *= 60;
	}

	return s;
}

const WesternTape = () =>
<>
	<Header section="etc" title="Western Family Tape" />
		<main className="etc">
			<Link href="/releases/western.html"><Image
					src="https://v1.jazzbutcher.com/images/western_250.jpg"
					height={250} width={250} alt="western cover" className="float-left m-3" /></Link>
			<br />
			{family},
			the 1992 live album released on {creation_records}, is not the record
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
			{rev} went into Battery Studio in
			Chicago and worked my tapes over.
			<p />
			Somewhere in the process, my master tapes were <b>lost</b> and what was sent
			to {creation_records} for the pressing was worked over further by minions unknown, and the
			final release sounds, basically, rather poor.
			<p />
			I had resigned myself to this let-down until a sort-of miracle occurred:
			<b>a pre-master for Western Family has surfaced</b> -
			tunes from beyond the grave.
			<p />
			<Attribution g="David Whittemore" d="2005-11-15" />
      <GigPlayer
				src="https://s3.us-east-1.amazonaws.com/assets.jazzbutcher.com/audio/1992_JazzButcher_WesternFamily_PreMaster_DAT_CBR.mp3"
				tracks={[
					{ title: `Tones`, start: startSeconds('0'),
						annotation: [
							{
								start: 0,
								comment: `20 seconds of 1k Hz test tones used for audio mastering calibration`,
							}
						],
					},
					{ title: `Girl-Go`, start: startSeconds('0:34') },
					{ title: `She's On Drugs`, start: startSeconds('06:18') },
					{ title: `She's A Yo-Yo`, start: startSeconds('10:24') },
					{ title: `Pineapple Tuesday`, start: startSeconds('15:47') },
					{ title: `Angels`, start: startSeconds('21:43') },
					{ title: `Racheland`, start: startSeconds('28:08') },
					{ title: `Tugboat Captain`, start: startSeconds('35:57') },
					{ title: `Sister Death`, start: startSeconds('40:14') },
					{ title: `Somewhere Over The Rainbow`, start: startSeconds('48:25') },
					{ title: `Still And All`, start: startSeconds('51:33') },
					{ title: `Everybody's Talkin'`, start: startSeconds('57:49') },
					{ title: `Southern Mark Smith`, start: startSeconds('01:01:33') },
					{ title: `Beautiful Snow-White Hair`, start: startSeconds('01:07:05'),
						annotation: [
							{
								start: startSeconds('01:07:23'),
								comment: `Pat: "88.5. JBC Broadcasting. You wanna get down to Nick's, my son"`,
							},
							{
								start: startSeconds('01:07:23'),
								comment: `(David Whittemore was broadcasting using a micro FM transmitter into his car radio in order to test the mix)`,
							},
						],
					},
					{ title: `Falling In Love`, start: startSeconds('01:14:18'),
						annotation: [
							{ start: startSeconds('01:14:18'), comment: "This track is not on Western Family" },
						],
					},
					{ title: `Shirley Maclaine`, start: startSeconds('01:18:15') },
				]}
				header=<GigPlayerHeader
					artist="Jazz Butcher"
					venue='Western Family DAT Pre-Master'
					datetime='2025-06-12'
					title=''
					version=''
					city=''
					state=''
					country=''
					source=''
				/>
				footer=<GigPlayerFooter
					comment=<>
					</>
				/>
			/>
		</main>
	<Footer />
</>

export default WesternTape;
