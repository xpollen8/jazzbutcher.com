import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FilterReleases from '@/components/FilterReleases';

const Releases = (props: any) => {
	return (<>
		<Header section="releases" />
			<main>
				<FilterReleases filters={props.searchParams?.filters} /> 
			</main>
		<Footer />
	</>)
}

export default Releases;
