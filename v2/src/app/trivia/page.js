import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GigPlayer, { GigPlayerHeader, GigPlayerFooter } from '@/components/GigPlayer';

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
					{ title: `La Mer`, start: 714 },
					{ title: `Who Loves You Now?`, start: 941 },
					{ title: `Whaddya`, start: 1210, version: `backing track` },
					{ title: `Southern Mark Smith`, start: 1498 },
					{ title: `Girls Who Keep Goldfish`, start: 1892, version: `drum machine` },
					{ title: `Shame About You`, start: 2111, version: `backing track` },
					{ title: `My Desert`, start: 2375 },
					{ title: `Caroline Wheeler's Birthday Present`, start: 2590, version: `spooky synth intro` },
					{ title: `Bigfoot Motel`, start: 2913 },
					{ title: `Zombie Love`, start: 3182 },
					//encore 1
					{ title: `I Wish I Could Sprechen Sie Deutsch`, start: 3642 },
					{ title: `Soul Happy Hour`, start: 3673.8 },
					{ title: `Take The Skinheads Bowling`, author: `Camper Van Beethoven`, start: 3822 },
					{ title: `Sweet Jane`, author: `Lou Reed`, start: 4213, annotation: [
						{ start: 4348, comment: `"March of the wooden soldiers" is a reference to the 1990 KCRW performance when Pat and Gerald Langley covered this song`, link: `/gigs/1990/Nov22` } 
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
