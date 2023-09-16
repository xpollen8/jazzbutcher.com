import useSWR from 'swr';

import LetterHeader from '@/components/LetterHeader';
import EmbedMedia from '@/components/EmbedMedia';
import { Suspense } from 'react';

const FishySession = ({ session }: { session: any }) => {
	const fetcher = async (uri: string) => await fetch(uri).then(res => res.json());
	const { data, error, isLoading } = useSWR(`/api/songs_by_datetime/${session.date}`, fetcher);
	const songs = data?.results;

	return (<div key={session.ordinal}
		className="flex flex-wrap justify-center bg-slate-200 py-3"
		style={{   overflow: 'scroll' }}
	>
		<video
			width={350}
			controls={true}
			preload="none"
			className="video"
			poster={session.poster} >
			<source src={session.mp4} type="video/mp4" />
		</video>
		<div className="bg-slate-200 p-3 w-1/2">
				<LetterHeader title={`Fishy Mansions #${session.ordinal + 1}`} subhead={session.date} />
				<Suspense fallback={<>Loading...</>}>
					{songs?.filter((song: any) => !song.song.includes('Entire')).map((data: any, key: number) => <div key={key}><EmbedMedia data={data} disableVideo={true} /></div>)}
				</Suspense>
		</div>
	</div>);
}

export default FishySession;
