import Link from 'next/link';
import Image from 'next/image';
import { Credit } from '@/components/GenericWeb';

const MemorialGuitar = ({ link }: { link: string }) => (
	<div className="flex flex-col min-[500px]:flex-row gap-9 items-center">
		<div className="min-[500px]:w-1/2 justify-self-center">
			<Link href={link}><Image src="https://v1.jazzbutcher.com/images/20211008_joolesjoyce_tribute_500.jpg" width={300} height={300} alt="Guitar on tree" style={{ border: "1px", borderRadius: "10px" }} /></Link>
			<Credit g="Jooles Joyce" />
		</div>
		<div>
			Pat Fish
			<p />
			The Jazz Butcher
			<p />
			<div className="smalltext"> 1957-12-20 / 2021-10-05</div>
			<p />
			<b>Patrick Guy Sibley Huntrods</b>
		</div>
	</div>
)

const MemorialSarah = () => (
	<div className="flex flex-col min-[500px]:flex-row gap-5 items-center">
		<div className="w-full min-[500px]:w-1/2">
			<div className="smalltext" style={{ padding: '10px', textAlign: 'left' }}>
				I loved Pat very dearly. He was the coolest man I ever met. When I first visited Pat&apos;s plot, after the pandemic, there was no marker - but I came back and a kind
				lady at the Olney burial ground showed me to his resting place. Here is the memorial plaque I arranged for Pat. I know Pat was proud of this song, Last of the
				Gentleman Adventurers, and hope it will bring peace to all the JBC fans, who still miss him, and any those who may wish to visit Pat in the future. Love to all.
			</div>
		</div>
		<div className="w-full min-[500px]:w-1/2">
			<Link href="https://v1.jazzbutcher.com/images/20250206_onetoysarah_gravemarker.jpg">
				<Image src="https://v1.jazzbutcher.com/images/20250206_onetoysarah_gravemarker.jpg" width={300} height={300} alt="Grave marker" style={{ border: "1px", borderRadius: "10px" }} />
			</Link>
			<Credit g="onetoysarah" u="https://www.instagram.com/r_v_ra/p/DFurSIqqJjN/?img_index=1" d="2025-02-06" />
		</div>
	</div>
)

const Memorial = (props: { home?: boolean }) => {
	return (<center className="p-3">
		<MemorialGuitar link={(props?.home) ? '/memoriam' : 'https://v1.jazzbutcher.com/images/20211008_joolesjoyce_tribute.jpg'} />
		<p />
		{(!props?.home) && <MemorialSarah />}
	</center>)
}

export default Memorial;
