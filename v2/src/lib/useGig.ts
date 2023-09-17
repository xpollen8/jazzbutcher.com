import useSWR from 'swr';

const useGig = (datetime: string) => {
	// TODO have fetchGig add .prevGig & .nextGig to object
	const fetcher = (url: string) => fetch(url).then((res) => res.json());
	const { data, error, isLoading } = useSWR(`/api/gig_by_datetime/${datetime}`, fetcher);
	return {
		gig: data,
		isLoading,
		error,
	}
}

export default useGig;
