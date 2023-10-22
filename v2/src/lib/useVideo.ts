import useSWR from 'swr';

const useVideo = () => {
	const fetcher = async (url: any) => {
		return fetch(url).then((res) => res.json())
	}
	const { data, error, isLoading } = useSWR(`/api/video`, fetcher);

	return {
		data,
		isLoading,
		error,
	}
}

export default useVideo;
