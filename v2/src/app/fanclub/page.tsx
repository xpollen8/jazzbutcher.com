import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PhotoSet from '@/components/PhotoSet';

const fanclub_110 = [
	{ src: "/assets/fanclub/110/fanclub_110_1.jpg", alt: "page 1" },
	{ src: "/assets/fanclub/110/fanclub_110_2.jpg", alt: "page 2" },
	{ src: "/assets/fanclub/110/fanclub_110_3.jpg", alt: "page 3" },
	{ src: "/assets/fanclub/110/fanclub_110_4.jpg", alt: "page 4" },
	{ src: "/assets/fanclub/110/fanclub_110_5.jpg", alt: "page 5" },
]

const Fanclub = () => 
<>
	<Header section="fanclub" />
	<main>
	</main>
		<PhotoSet title='The Jazz Butcher "Earl Sikkorski" Fan Club letter!'
			photos={fanclub_110}
			description=<>
				I just came across this on Facebook this morning!
				Brought to us by the incredible Heidi Rosen from The Jazz Butcher Facebook Group!
				Long Live The JBC fans!!
			</>
			credit='Jimmy Duval'
			credit_url='https://github.com/xpollen8/jazzbutcher.com/issues/110'
			credit_date='2023-01-28' />
	<Footer />
</>

export default Fanclub;
