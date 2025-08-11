import releasesStatic from '@/../public/data/releases.json';
import { returnSWR } from '@/lib/utils';

const useRelease = (lookup?: string) => {
	const href = `/albums/${lookup}.html`;
	const	results = releasesStatic?.results?.filter((f: any) => f.href === href) || [];
	return returnSWR(results);
}

export default useRelease;
