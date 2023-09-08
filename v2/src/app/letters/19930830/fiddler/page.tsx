import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LetterHeader from '@/components/LetterHeader';
import { aero, angels, ben, chick, davis, drugs, ghost, go, hour, odd, sis, sue, sweet, walk, whad } from '@/lib/defines';

const Letter = () => 
<>
	<Header section='letters' title={ [ '30Aug93;;/letters/19930830', 'Mean Fiddler'] } />
	<div className="etc">
		<LetterHeader title=<>THAT MEAN <Link href="/gigs/1993/May15.html">FIDDLER SET</Link> LIST IN FULL...</> />
		<dl>
			<dd>{sue} (<i>Susie</i>, you fool, it was <i>Susie</i>!  Did I make THAT much of a mess of it?)</dd>
			<dd>{sweet} (Yes, from the new l.p.)</dd>
			<dd>{davis} (Yes again)</dd>
			<dd>{go}</dd>
			<dd><i>September Gurls</i> (Alex Chilton)</dd>
			<dd><i>Waiting For The Love Bus</i> (A one-off.  It went through the mincer and now it&apos;s a {aero} album track or something.)</dd>
			<dd>{whad} (New l.p again.  Only a BIT morose)</dd>
			<dd>{sis} (Yeeeaaaaah)</dd>
			<dd>{odd}</dd>
			<dd>{ben} (New lp stuff.  A ballad about being eaten by lions; &quot;It&apos;s a family affair&quot;)</dd>
			<dd>{ghost} (Yes, new lp again.  They really went for this one, you know.  It was scary.)</dd>
			<dd>{drugs} (Now they&apos;re rockin&apos;)</dd>
			<dd>{angels} (Ha ha ha ha ha!  You Fools!  HA HA HA!!  HAHAHAHAHAHAHAHAHAHA!!!!!)</dd>
			<dd><i>Goodnight Irene</i> (By Leadbelly, as covered by The Great Mo Tucker. Cf. Paris 15.2.93)</dd>
		</dl>
		<blockquote>
			They were making a terrible fuss and I knew they all
			really wanted me to grin and sing about getting pissed
			and that, and been SO patient, so I did
		</blockquote>
			<dl>
				<dd>{hour}</dd>
				<blockquote>
			and
				</blockquote>
				<dd><i>Skinheads</i></dd>
			</dl>
		<blockquote>
			Then I fucked off but they kept on making an impressive
			old din, so eventually, not to seem cocky or anything,
			I went and got up there again.  Some bloke shouts out
			for {chick} and I think &quot;Uh-oh&quot; so I ask him if he means
			that load of old bollocks about chickens in the bathroom,
			chickens on a stick sorta thing and he goes &quot;NAAAH, you
			PILLOCK! {chick}, the song.&quot; and I go &quot;Wot? That miserable
			fucker?&quot; and he goes &quot;Yeh.&quot; and so I think &quot;Fuckin&apos; right
			John&quot; and I play the fucker.  Rather well, i thought.
			I hit the A-minor at the end, and I thought &quot;This is
			great, this, I want to do another rockin&apos; number, one
			that starts on A-minor, and I want to do the fucker RIGHT
			NOW, but the only tune I could think of in that nanosecond
			was {walk}, so I thought &quot;You can&apos;t play that, you haven&apos;t
			played that fucker in four years, you won&apos;t remember
			it and you&apos;ll fuck up the words and it&apos;ll be slow and
			crap and you&apos;ll end up stabbing the whole lovely evening
			in the back of the legs&quot;, but, of course, it was too
			late by then to anything but start, so I said to myself
			Fuck It and I gave it some, and I don&apos;t think I played
			any wrong chords or notes, and I resisted the temptation
			to whistle in the middle-8 (which sounds like a good
			idea, but isn&apos;t because the mic always make your whistling
			sound like that) and I made it to the end and they clapped, phew!
		</blockquote>
		<blockquote>
			What made me do that?
		</blockquote>
		<blockquote>
			Yeh, so
		</blockquote>
		<blockquote>
			<dl>
				<dd>{chick}</dd>
				<dd>{walk}</dd>
			</dl>
		</blockquote>
	</div>
	<Footer />
</>

export default Letter;
