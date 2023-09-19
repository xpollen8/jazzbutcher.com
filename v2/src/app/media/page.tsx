import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MakeSimpleURI from '@/components/MakeSimpleURI';

const medias = [
	{ uri: '/press', text: "Published Articles" },
	{ uri: '/audio', text: 'Audio' },
	{ uri: '/video', text: 'Video' },
	{ uri: '/posters', text: 'Gig Posters' },
	{ uri: '/news', text: 'Site News' },
];

const Media = () => 
<>
	<Header section="media" />
		{medias.map(MakeSimpleURI)}
	<Footer />
</>

export default Media;
