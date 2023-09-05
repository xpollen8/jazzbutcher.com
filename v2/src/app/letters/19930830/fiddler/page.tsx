import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Letter = () =>  {
	const title = <><Link href='/letters/19930830'>30Aug93</Link> | Mean Fiddler</>
	return ( <>
		<Header section='letters' title={title} />
		<div className="letter">
		</div>
		<Footer />
	</>)
}

export default Letter;
/*
#define	fiddler.html
#live	if (getval(page) = fiddler.html)
	{headerLetters30Aug93(title=Mean Fiddler)}

	<center>
	<b>THAT MEAN <Link href="/gigs/1993/May15.html">FIDDLER
	SET</Link> LIST IN FULL...</b>
	</center>
	<hr>
	<dl>
	<dd>{sue} (<i>Susie</i>, you fool, it was <i>Susie</i>!
	Did I make THAT much of a mess of it?)</dd>
	<dd>{sweet} (Yes, from the new l.p.)</dd>
	<dd>{davis} (Yes again)</dd>
	<dd>{go}</dd>
	<dd><i>September Gurls</i> (Alex Chilton)</dd>
	<dd><i>Waiting For The Love Bus</i> (A one-off.  It went
	through the mincer and now it's a {aero} album track or
	something.)</dd>
	<dd>{whad} (New l.p again.  Only a BIT morose)</dd>
	<dd>{sis} (Yeeeaaaaah)</dd>
	<dd>{odd}</dd>
	<dd>{ben} (New lp stuff.  A ballad about being eaten by
	lions; "It's a family affair")</dd>
	<dd>{ghost} (Yes, new lp again.  They really went for
	this one, you know.  It was scary.)</dd>
	<dd>{drugs} (Now they're rockin')</dd>
	<dd>{angels} (Ha ha ha ha ha!  You Fools!  HA HA HA!!
	HAHAHAHAHAHAHAHAHAHA!!!!!)</dd>
	<dd><i>Goodnight Irene</i> (By 
	Leadbelly, as covered by The Great 
	Mo Tucker. Cf. Paris 15.2.93)</dd>
	</dl>
	<p>
	They were making a terrible fuss and I knew they all
	really wanted me to grin and sing about getting pissed
	and that, and been SO patient, so I did
	<dl>
	<dd>{hour}</dd>
	and
	<dd><i>Skinheads</i></dd>
	</dl>
	<p>
	Then I fucked off but they kept on making an impressive
	old din, so eventually, not to seem cocky or anything,
	I went and got up there again.  Some bloke shouts out
	for {chick} and I think "Uh-oh" so I ask him if he means
	that load of old bollocks about chickens in the bathroom,
	chickens on a stick sorta thing and he goes "NAAAH, you
	PILLOCK! {chick}, the song." and I go "Wot? That miserable
	fucker?" and he goes "Yeh." and so I think "Fuckin' right
	John" and I play the fucker.  Rather well, i thought.
	I hit the A-minor at the end, and I thought "This is
	great, this, I want to do another rockin' number, one
	that starts on A-minor, and I want to do the fucker RIGHT
	NOW, but the only tune I could think of in that nanosecond
	was {walk}, so I thought "You can't play that, you haven't
	played that fucker in four years, you won't remember
	it and you'll fuck up the words and it'll be slow and
	crap and you'll end up stabbing the whole lovely evening
	in the back of the legs", but, of course, it was too
	late by then to anything but start, so I said to myself
	Fuck It and I gave it some, and I don't think I played
	any wrong chords or notes, and I resisted the temptation
	to whistle in the middle-8 (which sounds like a good
	idea, but isn't because the mic always make your whistling
	sound like that) and I made it to the end and they clapped, phew!
	<p>
	What made me do that?
	<p>
	Yeh, so
	<p>
	<dl>
	<dd>{chick}</dd>
	<dd>{walk}</dd>
	</dl>

	{jbc_footer}
#live	endif
*/
