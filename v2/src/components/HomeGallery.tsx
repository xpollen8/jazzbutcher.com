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
		title: 'Pat and Max',
		credit: { g: "Mat Wallis", d: "2014-08-20" },
		href: "/gigs/2014-08-20",
		poster: 'https://v1.jazzbutcher.com/images/20140820/20140820_2_1500.jpg',
		story: "NN Cafe - Northampton England",
	},
	{
		title: "Basement Bar - Tokyo Japan",
		credit: { g: "opal_krusch", d: "2012-12-01" },
		href: "/gigs/2012-12-01",
		poster: "https://v1.jazzbutcher.com/images/20121201/20121201_opal_krusch_patsmiles.jpg",
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
		href: "/gigs/1989-11-19",
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
		credit: { g: "Mitch Jenkins" },
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
	return (<div className="flex flex-wrap justify-center bg-slate-200 p-2 h-max">
		<div className="pl-10 px-1 w-2/3">
			<Link href={item?.href || ''}>
				<Image src={item?.poster} width='1500' height='500' alt={item?.title} objectFit='contain' />
			</Link>
		</div>
		<div className="px-1 w-1/3 pr-10">
			<Tag><b>{item.title}</b> : <span className="date">{d}</span></Tag>
			{(item?.story) && <div className="py-10">
				{item.story}
			</div>}
			<Credit g={g} d={d} />
		</div>
	</div>);
}

const HomeGallery = () =>
	<>
			<Swiper
					style={{ border: '1px solid black', overflow: 'scroll' }}
				modules={[Navigation, Scrollbar, ]}
				navigation
				scrollbar={{ draggable: true }}
				pagination={{ clickable: true }}
				spaceBetween={100}
				slidesPerView={1}
				onSlideChange={() => console.log('slide change')}
				onSwiper={(swiper) => console.log(swiper)}
			>
				{pictures.map(( item: any, ordinal: number ) =>
					<SwiperSlide key={ordinal}>
						<HomeGalleryItem item={item} />
					</SwiperSlide>
				)}
			</Swiper>
	</>

export default HomeGallery;
