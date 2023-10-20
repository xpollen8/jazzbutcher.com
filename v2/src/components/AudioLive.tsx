"use client"

import { parseCredit } from '@/lib/utils';
import useAudioLive from '@/lib/useAudioLive';
import EmbedMedia from '@/components/EmbedMedia';
import LetterHeader from '@/components/LetterHeader';

const AudioSection = ({ title, data }: any) => {
	return (data && data?.length) && (<>
		<LetterHeader title={title} />
		{data?.map((d: any, key: number) => {
			const { credit=d.mediacredit, crediturl=d.mediacrediturl, creditdate, creditcaption } = parseCredit(d?.credit || '');
			//if (d.credit) console.log("CR", { cr: d.credit, credit, crediturl, creditdate, creditcaption });
			//if (title === 'Live Shows') console.log("DATA", d);
			//if (title === 'Live Shows' && !d.mediaurl) console.log("DATA", d);
			return <EmbedMedia key={key}
				data={{
					datetime: d.datetime,
					venue: d.venue,
					city: d.city,
					mediaurl: d.mp3 || d.mediaurl,
					title: d.name || d.song || 'XXXXXXX',
					author: d.collection,
					comment: d.comment,
					mediacredit: credit,
					mediacrediturl: crediturl,
					mediacreditdate: creditdate,
					children: creditcaption
				}} />;
		})}
	</>)
}

const AudioLive = ({ project }: { project?: string }) => {
	const { data, isLoading, error } = useAudioLive(project);
	return <AudioSection title="Live Audio and Full Shows" project={project || 'jbc'} data={data?.results} />
}

export default AudioLive;
