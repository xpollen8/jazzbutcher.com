import useSWR from 'swr';

const useAudioLive = (project: string ='') => {
	const fetcher = async (url: any) => {
		return fetch(url).then((res) => res.json())
	}
	const { data, error, isLoading } = useSWR((project) ? `/api/audio_by_project/${project}` : `/api/gigs_with_audio`, fetcher);

	return {
		data,
		isLoading,
		error,
	}
}

export default useAudioLive;
