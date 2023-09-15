import localFont from 'next/font/local'
import Link from 'next/link';
import Image from 'next/image';
import './globals.css'

import NavItem from '@/components/NavItem';

const jbc_memoriam = `/memoriam`;
const jbc_fishy_mansions = `/fishy_mansions`;
const jbc_fiascos = `/fiascos`;
const jbc_lyrics = `/lyrics`;
const jbc_albums = `/releases`;
const jbc_gigs = `/gigs`;
const jbc_audio = `/audio`;
const jbc_video = `/video`;
const jbc_people = `/conspirators`;
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
					<NavItem uri="/pat" text="Pat" />
					<NavItem uri={jbc_memoriam} text="In Memoriam" />
					<NavItem uri={jbc_fishy_mansions} text="Fishy Mansions" />
					<NavItem uri={jbc_fiascos} text="The Fiascos" />
					<NavItem uri={jbc_lyrics} text="The Songs" />
					<NavItem uri={jbc_albums} text="The Releases" />
					<NavItem uri={jbc_gigs} text="The Gigs" />
					<NavItem uri={jbc_audio} text="Some Audio" />
					<NavItem uri={jbc_video} text="Some Video" />
					<NavItem uri={jbc_people} text="Conspirators" />
					<NavItem uri={jbc_press} text="Press" />
					<NavItem uri={jbc_news} text="News" />
					<NavItem uri={jbc_help} text="Contribute!" />
					<NavItem uri={jbc_etc} text="etc.." />
					<div className="nav_heading">Projects</div>
					<NavItem uri="/project/black_eg" text="Black Eg" />
					<NavItem uri="/project/sumosonic" text="Sumosonic" />
					<NavItem uri="/project/wilson" text="Wilson" />
					<NavItem uri="/project/drones_club" text="Drones Club" />
					<div className="nav_heading">Pre-JBC</div>
					<NavItem uri="/prejbc/nightshift" text="Nightshift" />
					<NavItem uri="/prejbc/institution" text="Institution" />
					<NavItem uri="/prejbc/sonic_tonix" text="Sonic Tonix" />
					<NavItem uri="/prejbc/the_tonix" text="The Tonix" />
				</div>
				<div className="main">
					<Link href="#" className="menuButton">
						<Image alt="The Jazz Butcher" width={114} height={80} src="https://jazzbutcher.com/images/knife_logo_80.png" />
					</Link>
						{children}
				</div>
			</body>
    </html>
  )
}
