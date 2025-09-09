import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LetterHeader from '@/components/LetterHeader';
import { expand } from '@/lib/defines';

const Letter = () =>  {
	return ( <>
		<Header section='letters' title={ [ '30Aug93;;/letters/19930830', 'WHERE IS BUTCHER BAND?'] } />
		<main>
			<LetterHeader title="WHERE IS BUTCHER BAND?" subhead="Soap opera details and untruths for those who insist upon them." />
			<a id="pete" />
			<b>{expand('pete')}</b> has disappeared and, to everybody&apos;s surprise,
			bitterly from the group.  We think he was worried about
			his job.  We think it&apos;s a shame, he&apos;s an extremely good
			player.  He did a lot to make the morose stuff sound
			workable to my ears.  With his departure, things have
			already started to get a lot less morose, but it&apos;s rockin&apos;,
			i guess.  Watch for Pete on short haul European British
			Airline flights.  Like he says, that Richard Branson&apos;s
			a wanker anyway.  What&apos;s wrong with you that you have
			to drink like that?
			<p />
			<a id="nick" />
			<b>{expand('nick')}</b> aka Nicky Le Singe(*) has taken up residence
			in Toronto, where he is married and blissful.  It&apos;s the
			plan that he should play on the European and U.S. tours
			that should begin around September.
			<p />
			<a id="dooj" />
			<b>{expand('dooj')}</b> is in London, as always.  He took his Easter
			holidays in Salzburg, and who can blame him?  He remains,
			in the core line-up as well.
			<p />
			<a id="lix" />
			<b>{expand('lix')}</b> has his band {expand('strange')}, also
			involving <a id="julian" /> <b>{expand('jules')}</b> (guitarist
			JBC US90), <b>{expand('joea')}</b> (bass, ex-{expand('levit')}, JBC {expand('blue')} recordings).
			John Langley (drums, ex {expand('aero')} and an insane singer called
			variously Pat, Pad and Patrick.  Food Records recording
			artistes.  Dark and a bit like 
			Television.  If the JBC get any summer dates in the
			UK, he may well be involved.  Core Mafioso.
			<p />
			<a id="paul" />
			<b>{expand('paul')}</b> remains the drummer with {expand('aero')}.  Has
			been recording (and writing) some 20 tunes with them.
			For two days in June the BA recording line-up was the
			same as that for {expand('blue')} with the addition of {expand('rodney')} Alex
			and Gerard Langley, i.e. Paul, Lix, Joe Allen and me.
			We did about half a dozen things which may or may not
			come out later.  Paul also did a tour of France playing with
			{expand('astor')} during which he succeeded in macing HIMSELF.
			Again, if dates in the UK arise before Nick has been
			re-imported for the European tour Paul will most likely
			be playing the drums.
			<p />
			<a id="joe" />
			<b>{expand('joea')}</b> well, you can pretty much figure out
			what Joe has been doing by seeing what Lix and Paul have
			been up to.  I love Joe.  He is the best bass player
			ever to rob helpless off-licenses for cider.
			<p />
			<a id="alex" />
			<b>{expand('green')}</b> appeared from nowhere over Easter.
			He&apos;s living in Cambridge, playing some Jazz and doing
			a music theory course.  As his owner, Jasmine, runs a
			club he is also in a position to say that he considers
			the Stereo
			MCs to be very impressive, but all style and no real
			content, whereas the Disposable
			Heroes Of Hiphoprisy are, as far as he&apos;s concerned,
			high on content but low on form and presentation.  Right.
			Alex has done some recording recently with someone we
			know, but I can&apos;t remember who it is.  Damn.
			<p />
			<a id="richard" />
			<b>{expand('richard')}</b> produced {expand('bus')} and plays guitar on
			it, alongside me and {expand('pete')}.  I had a vague dream of putting
			him and Pete onstage together, but that can&apos;t really
			happen now.  Still, I&apos;ve seen Richard and Lix playing
			together (at the sessions for {expand('cult')} and {expand('blue')}), and the
			way things are going these days I might yet see it again.
			Richard has been in the studio all year, working with
			his flatmate Mike Stout, and occasionally tinkering with
			the tapes that he and I have made.  We haven&apos;t done any
			serious work on these for months, but he&apos;s got people
			smashing his house to bits around him (&quot;renovation&quot;)
			so he can&apos;t really entertain just now.  I&apos;d like to see
			him do more dates with the JBC, and I think he will.
			<p />
			<a id="laurence" />
			<b>{expand('larry')}</b> is still in {expand('levit')}, with all the lunacy
			that that entails.
			<p />
			<a id="david" />
			<b>{expand('dj')}</b> has just returned from a lengthy personal
			odyssey around the USA.  He is looking for some new business
			deals, writing and recording and he took me to see the
			{expand('vu')} and when he dies I want to be buried right there
			in the same coffin with him, for they were wonderful
			beyond expression.
			<p />
			<a id="max" />
			<b>{expand('max')}</b> is working on scripts for television
			shows.  I saw him for about a minute at the Velvets show
			and he looked unbelievably dapper in a white linen jacket
			and the best pair of sunglasses ever.  Hey - it was that
			kind of evening.
			<p />
			<a id="owen" />
			<b>{expand('owen')}</b> still lives in Hamburg, and this very
			fact shows that he is by far the most intelligent person
			ever to play in the JBC.  No, I mean, we&apos;ve had some
			smart cookies and everything, but really.  He is expected
			to show his well chiselled celtic features over here
			some time soon, says {expand('dj')}.
			<p />
			I&apos;ve been recording with {expand('sonic')}.  We did a cover of <i>Indian
			Summer</i> by Beat Happening-via-Dean Wareham, which
			is on an e.p. that is just being released.  I&apos;ve also
			played on about eight {expand('aero')} studio recordings, some of
			which will appear on some kind of new l.p. some time
			soon.  The sessions were splendid, very relaxed, but
			I don&apos;t think any of the players had a clue as to what
			was going on with the music they were recording.  We&apos;ll see.
			I&apos;m playing guitar for the Aeroplanes at some gigs in
			Portugal this summer.
			<p />
			(*) From {expand('joe')}&apos;s school French book: <b>Ou est Nicky
			Le Singe?</b> <i>Nicky Le Singe est dans l&apos;arbre.</i>
		</main>
		<Footer />
	</>)
}

export default Letter;
