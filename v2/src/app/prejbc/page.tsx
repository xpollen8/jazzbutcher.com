import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionOptions from '@/components/SectionOptions';
import PhotoSet from '@/components/PhotoSet';

const snow1 = [
	{ src: "/assets/projects/JBC+Rock+Family+Tree+1.jpg", alt: "JBC Family Tree #1", credit: "Philip Snow" },
	{ src: "/assets/projects/JBC+Rock+Family+Tree+2.jpg", alt: "JBC Family Tree #2", credit: "Philip Snow" },
];

const PreJBC = () => 
<>
	<Header section="prejbc" />
		<main>
			<PhotoSet title="JBC Family Tree" description="From Pat's notebooks, as captured for 'Miracles and Wonders'" photos={snow1} />
			<SectionOptions section="prejbc" />
		</main>
	<Footer />
</>

export default PreJBC;
