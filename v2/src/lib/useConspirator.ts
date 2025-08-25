import useSWR from 'swr';
import { type HashedType } from '@/lib/utils';

const useConspirator = (conspirator: string) => {
	const fetcher = (url: string) => fetch(url).then((res) => res.json());
	const { data, error, isLoading } = useSWR(`/api/conspirator/${encodeURIComponent(conspirator)}`, fetcher);
	return {
		data,
		isLoading,
		error,
	}
}

export default useConspirator;
