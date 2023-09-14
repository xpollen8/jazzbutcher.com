import Link from 'next/link';
import Image from 'next/image';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Credit } from '@/components/GenericWeb';
import Memorial from '@/components/Memorial';
import Tributes from '@/components/Tributes';

const Memoriam = () =>
<>
	<Header section='memoriam' />
	<div className="flex flex-wrap">
		<div className="text-center grow border p-3 m-3 bg-slate-100">
			<Memorial />
		</div>
		<div className="w-1/3 grow border bg-slate-50 pl-4 m-3">
			<Tributes />
		</div>
	</div>
	<Footer />
</>

export default Memoriam;

