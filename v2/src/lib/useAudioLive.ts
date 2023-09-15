import useSWR from 'swr';

const useAudioLive = (type: string) => {
	const fetcher = async (url: any) => {
		return fetch(url)
			.then((res) => res.json())
		}
	const { data, error, isLoading } = useSWR(`/api/gigs_with_audio`, fetcher);

	return {
		data,
		isLoading,
		error,
	}
}

export default useAudioLive;
