import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MakeSimpleURI from '@/components/MakeSimpleURI';
import FilterReleases from '@/components/FilterReleases';
import FilterPresses from '@/components/FilterPresses';
import AudioReleases from '@/components/AudioReleases';
import VideoReleases from '@/components/VideoReleases';
import { Credit } from '@/components/GenericWeb';

const Wilson = (props: any) => 
<>
	<Header project="wilson" section="wilson" />
	<main>
		<MakeSimpleURI uri='/press/20040512_wilson_about.html?section=etc' text="Wilson Explainer" aux='(2002)'>
			I started the Wilson project fondly imagining that it would be a solo thing
		<div className="listItem">
		<Link href="/images/20030927_DaveCoverly_Wilson.jpg"><Image unoptimized src="/images/20030927_DaveCoverly_Wilson_250.jpg" width={250} height={250} alt="Dave Coverly cartoon" /></Link>
		<Credit g="Dave Coverly" u="https://speedbump.com" d="2003-09-27" />
		</div>
		</MakeSimpleURI>
		<FilterReleases project='wilson' filters={props.searchParams?.filters} />
		<AudioReleases project='wilson' />
		<VideoReleases project='wilson' />
		<FilterPresses project='wilson' />
	</main>
	<Footer />
</>

export default Wilson;
