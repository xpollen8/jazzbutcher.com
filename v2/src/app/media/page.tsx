import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MakeSimpleURI from '@/components/MakeSimpleURI';

const medias = [
	{ uri: '/press', text: "In Print", aux: "published interviews, reviews, etc" },
	{ uri: '/audio', text: "Audio", aux: "Radio interviews, concert recordings, etc"},
	{ uri: '/video', text: "Video", aux: "Music videos, concert footage, etc" },
	//{ uri: '/posters', text: 'Gig Posters', aux: "Flyers and show announcements" },
	{ uri: '/news', text: 'Site News', aux: "Haphazard website change announcements" },
];

const Media = () => 
<>
	<Header section="media" />
		{medias.map(MakeSimpleURI)}
	<Footer />
</>

export default Media;
