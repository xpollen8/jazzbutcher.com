import Link from 'next/link';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PhotoSet from '@/components/PhotoSet';

const mick_mercer = [
	{ src: "https://s3.amazonaws.com/assets.jazzbutcher.com/images/gallery/mick_mercer/MickMercer_1984_1.jpg", },
	{ src: "https://s3.amazonaws.com/assets.jazzbutcher.com/images/gallery/mick_mercer/MickMercer_1984_2.jpg", },
	{ src: "https://s3.amazonaws.com/assets.jazzbutcher.com/images/gallery/mick_mercer/MickMercer_1984_3.jpg", },
	{ src: "https://s3.amazonaws.com/assets.jazzbutcher.com/images/gallery/mick_mercer/MickMercer_1984_4.jpg", },
	{ src: "https://s3.amazonaws.com/assets.jazzbutcher.com/images/gallery/mick_mercer/MickMercer_1984_5.jpg", },
	{ src: "https://s3.amazonaws.com/assets.jazzbutcher.com/images/gallery/mick_mercer/MickMercer_1984_6.jpg", },
	{ src: "https://s3.amazonaws.com/assets.jazzbutcher.com/images/gallery/mick_mercer/MickMercer_1984_7.jpg", },
	{ src: "https://s3.amazonaws.com/assets.jazzbutcher.com/images/gallery/mick_mercer/MickMercer_1984_8.jpg", },
	{ src: "https://s3.amazonaws.com/assets.jazzbutcher.com/images/gallery/mick_mercer/MickMercer_1984_9.jpg", },
	{ src: "https://s3.amazonaws.com/assets.jazzbutcher.com/images/gallery/mick_mercer/MickMercer_1984_10.jpg", },
	{ src: "https://s3.amazonaws.com/assets.jazzbutcher.com/images/gallery/mick_mercer/MickMercer_1984_11.jpg", },
];

const Gallery = () => 
<>
	<Header section="gallery" title="Mick Mercer" />
	<main>
		<PhotoSet photos={mick_mercer} title="Mick Mercer - THE JAZZ BUTCHER BAND ON MANOEUVRES, 1984" description=<>JB (R.I.P.), Max Eider and David J, in town for a little Zigzag magazine tête-à-tête. The Butch, you’ll be amazed to learn, was a little the worse for wear.<p />My delightful Jazz Butcher photobook <Link href="https://www.lulu.com/shop/mick-mercer/the-jazz-butcher-photo-book/paperback/product-1wz469zj.html">HERE</Link><br /></> credit="Mick Mercer" credit_url="https://mickmercer.substack.com/p/the-jazz-butcher-band-on-manoeuvres" credit_date="2023-03-06" />
	</main>
	<Footer />
</>

export default Gallery;
