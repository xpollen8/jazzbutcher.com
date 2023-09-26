import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FilterReleases from '@/components/FilterReleases';

const Releases = () => {
	const types = ['CDR','various','compilation','single','album','live'];
	return (<>
		<Header section="releases" />
			<main>
				<FilterReleases types={types} /> 
			</main>
		<Footer />
	</>)
}

export default Releases;
