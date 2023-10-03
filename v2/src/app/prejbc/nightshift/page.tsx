import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PhotoSet from '@/components/PhotoSet';

const snow1 = [
	{ src: "/assets/projects/Nightshift/Nightshift_PhilipSnow_1.jpg", alt: "sketches 1", credit: "Philip Snow" },
	{ src: "/assets/projects/Nightshift/Nightshift_PhilipSnow_2.jpg", alt: "sketches 2", credit: "Philip Snow" },
	{ src: "/assets/projects/Nightshift/Nightshift_PhilipSnow_Frampton.jpg", alt: "Pat as Frampton", credit: "Philip Snow" },
];

const Nightshift = () => 
<>
	<Header section="nightshift" />
	<div className="gig_nightshift" />
	<main>
		<PhotoSet title="Nightshift Art + Pat pics circa 1976-1978" credit="James Duval" credit_date="2021-05-17" photos={snow1} description="From 'Miracles and Wonders'" />
		<hr />
		<Image src="https://s3.amazonaws.com/assets.jazzbutcher.com/projects/Nightshift/Nightshift_20220516_Facebook_JohnSilver.png" width={500} height={500} alt="facebook scan" />
		<hr/>
		<Image src="https://s3.amazonaws.com/assets.jazzbutcher.com/projects/Nightshift/N2.jpg" width={500} height={500} alt="inst 1" />
		<Image src="https://s3.amazonaws.com/assets.jazzbutcher.com/projects/Nightshift/N13.jpg" width={500} height={500} alt="inst 2" />
		<Image src="https://s3.amazonaws.com/assets.jazzbutcher.com/projects/Nightshift/N54.jpg" width={500} height={500} alt="inst 3" />
		<Image src="https://s3.amazonaws.com/assets.jazzbutcher.com/projects/Nightshift/N55.jpg" width={500} height={500} alt="inst 4" />
	</main>
	<Footer />
</>

export default Nightshift;
