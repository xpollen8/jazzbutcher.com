import useSWR from 'swr';

import Tag from '@/components/Tag';
import EmbedMedia from '@/components/EmbedMedia';
import { Suspense } from 'react';

const FishySession = ({ session }: { session: any }) => {
	const fetcher = async (uri: string) => await fetch(uri).then(res => res.json());
	const { data, error, isLoading } = useSWR(`/api/songs_by_datetime/${session.date}`, fetcher);
	const songs = data?.results;

	return (<div key={session.ordinal}
		className="flex flex-wrap justify-center bg-slate-200 p-2"
	>
		<div className="pt-1 px-10 max-w-lg">
		<video
			width={350}
			controls={true}
			preload="none"
			className="video"
			poster={session.poster} >
			<source src={session.mp4} type="video/mp4" />
		</video>
		</div>
		<div className="px-10 max-w-sm">
				<Tag>Fishy Mansions #{session.ordinal + 1} : <span className="date">{session.date}</span></Tag>
				<Suspense fallback={<>Loading...</>}>
					{songs?.filter((song: any) => !song.song.includes('Entire')).sort((a, b) => a.ordinal - b.ordinal).map((data: any, key: number) => <div key={key}><EmbedMedia data={data} disableVideo={true} /></div>)}
				</Suspense>
		</div>
	</div>);
}

export default FishySession;
