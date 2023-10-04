import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PhotoSet from '@/components/PhotoSet';

const snow1 = [
	{ src: "/assets/projects/Nightshift/Nightshift_PhilipSnow_1.jpg", alt: "sketches 1", credit: "Philip Snow" },
	{ src: "/assets/projects/Nightshift/Nightshift_PhilipSnow_2.jpg", alt: "sketches 2", credit: "Philip Snow" },
	{ src: "/assets/projects/Nightshift/Nightshift_PhilipSnow_Frampton.jpg", alt: "Pat as Frampton", credit: "Philip Snow" },
];

const snow2 = [
	{ src: "/assets/projects/Nightshift/N2.jpg", alt: "inst 1" },
	{ src: "/assets/projects/Nightshift/N13.jpg", alt: "inst 2" },
	{ src: "/assets/projects/Nightshift/N54.jpg", alt: "inst 3" },
	{ src: "/assets/projects/Nightshift/N55.jpg", alt: "inst 4" },
];

const silver = [
	{ src: "/assets/projects/Nightshift/Nightshift_20220516_Facebook_JohnSilver.jpg", alt: "facebook scan" },
];

const Nightshift = () => 
<>
	<Header section="nightshift" />
	<div className="gig_nightshift" />
	<main>
		<PhotoSet title="Nightshift Art + Pat pics circa 1976-1978" credit="James Duval" credit_date="2021-05-17" photos={snow1} description="From 'Miracles and Wonders'" />
		<PhotoSet title="Pat's notebooks" credit="Philip Snow" photos={snow2} description="From 'Miracles and Wonders'" />
		<PhotoSet title="Facebook posting" credit="John Silver" photos={silver} />
	</main>
	<Footer />
</>

export default Nightshift;
