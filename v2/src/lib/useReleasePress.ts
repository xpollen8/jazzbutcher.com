import useSWR from 'swr';

const useReleasePress = (lookup: string) => {
	const fetcher = (url: string) => fetch(url).then((res) => res.json());
	const { data, isLoading, error } = useSWR(`/api/presses_by_release/${lookup}`, fetcher);
	return {
		data,
		isLoading,
		error,
	}
}

export default useReleasePress;
