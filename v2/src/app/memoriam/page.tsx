import Link from 'next/link';
import Image from 'next/image';

import './page.css'
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { linkInternal } from '@/lib/macros';
import { Credit } from '@/components/GenericWeb';

const Memoriam = () =>
<>
	<Header section='jbc' title="In Memoriam" />
	<div className="w-full flex">
		<div className="text-center w-1/2">
			<br/> <br/> <br/>
			<h2>Patrick Guy Sibley Huntrods</h2>
			<h3>AKA: Pat Fish - The Jazz Butcher</h3>
			<b> 1957-12-20 .. 2021-10-05</b>
			<br/> <br/> <br/>
			<b>{linkInternal("/eulogy", "Alan Moore's eulogy is here..")}</b>
			<br/> <br/> <br/> <br/>
			{linkInternal("/help", "Help enrich the JBC archives!")}
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
