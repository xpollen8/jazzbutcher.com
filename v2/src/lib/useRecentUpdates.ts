import useSWR from 'swr';
import { type HashedType } from '@/lib/utils';

const useRecentUpdates = (options: HashedType) => {
	const fetcher = (url: string) => fetch(url).then((res) => res.json());
	const { data, error, isLoading } = useSWR(`/api/recent_updates/${JSON.stringify(options)}`, fetcher);
	return {
		data,
		isLoading,
		error,
	}
}

export default useRecentUpdates;
