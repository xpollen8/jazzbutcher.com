"use client"

import './page.css'

import Link from 'next/link';
import Image from 'next/image';

import Header from '../../components/Header';
import Tag from '../../components/Tag';

const Fiasco = ({ heading, children }: { heading: string, children: React.ReactNode }) => <details>
	<summary className="fiascoHeader">{heading}</summary>
	<div className="fiascoBox">
		{children}
	</div>
</details>

const IntroMax = ({ heading }: { heading: string }) =>
<Fiasco heading={heading}>
	<div className="fiascoFixed">
		Date: Sun, 20 Sep 2020 16:06:12 +0100
		<p>
		----------------------------------------                                                                             
		</p>

		<p>
		Pat, Owen and I have been writing accounts of some of our favourite JBC fiascos.
		Yes it’s been a quiet couple of weeks. I’m going to post them on Facebook but would
		you like me to send them to you for the Jazz Butcher website?
		</p>

		<p>
		Over the next ten days or so Pat, Owen and I will be posting accounts of some of
		our favourite JBC-related fiascos. It’s one of those pandemic projects I suppose.
		It arose out of a casual conversation and I planned to keep it brief and breezy,
		but it turned out that we tend more to the rambling and digressive.
		Who’d have thought it? There was no shortage of material of course.
		The terms ‘JBC’ and ‘fiasco’ go together like beer and nuts. We
		hope you enjoy them anyway. We did, though not necessarily at the time. 
		</p>
	</div>
</Fiasco>

const IntroPat = ({ heading }: { heading: string }) =>
<Fiasco heading={heading}>
	<div className="fiascoFixed">
		Date: Fri, 25 Sep 2020 18:23:44 +0100
		<p>
		----------------------------------------                                                                             
		</p>

		<p>
		You&apos;ll shortly be receiving the JBC top ten fiascos, a series of short stories by
		Max, Owen and me about some of our most memorable fuck-ups. Eider&apos;s idea. Of course.
		</p>

		<p>
		Whether you put them up together, or just allot each story to the appropriate gig page, is up to you.
		</p>

		<p>
		Take care out there.
		</p>

		<p>
		x
		</p>
	</div>
</Fiasco>

const Fiasco1 = ({ heading }: { heading: string }) => 
<Fiasco heading={heading}>
	<p>
		<i>The Riverie at Buxton Mill, Norfolk, <span className="release_title"><Link href="http://jazzbutcher.com/gigs/2001/Dec31.html">31 December 2001</Link></span></i>
	</p>

	<p>
	<Image src="https://s3.amazonaws.com/assets.jazzbutcher.com/images/fiascos/20011231_3.jpg" width={1000} height={1000} alt={`An amusing image`}/>
	</p>

	<p>
		<Link href="http://jazzbutcher.com/gigs/2001/Dec31.html">(See also: Pat&apos;s contempory account of the gig in question)</Link>
	</p>

	<p>
		<Image src="https://s3.amazonaws.com/assets.jazzbutcher.com/images/fiascos/20011231_1.jpg" width={1000} height={1000} alt={`An amusing image`}/>
		<br/>&quot;They didn’t let the dog in free did they? Eider is told total receipts for the evening&quot;
	</p>

	<p>
		<Image src="https://s3.amazonaws.com/assets.jazzbutcher.com/images/fiascos/20011231_2.jpg" width={1000} height={1000} alt={`An amusing image`}/>
		<br/>&quot;The audience sings along to Tumbling Dice&quot;
	</p>

	<p>
	<h3>Max&apos;s Story</h3>
	</p>
	<div className="fiascoBox">
	<p>
	OK, this one was my fault. And this was the one – an excursion eccentric even by 21st-century JBC standards – that set us off on the current project. And really that was Yasmeen’s fault.
	</p>

	<p>
	At the end of lockdown, earlier in the summer, my partner Yasmeen’s children went on a boat trip on the Norfolk broads. This put me in mind of visits I had made to the area about 20 years previously. My schoolfriend Hugh, the bass player in my very first band, had forsaken a career in advertising – actually I think the career had forsaken him – and ended up working as maître d and sommelier at an upmarket hotel near Norwich. The Riverie at Buxton Mill, on the River Bure, was lovely. I visited Hugh there one weekend and he gave me a room. It was comfortable. We went on a boat trip. It was fun. A while later I returned to watch my friend Rick (by an amazing coincidence the singer and lead guitarist in my very first band) provide musical entertainment along with his slightly eccentric sidekick Phil. They called themselves Tumbling Dice. They played a lot of Stones covers and they were really good. That was fun too.
	</p>

	<p>
	The last of my trips to the Riverie involved a JBC/Tumbling Dice concert on New’s Year’s Eve 2001. I gave Yasmeen a brief outline of this and she laughed like a drain. Yup, I said, that must be in my top ten most ludicrous gigs. And she said, so what were the other nine? And we were off.
	</p>

	<p>
	The Riverie was owned by a friend of Hugh’s called Richard. But Richard’s friends called Richard ‘The Fatwa’. This was not because he was an expert in Islamic law or had it in for Salman Rushdie. The Fatwa was called The Fatwa because he was absolutely fucking enormous. Twenty-five stone at least. When I first met The Fatwa, he was sitting on two stools at the bar, one buttock on each. He was in continual danger of falling between two stools. I thank you. 
	</p>

	<p>
	On the eccentricity scale, I would say The Fatwa scores at least 9.5. He drove a large estate car with the front passenger door missing. ‘Don’t you get stopped by the police?’ I asked. ‘Oh yes,’ The Fatwa replied.
	</p>

	<p>
	All the same, when I got a call from The Fatwa offering the JBC an engagement at The Riverie on New Year’s Eve, it seemed like a good idea. ‘Proper money, old chap, proper money,’ The Fatwa said. That seemed to conclude the negotiation. I thought it had gone rather well. This is a piece of piss, I told myself. Perhaps I should go into management. As it turned out, however, there had been a slight misunderstanding about who was going to provide the audience. 
	</p>

	<p>
	I remained blissfully unaware of the problem until shortly before the event and by then it was too late. Advance bookings, Hugh confided, had been slow. In fact the plural is misleading. On the plus side, it was for a table for two.
	</p>

	<p>
	But by that stage we were all committed. Our great friends Steve and Lynda had come all the way from LA, not just for this event, but all the same we had our bass player. I was feeling pretty pleased with myself because I’d hired a van, though even in this I was found wanting – see Owen’s contribution below. Plus I’d made an impressive effort to boost numbers by enlisting my sister Ann and my then wife Tamaki. Pat B brought Claire. Owen brought Bärbel and his brother Bill. Pat brought Kathie and George. George can’t really be measured on the eccentricity scale. Again, see below.
	</p>

	<p>
	Then there was Rick, Phil, Hugh and The Fatwa, and a couple of members of staff. According to Pat’s account, there were also a few walk-ins, or rather drive-ins, for dinner, wholesome families all. But by the time we went on, the audience essentially consisted of a few friends and family and barely made it into double figures. 
	</p>

	<p>
	And yet it was a riot. Insofar as you can go down a storm to a few mates, Tumbling Dice went down a storm and so did we. Frankly everyone was pissed. Even George, a stranger to both alcohol and dancing, had unexpectedly discovered a passion for both. And I have a vivid memory of Phil sitting on The Fatwa’s knee at the bar saying, ‘Richard, how on EARTH did you get so fat?’ But The Fatwa was radiating bonhomie and seemed to have adopted Phil as you might adopt a stray puppy. To round it all off, Hugh pulled a waitress. 
	</p>

	<p>
	So I think can say without immodesty that my venture into event promotion was a barnstorming triumph socially. Financially, not so much. It all came down to sequence disorder, as it so often does. We’d staged the event before we’d done any publicity or sold any tickets. Then we left before we got paid. These are schoolboy errors I admit. But come on, it was my first time. 
	</p>

	<p>
	And last. My colleagues can be severe. — Eider
	</p>
	</div>

	<h3>Owen&apos;s Story</h3>

	<div className="fiascoBox">
	<p>
	The Road to The Fatwa
	</p>

	<p>
	It’s cold in the metal box. The kind of cold that seems manageable at first, when you set off wrapped up well in pullover and winter coat, with a couple of beers and a nip of something to ... well, to keep out the cold. But as time drags on (and boy, did it drag) and there’s no chance to leap to your feet to get the circulation going, it seeps into your bones like some kind of Eastern State radioactive poison.
	</p>

	<p>
	It’s dark in the metal box – totally dark. A darkness that is only relieved for a moment when a cigarette or a joint is lit. Then you get a momentary image of your immediate surroundings – and you welcome the darkness when it resumes.
	</p>

	<p>
	It is not silent in the metal box.
	</p>

	<p>
	‘Is very traditional place, Norfolk, is quite nice, is important, tradition, is many good things, not all but, lose tradition is sad like Ottoman Empire is we lose much some better lose but some sad and is whole world often this but yes progress but also tradition maybe is always the same but sometimes not because is learn but not really always is sad mistake but what you do, isn’t it?’
	</p>

	<p>
	Every statement George makes concludes with the invitation to respond – ‘isn’t it?’. These vary from lengthy stream-of-consciousness proclamations on any subject under the sun, to more tangible topics: ‘Is quite cold, isn’t it?’ Occasionally a little dialogue ensues. I flatter myself that I’m generally quite a sociable person, so I do try to engage; but as the cold and the darkness gradually wear me down, I find my enthusiasm for the finer points of the Ottoman Empire starting to fade.
	</p>

	<p>
	There is one other person in the metal box. For most of the journey, Kathie is not entirely silent, but she is more or less monosyllabic. This is not because she’s being antisocial. But she does have a lot more experience than me of the art of conversation vis à vis George. Also, she’s cold.
	</p>

	<p>
	George is nominally ‘road crew’ on this jaunt. Oh, let’s not beat about the bush: he’s Pat’s dealer.
	</p>

	<p>
	He’s a lovely, well-read, intelligent, articulate (in his idiosyncratic way) guy. He’s also as stoned as stoned can be.
	</p>

	<p>
	‘You like this to smoke, isn’t it?’
	</p>

	<p>
	I decline politely. I haven’t stopped smoking pot altogether, at this point, but I have stopped indulging before a show (see ‘The Imp Of Groeningen’, later in this series) – and we have a show coming up, if and when this metal box ever grinds to a halt. Not that it makes much difference: in addition to being completely dark and bloody cold, the metal box is, needless to say, unventilated.
	</p>

	<p>
	The metal box is, of course, the back of a hired van. Van, not bus. A minibus (which would include such trivial luxuries as seating for six people with heat and light) costs more to hire than a van. On grounds of cost-effectiveness, a decision was made in favour of the van option. The decision may have been unilateral, it may have been bilateral. It sure as hell wasn’t multilateral.
	</p>

	<p>
	Lacking any concrete evidence to the contrary, I shall choose (unilaterally) to place the blame squarely on Eider’s shoulders. I mean, he wasn’t even in the vehicle himself. Neither he nor I can recall how he travelled on that day, but I suspect that it was by some such rock-god method as his powerful BMW motorcycle or his sister Ann’s flashy sportscar.
	</p>

	<p>
	I’ll be forever grateful for some of the glamorous travel experiences I’ve had courtesy of The Jazz Butcher (the fortuitous upgrade to First Class on a flight from Osaka to Amsterdam springs to mind) but I think it’s fair to say that I’ve also paid my dues at the other end of the comfort scale. On our first excursion to the European mainland I was also crammed into the unheated back of a van (also in December, as it happens). But I was 15 years younger then: full of youthful enthusiasm and somewhat nimbler of limb. I remember nearly having my skull split in two by a flying ride cymbal as an emergency brake-stop was made. On that trip, there was a little cold comfort to be had by the fact that the windshield shattered just outside Harwich, so that the privileged crew in the front seats had to endure similar conditions for the last 100 miles of the journey – plus wind-chill.
	</p>

	<p>
	I suppose it’s not really that far from Northampton to Buxton Mill, Norfolk – as the crow flies. But should the crow choose to drive there in a van (though I grant you, that would be somewhat uncorvine behaviour) it’s a different matter. There are no motorways, and the deeper we penetrated into the wilds of rural Norfolk, the bumpier the road surfaces became. The gear that we were sharing our box with started to bounce around disconcertingly (as did we). Thankfully, I’d saved up enough for a cymbal case by now, so there were no rogue giant sharp-edged skull-carvers flying around the place.
	</p>

	<p>
	I’ve no idea how long the journey took. Time didn’t stand still, because it doesn’t. But it sure didn’t fly, either. Eventually we reached our destination (obviously) and I clambered out into the New Year’s Eve Norfolk night, as chilled and shaken as a fine Margarita. I’ll leave the rest of the evening to my esteemed colleagues ...
	</p>

	<p>
	... but I will just mention the morning after, briefly. On a bright and sunny (but bracingly chilly) New Year’s Day, the posse (guided by Billy, who was blessed with a degree of local knowledge) dragged its weary, hungover bones along a country lane to a pleasant village pub to re-fortify itself with a hearty breakfast, plus beer. When we got back to The Riverie, I was presented – to my delighted astonishment – with two options: zip back down to London, together with my girlfriend, in the comfort of Ann’s aforementioned flashy sportscar – or re-enter the metal box. I’ll give you two guesses.  — Jones
	</p>
	</div>

	<h3>Pat&apos;s Story</h3>
	<div className="fiascoBox">
	<p>
	Bloody artists. Nothing but whining. And this one was the drummer! He’s lucky we let him in the back of van.  — The management
	</p>
	</div>
</Fiasco>

const Fiasco2 = ({ heading }: { heading: string }) => 
<Fiasco heading={heading}>
<p>
			<span className="release_title"><Link href="/gigs/1985/Jul6.html">July 6 1985</Link></span>
			&
			<span className="release_title"><Link href="/gigs/1985/Jul7.html">July 7 1985</Link></span>
			</p>

			<p>
				For Dave Kusworth with all the love
			</p>

			<h3>Pat&apos;s Story</h3>

			<div className="fiascoBox">
			<p>
		It was a beautiful morning at the end of May when Dave Barker woke me up with a phone call. He told me that the band was soon going to play in Spain. My first thought was: why? I couldn’t understand why anybody in Spain might want to hear four pasty Englishmen playing – of all things – guitars.
			</p>

			<p>
		Nonetheless, it came to pass. We landed in Madrid at around ten in the evening. Stepping off the aeroplane was like stepping into an oven.
			</p>

			<p>
		We met our hosts in the arrivals hall, imagining fondly that soon we should be sat in some cosmopolitan bar, relaxing before a good night’s sleep ready for tomorrow’s concert.
			</p>

			<p>
		Schoolboy error, Barry.
			</p>

			<p>
		As we hit the motorway, it became clear that we were not driving into town. After some panicked exchanges with our hosts, it emerged that we were bound for Valencia, some 400 kilometres away. I do not recall arriving there.
			</p>

			<p>
		The hotel was very smart and old-fashioned. Amusingly, it was called the Hotel Londres. We passed a pleasant day milling around Valencia, which concluded with our leaving a local restaurant at about three in the morning. A lone officer of the paramilitary Guardia Civil was standing in the car park, cradling his machine gun, prompting us to be on our best behaviour as we chronically overloaded our little minibus with drunks, punks and weirdoes right in front of his nose. As the last stragglers squeezed aboard, local impresario and fucking legend Tony Vidal, known to all as El Gitano, decided to open up on the cop.
			</p>

			<p>
		“Hey! Tejero!”
			</p>

			<p>
		That’s how it began. After that I lost track of the lengthy and elaborate volley of expert level Valencian abuse that Tony rained down upon this unfortunate – and heavily armed – officer of the law. I had barely any clue about the language and I was distracted by idle speculations as to what it would feel like to have half a dozen rounds of blazing hot high velocity lead tearing through my internal organs.
			</p>

			<p>
		The Generalissimo just stood there and took it. He looked like a beaten donkey. Tony was still giving him gip as – to my intense relief – the bus pulled away.
			</p>

			<p>
		The following day, finally, there was to be a show. There was just the small matter of driving some 300 kilometres to Barcelona before we could play it. When we did play it, I succeeded in sustaining a whopping great electric shock during the soundcheck, which was largely regarded as being somehow my fault, and a severe bang on the head from an iron trapdoor after the show, which actually was.
			</p>

			<p>
		We returned to Valencia for the Main Event, which was to involve two live shows during an all-night event at the enormous and beautiful Chocolate club. El Gitano took great delight in explaining to me that “chocolate” was the local hipster argot for hash. Obviously, I took this as a good sign.
			</p>

			<p>
		Soundcheck accomplished, I found myself alone at twilight in the beautiful gardens at the back of the club. A field of orange trees next door scented the warm air as the mescaline kicked in.
			</p>

			<p>
		We played our first set somewhere around one in the morning. As far as I can recall, it was fairly unremarkable; we were quite seasoned and professional at this point, but things still had a certain garagesque air about them. We finished the set with Zombie Love. As the last, frenzied bars of the tune loomed up, I found myself scrabbling madly at my guitar and doing a particularly loose-limbed sort of duckwalk towards Eider, who was perched upon his high stool stage left. At this point, the Talented One rose to his feet, pulled back the neck of his Yamaha Superflighter and then, right on the very last chord of the show, swung the headstock triumphantly forward - smack! – right into my advancing face.
			</p>

			<p>
		The crowd went mad.
			</p>

			<p>
		If you are going to take the sharp end of an electric guitar full in the chops, it’s probably just as well to do it on mescaline. Laughing and feeling no pain, I left the stage with the rest of the team and headed for the dressing room, intent on making the most of the hilarity. Owen it was who suggested that perhaps I should take a look in a mirror and, on taking his advice, I found myself gazing at something from a Hammer Horror picture. It was still funny, but even I could see that some kind of maintenance was in order. There was blood all over the place.
			</p>

			<p>
		I was duly loaded into a vehicle and transported to a tiny doctor’s surgery in a village at about three o’clock on the morning. The young doctor on duty there explained that the emergency had caught him without any anaesthetic, at which point Max, who had come along to see whether there was any chance that I might actually die from this, produced an ice-cold bottle of Smirnoff Blue that he had brought from the venue “just in case.” Gratefully I guzzled down great mouthfuls of the stuff as the kindly doctor set about sowing up the gaping hole in my upper lip. Once or twice he had to ask me to please stop laughing.
			</p>

			<p>
		Of course, there was still a second show left to perform. If I remember correctly, it was scheduled for something like seven a.m.
			</p>

			<p>
		Our host, concerned for my welfare, asked if there was anything that he could do for me, so I asked him to roll me a joint. He delivered me of possibly the strongest spliff of the finest Moroccan black that I have ever smoked. It didn’t just take the edge off: it took everything off. I retired to a side room backstage, resolved on passing the time until the next show in a blissful coma.
			</p>

			<p>
		When they came to fetch me, I was in utter disarray. My clothes were all over the shop and one of my socks had disappeared altogether. There was some genial speculation as to whether the enormous Roman gladiator who drove the minibus might possibly have had his way with me.
			</p>

			<p>
		Scarcely credibly, I do remember doing the second show. We were fucking superb.
			</p>

			<p>
		A day or two later, we were decanted from the aeroplane onto a travolator at Heathrow airport. We stood leaning on the handrail, a posse of broken men. Eider looked as though every molecule of liquid had been drained from his being by experts. I was still in some parallel reality with three enormous black plastic stitches exploding from my upper lip. Owen had somehow contrived to be coming home with one arm in a sling. (I still don’t even know how that came to pass.) Felix, bless him, still looked as though he was on a package holiday in Benidorm, though he did have the grace to look significantly diminished by his experiences. As we stood there groaning, an entire aeroplane load of Japanese tourists came trotting down the travolator, every one as fresh as a daisy.
			</p>

			<p>
		“Hello!” they cried cheerfully as they passed us, “Good morning!”
			</p>

			<p>
		We were the first English people that they had seen.
			</p>

			<p>
		“Welcome to London,” I hissed through my dehydrated larynx, “Sorry about us.” — Fish
			</p>
			</div>

			<h3>Max&apos;s Story</h3>

			<div className="fiascoBox">
		Tejero, Pat tells me, was the name of the Francoist general who led an armed assault on the Espanish Parliament in the early days of democracy. Pretty inflammatory stuff, especially in Valencia, where the fascists had tanks on the streets that night, before the King got on the blower and told them to stop fucking about. — Ed.
		</div>
</Fiasco>

const Fiasco3 = ({ heading }: { heading: string }) => 
<Fiasco heading={heading}>
<p>
		Ice Stadium, Groeningen, The Netherlands, <span className="release_title"><Link href="/gigs/1985/Aug25.html">25 August 1985</Link></span>
			</p>

			<h3>Owen&apos;s Story</h3>

			<div className="fiascoBox">

			<p>
		I don&apos;t remember much about Groeningen. I remember that several buildings still had cannonballs lodged in their walls, dating back god knows how many centuries. My wife recalls that we all ate pancakes on a boat. And that&apos;s about it ... apart from the baby.
			</p>

			<p>
		Christ, I&apos;ll never forget the baby.
			</p>

			<p>
		It was meant to be an open-air festival, but the summer rain was lashing down in the northern Netherlands, so the organisers decided, at the last moment, to shift the event to an enormous sports hall. In proportion to the venue, the stage was also enormous. The drum-kit, logically enough, was at the back. My three colleagues were at the front. The distance between us, it seemed to me, was approximately the size of Saskatchewan.
			</p>

			<p>
		The main reason for my perceiving it thus was the fact that I was seriously stoned – I mean, really quite seriously indeed. It was by no means the first time that I&apos;d gone onstage after a couple of pulls on a joint, but it did turn out to be the last. A bit of &apos;loosener-upper&apos; spliff before a show was pretty much de rigueur in the mid 80s Jazz Butcher Conspiracy. Failure to participate may not have been a sackable offence, but neither was it deemed an attitude to be encouraged.
			</p>

			<p>
		This, however, was The Netherlands. What our hippie hosts bestowed upon us in a well-intended gesture of pre-show hospitality was (even in the days before genetically manipulated super-skunk) in a different league from the shit that we were used to scoring back home.
			</p>

			<p>
		In addition, we&apos;d been smoking it for some time. Due to the last-minute decamping of the venue, the schedule was running late. We had time to kill and, apparently, no other way of killing it occurred to us. We just kept on toking.
			</p>

			<p>
		It was only when we were finally summoned to work that it dawned upon me how mind-numbingly mary-janed I was. The simple act of getting to my feet was a serious challenge to the old motor functions. The journey from the dressing room to the stage was a marathon across what seemed to be a bouncy castle surface. Somehow, finally, I found myself sitting on the drum-stool and feeling both bewildered and extremely nervous.
			</p>

			<p>
		Soundchecks at small European festivals in the 80s were generally both brief and chaotic, and almost invariably ... well, let&apos;s just say less than satisfactory. Pressure of time meant that this one was unsurpassed in its brevity. Check the lines; make a pretence of asking what the singer and lead guitarist want in their monitors; ignore the drummer, he&apos;s most likely deaf as a post anyway. Off you go, lads. One, two, three, four ...
			</p>

			<p>
		So not only did the physical distance between myself and the others feel like Saskatchewan, but I could hear them about as clearly as if they&apos;d been in ... um ... Manitoba. And I mean the other end of Manitoba, not the one that borders Saskatchewan.
			</p>

			<p>
		Panic duly set in. Sensing, rather than hearing Pat&apos;s count-ins, I simply started playing when I thought it was about the right moment. I doubt that it ever was. I just told myself to hold a straight beat, no breaks, no fancy stuff, no nothing. Let&apos;s just please get this over with. As all I could hear was my own drums, finding the pitch for a vocal harmony was pretty much impossible and I soon stopped trying – an uncharacteristically sensible decision at that point.
			</p>

			<p>
		Repeating the mantra of “Just hold the beat” to myself, I was starting to think that maybe, just maybe, I could get through this without actually spontaneously combusting, or whatever it is that drummers do in such circumstances ... and then came the baby.
			</p>

			<p>
		I guess it wasn&apos;t actually a baby, strictly speaking. &apos;Toddler&apos; is probably more accurate (the finer points of distinction concerning early infancy are not really my forte). Anyway, it was toddling – and it was toddling straight towards me. It seems that it had expressed a wish to join the band onstage, and its stupid, evil, wicked hippie parents (who were probably just as stoned as me) had cheerily complied. Wisely, it didn&apos;t spend much time hanging out with the lead singer; what it had its nasty, beady little eyes on was the drumkit. With increasing horror, I tracked its slow, but relentlessly determined approach across the acres of stage ...
			</p>

			<p>
		Forget &apos;baby&apos; or &apos;toddler&apos;: on reflection, I think that the nature of the beast is best captured by the word &apos;imp&apos; – in the truly satanic sense, that is. With its idiot progenitors smiling, clapping and urging it on, it successfully negotiated the ascent of the drum-riser.
			</p>

			<p>
		My panic level was shooting up by now. In desperation I looked around for a member of the stage crew who might (hope against hope) be clear-headed enough to see that this was a crisis situation. Assistance came there none. I tried to pull myself together as I realised that I was going to have to handle this alone. By this point, my dope paranoia had bestowed upon the creature an unmistakably demonic appearance. Summoning my inner Van Helsing, I tried to look the miniscule monster straight in the eyes. “Go away!”, I said, as firmly and clearly as possible. No – actually I didn&apos;t say that. I screamed it. Bear in mind, I was still thrashing out “The Jazz Butcher Meets Count Dracula”, or some such ditty, while all this was going on (and praying inwardly that the rest of the band were playing the same song).
			</p>

			<p>
		It stared back at me with a blood-freezing grin. I repeated the command several times, each time more desperately high-pitched than the last. I wished I knew the Dutch for “go away”, or indeed for “f*ck off”. I considered holding my sticks aloft in the form of a crucifix, but somewhere in my addled brain the “hold the beat” mantra was still operating. I didn&apos;t actually try to hit the little darling with the drumsticks, though I do recall that its attention was turned to the hi-hat during “The Human Jungle” (which has a busy hi-hat), and it occurred to me that if it trapped its tiny fingers in a closing hat, the whole terrifying incident might come to an abrupt and welcome end . But oh no, it was far too canny for that: it managed to slap at the cymbals just enough to screw up the rhythm but not enough to hurt itself. Truly diabolical.
			</p>

			<p>
		At some point the imp managed to get hold of one of my spare drumsticks. At the sight of that, my soul slowly elevated above my sweat-drenched body as I watched it take over role of JBC drummer. Or so it seemed.
			</p>

			<p>
		The set seemed to go on for ever, until at long last, somewhere across the rolling plains Pat was introducing the last song: “Zombie Love”. “My baby&apos;s been down under the ground...” I started to feel faint.
			</p>

			<p>
		I&apos;ve no memory of how the whole traumatic episode ended. Possibly Pat or Max could cast some light upon it, but I doubt it, seeing as they were on the other side of Canada at the time. When I dream about the event (as I do with alarming frequency), that&apos;s the point where I always wake up – in a cold sweat, needless to say. I seem to have buried the dénouement somewhere deep in my subconscious, and it&apos;s probably best if it stays that way. Maybe the thing transformed itself into a bat or a banshee or a bolt of lightning and skipped off through a black magic wormhole into another dimension. Maybe one of the roadies finally woke up and manhandled it away (not too gently, I hope). Maybe it just got bored and toddled off back to whence it came. Anyway ... eventually it was all over – both the baby assault and the gig. I don&apos;t know whether we did an encore. Somehow I doubt it.
			</p>

			<p>
		Back in the dressing room I doused myself in cold water, poured coffee into my terror-tightened throat, and sat quietly trembling in a corner. I vowed that I would never again smoke pot before playing live. And I never did – because I know that, somewhere out there, the evil imp-child of Groeningen still has me in its sights. — Jones
			</p>
		</div>

			<h3>Pat&apos;s Story</h3>

			<div className="fiascoBox">
			<p>
		My favourite recollection of this busy day on the Polder relates to the journey from Groeningen to a murky festival date the same evening on the other side of the country. Our touring party had by this stage swelled to the point where we were travelling in two vans and I found myself riding in the front passenger seat of Tommy Weber’s VW Microbus. As we traversed mile after mile of flat, featureless landscape, Tommy mused:
			</p>

			<p>
		“I wonder why the Germans ever wanted to invade such a terrible, barren place …”
			</p>

			<p>
		Bemused, I sat in silence as he went on to add:
			</p>

			<p>
		“Ja. I suppose they had to do it so that they could invade England.”
			</p>

			<p>
		Strangest compliment I ever heard. – Fish
			</p>
			</div>

			<h3>Max&apos;s Story</h3>

			<div className="fiascoBox">
			<p>
		Owen’s is a moving account of an event about which, as so often, I remember little, though I doubt I was stoned myself as I’d forsworn the stuff some time before for similar reasons. However, our association with Messrs Fish and Valentine amongst others has meant that getting stoned by accident is an occupational hazard, and I’ve been driven out of dressing rooms several times by a dense fog. In fact, without taking a single puff, I was shitfaced during the entire recording of Hotel Figueroa.
			</p>

			<p>
		My main memory of this day involves the festival Pat refers to above. Audiences in The Netherlands are notoriously reserved (or is it just us?), but never before had our opening number been greeted with total silence. They just stood there staring at us. Unnerving. — Eider
			</p>
			</div>
</Fiasco>

const Fiasco4 = ({ heading }: { heading: string }) => 
<Fiasco heading={heading}>
<p>
		Middle of nowhere, Yorkshire, 22 July 2006
			</p>

			<h3>Max&apos;s Story</h3>

			<div className="fiascoBox">
			<p>
		The private function is an unpredictable beast. We’ve done quite a few in our time – in fact, for a while, if we suspected you were well stocked with beer, Pat and I might just turn up in your living room and insist on entertaining you. Such outings can be a laugh, and our hosts have tended to treat us like royalty even when we’ve pretty much invited ourselves. That’s how royalty carries on after all. The sponsors of this event were no exception and they had specifically requested our musical services. It seemed promising. 
			</p>

			<p>
		But with a private function you don’t know what you’re letting yourself in for until you get there, and by then it’s too late. In this case, ‘there’ was in rural Yorkshire. We were met at the station and driven deep into the forest. A house with a big garden in the middle of nowhere. No going back. 
			</p>

			<p>
		It started to get interesting straight away. For one thing, it turned out that the party was to celebrate the birthday of the family patriarch, not, as we had assumed, that of one of the sons who had booked us. The sons were Jazz Butcher fans. The father, not so much. The guests were mainly the father’s friends and included the local Tory MP. I don’t think he was on the JBC mailing list either. Pat drew my attention to the order of events, which was pinned to a tree. We were sandwiched between the falconry display and the hog roast.
			</p>

			<p>
		This is not the place to go into my views on how we treat other animals. Suffice to say that Pat and I could probably be described as broadly pro-falcon but anti-falconry. A similar principle applies to the hog and the hog roast. Clearly the pig was past caring at that point but my heart went out to those birds, magnificent and proud but tethered, trained, humiliated. I looked on sadly as they were put through their paces. A huge eagle owl glowered back at me. ‘Yeah well follow that, chicken legs,’ it seemed to say.
			</p>

			<p>
		Honestly we did our best but it was never going to be enough. Most of the guests had no idea why we had suddenly taken it on ourselves to plug in guitars and start regaling them with song. They watched us as adults watch misbehaving children not their own, smiling indulgently but secretly hoping someone is about to fetch them a good clout round the back of the head. Then it started to rain and we had to move inside. It was open to the audience to follow, but they declined, sheltering where they could. So there we were, two old fools in the middle of nowhere, Yorkshire, a duck and a fish out of water, playing pointlessly in someone’s living room while they had a party in the garden.
			</p>

			<p>
		Fortunately there was no rating system for the evening’s entertainment for we would surely have come a distant third to those demoralised raptors and a dead pig. Another fine mess you got me into, Fishy.
			</p>
		</div>
</Fiasco>

const Fiasco5 = ({ heading }: { heading: string }) => 
<Fiasco heading={heading}>
<p>
		The Venue, Victoria, London, <span className="release_title"><Link href="/gigs/1983/Oct20.html">20 October 1983</Link></span>
			</p>
			<h3>Pat&apos;s Story</h3>

			<div className="fiascoBox">
			<p>
		In the autumn of 1983 Max and I were performing as a guitar duo in small rooms to small, bewildered audiences, hanging out with David J, doing the beatnik fop thing. And day jobs. We still had day jobs.
			</p>
			<p>
		Somehow our Svengali David E. Barker contrived to fit us onto the bottom of the bill at a gig at the Venue featuring Danielle Dax and the headliner, Alan Vega. Alan Vega from Suicide. It was adjudged that a rhythm section would be necessary and Rolo from The Woodentops was invited to play bass, Mike Packwood from Northampton band Where’s Lisse to play the drums.
			</p>
			<p>
		If you know Rolo as well as I do, you’d be ready to bet your house that if there’s one show he doesn’t want to miss, it’s the show where he gets to support Alan Vega. Yet such were the complications of our tangled young lives that he managed to double-book himself at the very last minute, prompting a good deal of exasperated shouting from your correspondent and a rather strange bass-free rehearsal with Mike in Max’s basement flat. In the little room, to our surprise, the combination of soft drumming with two guitars sounded quite credible. Readers of a certain age will recall that the Venue was a big room.
			</p>
			<p>
		In order to accommodate Mike’s drums and stands, Max lowered the soft top on his white nineteen-sixties Triumph Vitesse. Dressed in our grooviest gear we piled in and made the short drive to Victoria in beautiful sunshine like something out of a particularly fatuous Swinging London movie. As we pulled up outside the front of the Venue, a couple of the house crew were taking a breather on the steps. They looked, they saw and they laughed. They laughed a lot.
			</p>
			<p>
		In due course we make our way onto the enormous stage. The grand red velvet curtains part, revealing a small, largely uninterested crowd milling about before us, and off we go. I wouldn’t go so far as to say that we’re getting away with it but our oddly tinny little songs seem to be going along well enough. And then I break a string.
			</p>
			<p>
		It’s always the ballads. We’re just entering the descending sequence in the middle of ‘Girls Who Keep Goldfish’. Eider launches off into his lovely solo and … MMMGGRRRRRNNNNG! There it goes.
			</p>
			<p>
		It’s always one of the middle ones, too. If a G or a D goes on you, then even the most elementary chord shapes are transformed into shapeshifting Pythagorean thought experiments of the most depraved variety. Live onstage in London’s glamorous West End.
			</p>
			<p>
		And because these things always come in threes, there is one more element. The Elephant of Surprise. The guitar that I am playing is a borrowed Stratocaster, equipped with a tremolo arm. Such is the tension that the whammy bar imposes upon the strings, as soon as one string breaks, all the others veer wildly out of tune. 
			</p>
			<p>
		I had no idea about any of this. I had been studiously avoiding the whammy bar all night, figuring, correctly, that the thing was way beyond my pay grade. Now it showed its awesome power. My attempts to soldier on with five strings were dashed immediately. The thing sounded fucking horrible.
			</p>
			<p>
		There was nothing for it but to stop trying to play, sing the last bit of the song and let Max and Mike float the thing home.
			</p>
			<p>
		We had one more song on the set list. I can’t remember what it was, or what I was proposing to play on it. There may or may not have been an excruciating Tuning Corner interlude. Bear in mind that at this point we didn’t even know that electronic tuners existed.
			</p>
			<p>
		I do recall going into some spiel about the next song. I was a few words in when finally I saw the big red velvet curtains enter my field of vision and close in front of me.
			</p>
			<p>
		“Oh,” I managed, “We’re gone.”
			</p>
			<p>
		Of course, Max and Mike, like everybody else in the building, had seen it coming. There may have been a certain amount of gentlemanly ribbing.
			</p>
			<p>
		We did get paid: fifty quid. By the end of the night we had put it all back over the bar.
			</p>
			</div>

			<h3>Max&apos;s Story</h3>

			<div className="fiascoBox">
			<p>
		Max adds: This was clearly even more of a shambles than I’d thought. I hadn’t remembered the broken string. It used to happen a lot in those days, as we thrashed away in homage to the Velvets. But the whammy bar on a Strat really is a serious complication.
			</p>
			<p>
		I had remembered the curtains of course. We were half-way through what turned out to be our last number when I saw the stage manager making a throat-cutting gesture from backstage. Clearly we’d outstayed our welcome. At the end of the song, Pat said ‘Thank you very much’ and I assumed he’d got the message. So Mick and I just walked off. Pat didn’t notice. Such things are possible on big stages. Then I heard him starting to introduce the next number. I wheeled round to see the curtains closing in. He was waffling on and the red velvet got to within about a metre before he finally realised his time was up. It is a cherished memory. If only there were video footage. 
			</p>
			<p>
		Ah, my lovely Vitesse.
			</p>
			</div>

			<h3>Owen&apos;s Story</h3>

			<div className="fiascoBox">
		Owen adds: I saw this one from a different perspective. I was in the audience that night, and recall very clearly the rabbit-in-the-headlights expression on poor Pat&apos;s face as the curtains of doom made their inexorable approach.
		</div>
</Fiasco>

const Fiasco6 = ({ heading }: { heading: string }) => 
<Fiasco heading={heading}>
<p>
		Hammersmith Town Hall, London, <span className="release_title"><Link href="/gigs/1985/Mar7.html">7 March 1985</Link></span>
			</p>

			<h3>Owen&apos;s Story</h3>

			<div className="fiascoBox">
			<p>
		In the mid 1980s, The Jazz Butcher played as the support act for The Fall on several occasions, at least two of which bring back some excruciatingly embarrassing memories for me. There may well have been more than two, but I’ve happily managed to block any others out of what remains of my memory.
			</p>

			<p>
		Don’t get me wrong: I really like The Fall, always did. Not exactly easy listening, granted, but songs of genuine substance and intelligence that were spat out with a vitriol that captured the zeitgeist  like nothing else at the time.
			</p>

			<p>
		I’m not entirely sure why we were such frequently favoured guests of theirs at the time (on the surface there didn’t seem to be a lot of common ground musically, although it’s true that our singer could also do vitriol now and then, when the fancy took him). In all probability, though, it had something to do with our smash hit single ‘Southern Mark Smith’, which initiated a rapport between Pat Fish and Mark E Smith – perhaps not the most likely of 80s pop bedfellows, but they seemed to hit it off pretty well.
			</p>

			<p>
		I was vaguely friends, from earlier, with their drummer Karl Burns. He once sold me a couple of tasty crash cymbals at a knock-down price. It later transpired that they weren’t, strictly speaking, his to sell. They were the band’s property, and the band was, effectively, Mr Smith. The latter never found out about the deal, fortunately. Otherwise I’d have probably ended up being smacked in the chops by Mr – rather than Mrs – Mark E Smith. And I dare say that would have hurt an awful lot more.
			</p>

			<p>
		But I’m getting ahead of myself.
			</p>

			<p>
		I think the first time we supported them was at Loughborough University. It was June, 1984 and I hadn’t been in the band for long. It was all going pretty well until the last song, when I fell off the back of the stage.
			</p>

			<p>
		Most drummers will be familiar with the problem of the walking drumkit. When you hammer on a bass drum pedal for an hour it has a tendency to inch gradually forwards, in spite of the spurs that are meant to stabilise it. It’s not usually a big deal: you just drag it back towards you every couple of songs – problem solved. At Loughborough, however, the helpful roadies had an alternative solution. Once the kit was set up, they nailed a block of wood in front of the bass drum, rendering it quite immovable.
			</p>

			<p>
		It seemed like a splendid idea – until the laws of physics threw a curveball. As I bashed away at the drum, it stayed solidly put. But the same cannot be said of the drum-stool. The pressure that would otherwise have pushed the kit forwards was now pushing the stool backwards instead. So I just pulled it forwards a couple of inches after each song . Again, not a big problem – until the last song, which was very loud and very long. I think it was probably our cover of Jonathon Richman’s Roadrunner.
			</p>

			<p>
		I was edging backwards as usual but, due to the intensity of the ever-increasing volume, at a somewhat higher rate of knots than previously. What I’d failed to take account of, was how precariously close to the back of the stage I was.
			</p>

			<p>
		Suddenly I was gone. The drum-stool tipped off the back of the platform, and the drummer went with it. The ridiculous spectacle was witnessed by everyone in the room, with the exception of my three colleagues who were, naturally enough, facing the other way. But not for long. I can still see their bewildered expressions as I stuck my head up over the edge of the stage – the three of them staring with bemusement at the unoccupied drum-kit behind them.
			</p>

			<p>
		They kept thrashing away at their guitars (what else could they do?), I clambered back up to the kit, and the pulsating Roadrunner resumed more or less where it had left off. I was a bit bruised but otherwise unscathed – apart from my pride, that is. It was so cool to be a rock ‘n’ roll musician, until you were subject to the unbridled mirth of several hundred students – and, of course, that of your beloved band-mates to boot.
			</p>

			<p>
		But that’s not what I wanted to talk about. I wanted to tell you about Brix.
			</p>

			<p>
		Fast forward a few months to March, 1985. We’re supporting The Fall again, this time in Hammersmith Town Hall. By this time the two groups had done a few shows together. We weren’t exactly bosom buddies, but the relationship was congenial enough. I had a bit of a chat with Karl before the show. I felt ever so slightly paranoid as I put those cymbals up. What if Mark recognised them? As if the lead singer of The Fall is actually going to recognise a 16” Paiste crash that he purchased years ago ...
			</p>

			<p>
		There are positives and negatives to being the support band. Yes, it gets you access to a wider audience; but generally speaking, it’s an audience that’s at best indifferent to you. You’re not the act that they paid good money to see. Then again, we did have our own little hard-core following by this point. Not enormous, but certainly enthusiastic. What they lacked in voluminosity, they tended to make up for in volume.
			</p>

			<p>
		The chief disadvantage of the support slot, however, tends to be the sound. Forgive my cynicism, but I’m convinced that there was sometimes a deliberate ploy to ensure that opening act’s front-of-house sound was noticeably inferior to that of the headliners, in order to whip up the audience’s enthusiasm for the main band.
			</p>

			<p>
		As for the monitor sound ... whilst close attention was paid to every detail of the main act’s requests for their fold-back mixes, nobody really gave a toss about what the opening musicians could or couldn’t hear. And of those musicians, the very lowest in the monitor pecking order was, inevitably, the drummer.
			</p>

			<p>
		I once did a US tour with David J and Max Eider, supporting the young, up-and-coming PJ Harvey, whose drummer’s kit was approximately the size of my living room. Their sound-checks took for ever, and on several occasions we were left with less than half an hour to set up our gear and try to get a half-decent sound, both for the house and the stage. It was chaos, and it was enormously frustrating.
			</p>

			<p>
		But I digress...
			</p>

			<p>
		Back in Hammersmith, my repeated requests to be allowed to hear the singer just enough to have some idea of where we were in the song (or indeed which song it was) fell, inevitably, on deaf ears. So to speak.
			</p>

			<p>
		Our set actually went down well. Our small but perfectly formed fan-base had ensconced themselves in front of the stage, and their beaming little faces were in stark contrast to the stony, sulky demeanours of the row upon row of post-punk nihilists directly behind them (no self-respecting Fall fan would assume any other expression).
			</p>

			<p>
		Nonetheless, the whole set was an ordeal, from my perspective. It’s just not possible to really enjoy playing drums when you can hear neither the singer, nor the rhythm guitar, nor the bass, nor even your own voice. In spite of the cheers at the end, I was pissed off – seriously so.
			</p>

			<p>
		I picked up my sticks in one hand and my beer in the other and stomped off the stage ahead of my colleagues. Behind the main hall there was a long, municipal corridor with several identical doors. I reached the one to what I believed to be our dressing room and, having no free hands, kicked it open. I kicked it quite aggressively, as befitted my grumpy mood.
			</p>

			<p>
		It wasn’t our dressing room. It was The Fall’s dressing room.
			</p>

			<p>
		Immediately behind the door, at that precise moment, Brix Smith – perhaps with a touch of pre-show adrenalin coursing through her system - was crouched down, making the final adjustments to the tuning of her brand new, very expensive semi-acoustic guitar. The door sent both guitar and guitarist flying. There was, as they say, a moment of stunned silence.
			</p>

			<p>
		I muttered something inane like “Shit. Sorry. Wrong room.”
			</p>

			<p>
		Brix got to her feet and stood facing me. During the pregnant pause that followed, the slightly puzzled look on her face seemed to indicate that she was having a little inner discussion with herself, debating what course of action to take. Then her expression changed to one of decisiveness: clearly she had come to a conclusion. She thumped me.
			</p>

			<p>
		It was a decent right hook. Actually, a kind of cross between a right hook and an uppercut: she’s a fair bit shorter than me, so the punch had a diagonally upwards trajectory. With both hands full, my defensive guard was pretty pathetic. Plus, she had the element of surprise. Her fist connected resoundingly with the left side of my chin.
			</p>

			<p>
		The blow didn’t knock me over, but it did stagger me a bit. Having said that, it was by no means a full-force punch: it was intended to inflict punishment, but not to annihilate. I said sorry again and retreated – it seemed the only sensible thing to do.
			</p>

			<p>
		We made up later, of course. Their set had been a storming success, and the back-stage vibe was one of lager-fuelled bonhomie. Pat was keen to congratulate them afterwards and, rather timidly, I tagged along. With not a little trepidation, I approached Brix. Immediately there were mutual apologies which quickly turned into laughter. She was lovely.
			</p>

			<p>
		Later that year she put me on the guest-list for their Hammersmith Palais show, which I duly attended. They were fantastic that night, probably the best Fall gig I saw. She’d left a couple of back-stage passes on the door. After the concert I had another beer at the bar and waited for what I considered a decent interval (I’m all for the open dressing room punk policy, but I think it’s only polite to give the musicians a few minutes’ grace to come down at the end of a show, before invading their space).
			</p>

			<p>
		I finished my beer and made my way backstage to The Fall’s dressing room. I knocked on the door – and then I opened it very, very carefully ...
			</p>
		</div>
</Fiasco>

const Fiasco7 = ({ heading }: { heading: string }) => 
<Fiasco heading={heading}>
<p>
		Cake City – Trochtelfingen, Germany, <span className="release_title"><Link href="/gigs/1985/Sep7.html">7 September 1985</Link></span>
			</p>

			<p>
			<Image src="https://s3.amazonaws.com/assets.jazzbutcher.com/images/fiascos/19850907_1.jpg" width={1000} height={1000} alt={`An amusing image`}/>
			</p>
			<br/>&quot;The calm before the storm&quot;
			<p>
			<Image src="https://s3.amazonaws.com/assets.jazzbutcher.com/images/fiascos/19850907_2.jpg" width={1000} height={1000} alt={`An amusing image`}/>
			</p>
			<br/>&quot;The promoter practises shafting the artist&quot;
			<p>
			<Image src="https://s3.amazonaws.com/assets.jazzbutcher.com/images/fiascos/19850907_3.jpg" width={1000} height={1000} alt={`An amusing image`}/>
			</p>
			<br/>&quot;Aw Kizzy, we miss you&quot;
			<p>
			<Image src="https://s3.amazonaws.com/assets.jazzbutcher.com/images/fiascos/19850907_4.jpg" width={1000} height={1000} alt={`An amusing image`}/>
			</p>
			<br/>&quot;Good grief&quot;
			<p>
			<Image src="https://s3.amazonaws.com/assets.jazzbutcher.com/images/fiascos/19850907_5.jpg" width={1000} height={1000} alt={`An amusing image`}/>
			</p>
			<br/>&quot;So that’s where all the money went&quot;


			<h3>Pats&apos;s Story</h3>

			<div className="fiascoBox">
			<p>
		In March 1985, when David J. joined Love & Rockets, the Jazz Butcher Group introduced their new bassist Felix Ray to a hundred or so unconcerned punters in a conference suite in a Northampton basement. 
			</p>
			<p>
		Soon after that night, promoted by ace photographer Mitch Jenkins (who also happened to be the Butcher&apos;s flatmate at the time), the Hand Of Hinc intervened, with the result that the band swiftly grew accustomed to ceaseless touring, stumbling and shouting their way across England, Germany, Holland, Sweden, Norway, Italy, Austria, Switzerland and Spain. 
			</p>
			<p>
		Sometimes they would play two shows in the same evening. Sometimes there was trouble &quot;Is he always like that?&quot; was becoming something of a catch phrase. It had reached the point where, if he wasn&apos;t actually playing a show or making a record, the Butcher would spend his time shouting at his long-suffering agent down the phone because, frankly, having &quot;gone professional&quot;, he no longer had anything else to do. 
			</p>
			<p>
		But the summer of 1985 was good to the JBC in a violent sort of way. Despite the many injuries sustained during the band&apos;s first brush with Spain, they were in high spirits. Possibly they thought they were indestructible. (Given that at the time of writing they have just completed their seventh US tour and their first club dates in Japan, perhaps they are. We may never know). 
			</p>
			<p>
		So let us join our ungainly crew as they jet off one September Friday with a view to playing a festival date in the south of Germany the following night. Having been met by their promoter, a very small man in a very large Mercedes, the band are delighted to discover that the festival is in a tiny Alpine village rejoicing in the locally typical but nonetheless laughably quaint name of Trochtelfingen. They drink like sailors and demand money with menaces from the promoter (successfully, as it goes, poor man!) before retiring in a polite and orderly fashion to their small, charming, family-run village hotel. Friday night in Schwaben. No problem at all. 
			</p>
			<p>
		Saturday dawns bright and lovely. The hotel is all abuzz, for there is to be a wedding. The JBC nod and beam sweetly at the natives before leaving to do a lunchtime soundcheck in a massive candy-striped tent in an Alpine meadow. It is a fine, professional soundcheck and it goes on for a while, during which the band do not waste the opportunity to renew their still fresh and passionate affair with German beer. 
			</p>
			<p>
		In the afternoon the band&apos;s German agent, Joachim, takes the JBC to the extraordinary Schloss Liechtenstein nearby. As they explore the mad fairy-tale castle perched high on a cliff above the village, The Butcher and Eider are faintly spooked while Felix beams, resplendent in grey leather trousers, black shirt open to the waist and fake leopard skin jacket. Owen is nowhere to be seen, but those who are curious about his movements are advised to check out his recordings with his band Shakespeare and the Bible. The posse sits and smokes thoughtfully under a huge and ancient tree outside the castle. It is a peaceful and idyllic afternoon. With beer. 
			</p>
			<p>
		In a disturbingly prophetic photograph, the JBC can be seen posing at the castle gates. The Butcher is good-naturedly throttling his German agent, while Kizzy O’Callaghan is taking the opportunity to thrust his half-eaten Mars Bar into the singer&apos;s ear. 
			</p>
			<p>
		It is around teatime that the cracks begin to show. Returning to the hotel, the JBC discover a number of things and the number is four: 
			</p>

		<ol>
		<li>The wedding party is in full swing in the restaurant.</li>
		<li>There is a trolley loaded with all manner of elaborate German cakes just sitting there all on its own in the hall.</li>
		<li>The newlyweds have left their hotel room door open.</li>
		<li>Nobody is paying any attention to the JBC</li>
		</ol>
			<p>
		Felix is straight into action. Seeing that many of the cakes have already been partially eaten, he figures that nobody is going to miss them now. With commendable foresight he decides to liberate a few of them for later in the evening, in case anyone feels a bit peckish, like. It is while stealthily concealing the cakes in Room 27 that he and the Butcher find the happy couple&apos;s door open. Within minutes their bathroom is entirely stuffed with the hotel&apos;s extensive collection of massive pot plants, with a large and elaborate model boat awaiting any intrepid explorer who makes it as far as the bathtub. 
			</p>
			<p>
		As the sun goes down, the JBC slip discreetly from the hotel and up to the massive candy-striped tent. Here all is rock and roll, although, with hindsight, the photographs do indicate that the stage lights might have tended towards a possibly unnecessary shade of hot pink. Still, the JBC rock the tent, take the cash money and continue their research into the amount of vodka that can be poured down the singer&apos;s throat. 
			</p>
			<p>
		The Butcher doesn&apos;t know it yet, but he has already eaten the last meat that will ever pass his lips. As the band troop into a local restaurant for a well-earned dinner the excitable singer spots a tank full of live crayfish. &quot;Uh-oh&quot; he thinks, &quot;Its&apos; a Which-One-Would-You-Like-Murdered-And-Delivered-To-Your-Plate Sir Scenario&quot;. 
			</p>
			<p>
		In a fit of well-meaning but spurious solidarity The Butcher joins Messrs Eider and Jones on the vegetarian tip. It later transpires that the crayfish are, in fact, house pets. By such misunderstandings do we change our lives. 
			</p>
			<p>
		Back at the hotel, all is quiet. Sadly, it appears that the band has missed the shrieking from the bridal suite. The JBC gather for vodka and cake in Room 27. The mood is satisfied, peaceful. There is happy, animated conversation and none of it is about trashing hotel rooms. Drinks and cakes are passed around. 
			</p>
			<p>
		There is no way of predicting the moment. The Butcher is sitting on the floor, leaning against Felix&apos;s bed enjoying a massive and particularly well-preserved chocolate cake when, in a moment of festal stupidity, he makes the fatal mistake of taking a tiny lump of chocolate and flicking it towards the lead guitarist. In seconds Eider is upon him, seizing the cake and grinding it in its entirety into the hapless Butcher&apos;s face forever. It all goes off. 
			</p>
			<p>
		Remember: these are men who have lived their whole lives in the shadow of the Cold War Bomb. They understand concepts like &quot;escalation&quot; and &quot;massive pre-emptive strike&quot;. Within minutes large areas of Room 27 are chocolate-plastered no-go zones and Eider finds himself forcibly imprisoned in the bathroom, a wardrobe pushed up against the door for added security. He responds as any reasonable man would under the circumstances. He riots. 
			</p>
			<p>
		Negotiations go on for some time before The Talented One succeeds in arguing his way to freedom. Sadly, not for the first time, a European treaty is soon betrayed and once again appalling cake abuse breaks out. By now there is not a white surface in the room. Eventually the Konditoreisturmtruppe runs out of vodka and curls up in the wreckage to sleep. 
			</p>
			<p>
		At an unusually early hour on Sunday morning the JBC are in the car park, loading into the back of the van. They move surprisingly quickly and silently for men in their condition. Kizzy and Mister Jones have spent the last half hour desperately stuffing slick brown bedclothes into the wardrobe of Room 27. As they make their final exit from the hotel, they pass a pair of young chamber maids heading in the opposite direction. Just as they gain the lobby, they hear a great and deeply comical shriek from upstairs. 
			</p>
			<p>
		The JBC bus goes tearing out of the car park, headed for Stuttgart Airport at some speed. After some five or ten miles the band spot a German Police car on the road behind them. Giggling hysteria is not far away as the tour manager puts on his best German accent to announce: &quot;Ja... we would like to have a word with you about some... cakes.&quot; 
			</p>
			<p>
		Pat Fish, NN1, 2001.
			</p>
		</div>
</Fiasco>

const Fiasco8 = ({ heading }: { heading: string }) => 
<Fiasco heading={heading}>
<p>
		Ullapool, <span className="release_title"><Link href="/gigs/1999/May21_2030.html">21 May 1999</Link></span>
			</p>

			<h3>Max&apos;s Story</h3>

			<div className="fiascoBox">
			<p>
		I was dubious from the start. A Highland Festival? ‘You’ll love it,’ said Curtis. And you might think, baldy, that after so many years all is forgiven and forgotten. But one day a rusty VW Microbus will pull up outside your house and you’ll know your number is up.
			</p>

			<p>
		Pat and I caught the sleeper to Inverness. I drank a lot and slept a little. Pat drank all night with some mad Scotsman and didn’t sleep at all. So we arrived at an ungodly hour on top form. My coat had been lost or stolen on the train. It was May but it was freezing. Standing forlorn on the concourse, we looked around for someone who might be the promoter of a Highland Festival. None appeared. My mood darkened.
			</p>

			<p>
		As it turned out, that first day was the highlight. We eventually made contact with the idiot who’d booked us and several hours after that we managed to check into a hotel and rest.  We had no gig that night, so we watched a couple of other acts and had a few beers. It was OK. Though I had no coat.
			</p>

			<p>
		The next day we were driven across to Ullapool on the west coast in a rusty VW Microbus with ill-fitting doors and windows and no heater. Correction: there was a paraffin heater wobbling around in the back, threatening incineration. It made no difference to the temperature. This part of Scotland is not called The Highlands for nothing, and on the way it started to snow. Did I mention that I had no coat?
			</p>

			<p>
		Ullapool is lovely, but it’s a village in a very sparsely populated region. A few hardy Scots must once have thought it worth braving the cold and the rain and the storms and the isolation for the sake of the herring. Nowadays I suppose the local economy is based mainly on tourism. It’s the sort of place that young people can’t wait to leave. What is there to do? Well, we never found out how the young people of Ullapool would like to spend a Friday night, but we did establish beyond doubt that it isn’t listening to two berks singing songs about goldfish and elephants. Were it not for the fact that our good friends Bob and Anne from Seattle were, improbably, in attendance, the audience could have been characterised as uniformly sullen.
			</p>

			<p>
		The build-up had also been a bit fraught because it transpired that we’d forgotten the PA. They managed to borrow something but it sounded like shit. Also, we were booked into the local youth hostel. No bar. No restaurant. No bathroom en suite. No smoking. This is not the sort of accommodation favoured by the JBC.
			</p>

			<p>
		The next night, back in Inverness, we did a poorly attended gig in a pub and fetched up at a local nightclub. Alcohol will help me forget, I thought. I was right. Emerging a couple of hours later, I tripped over a sleeping policeman and broke the fall with my head. I was bleeding profusely and an ambulance was called. When I’d been loaded in and they’d staunched the flow a bit, a weary looking paramedic did a quick concussion check. ‘What’s your name, fella?’ said he. I considered the matter. ‘Well, give me a minute,’ said I, &apos;I think I must know the answer to that one.’ But I had not the foggiest idea.
			</p>

			<p>
		One of these days, Curtis Johnson. One of these days.
			</p>
		</div>
</Fiasco>

const Fiasco9 = ({ heading }: { heading: string }) => 
<Fiasco heading={heading}>
<p>
		Teatro Greco, Syracusa – <span className="release_title"><Link href="/gigs/1985/Sep15.html">15 September 1985</Link></span>
			</p>

			<h3>Pat&apos;s Story</h3>

			<div className="fiascoBox">
			<p>
		It is the early afternoon. I am crossing the luxurious marbled lobby of our hotel, aiming to join my colleagues as they lounge like proper pop stars by the pool beneath the blazing Sicilian sun. Somewhere behind me I hear a young woman’s voice say:
			</p>
			<p>
		“China Crisis.”
			</p>
			<p>
		Unsurprisingly, I pay this no heed.
			</p>
			<p>
		“China Crisis.” 
			</p>
			<p>
		This time with a little more urgency.
			</p>
			<p>
		Intrigued, I turn and look across the vast expanse of the lobby. There is no one to be seen, except for a small uniformed lady behind the reception desk. Exhibiting some anxiety and directing her gaze at me, she raises her voice in an accusatory manner and says:
			</p>
			<p>
		“China Crisis!”
			</p>
			<p>
		By way of illustration, she proceeds to wave a telephone at me.
			</p>
			<p>
		My Italian is rudimentary at best. Right now, I am so discombobulated at the idea that I might be mistaken for a member of successful eighties record company band China Crisis that all capacity for communication eludes me. In panicked desperation I cry:
			</p>
			<p>
		“No China Crisis!”
			</p>
			<p>
		and leg it out into the sunshine.
			</p>

			<p>
		Our band has been fortunate enough to work with many wonderful booking agents and concert promoters on three continents. Among their number, however, the name of the Italian promoter Paolo Bedini will always shine brightest. With the unfailing support of his brilliant assistant Mario, Paolo involved us in some of the most gloriously surreal episodes of what we laughingly call our “career.” Of those episodes, surely none can compare with our trip to play at a festival at the glorious ancient Greek theatre in Syracuse.
			</p>


			<p>
		We had arrived the previous night, just in time to see the wonderful 3 Mustafas 3 playing a fabulous set in this fabulous setting. The whole event looked and sounded great. The hotel, as detailed hereinbefore, was lush. What, as they say, could possibly go wrong?
			</p>
			<p>
		The soundcheck was a classic case of “hurry up and wait.” We stood for much of the afternoon beneath the unforgiving sun, doing nothing much at all, while all around us men came and went yelling 
			</p>
			<p>
		“Va bene cosi. Va bene!”
			</p>
			<p>
		Just as the heat exhaustion really started to kick in, everybody suddenly became very agitated:
			</p>
			<p>
		“We must to make the soundcheck! The doors they will open!”
			</p>
			<p>
		Oh, righty-ho, then. Here to help. We conduct a rushed and rudimentary soundcheck and clear off the stage, parched and in search of beer.
			</p>

			<p>
		The theatre fills up with curious Sicilians and a couple of support bands express themselves freely and at some length. It’s really late when finally we take the stage and we are hardly on peak form. Still, we set about doing what we do and for a couple of tunes, flaky onstage sound notwithstanding, we get by all right. Somewhere around the third or fourth song things start to get weird. The exact order of events escapes me now, for reasons which will become clear, but I think it began with the entire PA suddenly shutting down in the middle of a tune. The lights may well have gone too. We tried to keep on playing, but it was then that I noticed the smoke rising from one or two of the backline amplifiers.
			</p>
			<p>
		Owen, God bless him, kept on drumming. For a few bizarre moments, his drums were the only sound, apart from random unamplified yelling from Max and me. I don’t think we were shouting for help as such and I don’t think that the stuff coming out of our mouths had anything much to do with any songs. We were just…freaking out.
			</p>
			<p>
		We left the stage in utter disarray, unable to do otherwise. Seeking solace in liquor, I wandered off around the empty theatre getting more and more drunk and wondering if this would be a particularly good time for me to find Jesus. But Jesus, in His wisdom, was hiding.
			</p>
			<p>
		A member of the audience gave me a tiny silver boxing glove, which opened up to reveal two tiny silver boxers going at it. I still have it and I still can’t believe that anybody would want to give us anything other than a slap upside the head after a performance like that.
			</p>
			<p>
		The following morning, severely weakened by our experiences, we were loaded onto a bus to the airport in nearby Catania. We arrived at the airport with minutes to spare, but when we reached the boarding gate, a young woman pulled a chain across to bar our way and announced that the flight was closed.
			</p>
			<p>
		With hindsight, it seems fairly obvious that a discreetly proffered twenty quid would probably have fixed this little local difficulty. In our desiccated condition, however, this simple strategy eluded us, so we beat a shamefaced retreat to the café at the front of the airport and put in a distress call to Paolo Bedini, who arrived some thirty minutes later. He listened to our tale of woe and sank his face into his hands.
			</p>
			<p>
		Paolo, Mario and our road manager Phil went into conference mode. None of us really understood what was going on but we were all enthused when we were rounded up a little while later and herded onto an aeroplane to Milan. I don’t know what anybody else was thinking at this point, but I was feeling pretty hopeful that, on arrival in Milan, we would be transferred onto another aeroplane to take us home to London.
			</p>
			<p>
		Of, course, it didn’t work out like that.
			</p>
			<p>
		We stood in a little knot in the airport foyer, wondering what Phil and our host were doing at the Hertz car rental desk. Then, to our utter consternation, we were led out into the car park and loaded onto a minibus. The plan, Phil explained with weary resignation upon his face, was to go to the airport at Genoa. I am unable to report faithfully, but there may well have been some sheep noises from the back of the bus.
			</p>
			<p>
		We drove the dramatic, mountainous road down to Genoa. It was about eight in the evening and just getting dark when we arrived at Genoa Airport. It was tiny. And it was closed.
			</p>
			<p>
		Baffled and defeated, we drove on into town, where Paolo checked us into an unassuming but perfectly pleasant little hotel before taking us all out for a delicious and much-needed dinner. Over welcome beers he explained that he no longer had enough money to send us all home by aeroplane, which came as no real surprise after the day’s adventures. The plan was that he would send us home piecemeal, as funds became available. On the train.
			</p>
			<p>
		The following day, Max and Owen set off for London, via Paris. Phil, Felix and I would stay in the hotel until tickets could be sorted for us. We hung around in Genoa for a day or two, wandering the streets and seeing the sights, during which time Paolo would routinely turn up and buy us lunch and dinner in local restaurants. He was gracious beyond belief and the dinners were magnificent. Eventually we were dispatched homeward and, apart from a low-level diplomatic incident involving Felix and a French douanier at the border, we traversed the continent without any further drama and finally made it home.
			</p>
			<p>
		A couple of weeks later I was talking with my good friend Rolo, whose band the Woodentops were also forging themselves some kind of international career at the time. I told him about our adventures with Paolo and how it took us several days to find our way home. He laughed. Apparently, his band had had an almost identical experience with Paolo at a festival in Italy just a couple of months before.
			</p>
			<p>
		The next time that we worked with Paolo and Mario, we found ourselves headlining a massive Young Communists festival in Napoli, one of my fondest memories of our entire “career.” But that, as they say, is another story.
			</p>

			<p>
		Pat Fish, NN, 11/09/2020
			</p>
		</div>
</Fiasco>

const Fiasco10 = ({ heading }: { heading: string }) => 
<Fiasco heading={heading}>
			<p>
		Club 33, Zurich, <span className="release_title"><Link href="/gigs/1986/Nov27.html">27 November 1986</Link></span>
			</p>

		<p>
			<h3>Max&apos;s Story</h3>
		</p>

			<div className="fiascoBox">
			<p>
		I felt this one had to be included. ‘OK but can it be funny?’ Pat said. Of  course it can be funny, I thought. It’s Spinal Tap. Spinal Tap is funny.
			</p>

			<p>
		I’m sure the JBC was not the only bunch of misfits to feel as if they might have been the inspiration for This Is Spinal Tap. This is the scene in which my Nigel Tufnel walks out on Pat’s David St Hubbins. Our version is just a bit wilder and more extreme, though disappointingly Owen never did manage to spontaneously combust or choke on someone else’s vomit.
			</p>

			<p>
		To tour is to be infantilised. Someone else takes care of absolutely everything apart from playing the songs. The only time you have to make a decision is in a restaurant. But here’s the thing: the adults are not really in charge. Ultimately, the children pay the bills, so no one is in a position to call out bad behaviour. Indeed, larger record companies actually employ people to pander to and fawn over their ‘artists’. That’s how it used to be anyway. Remember the ‘Kick my ass!’ scene in Spinal Tap? Promoters too need to keep the artist sweet. Everyone does. So the children run amok. Their fuel, their sugar, is alcohol and other drugs, lack of responsibility, apparent impunity, untamed and competitive egos, indulgence, flattery, delusions of grandeur, delusions of adequacy. Plus there’s the exhaustion and the stress – and the stress, to be fair, tends to fall disproportionately on the frontman/woman or prime mover.  It can all get ugly and very often does. There’s a psychiatric syndrome called ‘folie à deux’ in which two or more people share the same psychosis and reinforce the same delusions. Touring in a band can be a lot like that.
			</p>

			<p>
		We had been doing a lot of touring. My brief diary note for the previous day mentions ominously that the hotel had been found wanting. I don’t remember if the sandwiches had been cut to our satisfaction. Indeed my memories of the entire evening are hazy, but I do remember the atmosphere. It was toxic. It emanated from a brew of ego, paranoia, bile, vitriol and alcohol. Huge quantities of alcohol. We were long-term, committed, heavy drinkers but at that point it had got out of hand. And we were dog-tired. There were tensions. There were even some musical differences. Moreover, we were in Zurich. If you want an insight into Pat’s feelings about Switzerland and its citizens, check out Wilson’s wonderful song ‘Quality People’. Finally, to put the cherry in the cocktail, the club fancied itself cool and trendy. We were all set.
			</p>

			<p>
		Best not to dwell on the details, not least because I can’t remember them. The crux is that in the aftermath of a dire gig, things were said that could not be unsaid. Tables were overturned that could not be un-overturned, except in the literal sense. That was down to me apparently, but strangely it was Richard, our stand-in bass player, who finally punched Pat in the mouth. No Derek Smalls he. ‘I quit,’ I chipped in, and I meant it.
			</p>

			<p>
		I hadn’t changed my mind the next morning. Phil dropped me off at the station and, pausing only to throw up violently behind the bus, I bad the JBC a far from fond farewell.
			</p>

			<p>
		Emotionally and physically I was shattered. But I didn’t have a hangover. Nope, I had acute alcohol poisoning. Huge waves of anxiety and panic were breaking over me. I like the word ‘crapulence’ but it doesn’t begin to convey what was going on in my digestive system. To borrow Eric Idle’s phrase, the sluices had opened at both ends. Having managed to get on the train, I spent most of the journey in the toilet with angry passengers hammering on the door. Meanwhile, my brain seemed to be trying to batter its way out of my skull through the eye sockets. I knew I urgently needed to rehydrate but I couldn’t keep anything down.
			</p>

			<p>
		No mobile phones in those days. I was alone, desolate, desperate. Betrayed. As the panic loosened its grip slightly, incompatible emotions struggled for ascendancy. There was a kind of horror at the desperate measure to which I had resorted. And there was white fury. I was like a cringing cur that from time to time is overtaken by an urge to rip someone’s throat out. 
			</p>

			<p>
		Is all that funny? Of course it is. But enough. Let us leave poor Maximilan to his travails in the toilet. He will make it back to London, to home and girlfriend and cats. This is not the end for our antihero. In time he will recover his mojo and make his first solo album. Nor of course was it the end for The Jazz Butcher; nor yet for the badly damaged friendships involved; nor yet, still more remarkably, for the joint touring career of Messrs Eider, Fish and Jones. Much later they would stage an idiotic but arguably glorious comeback. And how about this: as we played out these unedifying and apparently terminal scenes in Zurich, the collaborative album of which Pat and Max are most proud was still nearly 20 years in the future.
			</p>

			<p>
		PS I don’t want to spread fake news so I should point out that according to Pat – and long experience suggests he is likely to be right – it was actually the night before when Richard lamped him. Funny how the memory organises events to suit a narrative. Owen’s memory had done the same. Also, apparently everyone came along to the station in the bus and there was a last grim drink in the station bar. I do have a vague recollection of that now Pat has reminded me. Sadly, this was one occasion when I was well beyond the help of a hair of the dog.
			</p>
		</div>
</Fiasco>

const Epilogue = ({ heading }: { heading: string }) =>
<Fiasco heading={heading}>
			<p>
		Even fiascos come to an end, though I think a few of these have haunted each of us over the years and reliving them like this has been bittersweet. We were mining a rich seam and the selection was to some extent arbitrary. The events all involve the JBC when I was on board. Obviously we have all suffered and inflicted suffering repeatedly in other line-ups and indeed alone, and there is probably nothing more excruciating than dying on stage with no one to share the agony. But that’s another story. Here are a few that broadly met the criteria but didn’t make the cut:
			</p>

			<p>
		<b>The Embassy Club, London, <span className="release_title"><Link href="/gigs/1983/Nov23.html">23 November 1983</Link></span></b>: An early duo show, both on barstools. I became aware of a kind of blur in my peripheral vision and turned my head (in those days such feats were possible) to see my companion teetering dangerously on his perch. Abandoning his musical duties, Butchie was desperately flailing about in an attempt to regain his balance, but he’d passed the point of no return and only succeeded in launching himself off the front of the stage. God I wish I had video of this one.
			</p>
			<p>
		<b>Pat adds</b>: I was reaching down for my flute when the instability kicked in. The Embassy Club stage is high so I spent some time in the air, together with flute, guitar and microphone stand. Scarcely credibly, I landed on my feet, but then found myself obliged to clamber back up onto the stage, a deeply undignified process, during which I managed to upend two extremely expensive bottles of Holsten Pils. Not good.
			</p>

			<p>
		<b>The Roxy, Los Angeles, <span className="release_title"><Link href="/gigs/1986/Aug14.html">14 August 1986</Link></span> (Owen)</b>: ‘Take your fingers out of your assholes and put your hands together for The Jazz Butcher Experience!’ These were the well-chosen words with which the late, great Country Dick Montana introduced us. We already knew Dick, having supported his band The Beat Farmers in the UK earlier that year. He was legendary: huge, hilarious and slightly scary. The Roxy show, at the end of our first US tour, was something of a barnstormer [what’s it doing here then? – ed]. Backstage afterwards, celebrations were felt to be in order. Dick charged in bearing gifts: miniature bottles of mescal, one for each of us. Mescal is the one with an unfortunate worm in it (not exactly veggie fare but we let that pass in the heat of the moment). Most of us knew about the worm factor – but not Max. As he tipped the contents down his throat, an unforgettable series of expressions crossed his face in rapid succession: puzzlement, shock and nausea, to name but a few. [Ah I see – ed]
			</p>

			<p>
		<b>Bob and Anne’s wedding, Seattle, <span className="release_title"><Link href="/gigs/1997/Sep19.html">19 September 1997</Link></span></b>: This event was anything but a fiasco – indeed the trip provided two good friends and some of my fondest JBC memories. However, at the reception, at the end of our last number, I was seen to approach the microphone and say ‘Thanks very much for coming!’ like some kind of rock star playing to a packed house at The Astoria. Obviously the guests had not come to see us. What a berk.
			</p>

			<p>
		<b>The Troubadour, Los Angeles, <span className="release_title"><Link href="/gigs/1999/Sep9.html">9 September 1999</Link></span></b>: We decided to disqualify individual musical pratfalls on the grounds that they were too common. But this one was something. David J Haskins forgets the chords to DRINK and unwisely opts to wing it. Seriously avant garde.
			</p>

			<p>
		<b>Odeon, Münster, <span className="release_title"><Link href="/gigs/1985/Apr13.html">13 April 1985</Link></span> (Owen)</b>: Mid-concert, Pat seemed to be having a bit of a chat with the audience, so I thought I had a moment to light a rollie. But he caught me out: he broke off mid-waffle and suddenly launched into the intro to ‘Girlfriend’. I&apos;d just lit my fag and didn&apos;t have time to remove it from my mouth before coming in on the drums. I only used to play the rather fast (and risky) drum break following the second chorus about 20% of the time, but the show was going well so I decided to go for it tonight. As the moment approached I took in a deep breath – and promptly swallowed my cigarette.
			</p>

			<p>
		<b>Mont Blanc, December 1985</b>: There was an extended period when it seemed we couldn’t enter or leave France without the accursed douaniers demanding that we dropped our trousers before taking unspeakable liberties with our persons. We were once even intercepted a long way from the border and taken to an interrogation centre where they gutted the van and subjected us to the usual procedure. But we always had the last laugh. This occasion was particularly gratifying because, when his turn came, our old friend and crew member Tommy walked up to the Funny Room, calmly deposited his hash and pipe on the floor beside the door, went in, took it like a man, then picked up his stash on the way out. We were in awe.
			</p>
			<p>
		<b>Owen adds</b>: When I was gleefully recounting to Bärbel this tale of her ex-boyfriend&apos;s super-cool (to our minds) performance in the Alpine Customs Shed, she seemed singularly unimpressed. ‘Oh yes’, she replied drily, ‘we did that every few weeks for a couple of years in the late 70s, when we were smuggling hash from The Netherlands.’  
			</p>

			<p>
		<b>Elfenbein, Bielefeld, Germany, <span className="release_title"><Link href="/gigs/2002/Jun15.html">15 June 2002</Link></span></b>: This was one of those ‘but no one came’ evenings, though in our defence we were up against a World Cup game involving Germany. Quite a large club. They tried to partition a section off but it was still embarrassing. Not the best atmosphere backstage. However, the reason this one sticks in my mind is because the stage lighting was such that I couldn’t see the inlays on my fretboard. Concerned that this might lead to some highly original voicings, I asked the lighting engineer for more white light on stage. He looked at me for a moment or two and then said: ‘Maybe you should take off your sunglasses, you fucking moron.’ Actually he didn’t articulate that last bit but his tone was expressive. In fact, I can see the fretboard under the glasses, but he was looking at some prick in shades complaining it was too dark. All in all a chastening evening.
			</p>

			<p>
		<b>Gabe’s, Iowa City, <span className="release_title"><Link href="/gigs/2000/Apr25.html">25 April 2000</Link></span> (Pat)</b>: He was so chuffed that he’d made it in time to see the soundcheck. He’d driven some 300 miles up from Kansas, tripping his brains out all the way. Within minutes of meeting me, he’d thrust a tab into my palm and made about forty song requests. Shamefully, we left our good friend Brian Kelly, who had volunteered to help us, stranded with him at the ‘merch desk’ while we sneaked out for a very ‘college town’ sort of dinner. On returning, we found poor Brian still coping manfully with our Number One Fan’s streams of technicolour consciousness. With the exception of a few bored staff, there was nobody else in the place. We played a full set. Probably made his year: always assuming that he remembers. I lost the tab. [Let us be thankful for small mercies – ed]
			</p>

			<p>
		All best
			</p>

			<p>
		Max, Pat and Owen
			</p>
</Fiasco>

const Fiascos = (): React.ReactNode =>
<>
		<Header title={`Top 10 JBC Fiascos`} />
		<Tag>
			Top 10 JBC Fiascos - Published to Facebook, September, 2020
		</Tag>

		<div className="fiascoBox">
			<video controls preload="none" poster="https://s3.amazonaws.com/assets.jazzbutcher.com/images/fiascos/teaser_thumb.jpg">
				<source src="http://assets.jazzbutcher.com/images/fiascos/teaser.mp4" type="video/mp4" />
			</video>
		</div>

		<IntroMax heading="Max&apos;s Introduction" />
		<IntroPat heading="Pat&apos;s Introduction" />
		<h3>The Fiascos</h3>
		<div className="fiascoItem">
			<Fiasco1 heading="The Fatwa"/>
			<Fiasco2 heading="Marginal Europe – First Explorations on Planet Spain"/>
			<Fiasco3 heading="The Imp of Groeningen – a cautionary tale"/>
			<Fiasco4 heading="The hog roast"/>
			<Fiasco5 heading="Curtains for Butchie"/>
			<Fiasco6 heading="Pride comes before The Fall"/>
			<Fiasco7 heading="Cake City"/>
			<Fiasco8 heading="Two Go To The Highlands"/>
			<Fiasco9 heading="Teatro Greco"/>
			<Fiasco10 heading="Parting of the ways"/>
		</div>
		<Epilogue heading="Epilogue" />
	</>

export default Fiascos;
