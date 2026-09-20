import Link from 'next/link';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MakeSimpleURI from '@/components/MakeSimpleURI';

const sets = [
  { uri: "gallery/photosets/mike_dyer", text: "Mike Dyer - 1986", aux: "Taken during interview in Canadian hotel room" },
	{ uri: "gallery/photosets/mick_mercer", text: "Mick Mercer - 1984", aux: "THE JAZZ BUTCHER BAND ON MANOEUVRES" },
]

const Photosets = () => 
<>
	<Header section="gallery" title="Interesting Photosets" />
	<main>
		{sets.map(MakeSimpleURI)}
	</main>
	<Footer />
</>

export default Photosets;
