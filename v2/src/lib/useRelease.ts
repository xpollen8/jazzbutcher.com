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

export default useRelease;
