import useSWR from 'swr';

const useReleaseSongs = (lookup: string) => {
	const fetcher = (url: string) => fetch(url).then((res) => res.json());
	const { data, isLoading, error } = useSWR(`/api/songs_by_release/${lookup}`, fetcher);
	return {
		data,
		isLoading,
		error,
	}
}

export default useReleaseSongs;
