import { autoLink, linkExternal } from '@/lib/macros';

const LinkAudio = ({ title, comment, wav, mp3, url, author, autolink = true, children }: {
	title: string
	comment?: string
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
		<i>
			{(() => {
				if (url) {
					return <a href={url}>{title}</a>
				} else if (title.endsWith('.html') || title.includes(':')) {
					return title
				} else if (autolink) {
					return autoLink(title)
				} else {
					return title
				}
			})()}
		</i>
		</span>
		{(author) && <span className="smalltext pl-3"> ({author}) </span>}
		{(comment) && <span className="smalltext"> <i>{comment}</i> </span>}
		{(title) && <br/>}
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
