import useSWR from 'swr';
import { type HashedType } from '@/lib/utils';

const useContributions = (options: HashedType) => {
	const fetcher = (url: string) => fetch(url).then((res) => res.json());
	const { data, error, isLoading } = useSWR(`/api/contributions/${encodeURIComponent(JSON.stringify(options))}`, fetcher);
	return {
		data,
		isLoading,
		error,
	}
}

export default useContributions;
