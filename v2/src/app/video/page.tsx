import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Video = () => 
<>
	<Header section="jbc" title="Video" />
	<h1>This section is not yet ported from old JBC site</h1>
	<pre>
from: https://github.com/xpollen8/jazzbutcher.com/issues/107
Bigquestionsinc commented on Oct 14, 2022
<p />
Whew! This one is a whopper! It just came up on the Jazz Butcher Facebook Group. Posted by the illustrious Simon Taylor himself. A very early rendition of &quot;Never Give Up&quot; before the lyrics &quot;Never Give Up&quot; were sang and an extra verse at the end. He edited together a beautiful heart wrenching video to accompany the song with images of Pat and the Band together on tour. There should be a youTube video up soon and I will ad the link.
<p />
	https://s3.amazonaws.com/assets.jazzbutcher.com/video/JazzButcherQuartet_NeverGiveUp.mp4
<hr />
<Image src="https://s3.amazonaws.com/assets.jazzbutcher.com/images/screenshots/20201014_facebook_SimonTaylor_NeverGiveUp.png" width={500} height={500} alt="never give up video announcement" />
	</pre>
	<Footer />
</>

export default Video;
