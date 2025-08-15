import useSWR from 'swr';

const useCredits = (datetime: string) => {
	const fetcher = (url: string) => fetch(url).then((res) => res.json());
	const { data, error, isLoading } = useSWR(`/api/credits`, fetcher);
	return {
		data,
		isLoading,
		error,
	}
}

export default useCredits;
