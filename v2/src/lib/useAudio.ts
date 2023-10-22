import useSWR from 'swr';

const useAudio = () => {
	const fetcher = async (url: any) => {
		return fetch(url).then((res) => res.json())
	}
	const { data, error, isLoading } = useSWR(`/api/audio`, fetcher);

	return {
		data,
		isLoading,
		error,
	}
}

export default useAudio;
