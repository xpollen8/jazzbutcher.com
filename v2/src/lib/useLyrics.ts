import useSWR from 'swr';

const useLyrics = ({ type, query, year }: any) => {
	const fetcher = async (url: any) => {
		return fetch(url)
			.then((res) => res.json())
		}
	const { data, error, isLoading } = useSWR(`/api/lyrics`, fetcher);

	//console.log("RET", data);
	return {
		data,
		isLoading,
		error,
	}
}

export default useLyrics;
