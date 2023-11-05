import useSWR from 'swr';

const useRecentUpdates = () => {
	const fetcher = (url: string) => fetch(url).then((res) => res.json());
	const { data, error, isLoading } = useSWR(`/api/recent_updates`, fetcher);
	return {
		data,
		isLoading,
		error,
	}
}

export default useRecentUpdates;
