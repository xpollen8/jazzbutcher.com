import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EmbedMedia from '@/components/EmbedMedia';
import Tag from '@/components/Tag';
import { Source } from '@/components/GenericWeb';
import { expand } from '@/lib/defines';

const tracks = [
	'https://soundcloud.com/curtis-e-johnson/stranger-tractors-imbolc',
	'https://soundcloud.com/curtis-e-johnson/stranger-tractors-point-blank',
	'https://soundcloud.com/curtis-e-johnson/stranger-tractors-au79',
];

const StrangerTractors = () => 
<>
	<Header section="stranger_tractors" />
	<main>
	  <Tag>Stranger Tractors (1995)</Tag>
		<blockquote className="listItem">Curtis E. Johnson, Pat Fish (drums)</blockquote>
<div className="listItem">
		<Link className="float-right ml-5 border drop-shadow-md w-52 bg-slate-50 text-center" href="https://v1.jazzbutcher.com/images/stranger_tractors/Strangers.jpg">These were the Tractors<Image src="https://v1.jazzbutcher.com/images/stranger_tractors/Strangers.jpg" width={250} height={250} alt="strangers" /> Curtis, Mr. Nasty, Bollie, Matt, and Mr. Shouty.  </Link>
During 1994/5 the tractors played all over the British isles
winning over many converts to their original sound,
signinging a publishing deal with Creation records
and culminating in the release of a single &quot;vibration&quot;
and some very mad guest television appearances.
Then Bollie returned to continue running his pub (The Crown in Weston)
and starting a family with Clair and new arrival Martha,
Shouty & Nasty went off to form SumoSonic, and Matt went off to farm in France.
<p />
<Source u='https://web.archive.org/web/20090830070255/http://geocities.com/Nashville/Stage/8818/strangertractors.htm' />
</div>
<div className="listItem clear_float">
		<Link className="float-right ml-5 border drop-shadow-md w-52 bg-slate-50 text-center" href="https://v1.jazzbutcher.com/images/stranger_tractors/stranger_tractors.jpg"><Image src="https://v1.jazzbutcher.com/images/stranger_tractors/stranger_tractors.jpg" width={250} height={250} alt="album cover" /></Link>
It was a brave experiment and they left behind a legacy of one CD single &quot;Vibration&quot; and a David J (Bauhouse, Love And Rockets) produced CD mini album with Steve New(Sex Pistols,Rich Kids) guesting on guitar for &quot;Big Bad City&quot; if you want to obtain a copy of the single send a postal order for £3 for the single, the mini album is now sold out. to Floating World Po box 16677 London W8 7Zl      and  make payable to Floating World  
		<div className="flex flex-wrap justify-center">{tracks?.map((mediaurl: string, key: number) => <div className="w-3/4" key={key}><EmbedMedia className="listItem" key={key} data={{ mediaurl }} /></div>)}</div>
<p />
<Source u='https://web.archive.org/web/20090830070255/http://geocities.com/Nashville/Stage/8818/strangertractors.htm' />
</div>
<div className="listItem clear_float">
My father was a hard drinking gambler, who left before I was three. My earliest memory is of playing a huge plastic guitar, for the guy in the fish shop, I was almost five and he paid me  25 pence, right then I knew what I wanted to do.
<p />
		<Link className="float-right ml-5 border drop-shadow-md w-52 bg-slate-50 text-center" href="https://v1.jazzbutcher.com/images/stranger_tractors/BEANKING.jpg"><Image src="https://v1.jazzbutcher.com/images/stranger_tractors/BEANKING.jpg" width={250} height={250} alt="the bean king" />{expand('curt')}</Link>
At 16 I left home to work as a ghost on the ghost train of a travelling fair. Every time we got to a new town I would be hanging around with my guitar wherever music was being made, making a pest of myself with the local musicians, and learning from the source. After several years of hard travelling, I went back to my home town of Edinburgh and took a job as a DJ. And the money was good so I stayed a while. But playing other peoples music was making me crazy, when I had tunes in my head that wouldn&apos;t let me sleep.
<p />
So I made the jump to London.... the big city, London was like a huge vortex and it spat me from ladbroke grove to a box in the road, in all of a few years. But all the time I was picking up experience and playing my music in public, to people that were not necessarily out to listen to music.
<p />
I went on to form the first of a long procession of loud electric bands, that ultimately left me shrieking out the lyrics over a wall of noise, so the words no longer had any meaning to the listener. Eventually this aural torture had to stop and in the middle of a tour in Europe during 1981, when the bus had broken down. I shaved my head and had a rethink, That was when I rediscovered Woody Guthrie and the acoustic guitar.
<p />
On my return to England Pat Fish asked me to play a European tour with the Jazz Butcher, all the way through the tour the acoustic bug was biting and On my return to England I put together an acoustic guerilla unit which we called Stranger Tractors. Initially it was Matt Tractor and I, in a mad 90s Tyrannosaurus Rex. But then the woodwork squeaked and Russ (Mr Shouty), Pat Fish (Mr. Nasty), And Finally Bolly complete with didgeridou, joined our soiree.  Unfortunately the reality of getting a five piece band with double bass, the line*,  and assorted paraphernalia around the country was just not really a viable proposition So Lou the bass player and I began to do more gigs as a duo.
<p />
At one of those gigs we were supporting Martin Stevenson & Gypsy Dave Smith and they caught our set and were enjoying it so much that the Gypsy joined us onstage for a version of Hootchie Cootchie man, that is indelibly etched on my mind as one of  the sweetest slide solos I have ever heard.
<p />
Martin said that he was playing the Jazz Cafe in London the following evening and that he would put us on the guest list, as we were leaving he said that we should bring our guitars. Unfortunately Lou was unable to get to London that night, and so I caught the train on my own, to while away the train journey I started writing some lines.
<p />
Martin and Rob Ellen his tour manager, made me feel like I had known them all my life, and in the middle of his set Martin introduced me to his audience and invited me to play some songs. I jumped up on the stage unable to believe his generosity**  and played three songs Mercy which I had written on the train journey, Crash & Burn, and Big Jake. The reaction was more than I could have hoped for, and if you were part of the audience that night I want to say thank you very much.
<p />
J B, was in the audience that night and that is how we met our keyboard player 
<p />
*an assortment of tom toms congas, cymbals, stands, and percussion
<p />
**most of the people I have met in connection with music have egos that are larger than their talent, and although they might let you support them, to give you a spot in the middle of their set is unthinkable   
<p />
<Source u='https://web.archive.org/web/20090830070255/http://geocities.com/Nashville/Stage/8818/strangertractors.htm' />
</div>
	</main>
	<Footer />
</>

export default StrangerTractors;
