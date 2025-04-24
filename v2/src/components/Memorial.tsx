import Link from 'next/link';
import Image from 'next/image';
import { Credit } from '@/components/GenericWeb';

const Memorial = (props: { home?: boolean }) => {
	return (<center>
		<div className="text-2xl">Patrick Guy Sibley Huntrods</div>
		<div>AKA: Pat Fish - The Jazz Butcher</div>
		<b> 1957-12-20 .. 2021-10-05</b>
		<p />
			{(props?.home) ? <Image src="https://v1.jazzbutcher.com/images/20250206_onetoysarah_gravemarker_500.jpg" width={450} height={450} alt="Guitar on tree" style={{ border: "1px", borderRadius: "10px" }} /> : (<Link href="https://v1.jazzbutcher.com/images/20250206_onetoysarah_gravemarker.jpg">
				<Image src="https://v1.jazzbutcher.com/images/20250206_onetoysarah_gravemarker.jpg" width={450} height={450} alt="Grave marker" style={{ border: "1px", borderRadius: "10px" }} />
			</Link>)}
				{(!props?.home) &&
				<div className="smalltext" style={{ width: '450px' }}>
				I loved Pat very dearly. He was the coolest man I ever met. When I first visited Pat&quot;s plot, after the pandemic, there was no marker - but I came back and a kind
				lady at the Olney burial ground showed me to his resting place. Here is the memorial plaque I arranged for Pat. I know Pat was proud of this song, Last of the
				Gentleman Adventurers, and hope it will bring peace to all the JBC fans, who still miss him, and any those who may wish to visit Pat in the future. Love to all.
				<br />
				Sarah x
				</div>}
		<Credit g="onetoysarah" u="https://www.instagram.com/r_v_ra/p/DFurSIqqJjN/?img_index=1" d="2025-02-06" />
		<p />
			{(props?.home) ? <Image src="https://v1.jazzbutcher.com/images/20211008_joolesjoyce_tribute_500.jpg" width={450} height={450} alt="Guitar on tree" style={{ border: "1px", borderRadius: "10px" }} /> : (<Link href="https://v1.jazzbutcher.com/images/20211008_joolesjoyce_tribute.jpg">
				<Image src="https://v1.jazzbutcher.com/images/20211008_joolesjoyce_tribute_500.jpg" width={450} height={450} alt="Guitar on tree" style={{ border: "1px", borderRadius: "10px" }} />
			</Link>)}
		<Credit g="Jooles Joyce" />
	</center>)
}

export default Memorial;
