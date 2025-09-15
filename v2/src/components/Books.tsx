import Link from 'next/link';
import FeaturedItem from '@/components/FeaturedItem';

export const BookEbooks = () =>
	<FeaturedItem
		title={`Ebooks!`}
	>
	<>
		Subject to huge demand (OK, two people - one who said he wanted a portable copy, another who said the print
		was a little small), we have released the Kindle versions of both <Link href={`https://www.amazon.com/Miracles-Wonders-meandering-cacophonous-concordance-ebook/dp/B0FMPGWJK3`}>Miracles and Wonders</Link> and <Link href={`https://www.amazon.com/Earl-Sikkorskis-Golden-Treasury-microscope-ebook/dp/B0BNDYQNMC`}>Earl
		Sikkorski&quot;s Golden Treasury</Link>. The e-version will also give you illustrations in colour, and for ESGT in
		particular, the ability to get into the fine detail of Sikko&quot;s scrapbook. So, if your eyesight has changed,
		or you ride on aeroplanes, these are for you. You can still order hardcover copies from these pages at a
		discount.
		<p />
		<div className="date">2025-09-15</div>
	</>
</FeaturedItem>

export const BookSikkorski = () =>
	<FeaturedItem
		link={`https://www.paypal.com/instantcommerce/checkout/B9R9UNV97A754`}
		buy={`https://www.paypal.com/instantcommerce/checkout/B9R9UNV97A754`}
		title={`Earl Sikkorski’s Golden Treasury`}
		image={`/images/book_sikkorski`}
		alt={`book cover`}
		buy_title="Order direct from the author"
	>
		&quot;Earl Sikkorski&apos;s Golden Treasury&quot;, a facsimile of the Jazz Butcher fan club scrapbook, pinned out, examined under the microscope and expanded upon, by Philip Snow.  Hardback book out now.
	</FeaturedItem>

export const BookMiraclesAndWonders = () => 
	<FeaturedItem
		link={`https://www.paypal.com/instantcommerce/checkout/HRQWCR4BWWF5W`}
		buy={`https://www.paypal.com/instantcommerce/checkout/HRQWCR4BWWF5W`}
		title={`Miracles and Wonders`}
		image={`/images/songbook/cover`}
		alt={`book cover`}
	>
		<>
			<i>A Meandering, Cacophonous Concordance of The Jazz Butcher Songbook</i>,
			by Pat Fish & Philip Snow.
			<p />
				A 400 page volume with hundreds of illustrations, many uniquely sourced from the
				Fishy Mansions Archives and friends worldwide.  Big Answers, finally.
			<p />
			<div className="date">2022-05-01</div>
		</>
	</FeaturedItem>
