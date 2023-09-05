import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Tag from '@/components/Tag';

const Artwork = () => 
<>
	<Header section='letters' title='Pat Fish Sketches' />
	<div className="letter">
		<h2>Scanned from:</h2>
		<p>
			<Link href="https://jazzbutcher.com/images//advert.gif">
				<Image width={195} height={223} alt="[advert]" src="https://jazzbutcher.com/images//sadvert.gif" />
			</Link>
		</p>
		<p>
				<Link href="https://jazzbutcher.com/images//notes.gif"> Happy Notes</Link> and
				<Link href="https://jazzbutcher.com/images//HappyNotes.gif"> processed</Link>
				<Link href="https://jazzbutcher.com/images//sky.gif"> Happy Clouds</Link>
				<br/><Link href="https://jazzbutcher.com/images//them.gif"> Happy Cassettes</Link>
				<br/><Link href="https://jazzbutcher.com/images//fish.gif"> Somber Fish</Link>
		</p>
	</div>
	<div className="letter">
		<h2>Scanned from:</h2>
		<p>
			<Link href="https://adjective.com/images/eg/pmurphy.jpg">
				<Image width={201} height={223} alt="[image]" src="https://adjective.com/images/eg/spmurphy.gif" />
			</Link>
		</p>
		
		<p>
				<Link href="https://adjective.com/images/eg/eg.gif"> Happy Eg(g)</Link>
				<br/>
				<Link href="https://adjective.com/images/eg/flag_bw.gif"> Tutto Possibile Flag</Link>
				and
				<Link href="https://adjective.com/images/eg/flag.gif">In Color</Link>
				<br/>
				<Link href="https://adjective.com/images/eg/blackeg.gif">&quot;The Black Eg&quot;</Link>
				and
				<Link href="https://adjective.com/images/eg/bigblackeg.gif">bigger</Link>
				<br/><Link href="https://adjective.com/images/eg/pmurphy.gif">Color Flag &amp; Eg</Link>
		</p>
	</div>
	<Footer />
</>

export default Artwork;

