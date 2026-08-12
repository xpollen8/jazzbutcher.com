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
			<div className="min-[1000px]:w-[60%] border drop-shadow-sm bg-slate-100">
				<Memorial />
				<TributeText />
				<Image src={`/images/20251217_Eider.jpg`} height={750} width={750} alt={`Max Eider RIP 2025-12-17`} />
			</div>
			<div className="min-[1000px]:w-[40%]">
				<TributeAudio />
			</div>
		</div>
	</main>
	<Footer />
</>

export default Memoriam;

