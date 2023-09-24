import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EmbedMedia from '@/components/EmbedMedia';
import LetterHeader from '@/components/LetterHeader';

const AlanMoore = () => 
<>
	<Header section="alan_moore" />
	<main>
	    <LetterHeader
				title="Trampling Tokyo (2011)"
				aux="Alan Moore, Pat Fish"
		/>
		<EmbedMedia className="listItem" data={{ mediaurl: 'https://s3.amazonaws.com/assets.jazzbutcher.com/projects/AlanMoore/AlanMoore_PatFish_Trampling_Tokyo.mp3', author: 'Alan Moore/Pat Fish' }} >
		<p />
		From the CD: &quot;Alan Moore – A Compilation Of Songs And Performances By Alan Moore And Friends&quot;
		</EmbedMedia>
	</main>
	<Footer />
</>

export default AlanMoore;
