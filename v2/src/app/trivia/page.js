import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GigPlayer, { GigPlayerHeader, GigPlayerFooter } from '@/components/GigPlayer';

/*
Holger Muhsfeldt

The tracklisting is -
Disc 1
Pat Fish
Intro
Quality People
Shaky
Buffalo Sniper

Peter Crouch
Has Anybody Here Seen Jane?
Blind to Love
Jospehine
Bring Me Down

Owen Jones
Margaret Smiling
Cariad
Don't Let Me Keep You

Max Eider
My Other Life
All You're Good For
Life on the Line

Disc 2
Joe Wooley
Intro
Something in her Smile
Waiting For Emily
Mother Earth
My life is full of things I'd rather put off to tomorrow
You got yours, I'll get mine
Hamburg Boogie

Disc 3
The Jazz Butcher Conspiracy
Partytime
It Has to Be You
La Mer
Who Loves You Now?
Whaddya?
Southern Mark Smith
Girls Who Keep Goldfish
Shame About You
My Desert
Caroline Wheeler's Birthday Present
Bigfoot Motel
Zombie Love
I Wish I Could Spechen Sie Deutsch
Soul Happy Hour
Take The Skinheads Bowling
Sweet Jane
*/
const Trivia = () => 
<>
	<Header section="trivia" />
	<main className="etc">
		<h1>This section is not yet ported from old JBC site</h1>
    <div>
      <GigPlayer
				src="https://s3.amazonaws.com/assets.jazzbutcher.com/audio/gigs/20051027/20051027_MastersOfBudvar_PatFish_Hamburg.mp3"
				tracks={[
					{ title: 'Introduction', start: 0},
					{ title: 'Quality People', start: 78},
					{ title: 'Shakey', start: 321},
					{ title: 'Buffalo Sniper', start: 654, artist: 'Wilson'},
					// Add more songs as needed
				]}
				header=<GigPlayerHeader
					artist="Pat Fish's set"
					venue='KIR'
					city='Hamburg'
					country='Germany'
					datetime='2005-10-27'
				/>
				footer=<GigPlayerFooter
					comment="Masters of Budvar present The Jazz Butcher Conspiracy Soul Revue featuring Pat Fish , Max Eider & Owen Jones plus Curtis E. Johnson and Joe Woolley"
					credit='Owen Jones;;'
				/>
			/>
      <GigPlayer
				src="https://s3.amazonaws.com/assets.jazzbutcher.com/audio/gigs/20051027/20051027_MastersOfBudvar_JazzButcher_Hamburg.mp3"
				tracks={[
					{ title: `Introduction`, start: 0 },
					{ title: `Partytime`, start: 76, comment: `Pat + Max` },
					{ title: `It Has To Be You`, author: `Max Eider`, start: 385  },
					{ title: `La Mer`, start: 710 },
					{ title: `Who Loves You Now?`, start: 938 },
					{ title: `Whaddya`, start: 1204, version: `backing track` },
					{ title: `Southern Mark Smith`, start: 1488 },
					{ title: `Girls Who Keep Goldfish`, start: 1878, version: `drum machine` },
					{ title: `Shame About You`, start: 2100, version: `backing track` },
					{ title: `My Desert`, start: 2363 },
					{ title: `Caroline Wheeler's Birthday Present`, start: 2580, version: `spooky synth intro` },
					{ title: `Bigfoot Motel`, start: 2907 },
					{ title: `Zombie Love`, start: 3173 },
					//encore 1
					{ title: `I Wish I Could Sprechen Sie Deutsch`, start: 3627 },
					{ title: `Soul Happy Hour`, start: 3656 },
					{ title: `Take The Skinheads Bowling`, author: `Camper Van Beethoven`, start: 3815 },
					{ title: `Sweet Jane`, author: `Lou Reed`, start: 4190, annotation: [
						{ start: 4330, comment: `"March of the wooden soldiers" is a reference to the 1990 KCRW performance when Pat and Gerald Langley covered this song`, link: `/gigs/1990/Nov22` } 
					]},
				]}
				header=<GigPlayerHeader
					artist="Full band set"
					venue='KIR'
					city='Hamburg'
					country='Germany'
					datetime='2005-10-27'
				/>
				footer=<GigPlayerFooter
					comment="Masters of Budvar present The Jazz Butcher Conspiracy Soul Revue featuring Pat Fish , Max Eider & Owen Jones plus Curtis E. Johnson and Joe Woolley"
					credit='Owen Jones;;'
				/>
			/>
    </div>
	</main>
	<Footer />
</>

export default Trivia;
