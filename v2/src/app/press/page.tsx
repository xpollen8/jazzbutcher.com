import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MakeSimpleURI from '@/components/MakeSimpleURI';

const sections = [
	{ uri: '/press/interviews', text: 'Published Interviews' },
	{ uri: '/press/promos', text: 'Promotional Material' },
	{ uri: '/press/albums', text: 'Album Reviews' },
	{ uri: '/press/albums/pat', text: "Pat's Album Reviews" },
	{ uri: '/press/reviews/gig', text: 'Published Gig Reviews' },
	{ uri: '/press/reviews/fan', text: 'Fan Gig Reviews' },
	{ uri: '/press/reviews/self', text: "Pat's Gig Reviews" },
	{ uri: '/press/reviews/pat', text: "Pat Reviews Other Things" },
	{ uri: '/press/obits', text: 'Rememberences' },
	{ uri: '/press/audio', text: 'Audio Interviews' },
	{ uri: '/press/black_eg', text: 'Black Eg' },
	{ uri: '/press/wilson', text: 'Wilson' },
	{ uri: '/press/sumosonic', text: 'Sumosonic' },
];

const Press = () => 
<>
	<Header section="press" />
		{sections.map(MakeSimpleURI)}
	<Footer />
</>

export default Press;
