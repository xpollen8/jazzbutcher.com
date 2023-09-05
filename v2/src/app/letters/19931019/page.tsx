import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Letter = () =>
<>
	<Header section='letters' title='19Oct93'/>
	<div className="letter">
		<center>
		<b>DUCK EVERYBODY!  THE OLD FOOL&apos;s COMING IN LINE AGAIN...</b>
		<p />
			<Link href="/letters/19931019/intro"> Introduction</Link>
			<br />
			<Link href="/letters/19931019/eider"> Where Is Eider Man?</Link>
			<br />
			<Link href="/letters/19931019/starpoint">Starpoint Studio</Link>
			<br />
			<Link href="/letters/19931019/college"> College</Link>
			<br />
			<Link href="/letters/19931019/fall"> JBC -vs- The Fall</Link>
			<br />
			<Link href="/letters/19931019/post_eider"> More Maximiliana</Link>
			<br />
			<Link href="/letters/19931019/rockuptibles"> Les Rockuptibles</Link>
			<br />
			<Link href="/letters/19931019/chang"> President Chang</Link>
			<br />
			<Link href="/letters/19931019/news"> News</Link>
			<p />
			<Image width={351} height={163} alt="[signature]" src="https://jazzbutcher.com/images/19931019/93Oct19_sig.gif" />
		</center>
	</div>
	<Footer />
</>

export default Letter;
