import { autoLink, linkExternal } from '../lib/macros';

const LinkAudio = ({ title, comment, mp3, url, author, autolink = true }: {
	title: string
	comment?: string
	mp3?: string
	url?: string
	author?: string
	autolink?: boolean
}) => (
<>
	<span className="audioPlayer">
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
		{(author) && <span className="smalltext"> ({author}) </span>}
		{(comment) && <span className="smalltext"> <i>{comment}</i> </span>}
		{(title) && <br/>}
		{(mp3) &&
		<audio controls title={title} preload="none" className="audio_player">
			<source src={mp3} type="audio/mpeg" />
			Your browser does not support the audio element.
		</audio>
		}
	</span>
</>
)

export default LinkAudio;
