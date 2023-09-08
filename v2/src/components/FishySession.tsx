import useSWR from 'swr';
import LinkAudio from '@/components/LinkAudio';
import LetterHeader from '@/components/LetterHeader';

const FishySession = (session: any, key: number) => {
	const fetcher = async (uri: string) => await fetch(uri).then(res => res.json());
	const { data, error, isLoading } = useSWR(`/api/songs_by_datetime/${session.date}`, fetcher);
	const songs = data?.results;
	return (<>
		<LetterHeader title={`Fishy Mansions #${key + 1}`} subhead={session.date} />
			<ol>
			{songs?.filter((song: any) => !song.song.includes('Entire')).map((song: any, key: number) => (
				<li key={key}>
					<LinkAudio title={song?.song} author={song?.author} comment={song?.comment} />
				</li>
			))}
			</ol>
	</>)
}

export default FishySession;
