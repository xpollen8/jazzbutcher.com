import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EmbedMedia from '@/components/EmbedMedia';
import Video from '@/components/Video';

const VideoPage = () => 
<>
	<Header section="video" />
	<main>
	<h1>This section is curently completely un-organized. Clean-up forthcoming.</h1>
	<EmbedMedia data={{ mediaurl: 'https://s3.amazonaws.com/assets.jazzbutcher.com/video/JazzButcherQuartet_NeverGiveUp.mp4', song: 'Never Give Up', datetime: '2020-10-14', mediacredit: 'Simon Taylor' }} >
		<blockquote>
			Whew! This one is a whopper! It just came up on the Jazz Butcher Facebook Group. Posted by the illustrious Simon Taylor himself. A very early rendition of &quot;Never Give Up&quot; before the lyrics &quot;Never Give Up&quot; were sang and an extra verse at the end. He edited together a beautiful heart wrenching video to accompany the song with images of Pat and the Band together on tour. - Bigquestionsinc commented on Oct 14, 2022
		</blockquote>
	</EmbedMedia>
<hr />
<Image src="https://s3.amazonaws.com/assets.jazzbutcher.com/images/screenshots/20201014_facebook_SimonTaylor_NeverGiveUp.png" width={500} height={500} alt="never give up video announcement" />
	<EmbedMedia data={{ mediaurl: 'https://youtube.com/embed/mkTHuohiZSQ', song: "When You's A Viper" }} />
	<Video />
	</main>
	<Footer />
</>

export default VideoPage;
