import useSWR from 'swr';

const useAudioUnreleased = () => {
	const fetcher = async (url: any) => {
		return fetch(url).then((res) => res.json())
	}
	const { data, error, isLoading } = useSWR(`/api/unreleased_audio`, fetcher);

	return {
		data,
		isLoading,
		error,
	}
}

export default useAudioUnreleased;
