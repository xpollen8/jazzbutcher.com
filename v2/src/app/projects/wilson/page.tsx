import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MakeSimpleURI from '@/components/MakeSimpleURI';
import FilterReleases from '@/components/FilterReleases';
import FilterPresses from '@/components/FilterPresses';
import AudioReleases from '@/components/AudioReleases';
import VideoReleases from '@/components/VideoReleases';

const Wilson = (props: any) => 
<>
	<Header project="wilson" section="wilson" />
	<main>
		<MakeSimpleURI uri='/press/20040512_wilson_about.html?section=etc' text="Wilson Explainer" aux='(2002)'>
			&quote;I started the Wilson project fondly imagining that it would be a solo thing&quote;
		</MakeSimpleURI>
		<FilterReleases project='wilson' filters={props.searchParams?.filters} />
		<AudioReleases project='wilson' />
		<VideoReleases project='wilson' />
		<FilterPresses project='wilson' />
	</main>
	<Footer />
</>

export default Wilson;
