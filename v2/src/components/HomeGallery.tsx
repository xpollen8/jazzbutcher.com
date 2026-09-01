"use client"

import Link from 'next/link';
import Image from 'next/image';
import Tag from '@/components/Tag';
import { Credit } from '@/components/GenericWeb';

import { Navigation, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

const pictures = [
	{
		title: "NN Cafe - Northampton",
		credit: { g: "Mat Wallis", d: "2014-08-20" },
		href: "/gigs/2014-08-20",
		poster: 'https://v1.jazzbutcher.com/images/20140820/20140820_2_1500.jpg',
	},
	{
		title: "Basement Bar - Tokyo Japan",
		credit: { g: "opal_krusch", d: "2012-12-01" },
		href: "/gigs/2012-12-01",
		poster: "https://v1.jazzbutcher.com/images/20121201/20121201_opal_krusch_patsmiles.jpg",
	},
	{
		title: "Festival Veni Vidi Vici - Frejus France",
		credit: { g: "Franck Yeznikian", d: "1987-08-02" },
		href: "/gigs/1987-08-02",
		poster: "https://v1.jazzbutcher.com/images/19870802/19870802_FranckYeznikian_pat.jpg",
	},
	{
		title: "New York City",
		credit: { g: "Alastair Indge", d: "1986-07-17" },
		href: "/gigs/1986-07-17",
		poster: "https://v1.jazzbutcher.com/images/19860717/19860717_pat_catclub_indge.jpg",
	},
	{
		title: "The Bronx - Edmonton",
		credit: { g: "Auersberger", d: "1992-05-24" },
		href: "/gigs/1992-05-24",
		poster: "https://v1.jazzbutcher.com/images/19920524/19920524_wem_hmv_32_47074994712_o.jpg",
	},
	{
		title: "The Rock Garden - London",
		credit: { d: "1984-12-22" },
		href: "/gigs/1984-12-22",
		poster: "https://v1.jazzbutcher.com/images/19841222/19841222_jazzbutcher_rockgarden_1.jpg",
	},
	{
		title: "Monterey California",
		credit: { g: "ArianneM12", d: "2001-07-14" },
		href: "/gigs/2001-07-14",
		poster: "https://v1.jazzbutcher.com/images/20010714/20010714_arianaM12_hanging.jpg",
	},
	{
		title: "Logo - Hamburg",
		credit: { g: "Arne Jasse", d: "1999-02-26" },
		href: "/gigs/1999-02-26",
		poster: "https://v1.jazzbutcher.com/images/19990226/26Feb1999_hamburg.jpg",
	},
	{
		title: "The Packhorse - Leeds",
		credit: { g: "Andrew Brooksbank", d: "2001-04-14" },
		href: "/gigs/2001-04-14",
		poster: "https://v1.jazzbutcher.com/images/20010414/20010414_Wilson_Brooksbank2.jpg",
		story: "Wilson",
	},
	{
		title: "Mercury Lounge - New York",
		credit: { g: "Diane White", d: "2000-05-11" },
		href: "/gigs/2000-05-11",
		poster: "https://v1.jazzbutcher.com/images/20000511/disk2.Untitled31.jpg",
	},
	{
		title: "Iota Cafe - Arlington Virginia",
		credit: { g: "Diane White", d: "2000-05-08" },
		href: "/gigs/2000-05-08",
		poster: "https://v1.jazzbutcher.com/images/20000508/disk4.Untitled9.jpg",
	},
	{
		title: "40 Watt - Athens",
		credit: { g: "Jay Nagy", d: "2000-05-04" },
		href: "/gigs/2000-05-04",
		poster: "https://v1.jazzbutcher.com/images/20000504/JBC10.jpg",
	},
	{
		title: "The Great American Music Hall - San Francisco",
		credit: { g: "David Whittemore", d: "1999-11-11" },
		href: "/gigs/1999-11-11",
		poster: "https://v1.jazzbutcher.com/images/19990911/11Sep1999_max_owen.jpg",
	},
	{
		title: "The Great American Music Hall - San Francisco",
		credit: { g: "David Whittemore", d: "1997-09-22" },
		href: "/gigs/1997-09-22",
		poster: "https://v1.jazzbutcher.com/images/19970922/19970922_8.jpg",
	},
	{
		title: "l'Européen  - Paris",
		credit: { g: "Marie Le Mauff", d: "1993-02-16" },
		href: "/gigs/1993-02-16",
		poster: "https://v1.jazzbutcher.com/images/19930216/19930216_pat_dooj_MarieLeMauff.jpg",
	},
	{
		title: "Tipitina's - New Orleans",
		credit: { g: "Suzanne Lis", d: "1992-06-16" },
		href: "/gigs/1992-06-16",
		poster: "https://v1.jazzbutcher.com/images/19920615/19920615_lis_pat.jpg",
	},
	{
		title: "Club Babyhead - Providence Rhode Island",
		credit: { g: "David Whittemore", d: "1992-05-03" },
		href: "/gigs/1992-05-03",
		poster: "https://v1.jazzbutcher.com/images/19920503/19920503_del_techno.jpg",
	},
	{
		title: "Dallas",
		credit: { g: "David Whittemore", d: "1990-11-20" },
		href: "/gigs/1990-11-20",
		poster: "https://v1.jazzbutcher.com/images/19901120/19901120_del_group2.jpg",
	},
	{
		title: "Paradise - Boston",
		credit: { g: "David Whittemore", d: "1990-11-11" },
		href: "/gigs/1990-11-11",
		poster: "https://v1.jazzbutcher.com/images/19901111/19901111_JazzButcher_PatShades_Whittemore.jpg",
	},
	{
		title: "Day's Inn Lobby - Atlanta",
		credit: { g: "David Whittemore", d: "1989-12-20" },
		href: "/gigs/1989-12-20",
		poster: "https://v1.jazzbutcher.com/images/19891220/19891220_del_xmas.jpg",
		story: "The morning after Pat's 32nd birthday party",
	},
	{
		title: "Shank Hall - Milwaukee",
		credit: { g: "David Whittemore", d: "1989-11-19" },
		href: "/gigs/1989-11-19 16:00:00",
		poster: "https://v1.jazzbutcher.com/images/19891119/19891119_BK_4_scaled.jpg",
	},
	{
		title: "Jericho Tavern - Oxford",
		credit: { g: "Greg Neate", d: "1989-10-06" },
		href: "/gigs/1989-10-06",
		poster: "https://v1.jazzbutcher.com/images/19891006/19891006_gregneate_patformby.jpg",
	},
	{
		title: "Cubby Bear - Chicago",
		credit: { g: "David Whittemore", d: "1988-06-11" },
		href: "/gigs/1988-06-11",
		poster: "https://v1.jazzbutcher.com/images/19880611/19880611_del_cubbybear_10.jpg",
	},
	{
		title: "Tartan Bar - Leeds",
		credit: { g: "Andrew Brooksbank", d: "1988-02-29" },
		href: "/gigs/1988-02-29",
		poster: "https://v1.jazzbutcher.com/images/19880229/19880229_JazzButcher_Leeds_Brooksbank1.jpg",
	},
	{
		title: "The Loft - Berlin",
		credit: { g: "Petra Gall", d: "1985-11-14" },
		href: "/gigs/1985-11-14",
		poster: "https://v1.jazzbutcher.com/images/19851114/1_the-jazz-butcher-14111985-i-n-2-97361-4.jpg",
	},
	{
		title: "Hammersmith Town Hall - London",
		credit: { g: "lochgirl", d: "1985-03-07" },
		href: "/gigs/1985-03-07",
		poster: "https://v1.jazzbutcher.com/images/19850307/19850307_lochgirl_pat.jpg",
	},
	{
		title: "I.C.A. - London",
		credit: { d: "1984-12-30" },
		href: "/gigs/1984-12-30",
		poster: "https://v1.jazzbutcher.com/images/19841230/19841230_pat.jpg",
	},
	{
		title: "The Living Room - Islington",
		credit: { g: "Vivonzeureux!", d: "1984-07-20" },
		href: "/gigs/1984-07-20",
		poster: "https://v1.jazzbutcher.com/images/19840720/19840720_vivonzeureux_band1.jpg",
	},
	{
		title: "Derngate Centre - Northampton",
		credit: { g: "Fishy Mansions Archives", d: "1983-09-24" },
		href: "/gigs/1983-09-24",
		poster: "https://v1.jazzbutcher.com/images/19830924/19830924_2.jpg",
	},
	{
		title: "7th St. Entry - Minneapolis",
		credit: { g: "Brian Obert", d: "2000-04-23" },
		href: "/gigs/2000-04-23",
		poster: "https://v1.jazzbutcher.com/images/20000423/002_2.jpg",
	},
	{
		title: "Jackson's Lane Centre - London",
		credit: { g: "Russ W.", d: "1985-07-27" },
		href: "/gigs/1985-07-27",
		poster: "https://v1.jazzbutcher.com/images/19850727/19850727_ruse_JbJL001.jpg",
	},
	{
		title: "The 100 Club - London",
		credit: { g: "Raj Patel", d: "2006-04-27" },
		href: "/gigs/2006-04-27",
		poster: "https://v1.jazzbutcher.com/images/20060427/DSCN0399.jpg",
	},
	{
		title: "Cat's Cradle - Chapel Hill",
		credit: { g: "Steve Bingham", d: "1992-04-26" },
		href: "/gigs/1992-04-26",
		poster: "https://v1.jazzbutcher.com/images/19920426/M31-08.jpg",
	},
	{
		title: "100 Club - London",
		credit: { g: "Matt Sewell", d: "2018-03-01" },
		href: "/gigs/2018-03-01",
		poster: "https://v1.jazzbutcher.com/images/20180301/20180301_sewell2.jpg",
	},
	{
		title: "Wetlands - New York",
		credit: { g: "Martin Reed", d: "1999-09-23" },
		href: "/gigs/1999-09-23",
		poster: "https://v1.jazzbutcher.com/images/19990923/19990923_martinsreed_002.jpg",
	},
	{
		title: "Fishy Mansions Livestream",
		credit: { g: "Sumishta Brahm", d: "2021-04-18" },
		href: "/gigs/2021-04-18",
		poster: "https://v1.jazzbutcher.com/images/20210418/20210418_sumishta.jpg",
	},
	{
		title: "The MOTH Club - London",
		credit: { g: "Gabriel Edvy", d: "2019-10-26" },
		href: "/gigs/2019-10-26",
		poster: "https://v1.jazzbutcher.com/images/20191026/20191026_PatFish_8690_MothClub26102019_EGabrielEdvy.jpg",
	},
	{
		title: "The Lexington - London",
		credit: { g: "Philippe Dufour", d: "2019-11-09" },
		href: "/gigs/2019-11-09",
		poster: "https://v1.jazzbutcher.com/images/20191109/20191109_dufour_1.jpg",
	},
	{
		title: "The Lexington - London",
		credit: { g: "Joe Turner", d: "2019-11-09" },
		href: "/gigs/2019-11-09",
		poster: "https://v1.jazzbutcher.com/images/20191109/20191109_turner_1.jpg",
	},
	{
		title: "Mohawk Place - Buffalo",
		credit: { g: "Jim Gibbon", d: "2000-04-15" },
		href: "/gigs/2000-04-15",
		poster: "https://v1.jazzbutcher.com/images/20000415/theboys.jpg",
	},
	{
		title: "Natural History Museum, London",
		credit: { g: "Sumishta Brahm", d: "1993" },
		href: "https://v1.jazzbutcher.com/images/PatFish_SumishtaBrahm.jpg",
		poster: "https://v1.jazzbutcher.com/images/PatFish_SumishtaBrahm.jpg",
	},
	{
		title: "Shank Hall - Milwaukee",
		credit: { g: "David Whittemore", d: "1989-11-19" },
		href: "/gigs/1989-11-19 20:00:00",
		poster: "https://v1.jazzbutcher.com/images/19891119/19891119_del_14.jpg",
	},
	{
		title: "The Racehorse - Northampton",
		credit: { g: "Paul Blinkhorn", d: "2010-12-04" },
		href: "/gigs/2010-12-04",
		poster: "https://v1.jazzbutcher.com/images/20101204/horse1.jpg",
	},
	{
		title: "16 Toneladas - Valencia Spain",
		credit: { g: "Dhiren Basu", d: "2019-04-06" },
		href: "https://v1.jazzbutcher.com/images/20190406/20190406_basu_2.jpg",
		poster: "https://v1.jazzbutcher.com/images/20190406/20190406_basu_2.jpg",
	},
	{
		title: "The Playhouse Theatre - Northampton",
		credit: { g: " Michael Street", d: "2015-12-12" },
		href: "/gigs/2015-12-12",
		poster: "https://v1.jazzbutcher.com/images/20151212/20151212_street_2.jpg",
	},
	{
		title: "Promo Pic",
		credit: { g: "Mitch Jenkins", d: "1984" },
		href: "https://v1.jazzbutcher.com/images/releases/fire_wasted/JazzButcherGroupBW1.jpg",
		poster: "https://v1.jazzbutcher.com/images/releases/fire_wasted/JazzButcherGroupBW1.jpg",
	},
	{
		title: "Arapaho - Paris",
		credit: { g: "Lucien Borderline", d: "1994-02-17" },
		href: "/gigs/1994-02-17",
		poster: "https://v1.jazzbutcher.com/images/19940217/19940217_lucien_group.jpg",
	},
	{
		title: "Sy Klopps Studios - San Francisco",
		credit: { g: "David Whittemore", d: "1999-09-13" },
		href: "/gigs/1999-09-13",
		poster: "https://s3.amazonaws.com/assets.jazzbutcher.com/images/19990913/19990913_SykloppsStudio_JazzButcher_Whittemore_4.jpg",
	},
	{
		title: "16 Toneladas - Valencia Spain",
		credit: { g: "Juan Vitoria", d: "2015-04-17" },
		href: "/gigs/2015-04-17",
		poster: "https://v1.jazzbutcher.com/images/20150417/20150417_pestano_Pat-Fish-The-Jazz-Butcher-16-Toneladas-de-Valencia.jpg",
	},
	{
		title: "The Echo - Los Angeles",
		credit: { g: "Ned Raggett", d: "2009-10-11" },
		href: "/gigs/2009-10-11",
		poster: "https://v1.jazzbutcher.com/images/20091011/4003725947_1b54b2952a_o.jpg",
	},
	{
		title: "Paris Metro Station",
		credit: { g: "Philippe Dufour", d: "2019-09-28" },
		href: "/gigs/2019-09-28",
		poster: "https://v1.jazzbutcher.com/images/20190928/20190928_dufour_garedunord1.jpg",
	},
	{
		title: "The Echo - Los Angeles",
		credit: { g: "Cole Coonce", d: "2009-10-11" },
		href: "/gigs/2009-10-11",
		poster: "https://v1.jazzbutcher.com/images/20091011/20091011_JazzButcher_ColeCoonce5.jpg",
	},
	{
		title: "The Lexington - London",
		credit: { g: "Planetruth Pictures", d: "2017-04-15" },
		href: "/gigs/2017-04-15",
		poster: "https://v1.jazzbutcher.com/images/20170415/20170415_JazzButcher_Tidmarsh_P1040651.jpg",
	},
	{
		title: "Cubby Bear, Chicago",
		credit: { g: "David Whittemore", d: "1988-06-11" },
		href: "/gigs/1988-06-11",
		poster: "https://v1.jazzbutcher.com/images/19880611/19880611_del_cubbybear_11.jpg",
		story: "My first Jazz Butcher gig - David",
	},
	{
		title: "Onkel Pö's",
		credit: { g: "Alastair Indge", d: "1984-12-08" },
		href: "/gigs/1984-12-08",
		poster: 'https://v1.jazzbutcher.com/images/19841208/19841208_indge_trio.jpg',
		story: "Pat, me, and Max at the wonderful Onkel Pö club in Hamburg - which is where, as it it happens, I met the love of my life Bärbel - Owen Jones",
	},
];

const HomeGalleryItem = ({ item }: any) => {
	const { g, d, u } = item?.credit || {};
	return (<div className="flex flex-wrap justify-center bg-slate-200 p-1">
		<Tag><b>{item.title}</b> : <span className="date">{d}</span></Tag>
		<div style={{ marginLeft: '4em', marginRight: '4em' }}>
			<Link href={item?.href || ''}>
				<Image src={item?.poster} width='1500' height='500' alt={item?.title} objectFit='contain' />
			</Link>
		</div>
		{(item?.story) && <div className="py-10">
			{item.story}
		</div>}
		<Credit g={g} d={d} />
	</div>);
}

const HomeGallery = () =>
	<>
			<Swiper
					style={{ border: '1px solid black'}}
				modules={[Navigation, Scrollbar, ]}
				autoHeight={true}
				navigation
				effect='flip'
				scrollbar={{ draggable: true }}
				pagination={{ clickable: true }}
				spaceBetween={100}
				slidesPerView={1}
				onSlideChange={() => console.log('slide change')}
				onSwiper={(swiper) => console.log(swiper)}
			>
				{pictures.sort((a, b) => a?.credit?.d?.localeCompare(b?.credit?.d)).map(( item: any, ordinal: number ) =>
					<SwiperSlide key={ordinal}>
						<HomeGalleryItem item={item} />
					</SwiperSlide>
				)}
			</Swiper>
	</>

export default HomeGallery;
