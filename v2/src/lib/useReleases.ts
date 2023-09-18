import useSWR from 'swr';

const useReleases = () => {
	const fetcher = (url: string) => fetch(url).then((res) => res.json());
	const { data, isLoading, error } = useSWR(`/api/releases`, fetcher);
	return {
		data,
		isLoading,
		error,
	}
}

export default useReleases;
