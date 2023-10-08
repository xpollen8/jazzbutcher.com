import useSWR from 'swr';

const useGig = (datetime: string) => {
	const fetcher = (url: string) => fetch(url).then((res) => res.json());
	const { data, error, isLoading } = useSWR(`/api/gig_by_datetime/${datetime}`, fetcher);
	return {
		data,
		isLoading,
		error,
	}
}

export default useGig;
