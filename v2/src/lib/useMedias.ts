import useSWR from 'swr';

const useMedias = (type: string) => {
	const fetcher = async (url: any) => {
		return fetch(url)
			.then((res) => res.json())
			.then(med => med?.results?.filter((m: any) => m.type === type))
		}
	const { data, error, isLoading } = useSWR(`/api/medias`, fetcher);

	return {
		data,
		isLoading,
		error,
	}
}

export default useMedias;
