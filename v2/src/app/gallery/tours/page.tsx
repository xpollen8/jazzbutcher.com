import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PhotoSet from '@/components/PhotoSet';

const photos = [
	{ src: "/images/2019/2019_tour.jpg", body: "Fall 2019", date: "2019" },
	{ src: "/images/19880314/19880314_poster.jpg", body: "Germany, Spring 1988", date: "1988" },
	{ src: "/images/19900421/19900421_poster.jpg", body: "Germany, Spring 1990", date: "1990" },
	{ src: "/images/20140821/20140821_poster.jpg", body: "Japan, Fall 2014", date: "2014" },
	{ src: "/images/20150620/20150620_poster.jpg", body: "France, June 2015", date: "2015" },
	{ src: "/images/20210725/20210725_poster.jpg", body: "Fishy Mansions, 2020-2012", date: "2020" },
];

const Gallery = () => 
<>
	<Header section="gallery/photosets" title="Misc. Tour Posters" />
	<main>
		<PhotoSet photos={photos.sort((a, b) => a?.date?.localeCompare(b?.date))} title="Misc. Tour Posters" description=<>Some tours had posters featuring the dates of the tours, or the same poster artwork was used to promote multiple gigs..<p/>Honestly, I thought there were more of these!</> />
	</main>
	<Footer />
</>

export default Gallery;
