import localFont from 'next/font/local'
import Link from 'next/link';
import Image from 'next/image';
import './globals.css'

import Tag from '../components/Tag';

const MakeSimpleURI = ({ uri, text }: {
	uri?: string,
	text: string,
}): React.ReactNode  => (
	<div className="menuDiv">
		{uri ? <Link href={uri}>{text}</Link> : <div>{text}</div>}
	</div>
)

const jbc_memoriam = `/memoriam`;
const jbc_fishy_mansions = `/fishy_mansions`;
const jbc_fiascos = `/fiascos`;
const jbc_lyrics = `/lyrics`;
const jbc_albums = `/albums`;
const jbc_gigs = `/gigs`;
const jbc_audio = `/audio`;
const jbc_video = `/video`;
const jbc_people = `/people`;
const jbc_press = `/press`;
const jbc_news = `/news`;
const jbc_help = `/help`;
const jbc_etc = `/etc`;
const jbc_search = `/search`;

const myFont = localFont({ src: '../../public/fonts/Titillium-Regular.otf' })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={myFont.className}>
				<div className="nav saveSpace">
					<Link className="horn" href="/">
						<Image alt="The Jazz Butcher" width={114} height={80} src="https://jazzbutcher.com/images/knife_logo_80.png" />
					</Link>
					<MakeSimpleURI uri={`https://patfish.com`} text={`Pat`} />
					<MakeSimpleURI uri={`${jbc_memoriam}`} text={`In Memoriam`} />
					<MakeSimpleURI uri={`${jbc_fishy_mansions}`} text={`Fishy Mansions`} />
					<MakeSimpleURI uri={`${jbc_fiascos}`} text={`The Fiascos`} />
					<MakeSimpleURI uri={`${jbc_lyrics}`} text={`The Songs`} />
					<MakeSimpleURI uri={`${jbc_albums}`} text={`The Releases`} />
					<MakeSimpleURI uri={`${jbc_gigs}`} text={`The Gigs`} />
					<MakeSimpleURI uri={`${jbc_audio}`} text={`Some Audio`} />
					<MakeSimpleURI uri={`${jbc_video}`} text={`Some Video`} />
					<MakeSimpleURI uri={`${jbc_people}`} text={`Conspirators`} />
					<MakeSimpleURI uri={`${jbc_press}`} text={`Press`} />
					<MakeSimpleURI uri={`${jbc_news}`} text={`News`} />
					<MakeSimpleURI uri={`${jbc_help}`} text={`Contribute!`} />
					<MakeSimpleURI uri={`${jbc_etc}`} text={`etc..`} />
					<div className="nav_heading">Projects</div>
					<MakeSimpleURI uri={`${jbc_search}?f=extras&q=eg`} text={`Black Eg`} />
					<MakeSimpleURI uri={`${jbc_search}?f=extras&q=sumo`} text={`Sumosonic`} />
					<MakeSimpleURI uri={`${jbc_search}?f=extras&q=wilson`} text={`Wilson`} />
					<div className="nav_heading">Pre-JBC</div>
					<MakeSimpleURI text={`Nightshift`} />
					<MakeSimpleURI text={`Institution`} />
				</div>
				<div className="main">
					<Link href="#" className="menuButton">
						<Image alt="The Jazz Butcher" width={114} height={80} src="/images/knife_logo_80.png" />
					</Link>
					<div style={{ maxWidth: '100%', textAlign: 'left' }}>
						{children}
					  <Tag>
							Visitor Feedback
						</Tag>
						{/*${fetchComments(res=${db}/${res}, face=Titillium-Regular, limit=200)}*/}
					</div>
				</div>
			</body>
    </html>
  )
}
