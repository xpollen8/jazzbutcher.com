import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AudioLive from '@/components/AudioLive';
import LetterHeader from '@/components/LetterHeader';
import EmbedMedia from '@/components/EmbedMedia';
import FilterReleases from '@/components/FilterReleases';

const EgAudio = () =>
<>
	<Header project='eg' section="black_eg" />
	<main>
		<FilterReleases project="eg" />
		<AudioLive project='eg' />
		<LetterHeader title="Unique black eg tracks" />
		<div className="listItem">
			<EmbedMedia data={{ mediaurl: "https://s3.amazonaws.com/assets.jazzbutcher.com/projects/TheBlackEg/BlackEg_KevinCarroll_Yokohama.mp3", song: "Yokohama", mediacredit: "Kevin Carroll", mediacreditdate: "2018-08-31" }} />
		</div>
		<div className="listItem">
			<EmbedMedia data={{ mediaurl: "https://s3.amazonaws.com/assets.jazzbutcher.com/projects/TheBlackEg/BlackEg_KevinCarroll_Song Of The Homeland.mp3", song: "Song Of The Homeland", mediacredit: "Kevin Carroll", mediacreditdate: "2018-08-31" }} />
		</div>
		<div className="listItem">
			<EmbedMedia data={{ mediaurl: "https://s3.amazonaws.com/assets.jazzbutcher.com/projects/TheBlackEg/BlackEg_KevinCarroll_Ostrava Girls.mp3", song: "Ostrava Girls", mediacredit: "Kevin Carroll", mediacreditdate: "2018-08-31" }} />
		</div>
		<div className="listItem">
			<EmbedMedia data={{ mediaurl: "https://s3.amazonaws.com/assets.jazzbutcher.com/projects/TheBlackEg/BlackEg_KevinCarroll_Indianapolis 500.mp3", song: "Indianapolis 500", mediacredit: "Kevin Carroll", mediacreditdate: "2018-08-31" }} />
		</div>
	</main>
	<Footer />
</>

export default EgAudio;
