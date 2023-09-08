"use client"
import React, { Suspense } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FishySession from '@/components/FishySession';
import LetterHeader from '@/components/LetterHeader';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

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
	<Header section='pat' title="Fishy Mansions" />
	<div className="layout">
		<LetterHeader title="The Fishy Mansions Sessions" subhead="2020-2021" />
		<center>
			<blockquote>
				During the COVID era, Pat streamed 9 from-home performances.
				<p />
				We were able to liberate these shows from, er, Meta.
				<p />
				Enjoy
			</blockquote>
			<AwesomeSlider style={{  height: '780px', marginBottom: '100px', border: '1px solid black' }}>
				{sessions.map((session: any, key: number) => (
					<div key={key} className="flex flex-wrap justify-center bg-slate-200 py-5" style={{ background: '#e2e8f0', display: 'inline-block', overflow: 'scroll' }}>
						<video
							width={350}
							controls={true}
							preload="none"
							className="video"
							poster={session.poster}
						>
							<source src={session.mp4} type="video/mp4" />
						</video>
						<div className="bg-slate-200 p-5">
						<center>
							<Suspense fallback={<>Loading...</>}>
								{FishySession(session, key)}
							</Suspense>
						</center>
						</div>
					</div>
				))}
			</AwesomeSlider>
		</center>

		<Footer />
	</div>
</>

export default FishyMansions;
