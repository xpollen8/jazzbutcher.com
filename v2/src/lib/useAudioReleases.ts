import useSWR from 'swr';

const useAudioReleases = (project: string) => {
	const fetcher = async (url: any) => {
		return fetch(url).then((res) => res.json())
	}
	const { data, error, isLoading } = useSWR(`/api/release_audio_by_project/${project}`, fetcher);

	return {
		data,
		isLoading,
		error,
	}
}

export default useAudioReleases;
