import useSWR from 'swr';
import { type HashedType } from '@/lib/utils';

const useContributors = (options: HashedType) => {
	const fetcher = (url: string) => fetch(url).then((res) => res.json());
	const { data, error, isLoading } = useSWR(`/api/contributors/${JSON.stringify(options)}`, fetcher);
	return {
		data,
		isLoading,
		error,
	}
}

export default useContributors;
