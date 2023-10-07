import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LetterHeader from '@/components/LetterHeader';
import { cave, bake, baltic, ben, braind, chang, coonce, davis, dooj, ghost, iain, kill, mall, nick, pat, penguin, pete, richard, stat, sweet, whad, } from '@/lib/defines';

const Letter = () =>
<>
	<Header section='letters' title={ [ '30Aug93;;/letters/19930830', 'Love Bus' ]} />
	<main className="etc">
		<div className="border">
			<div className="flex flex-wrap justify-around">
				<div className="m-1">
					<Link href="https://jazzbutcher.com/images/lovebus.jpg">
						<Image alt="album cover" width={250} height={250} src="https://jazzbutcher.com/images/lovebus.jpg" />
					</Link>
				</div>
				<div className="min-w-[50%] p-10">
					<LetterHeader title="WAITING FOR THE LOVE BUS" subhead="Cultural guidance notes issued to the U.K. press" />
				</div>
			</div>
		</div>
		<a id="davis" />
		{davis}
		<blockquote className="annotation">
			Rosemary Davis, actress, writer and producer,
			edited the original BBC Sound Effects records.  Today
			these sounds, assiduously recorded in the early sixties,
			seem to come from another world.
		</blockquote>
		<a id="baker" />
		{bake}
		<blockquote className="annotation">
			Bakersfield is a place a couple of hours north of Los
			Angeles where seekers after Purity Of Tone stand in
			the desert and watch drag racing before cruising the
			bars of this fine and patriotic borough, and maybe stopping
			by at one of its lifestyle motel complexes.  This particular
			tune was inspired by a conversation in Boardner&apos;s Bar,
			Hollywood, with {iain} and {coonce} of the {braind},
			whose subsequent attempts to lend decency to the whole
			concept are never going to wash with this writer.
		</blockquote>
		<a id="kids" />
		{mall}
		<blockquote className="annotation">
			The JBC spent New Year&apos;s Eve 1992 in Kaliningrad, a
			rocking city of the old U.S.S.R., largely populated
			by recent unemployed Red Army personnel, for whom we
			wrote this tune.  The Mall is, of course, somewhere
			else altogether.
		</blockquote>
		<a id="whad" />
		{whad}
		<blockquote className="annotation">
			A true story.  Whaddya want?  A diagram?
		</blockquote>
		<a id="sweet" />
		{sweet}
		<blockquote className="annotation">
			Inspired by and dedicated - in part - to the Sweetwater
			Springs Saloon in Los Osos, California, a splendid rockin&apos;
			redneck shed, which we heartily recommend to all pompous
			English whiteboy groups trying to &quot;crack the market
			Stateside&quot;.  If you&apos;re going to play {cave},
			sooner or later you&apos;re going to hurt
			yourself; far better to stand in a giant refrigerator
			with six bottles of Jaegermeister and your crew.
		</blockquote>
		<a id="ghosts" />
		{ghost}
		<blockquote className="annotation">
			Why does the modern simpleton assume that he&apos;s causing
			you a problem by killing you?  Inter mortuos nil nisi
			bonum.
		</blockquote>
		<a id="baltic" />
		{baltic}
		<blockquote className="annotation">
			I&apos;m not sure where this came from, and I&apos;m vaguely resentful
			of the fact.  I suppose it imagines itself to well fin-de-siecle.
			Hey! We&apos;re so doomed we&apos;ve learned to love it.
		</blockquote>
		<a id="kill" />
		{kill}
		<blockquote className="annotation">
			Imagine how RUDE it would be to die in someone else&apos;s
			apartment.  Imagine how much BOTHER it could cause them.
			Imagine how much you&apos;d CARE.
		</blockquote>
		<a id="ben" />
		{ben}
		<blockquote className="annotation">
			Written in January, after hearing some extraordinary
			remarks from ordinarily decent people concerning a character
			in a news story who seemed to me - in quite black and
			white terms - the victim.  Full of good intentions and
			bruised sensitivities I tried to write a tune about
			it.  I tried to stay respectful and clear.  In the time
			between the recording and the release of this tune a
			similar incident occurred in New York.  I didn&apos;t catch
			the name this time.
		</blockquote>
		<a id="penguins" />
			{penguin}
		<div className="flex flex-wrap px-5">
			<Image alt="a penguin" height={59} width={52} src="https://jazzbutcher.com/images/penguin.gif" />
			<Image alt="a penguin" height={59} width={52} src="https://jazzbutcher.com/images/penguin.gif" />
			<Image alt="a penguin" height={59} width={52} src="https://jazzbutcher.com/images/penguin.gif" />
		</div>
		<blockquote className="annotation">
			In the most desolate place in the world they are standing
			in large numbers.  They are out there doing it now.
			As far as we can tell they have always been out there,
			miles from anywhere, in conditions that would hospitalise
			you or me in the course of an afternoon.
		</blockquote>
		<p className="clear_float" />
		<a id="chang" />
		{chang}
		<blockquote className="annotation">
			Wrestling with life in Post-Historical Universe, we
			cast around awhile among some of the more extreme options
			open to the modern voter.  A photo appears in a magazine
			in Florida showing the Grand Wizard of the local chapter
			of the KKK in full drag: he is eighteen.  A drawing
			appears in a British newspaper depicting John Major
			strangling Norman Lamont with his underpants.  Can being
			The President&apos;s man help your self-esteem?  Your sex
			life?  Why worry about Home Affairs when you will have
			No Home?  Why vote for the Lesser Evil?
		</blockquote>
		<a id="station" />
		{stat}
		<blockquote className="annotation">
			The inevitable and inglorious consequences of ill-conceived
			short firm triumphalist capitalism considered at some
			length, and with no small amount of melancholy whining,
			as an enormous submarine beast humming a twelve bar
			and taking its time about it.  Sincerity quotient high,
			reverbs lengthy.
		</blockquote>
		{davis} (Slight Return)
		<blockquote className="annotation">
			We can go out the way we came in, but we had best go
			a bit more quietly.  I think that chap in the baseball
			hat has nodded out.
		</blockquote>
		<LetterHeader title="L.P. LINE-UP:" subhead="Who did what" />
			<p>
				{richard}: Fender Jaguar, Gibson Firebird, Burns XII String,
				Tapes and effects, engineering, production.
			</p>
			<p>
				{pat}: Fender Telecaster, Fender Jaguar, Yamaha SF800,
				Keyboards, Percussion, programming, voice, engineering.
			</p>
			<p>
				{pete}: Fender Stratocaster, Yamaha SF800, Burns XII String.
			</p>
			<p>
				{dooj}: Wal Bass Guitar, Voice.
			</p>
			<p>
				{nick}: The Drums.
			</p>
	</main>
	<Footer />
</>

export default Letter;
