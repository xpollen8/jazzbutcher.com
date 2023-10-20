import useSWR from 'swr';

const useVideoReleases = (project: string) => {
	const fetcher = async (url: any) => {
		return fetch(url).then((res) => res.json())
	}
	const { data, error, isLoading } = useSWR(`/api/release_video_by_project/${project}`, fetcher);

	return {
		data,
		isLoading,
		error,
	}
}

export default useVideoReleases;
