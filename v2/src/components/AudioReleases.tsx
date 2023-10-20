"use client"

import useAudioReleases from '@/lib/useAudioReleases';
import EmbedMedia from '@/components/EmbedMedia';
import LetterHeader from '@/components/LetterHeader';

const AudioSection = ({ title, data }: any) => {
	return !!(data && data?.length) && (<>
		<LetterHeader title={title} />
		{data?.map((d: any, key: number) => {
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
	return <AudioSection title="Audio" data={data?.results} />
}

export default AudioReleases;
