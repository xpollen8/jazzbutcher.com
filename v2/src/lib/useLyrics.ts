import useSWR from 'swr';

const useLyrics = () => {
	const fetcher = async (url: any) => fetch(url).then((res) => res.json());
	const { data, error, isLoading } = useSWR(`/api/lyrics`, fetcher);

	//console.log("RET", data);
	return {
		data,
		isLoading,
		error,
	}
}

export default useLyrics;
