import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AudioLive from '@/components/AudioLive';
import Tag from '@/components/Tag';
import EmbedMedia from '@/components/EmbedMedia';
import FilterReleases from '@/components/FilterReleases';
import FilterPresses from '@/components/FilterPresses';
import AudioReleases from '@/components/AudioReleases';

const EgAudio = (props: any) =>
<>
	<Header project='eg' section="black_eg" />
	<main>
		<FilterReleases project="eg" filters={props.searchParams?.filters} />
		<p />
		<AudioLive project="eg" />
		<p />
		<AudioReleases project="eg" />
		<p />
		<Tag>Demos tracks provided by Kevin Carroll</Tag>
			<EmbedMedia data={{ mediaurl: "https://s3.amazonaws.com/assets.jazzbutcher.com/projects/TheBlackEg/BlackEg_KevinCarroll_Yokohama.mp3", song: "Yokohama", mediacredit: "Kevin Carroll", mediacreditdate: "2018-08-31" }} />
			<EmbedMedia data={{ mediaurl: "https://s3.amazonaws.com/assets.jazzbutcher.com/projects/TheBlackEg/BlackEg_KevinCarroll_Song Of The Homeland.mp3", song: "Song Of The Homeland", mediacredit: "Kevin Carroll", mediacreditdate: "2018-08-31" }} />
			<EmbedMedia data={{ mediaurl: "https://s3.amazonaws.com/assets.jazzbutcher.com/projects/TheBlackEg/BlackEg_KevinCarroll_Ostrava Girls.mp3", song: "Ostrava Girls", mediacredit: "Kevin Carroll", mediacreditdate: "2018-08-31" }} />
			<EmbedMedia data={{ mediaurl: "https://s3.amazonaws.com/assets.jazzbutcher.com/projects/TheBlackEg/BlackEg_KevinCarroll_Indianapolis 500.mp3", song: "Indianapolis 500", mediacredit: "Kevin Carroll", mediacreditdate: "2018-08-31" }} />
		<p />
		<FilterPresses project="eg" />
	</main>
	<Footer />
</>

export default EgAudio;
