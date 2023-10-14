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
		<div className="flex flex-wrap justify-center gap-1">
			<div className="border p-3 bg-slate-100 drop-shadow-sm max-w-xl grow mb-3">
				<Memorial />
			</div>
			<div className="w-1/4 max-w-xl grow">
				<TributeText />
			</div>
			<div className="max-w-xl grow">
				<TributeAudio />
			</div>
		</div>
	</main>
	<Footer />
</>

export default Memoriam;

