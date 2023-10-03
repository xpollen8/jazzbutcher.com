import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Tag from '@/components/Tag';

import { Credit } from '@/components/GenericWeb';

const whittemore_setlists = [
	{ src: "/images/19860724/19860724_notebook_setlist.jpg", alt: "notebook" },
	{ src: "/images/19970916/19970916_notebook_spaceneedle.jpg", alt: "spaceneedle photo" },
	{ src: "/images/19890203/19890203_notebook_setlist.jpg", alt: "19890203_notebook_setlist" },
	{ src: "/images/19891210/19891210_notebook_setlist.jpg", alt: "19891210_notebook_setlist" },
	{ src: "/images/19891103/19891103_notebook_setlist.jpg", alt: "19891103_notebook_setlist" },
	{ src: "/images/19931030/19931030_notebook_setlist.jpg", alt: "19931030_notebook_setlist" },
	{ src: "/images/19881221/19881221_notebook_setlist.jpg", alt: "19881221_notebook_setlist" },
];

const whittemore_miracles = [
	{ src: "/assets/images/notebooks/DSC_3964.jpg", alt: "notebook" },
	{ src: "/assets/images/notebooks/DSC_3965.jpg", alt: "notebook" },
	{ src: "/assets/images/notebooks/DSC_3966.jpg", alt: "notebook" },
	{ src: "/assets/images/notebooks/DSC_3967.jpg", alt: "notebook" },
	{ src: "/assets/images/notebooks/DSC_3968.jpg", alt: "notebook" },
	{ src: "/assets/images/notebooks/DSC_3969.jpg", alt: "notebook" },
	{ src: "/assets/images/notebooks/DSC_3970.jpg", alt: "notebook" },
	{ src: "/assets/images/notebooks/DSC_3971.jpg", alt: "notebook" },
	{ src: "/assets/images/notebooks/DSC_3972.jpg", alt: "notebook" },
	{ src: "/assets/images/notebooks/DSC_3973.jpg", alt: "notebook" },
	{ src: "/assets/images/notebooks/DSC_3974.jpg", alt: "notebook" },
	{ src: "/assets/images/notebooks/DSC_3975.jpg", alt: "notebook" },

	{ src: "/assets/images/notebooks/notebook_lyrics_old_snakey.jpg", alt: "Old Snakey" },
];

const duval = [
	{ src: "/assets/images/notebooks/notebook_lyrics_sister_death.jpg", alt: "sister death lyrics", credit: 'Jimmy Duval', credit_date: '2022-08-20', body: "I just received these handwritten lyrics from Mr. Curtis E Johnson himself!" }
];

const PhotoSet = ({ title, photos }: { title: string, photos: any[] }) => <>
	<Tag> {title} </Tag>
	<div className="flex flex-wrap justify-center gap-3 listItem">
		{photos.map((w: any, key: number) => {
			const { src, alt, credit, credit_url, credit_date, body } = w;
			const [ part, ext ] = src.split('.');
			return <div className="p-1 drop-shadow-sm border border-slate-500 text-center w-64">
				<Link href={src}><Image key={key} unoptimized src={`${part}_250.${ext}`} width={250} height={250} alt={alt} /></Link>
				<br/>
				{alt}
				{(body) && <><p />&quot;<i>{body}</i>&quot;</>}
				{(credit) && <><br /><Credit g={credit} u={credit_url} d={credit_date} /></>}
			</div>
		})}
	</div>
</>

const Notebooks = () => {
	return (<>
		<Header section="notebooks" />
		<main>
		Throughout his life, Pat kept journals in which he documented his gigs, tours, general observations, drew sketches, and jotted down lyrics. They are utterly fascinating.  In 2012, Pat auctioned off many of his older notebooks to raise funds for Last of the Gentlemen Adventurers
		<hr />
		<PhotoSet title='Jimmy Duval' photos={duval} />
		<hr />
		<PhotoSet title='Whittemore - setlist scans' photos={whittemore_setlists} />
		<hr />
		<PhotoSet title='Whittemore  - proposed for use in Miracles and Wonders' photos={whittemore_miracles} />
		</main>
		<Footer />
	</>)
}

export default Notebooks;
