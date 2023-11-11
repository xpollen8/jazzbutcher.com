import { Suspense } from 'react';

import useReleasePress from '@/lib/useReleasePress';
import PressCards from '@/components/PressCards';

const MakeReleasePress = ({ lookup }: { lookup: string }) => {
	const { data, isLoading, error } = useReleasePress(lookup);
	const reviews = data?.results;

	if (!data) return <></>;

	return (
		<Suspense fallback=<>Loading...</> >
			<PressCards items={reviews} preventAutoExpand={true} />
		</Suspense>
	)
}

export default MakeReleasePress;
