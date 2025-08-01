import useSWR from 'swr';

const useFishyMansionsArchives = () => {
	const fetcher = (url: string) => fetch(url).then((res) => res.json())
	const { data, isLoading, error } = useSWR(`/api/FMA.xls`, fetcher);

	return {
		isLoading: false,
		data: {
			error: false,
			results: [ data ]
		}
	}
}

export default useFishyMansionsArchives;
