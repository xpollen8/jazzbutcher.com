import useSWR from 'swr';

import LinkAudio from '@/components/LinkAudio';
import LetterHeader from '@/components/LetterHeader';
import React, { Suspense } from 'react';

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
		<div className="bg-slate-200 p-3">
				<LetterHeader title={`Fishy Mansions #${session.ordinal + 1}`} subhead={session.date} />
				<Suspense fallback={<>Loading...</>}>
					<ol>
					{songs?.filter((song: any) => !song.song.includes('Entire')).map((song: any, key: number) => (
						<li key={key}>
							{key + 1}. <LinkAudio title={song?.song} author={song?.author} comment={song?.comment} />
						</li>
					))}
					</ol>
				</Suspense>
		</div>
	</div>);
}

export default FishySession;
