import Image from 'next/image';
import { autoLink, linkExternal } from '@/lib/macros';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LetterHeader from '@/components/LetterHeader';
import EmbedMedia from '@/components/EmbedMedia';

const TributeTrack = ({ title, artist, url, dl, children }: {
	title: string,
	artist: string,
	url: string,
	dl: string,
	children: React.ReactNode
}) => (
<>
	<EmbedMedia data={{  mediaurl: `/audio/tribute/${dl}`, song: title, mediacredit: artist, mediacrediturl: url }} />
	<div className="lyric_annotation">
		{children}
	</div>
</>
)

const Tribute = () =>
<>
	<Header section="Tribute" />
	<main className="etc">
		<LetterHeader title="THAT TRIBUTE ALBUM IN FULL" subhead="The Butcher writes" />
		<div className="lyric_annotation">
			<Image src="https://jazzbutcher.com/images/tribute_notes.jpg" width={301} height={328} alt="Pat&apos;s Tribute Note" style={{ float: "right" }} />
			<p>
			Living - as you do - with a Nameless Dread, I was anticipating the arrival of the JBC tribute
			record with some considerable furrowing of brow. It was surely going to be the Mother Of
			All Embarrassing Things. A number of good old pals were there for the losing. Just for
			afters, the last fifty people on Earth not to consider me a terminal wanker were about to have
			their minds changed for good. Walls would collapse as the Big Tanks rolled. Guatemalan
			rough-riders would pick off the stragglers in scenes of terrible
			peyote-crazed carnage. Frankly speaking, the whole project just seemed to
			ooze foreboding.
			</p>
			<p>
			And so it rushed forward, chirping aggressively, with mandibles spread and antennae
			lashing.
			</p>
			<p>
			Dave Coverly brought the record over on his visit here last weekend.
			When I asked him what he thought about it he gave his magic dry smile and said that he
			didn&apos;t want to say anything before I heard it. Fair enough, I thought, here goes..
			</p>
			<p>
			And you know what?
			I really had a great time listening to it.
			Nobody got the words wrong (except those of you who got them all wrong on purpose),
			there&apos;s some great playing and, best of all, some wicked ideas. 
			</p>
			<p>
			Personally, the first time I played it, I started with Disc Two (Yeh, I know..) and I&apos;m glad I
			did, if only for the extraordinary kick-off that it gave to what was threatening to be a scary
			experience. For the purposes of my wee review, however, I shall start where I should, at the
			beginning. I should also point out that, when I first heard the record, I had (with one or two
			exceptions) no idea who any of the recording artists were. I only looked up the track listing
			on the internet today when I went to put this piece together.
			</p>
		</div>

		<LetterHeader title="Conspiracy One" />
		<ol>
		<li>
		<TributeTrack title="Sister Death Pt 2."
			dl="1-01_SisterDeathPt2.mp3"
			artist="The Purelove"
			url="www.thepurelove.de"
		>
			So the first noise you hear on the JBC tribute record is me, feeding back. Don&apos;t let anybody
			tell you that the Germans don&apos;t have a sense of humour. I love the Purelove long time. I
			played on their record. I played on their tour. They sneaked this mix onto the tail end of their
			album just to please me. What can I say?
		</TributeTrack>
		</li>
		<li>
		<TributeTrack title="Mr. Odd"
			dl="1-02_MrOdd.mp3"
			artist="Syd Meats & Johnny Jet"
			url="syd@meats7.freeserve.co.uk"
		>
			Syd Meats is another old mate. We met in The Wold, but now he trades as Southampton&apos;s
			Leading Weird Bloke. I do believe that Syd and Johnny have distinguished themselves big
			style with this version. Beautiful fuzz harmonics, soulful harmonica, extra verse nice! 
			You know, I&apos;m sure that you can buy Syd&apos;s recordings of his own songs too. I once saw him
			hold a room full of people in Lincoln absolutely spellbound.
		</TributeTrack>
		</li>
		 <li>
		<TributeTrack title="Sex Engine"
			dl="1-03_SexEngine.mp3"
			artist="Sin Dex Industries"
			url="kenbmiller@aol.com"
		>
		 This one could have been a nightmare. As it is, it sneaks up in a naughty way and the next
		 thing you know I&apos;m having a right good time. What is it? Oh my GOD!!!
		 Dirty lickle drum machine, lovely little organ-thingie hook and a great fuzztone surge. 
		 Top wildlife samples, plus namechecks for Manuel Noriega and Chairman Mao. What more
		 do you want? I may be wrong, but this sounds like a great illustration of how inventive you
		 can be with a 4-track. Cardboard box on the head, anyone?
		</TributeTrack>
		</li>

		<li>
		<TributeTrack title="Zombie Love"
			dl="1-04_ZombieLove.mp3"
			artist="The Jung Generation"
			url="thejunggeneration@yahoo.com"
			>
		 I&apos;ve seen these live. They played with us in Atlanta, and they were terrific. It&apos;s a big sound.
		 Garrick learned the bassline to this tune when he played a wedding with Eider and me back
		 in 1998. He has a Spacemen 3 sticker on his truck. Geezer!
		 Here we find the band hurtling through the JBC tune in a wild punk rock style, with their
		 influences on their sleeves and their amps on eleven. Good to see how the guitarist has nailed
		 the patent proto-Verve one-finger freak-out towards the end. 
		 Actually, he&apos;s really good. See this band.
			</TributeTrack>
		</li>
		

		<li>
		<TributeTrack title="Nothing Special"
			dl="1-05_NothingSpecial.mp3"
			artist="Fat Little Demons"
			url="http://fatlittledemons.tripod.com"
			>
		 Whoa! Huge big dumb roaring sound! Fat guitars! Cheesy organ! Surely these guys are
		 Americans? Guys, if you&apos;re British or something, you listen to too much Foo-Fighters.
		 Which is no bad thing. I wish our version of this song sounded so good. You&apos;ve done a
		 fantastic job on it.
			</TributeTrack>
		</li>
		

		<li>
		<TributeTrack title="Harlan"
			dl="1-06_Harlan.mp3"
			artist="The Limit Club"
			 url="crupi2000@aol.com"
			>
		 <p>
		 I started off with this wondering &quot;Is that it?&quot;
		 Oh my, was that dumb..
		 When that first verse ends and the band comes crashing in over the feedback..Whoa!
		 Yea verily, two &quot;Whoa&quot;s in two versions.
		 I really, really like this version. Another huge great American rock sound and a great vocal.
		 It sounds to me like this is a real gigging band who&apos;d be well worth seeing.
		 And I love the &quot;So tough&quot; at the very end.
		 </p>
		 <p>
		 (By the way, does anyone know - does this have anything to do with The Limit nightclub in
		 Sheffield? I&apos;ll never forget David J&apos;s face when two young girls after a Sheffield gig offered
		 to take him to The Limit.)
		 </p>
			</TributeTrack>
		</li>
		

		<li>
		<TributeTrack title="Down The Drain"
			dl="1-07_DownTheDrain.mp3"
			artist="Marko Van Haddock"
			 url="markg@vanhaddock.fsnet.co.uk"
			>
		 Mad as a sack of Teletubbies. Eider&apos;s poisoned folk song reborn as a KLF demo with 
		 MC Shadow. There is no way that I was not going to love this, and &apos;deed I do. Westside!
			</TributeTrack>
		</li>
		

		<li>
		<TributeTrack title="The Good Ones"
			dl="1-08_TheGoodOnes.mp3"
			artist="Purple Fish"
			 url="tontodisco@marlintexas.com"
			>
		 Still in no-fi land, though there&apos;s absolutely no shame in that. You should have heard some
		 of the early JBC demos..
		 This is one of those tunes, like Harlan, that it&apos;s great to hear performed by some real North
		 American-style rock musicians. No fancy shit, no gimmicks: bass, drums and two guitars.
		 I wrote this for my pal Stuart Kay after he had died at 28. I wonder what he&apos;d say about all
		 this.
			</TributeTrack>
		</li>
		

		<li>
		<TributeTrack title="Sister Death Pt. 1"
			dl="1-09_SisterDeathPt1.mp3"
			artist="The Purelove"
			 url="www.thepurelove.de"
			>
		 Well, again I play on this, so I can&apos;t really comment, except perhaps to grass Fidel up for
		 programming the whole thing in 4/4, which made crossing the spooky bridge immensely
		 difficult but rather a laugh. I love the vocal and the big Hammond swoops. Who says
		 Germans don&apos;t have a sense of humour - have a laugh with The Purelove and buy their album.
			</TributeTrack>
		</li>
		

		<li>
		<TributeTrack title="Still and All (Strangest Kind of Flavor Remix)"
			dl="1-10_StillAndAll.mp3"
			artist="Books On Tape"
			 url="ksmith@lerningkerv.com"
			>
		 Out come the samplers! Almost more of a remix than a cover, which is cool by me.
		 A serious Formby Feedback Fest, which does slightly resemble his own excellent Triumph
		 2000. Grim, lush, theoretical and more than faintly horny. These are words which I never
		 envisaged myself typing about &quot;Still and All&quot;. Goes to show the value of schemes like this
		 one, I suppose.
			</TributeTrack>
		</li>
		

		<li>
		<TributeTrack title="The Human Jungle"
			dl="1-11_TheHumanJungle.mp3"
			artist="Jennifer & Al"
			 url="mail@alavery.net"
			>
		 Yo, Jennifer and Al, are you expected somewhere else? 
		 Bright and sprightly, but coming after what has gone before it sounds a touch over-eager.
		 Tuneful, professional and that, but for me it doesn&apos;t bring a lot to the tune that wasn&apos;t there
		 already. Sorry team, but you sound quite good enough to get along without my 
		 say-so anyway. 
			</TributeTrack>
		</li>
		

		<li>
		<TributeTrack title="Girlfriend"
			dl="1-12_Girlfriend.mp3"
			artist="Once In The Sun"
			url="onceinthesun@aol.com"
			>
		 My initial thought was &quot;Wow! Are these Japanese?&quot;
		 Then, in short order: Italians, Dave Kusworth and Nikki Sudden, Swedes, Dean Wareham  or
		 a long-lost Felt rehearsal tape. Then I got it - come on out, Peter Perrett, and keep your hands
		 where I can see &apos;em.. Classic no-fi recording values and one evil punk rock vocal. My God
		 this takes me back to the eighties, and I don&apos;t mean Dire Straits or Bauhaus.
		 Love that last line..
			</TributeTrack>
		</li>
		</ol>

		<LetterHeader title="Conspiracy Two" />

		<ol>
		<li>
		<TributeTrack title="Chinatown (Sly Wong Mix)"
			dl="2-01_Chinatown.mp3"
			artist="The Gong Factor"
			 url="info@plasticcastle.com"
			>
		 All right, it was written in all innocence, but I probably had a slap coming over this one.
		 Thing is - I love it.
		 I love having my bass playing sampled. I love the mental-olliental noises. I love the kung-fu
		 fighting break in between verses. This tune had jaws dropping and toes tapping at the JBC
		 ranch. We hear Sumo, we hear Black Eg, we hear Screaming Jay Hawkins. We hear healthy
		 disrespect, serious sampling espionage and a rampant imagination. We hear all the stuff we
		 love to hear. Eastside!
			</TributeTrack>
		</li>
		

		<li>
		<TributeTrack title="Partytime"
			dl="2-02_Partytime.mp3"
			artist="Muppet Ranch"
			url="briandmage@aol.com"
			>
		 Sly name, Young Team! Trouble is - you&apos;re not muppets at all, but clearly ladies and
		 gentlemen of the world and Deep Loungecore Warriors. Beautiful vocals, lovely
		 groove.. absolutely gorgeous version -  absinthe all round!
		 (If that weren&apos;t enough, I happen to know that these are some of the nicest people in
		 Minneapolis.)
			</TributeTrack>
		</li>
		

		<li>
		<TributeTrack title="Angels"
			dl="2-03_Angels.mp3"
			artist="Patrick Kinney"
			url="peejays@grafike.com"
			>
		 Classic American stylings here - eggshell fragile and as delicious as anything, with a riveting
		 androgynous vocal. It took us ages to work out if that were a boy or a gurl, Leroy. I&apos;m on
		 record as saying it would be better if it was a boy, by the way: I remember David Surkamp.
		 He does clever things with the guitars as well, adding neat passing chords and some lovely
		 electric lines. Another top version, bedad!
			</TributeTrack>
		</li>
		

		<li>
		<TributeTrack title="Filth"
			dl="2-04_Filth.mp3"
			artist="Vergiftung"
			 url="www.adjective.com/vergiftung"
			>
		 These men are seditious deviant oddballs who should be pursued by The Authorities, yea
		 even unto Florida. Not content with re-writing the riff, the bassline and the arrangement
		 these insatiable thrill-seekers then turn on the Poor Bloody Lyrics as a scary (and probably
		 bald) loner mumbles in a minatory fashion about waitresses. Genuinely unnerving depravity
		 involving The Jacksons, The Rev. Botus Whiteblood-Fleming and some seriously
		 underground sampling. Dangerous, evil and mad. 
		 On the bright side, it does mention a stegosaurus..
			</TributeTrack>
		</li>
		

		<li>
		<TributeTrack title="Southern Mark Smith"
			dl="2-05_SouthernMarkSmith.mp3"
			artist="The Marble Tea"
			 url="www.marbletea.com"
			>
		 Resurgens..
		 Busting out of the South come The Marble Tea with a super-urbane reworking of the tune
		 that mildly annoyed a generation. Drop-dead cool singing and some excellent mental
		 squeaky noises going off in the background grace an otherwise surprisingly faithful version.
		 For what it&apos;s worth, this sounds just as odd now as when it came out back in the 17th
		 Century. Wild Casio-Fu in the hood. Southside!
			</TributeTrack>
		</li>
		

		<li>
		<TributeTrack title="Mind Like A Play Group"
			dl="2-06_MindLikeAPlaygroup.mp3"
			artist="The Zamboni&apos;s"
				url="www.thezambonis.com"
			>
		 {autoLink(`mark_refoy`, true)} returned from a Slipstream show in Philadelphia or somewhere like that with
		 unlikely stories of meeting a band who dug the JBC and played ice-hockey anthems. Here is
		 the living proof! A really neat version of a song that I thought I was happy to have forgotten.
		 I like the ice rink noises and the way it all picks up and gets &quot;proper&quot; at the end. Wish we&apos;d
		 thought of that..
			</TributeTrack>
		</li>
		

		<li>
		<TributeTrack title="D.R.I.N.K."
			dl="2-07_DRINK.mp3"
			artist="Half Assed Snackers"
		 url="irmss@aol.com"
			>
		 I know these men..which is a bit of a shame, because before I found out who they were, I was
		 looking forward to saying how much I had enjoyed the Alien Sex Fiend version of Max&apos;s
		 theme tune. I still do enjoy it, though, as I think of these shadowy and 
		 ill-intentioned individuals lurking deep in their secret Manhattan headquarters, guzzling
		 Power-Martinis and flying the flag for middle-aged sociopaths WORLDWIDE.
			</TributeTrack>
		</li>
		

		<li>
		<TributeTrack title="Forever"
			dl="2-08_Forever.mp3"
			artist="Gin Boy & the Whiskey Kid"
			url="nsatkinson@aol.com"
			>
		 Nice, spooky intro followed by abrupt tape edit and suspiciously louche rendition of JBC
		 paean to global promiscuity with disturbed vibraphone solo. Having just seen &quot;The Crow&quot;
		 with Brandon Lee, I liked the encouragement to arson, though I thought the &quot;copulation&quot; bit
		 was a touch heavy-handed, gents.. had we possibly had a drink?
			</TributeTrack>
		</li>
		

		<li>
		<TributeTrack title="Girls Say Yes"
			dl="2-09_GirlsSayYes.mp3"
			artist="Darling Clementines"
			url="misterscout@hotmail.com"
			>
		 This is absolutely drop-dead gorgeous. It&apos;s one of a very small number of my tunes that I
		 think might be any good anyway, and this version is just swell. It sounds almost like
		 &quot;Workingman&apos;s Dead&quot; or &quot;American Beauty&quot;, and - astonishingly - I mean this as a
		 recommendation. Perhaps Camper Van Beethoven or The Blacks might be more
		 contemporary references. The Southern-Gothic stylings really suit the song. If you knew the
		 JBC and were thinking about getting this record, this would be the track that I would play
		 you first. Pristine and lovely.
		 I could talk for half an hour about the snare drum sound for Heavens&apos; sakes.
		 Yeah, colour me thrilled, flustered and flattered to shit. I would love to hear more of this
		 band..
			</TributeTrack>
		</li>
		

		<li>
		<TributeTrack title="Whaddya"
			dl="2-10_Whaddya.mp3"
			artist="Fuel Burning Oracle"
			 url="tom69@metro.quik.com"
			>
		 Sweet and moody from the East Coast monk of kung-fu. Elegantly simple programming
		 plenty of gratuitous dinosaur stuff, and some of the most spectacularly erratic rhythm guitar
		 known to man. Top one, Tom! Thank you for the music! 
			</TributeTrack>
		</li>
		

		<li>
		<TributeTrack title="Only A Rumour"
			dl="2-11_OnlyARumour.mp3"
			artist="Green Fiend"
			 url="madgdv@yahoo.com"
			>
		 A brave choice of tune for the psychedelic warriors of LA, and a wholesome edifice of tape
		 hiss on which to build it: my kind of people, having my kind of fun. A sweet and largely
		 faithful version, in which Gloria drops a magnificent bass slide into Verse Two and Mark
		 actually succeeds (more or less) in playing two different guitar parts simultaneously at the
		 end. Parched, cool and beautiful, just like the people who made it.
			</TributeTrack>
		</li>
		

		<li>
		<TributeTrack title="Nightmare Being"
			dl="2-12_NightmareBeing.mp3"
			artist="Pandas Relax"
				url="relaxpanda@aol.com"
			>
		 This tune was originally conceived around Laurence O&apos;Keefe&apos;s bass part, which is totally
		 absent from this version. In fact there&apos;s no bass at all, which is a bit weird. Surely no panda
		 can truly relax without a thick old bottom end to rest on?
		 Nor do I quite understand what the singer is up to. Does he really know Kizzy? Why is he
		 quoting Alex Green at the start? Is Peter Lorre really dead or not?
		 Top Jack Kennedy sample towards the end, but I&apos;m afraid that I just don&apos;t get it. Sorry.
			</TributeTrack>
		</li>
		

		<li>
		<TributeTrack title="Big Saturday"
			dl="2-13_BigSaturday.mp3"
			artist="uncletoe&apos;s portasound"
			url="uncletoe@mindspring.com"
			>
		 This gave me the fright of my life when a friend played it to me down the phone, but it&apos;s
		 much sweeter and lovelier in real life, as it were. That&apos;s a neat tremolo on the electric guitar
		 and I like the way that the bass takes one of the lead guitar parts in the middle. This actually
		 sounds a lot like the original JBC demo.
		 Except for singing, which is much nicer. It reminds me a little bit of Angel Corpus Christi
		 which - in my book - is No Bad Thing. 
		 JBC music from New York City- if you&apos;d told me this would happen back in &apos;83,  I&apos;d have
		 freaked right out!
			</TributeTrack>
		</li>
		

		<li>
		<TributeTrack title="Penguins"
			dl="2-14_Penguins.mp3"
			artist="Heuristics Inc."
				url="http://www.heuristicsinc.com"
			>
		 Now this here is mental. Bringing the sensibility of the Von Daemmerung Brothers to the
		 Great Antarctic Twelve-Bar, Heuristics Inc. baffle your correspondent with flappy drums
		 and far-off, grumbly singing. At first I couldn&apos;t see the virtue in this - now I&apos;m not so sure.
		 The penguin sample at the end may have had something to do with that. Skin up..
			</TributeTrack>
		</li>
		
		</ol>
			<LetterHeader title="And that's it" />
			<div className="lyric_annotation">
				<p>
					Except to say that it was all so very much more pleasurable an experience than I
					had feared, with lots of laffs, thrills and shivers along the way. Some of it really blew me
					away. Special Awards go to Darling Clementines, The Limit Club, The Gong Factor,
					Muppet Ranch, Marko Van Haddock and Southampton&apos;s Leading Weird Bloke, but most
					everything here has rocked JBC Mansions after its own special fashion. Last, but not least,
					I&apos;m flattered - yea, even unto touched - that you guys all thought it was worth the time and
					trouble.
				</p>
				<p>
					Hearty congratulations and thanks to all involved!
					You&apos;ll be hearing from my Solicitors shortly.
				</p>
				<p>
					Pat Fish<br/>
					NN1 6th December2000
				</p>
				<p>
					PS - Have a rockin&apos; good Christmas!
				</p>
				<p>
					* UK Reader ~ Coverly and the JBC had their photo on the front page of the Guardian.    We
					happened to be riding in the London Eye when the Christmas fireworks went off. We&apos;re up
					there at the top of it in the sky. Thank you.
				</p>
			</div>

			<i>
			<LetterHeader title="This is the DISCLAIMER." subhead="Please read it.  Thanks!" />
			Pat, and his legal counsel, have been kind enough to give us the thumbs up on this fun little list project.  He could have
			easily said no, so let&apos;s all raise our glass of whatever and toast to his health and kindness and well-groomed hair.  
			<p />
			Of course, there are several conditions we must abide under.  Firstly, we all understand that the sole owner of any of
			these works, whether you are singing them or not, is the JBC.  Just because you are doing the cover version does not
			give you any rights toward it&apos;s ownership.  This means, you cannot put your JBC tribute song on your own band&apos;s cd and
			sell it for money (not unless you go through the proper channels and arrange for royalties to be paid.)  This also means
			that you may not sell your JBC Tribute cd (no, not even on E-bay... leave Ebay for those who know how to use it, like
			David J.)  All in all, don&apos;t do anything that&apos;s gonna piss Pat off...
			<p />
			The JBC Tribute cd is for the list only.  It is for fun.  Failure to have fun with it is a horrible crime.  Horrible...
			<p />
			Sorry about the lecture, but I had to do it.
			</i>
		</main>
	<Footer />
</>

export default Tribute;
