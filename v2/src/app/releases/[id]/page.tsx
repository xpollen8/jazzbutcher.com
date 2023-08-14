import { releaseByLookup } from '../../../lib/macros';
import Release from '../../../components/Release';
import Header from '../../../components/Header';

const Page = async ({ params }: { params?: any }) => {
  const release = await releaseByLookup(params?.id);
	if (!release) return <></>
	return (
	<>
		<Header section="releases" title={release?.title} />
		<Release lookup={params?.id} />
	</>
	)
}

export default Page;
