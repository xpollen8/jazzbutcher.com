import useSWR from 'swr';

const useLyrics = () => {
	const fetcher = async (url: any) => fetch(url).then((res) => res.json());
	return useSWR(`/api/lyrics`, fetcher);
}

export default useLyrics;
