import Link from 'next/link';
import Image from 'next/image';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Credit } from '@/components/GenericWeb';
import Memorial from '@/components/Memorial';
import { TributeText, TributeAudio } from '@/components/Tributes';


const Memoriam = () =>
<>
	<Header section='memoriam' />
	<main>
    <div className="flex flex-col min-[1000px]:flex-row gap-1">
			<div className="w-full min-[1000px]:w-1/2 border drop-shadow-sm bg-slate-100">
				<Memorial />
				<TributeText />
			</div>
			<div className="w-full min-[1000px]:w-1/2">
				<TributeAudio />
			</div>
		</div>
	</main>
	<Footer />
</>

export default Memoriam;

