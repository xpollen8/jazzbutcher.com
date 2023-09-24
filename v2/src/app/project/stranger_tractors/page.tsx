import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EmbedMedia from '@/components/EmbedMedia';
import LetterHeader from '@/components/LetterHeader';

const tracks = [
	'https://soundcloud.com/curtis-e-johnson/stranger-tractors-imbolc',
	'https://soundcloud.com/curtis-e-johnson/stranger-tractors-point-blank',
	'https://soundcloud.com/curtis-e-johnson/stranger-tractors-au79',
];

const StrangerTractors = () => 
<>
	<Header section="stranger_tractors" />
	<main>
	  <LetterHeader
			title="Stranger Tractors (1995)"
			aux="Curtis E. Johnson, Pat Fish"
		/>
		<center>
		<Image src="https://jazzbutcher.com/images/stranger_tractors.jpg" width={250} height={250} alt="album cover" />
		</center>
		{tracks?.map((mediaurl: string, key: number) => <EmbedMedia className="listItem" key={key} data={{ mediaurl }} />)}
	</main>
	<Footer />
</>

export default StrangerTractors;
