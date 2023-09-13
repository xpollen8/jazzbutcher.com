import useSWR from 'swr';

const useLyric = (href: string) => {
	const fetcher = (url: string) => fetch(url).then((res) => res.json());
	console.log("FETCH", href, `/api/v2/lyric_by_href/${href}`);
	const { data, error, isLoading } = useSWR(`/api/v2/lyric_by_href/${href}`, fetcher);
	return {
		lyric: data,
		isLoading,
		error,
	}
}

export default useLyric;
