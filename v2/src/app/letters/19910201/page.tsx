import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

import { karel, larry, aero, astor, swynn, tvamp } from '@/lib/defines';

const Letter = () => 
<>
	<Header section='letters' title='1Feb91'/>
	<main className="etc">
		<b>FROM THE SPORTS DESK OF THE WIGMORE SOCIETY (founded 1982)</b>
		<br/>
		<b>DROP A TOWELHEAD - WIN A PICK-UP TRUCK!</b>
		<p>
		Orca, a small plastic whale who joined the JBC in December
		1989 after a brief and unsatisfying career in a store
		called &quot;HIPPOCAMPUS&quot; on Sunset Strip in Hollywood, has
		lost his voice.  {larry}, a performing loony and professional
		word-nigger (&quot;I JUST WANT A FUCKING CHEESE SANDWHICH,
		YOU CANUCK CUNT!!!&quot;) played the bass for TERRY &quot;I AM
		NOT SYD BARRETT, I AM A GRAPEFRUIT&quot; BICKERS on a disturbing
		night in North London when Big Bazz (the {aero} soundman)
		brought his wall of noise to very small basement room
		where I came face to face with the contradictions of
		the modern Italian psyche.  He has subsequently been
		taken in by the kindly staff of the {astor} Home for the
		Persistently Tardy and plans to make a life for himself
		in the cut-and thrust world of antique dealing. Mmmm.
		The JBC is in the same kind of suspension, Streaky was
		caught with his aquiline fingers where they never should
		have been, Paul and I last saw each other in Bath, next
		time it will be Los Angeles.  MOAN INCESSANTLY - WIN
		A TEN DAY EXPENSES-PAID TRIP TO LOS ANGELES.
		</p>
		<blockquote>
			<i>
						...The world would show nothing to me,<br/>
						So what good would living do me?<br/>
			</i>
						(I BELIEVE YOU, MISTER WILSON)
		</blockquote>
		<p>
		Reports coming in say the the new JBC album is half
		written, threatens to be like a cross between <b>Pet
		Sounds</b> and <b>Playing With Fire</b>, and will have
		sixteen guitarists on it.  Cultural censorship is, we
		suspect, being employed as a smokescreen to mask the
		fact that the authorities have no idea exactly what&apos;s
		going to happen here next.  We do, however, have it on
		reliable authority that a song called <i>The John Coutts
		Dreamgirl</i> makes reference to one C. Manson, dangerous
		California loony and neighbour of...  well, cultural
		censorship forbids.  Besides, the author&apos;s off his fuckin
		chump.
		</p>
		<blockquote>
		OUR TRAVEL CORRESPONDENT ADDS:
		</blockquote>
		<p>
		Plans are afoot to mount a traumatising solo/due show
		for American consumption, in order to test morale on
		the home front.  Those who survive the projected atrocities
		will be deemed suitable to act in the defence of domestic
		feudalism, fire and theft wherever the hand of Justice
		may be required.  Thank you.  God bless {tvamp},
		{swynn} and this small piece of fluff from the
		pockets of a celebrated network newsreader.  More details
		as and when they come up.
		</p>
		<p>
		and now a word from our arts correspondent, Catriona Fitzelegantly.
		</p>
		<blockquote>
						ON EST SUPERCOOL<br/>
						ON EST SUPER-RELAXE<br/>
						ON EST SUPER AVEC VOUS<br/>
						CE N&apos;EST PAS GRAVE!<br/>
						NO SEX TONIGHT!
		</blockquote>
		<p>
		right.  Thanks, Cat.  Take it easy, love...
		</p>
		<p>
		MAIS JE T&apos;AIME - C&apos;EST INCROYABLE
		</p>
		<p>
		the story so far
		</p>
		<p>
		{karel}
		a not so young Czech emigre living in a seedy district
		of Vienna with his two disgusting brothers, Otto and
		Emil, is mortified to discover that his lover, an American
		arts journalist with a peculiar name, has stripped his
		large and dirty flat of his every possession during the
		night.  Further, he discovers that he is the recipient
		of persistent and - he suspects - malicious crank phone
		calls from an unidentified source.  Hung-ever, unshaven
		and newly charged to the gunnels with high grade Hungarian
		amphetimine, Karel resolves to track down his lover and
		wreck hideous revenge.  Now read on...
		</p>
		<p>
		&quot;SHIT,&quot; said Karel.
		</p>
		<p>
		NEWS FLASH...NEWSFLASH..NEWS FLASH...NEWSFLASH....NEWSFLASH...
		</p>
		<p>
		Camel rides at London&apos;s Regent&apos;s Park zoo have been withdrawn
		from the duration of hostilities.  It is felt that contact
		with the desert beasts might traumatise the infants of
		brave lads in the Gulf.
		</p>
		<p>
		BBC Radio has drawn up a list of tunes deemed &quot;unsuitable&quot;
		during the current situation.  Blacklisted waxings include
		<i>Another One Bites The Dust</i> by Queen and <i>Walk
		Like An Egyptian</i> by The Bangles
		</p>
		<p>
		&quot;Schwarzkopf&quot; is German for &quot;Blackhead&quot;.
		</p>
		<p>
		<i>Little Sister</i> by Perfect Disaster is still the finest
		record of recent times.
		</p>
		<p>
		The Cultural Censor&apos;s office tenders the above information
		as being certified 75% true.
		</p>
		<p>
		FROM THE CULTURAL ZOOLOGICAL CONCERNS DESK:  Little Jake,
		a small but perfectly formed moggy of Shakespeare Road,
		Northampton, finds typewriters DEAD INTERSTING.
		</p>
		<Image width={456} height={52} alt="[signature]" src="https://jazzbutcher.com/images/19910201/91Feb1_sig.gif" />
	</main>
	<Footer />
</>

export default Letter;
