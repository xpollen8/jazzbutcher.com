import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Fanclub = () => 
<>
	<Header section="fanclub" />
	<pre>
	<br />See: The Jazz Butcher &quote;Earl Sikkorski&quote; Fan Club letter! #110
	<br />https://github.com/xpollen8/jazzbutcher.com/issues/110
<br/>	2023-01-28
<br/>	Bigquestionsinc commented on Jan 28
<br/>	I just came across this on Facebook this morning!
<br/>	Brought to us by the incredible Heidi Rosen from The Jazz Butcher Facebook Group!
<br/>	Long Live The JBC fans!!
	</pre>
	<Image src="https://s3.amazonaws.com/assets.jazzbutcher.com/fanclub/110/fanclub_110_1.jpg" width={500} height={500} alt="page 1" />
	<Image src="https://s3.amazonaws.com/assets.jazzbutcher.com/fanclub/110/fanclub_110_2.jpg" width={500} height={500} alt="page 2" />
	<Image src="https://s3.amazonaws.com/assets.jazzbutcher.com/fanclub/110/fanclub_110_3.jpg" width={500} height={500} alt="page 3" />
	<Image src="https://s3.amazonaws.com/assets.jazzbutcher.com/fanclub/110/fanclub_110_4.jpg" width={500} height={500} alt="page 4" />
	<Image src="https://s3.amazonaws.com/assets.jazzbutcher.com/fanclub/110/fanclub_110_5.jpg" width={500} height={500} alt="page 5" />
	<Footer />
</>

export default Fanclub;
