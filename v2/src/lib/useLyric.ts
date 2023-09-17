import useSWR from 'swr';

const useLyric = (href: string) => {
	const fetcher = (url: string) => fetch(url).then((res) => res.json());
	const { data, error, isLoading } = useSWR(`/api/lyric_by_href/${href}`, fetcher);
	return {
		lyric: data,
		isLoading,
		error,
	}
}

export default useLyric;
