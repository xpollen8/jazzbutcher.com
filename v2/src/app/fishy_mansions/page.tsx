"use client"

import Header from '@/components/Header';
import FishySession from '@/components/FishySession';
import Tag from '@/components/Tag';

import { Navigation, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

const sessions = [
	{
		date: "2020-06-14",
		poster: "https://s3.amazonaws.com/assets.jazzbutcher.com/video/gigs/20200614/20200614_PatFish_FishyMansions_thumbnail.jpg",
		mp4: "https://s3.amazonaws.com/assets.jazzbutcher.com/video/gigs/20200614/20200614_PatFish_FishyMansions.mp4",
	},
	{
		date: "2020-07-12",
		poster: "https://s3.amazonaws.com/assets.jazzbutcher.com/video/gigs/20200712/20200712_PatFish_FishyMansions_thumbnail.jpg",
		mp4: "https://s3.amazonaws.com/assets.jazzbutcher.com/video/gigs/20200712/20200712_PatFish_FishyMansions.mp4",
	},
	{
		date: "2020-09-27",
		poster: "https://s3.amazonaws.com/assets.jazzbutcher.com/video/gigs/20200927/20200927_PatFish_FishyMansions_thumbnail.jpg",
		mp4: "https://s3.amazonaws.com/assets.jazzbutcher.com/video/gigs/20200927/20200927_PatFish_FishyMansions.mp4",
	},
	{
		date: "2020-12-06",
		poster: "https://s3.amazonaws.com/assets.jazzbutcher.com/video/gigs/20201206/20201206_PatFish_FishyMansions_thumbnail.jpg",
		mp4: "https://s3.amazonaws.com/assets.jazzbutcher.com/video/gigs/20201206/20201206_PatFish_FishyMansions.mp4",
	},
	{
		date: "2020-12-31",
		poster: "https://s3.amazonaws.com/assets.jazzbutcher.com/video/gigs/20201231/20201231_PatFish_FishyMansions_thumbnail.jpg",
		mp4: "https://s3.amazonaws.com/assets.jazzbutcher.com/video/gigs/20201231/20201231_PatFish_FishyMansions.mp4",
	},
	{
		date: "2021-02-28",
		poster: "https://s3.amazonaws.com/assets.jazzbutcher.com/video/gigs/20210228/20210228_PatFish_FishyMansions_thumbnail.jpg",
		mp4: "https://s3.amazonaws.com/assets.jazzbutcher.com/video/gigs/20210228/20210228_PatFish_FishyMansions.mp4",
	},
	{
		date: "2021-04-18",
		poster: "https://s3.amazonaws.com/assets.jazzbutcher.com/video/gigs/20210418/20210418_PatFish_FishyMansions_thumbnail.jpg",
		mp4: "https://s3.amazonaws.com/assets.jazzbutcher.com/video/gigs/20210418/20210418_PatFish_FishyMansions.mp4",
	},
	{
		date: "2021-06-06",
		poster: "https://s3.amazonaws.com/assets.jazzbutcher.com/video/gigs/20210606/20210606_PatFish_FishyMansions_thumbnail.jpg",
		mp4: "https://s3.amazonaws.com/assets.jazzbutcher.com/video/gigs/20210606/20210606_PatFish_FishyMansions.mp4",
	},
	{
		date: "2021-07-25",
		poster: "https://s3.amazonaws.com/assets.jazzbutcher.com/video/gigs/20210725/20210725_PatFish_FishyMansions_thumbnail.jpg",
		mp4: "https://s3.amazonaws.com/assets.jazzbutcher.com/video/gigs/20210725/20210725_PatFish_FishyMansions.mp4",
	},
];

const FishyMansions = () =>
	<>
		<Header section="fishy_mansions" />
		<main>
			<Tag>
				The Fishy Mansions Sessions <span className="smalltext">(2020-2021)</span>
			</Tag>
			<p />
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
				{sessions.map(( session: any, ordinal: number ) =>
					<SwiperSlide key={ordinal}>
						<FishySession session={{...session, ordinal}} />
					</SwiperSlide>
				)}
			</Swiper>
		</main>
	</>

export default FishyMansions;
