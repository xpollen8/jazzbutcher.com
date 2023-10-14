import Link from 'next/link';
import Image from 'next/image';
import { Credit } from '@/components/GenericWeb';

const Memorial = (props: { home?: boolean }) => {
	return (<center>
		<div className="text-2xl">Patrick Guy Sibley Huntrods</div>
		<div>AKA: Pat Fish - The Jazz Butcher</div>
		<b> 1957-12-20 .. 2021-10-05</b>
		<p />
		<center>
			{(props?.home) ? <Image src="https://jazzbutcher.com/images/20211008_joolesjoyce_tribute_500.jpg" width={450} height={450} alt="Guitar on tree" style={{ border: "1px", borderRadius: "10px" }} /> : <Link href="https://jazzbutcher.com/images/20211008_joolesjoyce_tribute.jpg">
				<Image src="https://jazzbutcher.com/images/20211008_joolesjoyce_tribute_500.jpg" width={450} height={450} alt="Guitar on tree" style={{ border: "1px", borderRadius: "10px" }} />
			</Link>}
		</center>
		<Credit g="Jooles Joyce" />
	</center>)
}

export default Memorial;
