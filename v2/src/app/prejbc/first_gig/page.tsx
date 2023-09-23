import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const FirstGig = () => 
<>
	<Header section="first_gig" />
	<blockquote>
	This was posted by a gentleman named Chris Zero on The Jazz Butcher Facebook Group.
	<p />
	&quot;Patrick&apos;s first ever performance, 1974 Uppingham,
	age 17, with &apos;Chris Zero&apos; and &apos;others&apos; inc. &apos;Rolo&apos; on synth.
	<p />
	Duval: Sat Oct  8 17:21:44 PDT 2022
	</blockquote>
	<Image src="https://s3.amazonaws.com/assets.jazzbutcher.com/images/first_gig/first_gig_1.jpg" width={500} height={500} alt="sleev front" />
	<Image src="https://s3.amazonaws.com/assets.jazzbutcher.com/images/first_gig/first_gig_2.jpg" width={500} height={500} alt="sleev front" />
	<Image src="https://s3.amazonaws.com/assets.jazzbutcher.com/images/first_gig/first_gig_3.jpg" width={500} height={500} alt="sleev front" />
	<Footer />
</>

export default FirstGig;
