"use client"

import useAudioReleases from '@/lib/useAudioReleases';
import EmbedMedia from '@/components/EmbedMedia';
import Loading from '@/components/Loading';
import { NotesTag } from '@/components/Notes';

const AudioSection = ({ data }: any) => {
	return !!(data && data?.length) && (<>
		{data?.sort((a: any, b: any) => a?.song.localeCompare(b?.song))?.map((d: any, key: number) => {
			const { performance_id, datetime, category, lookup, variant, type, performer, aka, title, setnum, ordinal, song, version, author, instruments, media } = d;
			return <EmbedMedia key={key}
				className="clickListItem mt-3" 
				data={{
					lookup,
					mediaurl: media,
					title: song,
					comment: version,
				}} />;
		})}
	</>)
}

const AudioReleases = ({ project='jbc' }: { project?: string }) => {
	const { data, isLoading, error } = useAudioReleases(project);
	return <Loading isLoading={isLoading} >
		{(!!data?.results?.length) && <NotesTag> Tracks on official releases </NotesTag>}
		<AudioSection data={data?.results} />
	</Loading>
}

export default AudioReleases;
