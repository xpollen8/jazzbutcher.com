import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MakeSimpleURI from '@/components/MakeSimpleURI';

const topics = [
	{ uri: "/letters/19940624/intro.html", text: "Introduction" },
	{ uri: "/letters/19940624/all_the_gigs.html", text: "All the gigs, ever", aux: "(c. 1994-06-04)" },
	{ uri: "/letters/19940624/top_20.html", text: "Top 20 Gigs", aux: "(c. 1994-06-04)" },
];

const Letter = () =>  {
	return ( <>
		<Header section='letters' title='6Jun94' />
		<main>
			<div className="flex flex-wrap justify-around">
				<div className="min-w-[50%]">
					{topics.map(MakeSimpleURI)}
				</div>
				<div className="m-1">
					<center>
						<p /><Image width={270} height={122} alt="[signature]" src="https://v1.jazzbutcher.com/images/19940624/94Jun24_sig.gif" />
					</center>
				</div>
			</div>
		</main>
		<Footer />
	</>)
}

export default Letter;
