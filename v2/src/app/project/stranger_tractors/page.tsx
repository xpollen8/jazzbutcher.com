import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EmbedMedia from '@/components/EmbedMedia';

const tracks = [
	'https://soundcloud.com/curtis-e-johnson/stranger-tractors-imbolc',
	'https://soundcloud.com/curtis-e-johnson/stranger-tractors-point-blank',
	'https://soundcloud.com/curtis-e-johnson/stranger-tractors-au79',
];

const StrangerTractors = () => 
<>
	<Header section="stranger_tractors" />
	<main>
		{tracks?.map((mediaurl: string, key: number) => <EmbedMedia key={key} data={{ mediaurl }} />)}
	</main>
	<Footer />
</>

export default StrangerTractors;
