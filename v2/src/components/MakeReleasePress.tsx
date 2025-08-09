import useReleasePress from '@/lib/useReleasePress';
import PressCards from '@/components/PressCards';
import Loading from '@/components/Loading';

const MakeReleasePress = ({ lookup }: { lookup: string }) => {
	const { data, isLoading, error } = useReleasePress(lookup);

	return <Loading isLoading={isLoading} >
		<PressCards items={data?.results} preventAutoExpand={true} />
	</Loading>
}

export default MakeReleasePress;
