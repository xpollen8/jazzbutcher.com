import Link from 'next/link';
import Image from 'next/image';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Credit } from '@/components/GenericWeb';
import Tributes from '@/components/Tributes';

const Memoriam = () =>
<>
	<Header section='memoriam' />
			<p />
	<center>
	<div className="flex flex-wrap">
		<div className="text-center grow">
			<div className="text-2xl">Patrick Guy Sibley Huntrods</div>
			<div>AKA: Pat Fish - The Jazz Butcher</div>
			<b> 1957-12-20 .. 2021-10-05</b>
			<p />
			<center>
			<Link href="https://jazzbutcher.com/images/20211008_joolesjoyce_tribute.jpg">
				<Image src="https://jazzbutcher.com/images/20211008_joolesjoyce_tribute_500.jpg" width={450} height={450} alt="Guitar on tree" style={{ border: "1px", borderRadius: "10px" }} />
			</Link>
			</center>
			<Credit g="Jooles Joyce" />
		</div>
		<div className="w-1/3 grow">
			<Tributes />
		</div>
	</div>
	</center>
	<Footer />
</>

export default Memoriam;

