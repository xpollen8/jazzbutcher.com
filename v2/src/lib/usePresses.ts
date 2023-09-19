import useSWR from 'swr';

const usePresses = () => {
	const fetcher = (url: string) => fetch(url).then((res) => res.json());
	const { data, error, isLoading } = useSWR(`/api/presses`, fetcher);
	return {
		data,
		isLoading,
		error,
	}
}

export default usePresses;
