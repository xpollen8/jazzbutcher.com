//"use client"

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ReleaseBlurb from '@/components/ReleaseBlurb';
import FeaturedItem from '@/components/FeaturedItem';
import DayInHistory from '@/components/DayInHistory';
import RandomLiveVideo from '@/components/RandomLiveVideo';

/*
import { Navigation, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
*/

const BookSikkorski = () =>
	<FeaturedItem
		link={`https://www.paypal.com/instantcommerce/checkout/B9R9UNV97A754`}
		buy={`https://www.paypal.com/instantcommerce/checkout/B9R9UNV97A754`}
		title={`Earl Sikkorski’s Golden Treasury`}
		image={`https://jazzbutcher.com/images/book_sikkorski`}
		alt={`book cover`}
		buy_title="Order direct from the author"
	>
		&quot;Earl Sikkorski&apos;s Golden Treasury&quot;, a facsimile of the Jazz Butcher fan club scrapbook, pinned out, examined under the microscope and expanded upon, by Philip Snow.  Hardback book out now.
	</FeaturedItem>

const BookMiraclesAndWonders = () => 
	<FeaturedItem
		link={`https://www.paypal.com/instantcommerce/checkout/HRQWCR4BWWF5W`}
		buy={`https://www.paypal.com/instantcommerce/checkout/HRQWCR4BWWF5W`}
		title={`Miracles and Wonders`}
		image={`https://jazzbutcher.com/images/songbook/cover`}
		alt={`book cover`}
	>
		<>
			<i>A Meandering, Cacophonous Concordance of The Jazz Butcher Songbook</i>,
			by Pat Fish & Philip Snow, will be officially published on the first day of May, 2022.
			<p>
				A 400 page volume with hundreds of illustrations, many uniquely sourced from the
				Fishy Mansions Archives and friends worldwide.  Big Answers, finally.
			</p>
		</>
	</FeaturedItem>

const HomeBooks = () =>
<>
	<BookSikkorski />
	<BookMiraclesAndWonders />
</>

const HomeReleases = () =>
<>
		<ReleaseBlurb lookup='never7' />
		<ReleaseBlurb lookup='highest' />
		<ReleaseBlurb lookup='fire_cholmondley' />
		<ReleaseBlurb lookup='fire_violent' />
		<ReleaseBlurb lookup='fire_wasted' />
		<ReleaseBlurb lookup='adventurers' />
</>

/*
const homeItems = [
		<HomeBooks />,
		<HomeReleases />,
		<BookSikkorski />,
		<BookMiraclesAndWonders />,
];
		*/

const Home = (): React.ReactNode =>
<>
	<Header section='jbc' />
		<div>
    {/*<Swiper
				style={{  padding: '40px', border: '1px solid black' }}
			modules={[Navigation, Scrollbar, ]}
			navigation
			scrollbar={{ draggable: true }}
			pagination={{ clickable: true }}
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
			{homeItems.map((item: any, key: number) =>
				<SwiperSlide key={key}>
					{item}
				</SwiperSlide>
			)}
		</Swiper>*/}
			<ReleaseBlurb lookup='never7' />
			<HomeBooks />
			<HomeReleases />
			<RandomLiveVideo />
			<DayInHistory />
		</div>
	<Footer />
</>

export default Home;
