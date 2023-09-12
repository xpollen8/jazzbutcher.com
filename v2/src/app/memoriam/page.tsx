import Link from 'next/link';
import Image from 'next/image';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Credit } from '@/components/GenericWeb';
import Tributes from '@/components/Tributes';

const Memoriam = () =>
<>
	<Header section='memoriam' />
	<div className="w-full flex">
		<div className="text-center w-1/2">
			<p />
			<h2>Patrick Guy Sibley Huntrods</h2>
			<h3>AKA: Pat Fish - The Jazz Butcher</h3>
			<b> 1957-12-20 .. 2021-10-05</b>
			<p />
			<Tributes />
			<p />
		</div>
		<div className="w-1/2">
			<Link href="https://jazzbutcher.com/images/20211008_joolesjoyce_tribute.jpg">
				<Image src="https://jazzbutcher.com/images/20211008_joolesjoyce_tribute_500.jpg" width={500} height={500} alt="Guitar on tree" style={{ border: "1px", borderRadius: "10px" }} />
			</Link>
			<Credit g="Jooles Joyce" />
		</div>
	</div>
	<Footer />
</>

export default Memoriam;

