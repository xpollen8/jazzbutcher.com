import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Letter = () =>  {
	const title = <><Link href='/letters/19930830'>30Aug93</Link> | WAITING FOR THE LOVE BUS</>
	return ( <>
		<Header section='letters' title={title} />
		<div className="letter">
		</div>
		<Footer />
	</>)
}

export default Letter;
/*
#define	love.html
#live	if (getval(page) = love.html)
	{headerLetters30Aug93(title=WAITING FOR THE LOVE BUS)}

	<center>
	<Link href="https://jazzbutcher.com/images/lovebus.jpg">
	<Image width=145 height=145 align=left src="https://jazzbutcher.com/images/slovebus.gif" /></Link>
	<b>WAITING FOR THE LOVE BUS</b>
	<p>
	<b>Cultural guidance notes issued to the U.K. press</b>
	</center>
	<br clear="all" />
	<hr>
	<a name="davis">
	{davis}</Link>
	<blockquote>
		Rosemary Davis, actress, writer and producer,
		edited the original BBC Sound Effects records.  Today
		these sounds, assiduously recorded in the early sixties,
		seem to come from another world.
	</blockquote>
	<a name="baker">
	{bake}</Link>
	<blockquote>
		Bakersfield is a place a couple of hours north of Los
		Angeles where seekers after Purity Of Tone stand in
		the desert and watch drag racing before cruising the
		bars of this fine and patriotic borough, and maybe stopping
		by at one of its lifestyle motel complexes.  This particular
		tune was inspired by a conversation in Boardner's Bar,
		Hollywood, with {iain} and {coonce} of the {braind},
		whose subsequent attempts to lend decency to the whole
		concept are never going to wash with this writer.
	</blockquote>
	<a name="kids">
	{mall}</Link>
	<blockquote>
		The JBC spent New Year's Eve 1992 in Kaliningrad, a
		rocking city of the old U.S.S.R., largely populated
		by recent unemployed Red Army personnel, for whom we
		wrote this tune.  The Mall is, of course, somewhere
		else altogether.
	</blockquote>
	<a name="whad">
	{whad}</Link>
	<blockquote>
		A true story.  Whaddya want?  A diagram?
	</blockquote>
	<a name="sweet">
	{sweet}</Link>
	<blockquote>
		Inspired by and dedicated - in part - to the Sweetwater
		Springs Saloon in Los Osos, California, a splendid rockin'
		redneck shed, which we heartily recommend to all pompous
		English whiteboy groups trying to "crack the market
		Stateside".  If you're going to play <Link
		href="http://isvpc146.isv.uit.no/html/person/n.html#nickcave">
		Nick Cave</Link>, sooner or later you're going to hurt
		yourself; far better to stand in a giant refrigerator
		with six bottles of Jaegermeister and your crew.
	</blockquote>
	<a name="ghosts">
	{ghost}</Link>
	<blockquote>
		Why does the modern simpleton assume that he's causing
		you a problem by killing you?  Inter mortuos nil nisi
		bonum.
	</blockquote>
	<a name="baltic">
	{baltic}</Link>
	<blockquote>
		I'm not sure where this came from, and I'm vaguely resentful
		of the fact.  I suppose it imagines itself to well fin-de-siecle.
		Hey! We're so doomed we've learned to love it.
	</blockquote>
	<a name="kill">
	{kill}</Link>
	<blockquote>
		Imagine how RUDE it would be to die in someone else's
		apartment.  Imagine how much BOTHER it could cause them.
		Imagine how much you'd CARE.
	</blockquote>
	<a name="ben">
	{ben}</Link>
	<blockquote>
		Written in January, after hearing some extraordinary
		remarks from ordinarily decent people concerning a character
		in a news story who seemed to me - in quite black and
		white terms - the victim.  Full of good intentions and
		bruised sensitivities I tried to write a tune about
		it.  I tried to stay respectful and clear.  In the time
		between the recording and the release of this tune a
		similar incident occurred in New York.  I didn't catch
		the name this time.
	</blockquote>
	<p>
	<a name="penguins">
	{penguin}</Link>
	<Image ALIGN=MIDDLE height=59 width=52 src="{images}/penguin.gif" />
	<Image ALIGN=MIDDLE height=59 width=52 src="{images}/penguin.gif" />
	<Image ALIGN=MIDDLE height=59 width=52 src="{images}/penguin.gif" />
	<blockquote>
		In the most desolate place in the world they are standing
		in large numbers.  They are out there doing it now.
		As far as we can tell they have always been out there,
		miles from anywhere, in conditions that would hospitalise
		you or me in the course of an afternoon.
	</blockquote>
	<a name="chang">
	{chang}</Link>
	<blockquote>
		Wrestling with life in Post-Historical Universe, we
		cast around awhile among some of the more extreme options
		open to the modern voter.  A photo appears in a magazine
		in Florida showing the Grand Wizard of the local chapter
		of the KKK in full drag: he is eighteen.  A drawing
		appears in a British newspaper depicting John Major
		strangling Norman Lamont with his underpants.  Can being
		The President's man help your self-esteem?  Your sex
		life?  Why worry about Home Affairs when you will have
		No Home?  Why vote for the Lesser Evil?
	</blockquote>
	<a name="station">
	{stat}</Link>
	<blockquote>
		The inevitable and inglorious consequences of ill-conceived
		short firm triumphalist capitalism considered at some
		length, and with no small amount of melancholy whining,
		as an enormous submarine beast humming a twelve bar
		and taking its time about it.  Sincerity quotient high,
		reverbs lengthy.
	</blockquote>
	{davis} (Slight Return)
	<blockquote>
		We can go out the way we came in, but we had best go
		a bit more quietly.  I think that chap in the baseball
		hat has nodded out.
	</blockquote>
	<hr>
	<b>L.P. LINE-UP: Who did what</b>
	<ul>
	{richard}: Fender Jaguar, Gibson Firebird, Burns XII String,
	Tapes and effects, engineering, production.
	<p>
	{pat}: Fender Telecaster, Fender Jaguar, Yamaha SF800,
	Keyboards, Percussion, programming, voice, engineering.
	<p>
	{pete}: Fender Stratocaster, Yamaha SF800, Burns XII String.
	<p>
	{dooj}: Wal Bass Guitar, Voice.
	<p>
	{nick}: The Drums.
	<p>
	</ul>

	{jbc_footer}
#live	endif
*/
