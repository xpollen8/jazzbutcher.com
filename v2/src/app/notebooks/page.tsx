import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PhotoSet from '@/components/PhotoSet';

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

	{ src: "/assets/images/notebooks/notebook_lyrics_old_snakey.jpg", alt: <Link href="/lyrics/old_snakey">Old Snakey</Link> },
];

const duval = [
	{ src: "/assets/images/notebooks/notebook_lyrics_sister_death.jpg", alt: <><Link href="/lyrics/sister_death">Sister Death</Link> lyrics</>, credit: 'Jimmy Duval', credit_date: '2022-08-20', body: "I just received these handwritten lyrics from Mr. Curtis E Johnson himself!" }
];

const katelin = [
	{ src: "/images/20211006/20211006_press_jericsmith.jpg", alt: <><Link href="/lyrics/drink">D.R.I.N.K.</Link> lyrics</>, body: "Max's handwritten DRINK lyrics from the 2012 Adventurer's fundraising" }
];

const Notebooks = () => {
	return (<>
		<Header section="notebooks" />
		<main>
		<div className="listItem">
		Throughout his life, Pat kept journals in which he documented his gigs, tours, general observations, drew sketches, and worked on lyrics.<p />They are utterly fascinating.  In 2012, Pat auctioned off many of his older notebooks to raise funds for Last of the Gentleman Adventurers
		</div>
		<PhotoSet title='Katelin Smith' photos={katelin}  credit='Katelin Smith' credit_date='2021-10-06' />
		<hr />
		<PhotoSet title='Jimmy Duval' photos={duval} />
		<hr />
		<PhotoSet title='Whittemore - setlist scans' photos={whittemore_setlists} credit="David Whittemore" />
		<hr />
		<PhotoSet title='Whittemore  - proposed for use in Miracles and Wonders' photos={whittemore_miracles} credit="David Whittemore" credit_date="2022-02-22" />
		</main>
		<Footer />
	</>)
}

export default Notebooks;
