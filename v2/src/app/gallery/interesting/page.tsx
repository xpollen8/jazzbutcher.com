import Link from 'next/link';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PhotoSet from '@/components/PhotoSet';

const mike_dyer = [
	{ src: "/images/19860808/19860808_MikeDyer_PatFish_Negative_1.jpg", },
	{ src: "/images/19860808/19860808_MikeDyer_PatFish_Negative_2.jpg", },
	{ src: "/images/19860808/19860808_MikeDyer_PatFish_Negative_3.jpg", },
	{ src: "/images/19860808/19860808_MikeDyer_PatFish_Negative_4.jpg", },
];

const Gallery = () => 
<>
	<Header section="gallery" title="Interesting Photosets" />
	<main>
		<PhotoSet photos={mike_dyer} title="" credit="Mike Dyer" credit_date="1986-08-08" />
	</main>
	<Footer />
</>

export default Gallery;
