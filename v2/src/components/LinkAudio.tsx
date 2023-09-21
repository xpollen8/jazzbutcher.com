import Link from 'next/link';
import { autoLink, linkExternal } from '@/lib/macros';

const LinkAudio = ({ parent, datetime, venue, city, title, comment, wav, mp3, url, artist, author, autolink = true, children }: {
	title: string
	parent?: string
	datetime?: string
	venue?: string
	city?: string
	comment?: string
	artist?: string
	mp3?: string
	wav?: string
	url?: string
	author?: string | React.ReactNode
	autolink?: boolean
	children?: React.ReactNode
}) => (
<>
	<div className="audioPlayer">
		<span className="audio_title">
		{(city?.length && venue?.length && datetime?.length && !datetime.match(/0000-00-00 00:00:00/)) && <>
			{(parent) && <Link href={parent}><b>{datetime?.substring(0, 10)}</b></Link>}
			{!(parent) && <b>{datetime?.substring(0, 10)}</b>}
			{(city && venue) && <>{' '}{city}{', '}{venue}<br /></>}
		</>}
		<i>
			{(() => {
				if (url) {
					return <a href={url}>{title}</a>
				} else if (title?.endsWith('.html') || title?.includes(':')) {
					return title
				} else if (autolink) {
					return autoLink(title, autolink)
				} else {
					return title
				}
			})()}
		</i>
		</span>
		{(artist) && <b>{artist}</b>} {(author) && <span className="smalltext pl-3"> ({author}) </span>}
		{(comment) && <span className="smalltext"> <i><div dangerouslySetInnerHTML={{ __html: comment }} /></i> </span>}
		{(mp3) &&
		<audio controls title={title} preload="none" className="audio_player">
			<source src={mp3} type="audio/mpeg" />
			Your browser does not support the audio element.
		</audio>
		}
		{(wav) &&
		<audio controls title={title} preload="none" className="audio_player">
			<source src={wav} type="audio/wav" />
			Your browser does not support the audio element.
		</audio>
		}
		{children}
	</div>
</>
)

export default LinkAudio;
