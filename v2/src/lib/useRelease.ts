/*
import useSWR from 'swr';

const useRelease = (lookup?: string) => {
	const fetcher = (url: string) => fetch(url).then((res) => res.json());
	const { data, isLoading, error } = useSWR(`/api/release_by_lookup/${lookup}`, (lookup) ? fetcher : () => {});
	return {
		data,
		isLoading,
		error,
	}
}
*/


import MakeAlbumBlurb from '@/components/MakeAlbumBlurb';
import releasesStatic from '@/../public/data/releases.json';
import { returnResults } from '@/lib/utils';

const useRelease = (lookup: string) => {
	const href = `/albums/${lookup}.html`;
	const	results = releasesStatic?.results?.filter((f: any) => f.href === href) || [];
	return {
		data: returnResults(results),
	}
}

export default useRelease;
