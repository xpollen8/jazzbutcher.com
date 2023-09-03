import useSWR from 'swr';

const useRelease = (lookup: string) => {
	const fetcher = (url: string) => fetch(url).then((res) => res.json());
	const { data, isLoading, error } = useSWR(`https://data.jazzbutcher.com/api/songs_by_release/${lookup}`, fetcher);
	return {
		data,
		isLoading,
		error,
	}
}

export default useRelease;
