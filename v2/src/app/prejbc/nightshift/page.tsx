import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Nightshift = () => 
<>
	<Header section="nightshift" />
	<div className="gig_nightshift" />
	<b>Nightshift Art + Pat pics circa 1976-1978</b> James Duval - 2021-05-17
<code>
<Image src="https://s3.amazonaws.com/assets.jazzbutcher.com/projects/Nightshift/Nightshift_PhiliSnow_1.jpg" width={500} height={500} alt="sketches 1" /> from Miracles and Wonders<p />
<Image src="https://s3.amazonaws.com/assets.jazzbutcher.com/projects/Nightshift/Nightshift_PhiliSnow_2.jpg" width={500} height={500} alt="sketches 2" /> from Miracles and Wonders<p />
<Image src="https://s3.amazonaws.com/assets.jazzbutcher.com/projects/Nightshift/Nightshift_PhiliSnow_Frampton.jpg" width={500} height={500} alt="Pat as Frampton" /> from Miracles and Wonders<p />
<Image src="https://s3.amazonaws.com/assets.jazzbutcher.com/projects/Nightshift/Nightshift_20220516_Facebook_JohnSilver.png" width={500} height={500} alt="facebook scan" />
</code>
<hr/>
	<Image src="https://s3.amazonaws.com/assets.jazzbutcher.com/projects/Nightshift/N2.jpg" width={500} height={500} alt="inst 1" />
	<Image src="https://s3.amazonaws.com/assets.jazzbutcher.com/projects/Nightshift/N13.jpg" width={500} height={500} alt="inst 2" />
	<Image src="https://s3.amazonaws.com/assets.jazzbutcher.com/projects/Nightshift/N54.jpg" width={500} height={500} alt="inst 3" />
	<Image src="https://s3.amazonaws.com/assets.jazzbutcher.com/projects/Nightshift/N55.jpg" width={500} height={500} alt="inst 4" />
	<Footer />
</>

export default Nightshift;
