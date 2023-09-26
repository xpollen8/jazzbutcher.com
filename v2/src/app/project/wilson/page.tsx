import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MakeSimpleURI from '@/components/MakeSimpleURI';
import FilterReleases from '@/components/FilterReleases';
import FilterPresses from '@/components/FilterPresses';

const Wilson = () => 
<>
	<Header project="wilson" section="wilson" />
	<main>
		<MakeSimpleURI uri='/press/20040512_wilson_about.html?section=etc' text="Wilson Explainer" aux='(2002)'>
			Pat provides an early history for his side-project Wilson
		</MakeSimpleURI>
		<FilterReleases project='wilson' />
		<FilterPresses project='wilson' />
	</main>
	<Footer />
</>

export default Wilson;
