import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PhotoSet from '@/components/PhotoSet';
import MyLink from '@/components/MyLink';

const gallery = [
	{
    src: "/images/19850628/19850628_poster.jpg",
		credit_date: "1985",
		alt: "Glass gig poster",
  },
	{
    src: "/images/releases/fire_wasted/JazzButcherGroupBW1.jpg",
		credit_date: "1984",
		alt: "With David J.",
		credit: "Mitch Jenkins",
  },
	{
    src: "/images/releases/fire_wasted/JazzButcherGroupPatFishBW1.jpg",
		credit_date: "1984",
		alt: "Off In The Weeds",
		credit: "Mitch Jenkins",
  },
	{
    src: "/images/releases/fire_wasted/JazzButcherGroupBW2.jpg",
		credit_date: "1985",
		alt: "WIth Felix",
		credit: "Mitch Jenkins",
  },
	{
    src: "/images/promo/Promotional_Sumosonic_Group1.jpg",
		credit_date: "1998",
		alt: "Sumosonic",
		credit: "Mitch Jenkins",
		body: <MyLink href="/projects/sumosonic">Project Page</MyLink>,
  },
	{
    src: "/images/promo/Promotional_Sumosonic_Group2.jpg",
		credit_date: "1998",
		alt: "Sumosonic",
		credit: "Mitch Jenkins",
		body: <MyLink href="/projects/sumosonic">Project Page</MyLink>,
  },
	{
    src: "/images/promo/Promotional_Sumosonic_Group3.jpg",
		credit_date: "1998",
		alt: "Sumosonic",
		credit: "Mitch Jenkins",
		body: <MyLink href="/projects/sumosonic">Project Page</MyLink>,
  },
	{
    src: "https://s3.amazonaws.com/assets.jazzbutcher.com/projects/Sumosonic/19980401_Sumosonic_Promo_Trio.jpg",
		credit_date: "1998-04-01",
		alt: "Sumosonic Trio",
		body: <MyLink href="/projects/sumosonic">Project Page</MyLink>
  },
	{
    src: "/images/stranger_tractors/Tractor_curt.jpg",
		credit_date: "1994",
		alt: "Stranger Tractors",
		credit: "Curtis E. Johnson",
		body: <MyLink href="/projects/stranger_tractors">Project Page</MyLink>
  },
	{
    src: "https://s3.amazonaws.com/assets.jazzbutcher.com/projects/TheDronesClub/cropped-cropped-site-image-bw.jpg",
		credit_date: "2021-07",
		alt: "Drones Club",
		body: <MyLink href="/projects/drones_club">Project Page</MyLink>
  },
	{
    src: "/images/promo2.jpg",
		credit_date: "1992",
		alt: "Sky Records Promo",
		body: <MyLink href="/press/92biography">Full Promo Package</MyLink>
  },
	{
    src: "https://s3.amazonaws.com/assets.jazzbutcher.com/images/promos/19880215_Promo.jpg",
		credit_date: "1988",
		alt: "Relativity Records Promo",
  },
	{
    src: "https://s3.amazonaws.com/assets.jazzbutcher.com/images/promos/19901120_Promo.jpg",
		credit_date: "1990",
		alt: "Rough Trade Records Promo",
  },
	{
    src: "/images/promo1.jpg",
		credit_date: "1991",
		alt: "Creation Records Promo",
		body: <MyLink href="/press/91biography">Full Promo Package</MyLink>
  },
	{
    src: "/images/95promo.jpg",
		credit_date: "1995",
		alt: "Creation Records Promo",
		body: <MyLink href="/press/95promo">Full Promo Package</MyLink>
  },
	{
    src: "/images/promo/Promotional_BigTime_Outside_1986.jpg",
		credit_date: "1986",
		alt: "BigTime Promo",
  },
	{
    src: "/images/promo/Promotional_GlassRecords_SoppyPussycats_JoolsJoyce.jpg",
		credit_date: "1984",
		alt: "Glass Records Promo",
		credit: "Jooles Joyce",
  },
	{
    src: "/images/promo/Promotional_GlassRecords_Hallway_JoolsJoyce.jpg",
		credit_date: "1984",
		alt: "Glass Records Promo",
		credit: "Jooles Joyce",
  },
];

const Promotional = () => 
<>
	<Header section="gallery" title="Official Promotional & Publicity Photos" />
	<main>
    <PhotoSet title="Official Promotional & Publicity Photos" photos={gallery?.sort((a: any, b: any) => a?.credit_date?.localeCompare(b?.credit_date))} />
	</main>
	<Footer />
</>

export default Promotional;
