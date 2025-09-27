"use client"

import useAudioReleases from '@/lib/useAudioReleases';
import EmbedMedia from '@/components/EmbedMedia';
import { NotesTag } from '@/components/Notes';

const AudioSection = ({ data }: any) => {
	return !!(data && data?.length) && (<>
		{data?.sort((a: any, b: any) => a?.song.localeCompare(b?.song))?.map((d: any, key: number) => {
			const { performance_id, datetime, category, lookup, variant, type, performer, aka, title, setnum, ordinal, song, version, author, instruments, media } = d;
			return <EmbedMedia key={key}
				data={{
					lookup,
					//datetime: datetime,
					//venue: lookup,
					//venue: d.venue,
					//city: d.city,
					mediaurl: media,
					title: song,
					// author: d.collection,
					comment: version,
					// mediacredit: credit,
					// mediacrediturl: crediturl,
					// mediacreditdate: creditdate,
					//children: creditcaption
				}} />;
		})}
	</>)
}

const AudioReleases = ({ project='jbc' }: { project?: string }) => {
	const { data, isLoading, error } = useAudioReleases(project);
	return <>
		<NotesTag> Tracks on official releases </NotesTag>
		<AudioSection data={data?.results} />
	</>
}

export default AudioReleases;
