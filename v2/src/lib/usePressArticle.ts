import useSWR from 'swr';

const usePressArticle = (href: string) => {
	const fetcher = (url: string) => fetch(url).then((res) => res.json());
	const { data, error, isLoading } = useSWR(`/api/press_by_href/${href}`, fetcher);
	return {
		data,
		isLoading,
		error,
	}
}

export default usePressArticle;
