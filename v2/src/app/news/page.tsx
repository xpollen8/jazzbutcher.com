import Header from '@/components/Header';
import Footer from '@/components/Footer';
import News from '@/components/News';
import Tag from '@/components/Tag';

const WebsiteNews = () =>
<>
	<Header section="news" />
	<main>
		<Tag>Website Update Log</Tag>
		<News />
	</main>
	<Footer />
</>

export default WebsiteNews;
