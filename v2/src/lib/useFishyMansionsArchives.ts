import useSWR from 'swr';
import { read, utils } from 'xlsx';

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
