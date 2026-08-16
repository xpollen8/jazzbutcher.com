import { use } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FilterReleases from '@/components/FilterReleases';

const Releases = (props: any) => {
	const searchParams: any = use(props.searchParams);
	return (<>
		<Header section="releases" />
			<main>
				<FilterReleases filters={searchParams?.filters} /> 
			</main>
		<Footer />
	</>)
}

export default Releases;
