import useSWR from 'swr';

const useOnThisDay = () => {
	const fetcher = (url: string) => fetch(url).then((res) => res.json());
	const { data, error, isLoading } = useSWR(`/api/on_this_day`, fetcher);
	return {
		data,
		isLoading,
		error,
	}
}

export default useOnThisDay;
