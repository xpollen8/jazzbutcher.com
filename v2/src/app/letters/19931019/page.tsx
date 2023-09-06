import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MakeSimpleURI from '@/components/MakeSimpleURI';

const topics = [
	{ uri: "/letters/19931019/intro", text: "Introduction" },
	{ uri: "/letters/19931019/eider", text: "Where Is Eider Man?" },
	{ uri: "/letters/19931019/starpoint", text: "Starpoint Studio" },
	{ uri: "/letters/19931019/college", text: "College" },
	{ uri: "/letters/19931019/fall", text: "JBC -vs- The Fall" },
	{ uri: "/letters/19931019/post_eider", text: "More Maximiliana" },
	{ uri: "/letters/19931019/rockuptibles", text: "Les Rockuptibles" },
	{ uri: "/letters/19931019/chang", text: "President Chang" },
	{ uri: "/letters/19931019/news", text: "News" },
];

const Letter = () =>
<>
	<Header section='letters' title='19Oct93'/>
	<div className="etc">
		<center className="p-5">
		<b className="text-2xl">DUCK EVERYBODY!  THE OLD FOOL&apos;s COMING IN LINE AGAIN...</b>
		</center>
		<div className="flex flex-wrap justify-around">
			<div className="min-w-[50%]">
				{topics.map(MakeSimpleURI)}
			</div>
			<div className="mt-10">
				<Image width={351} height={163} alt="[signature]" src="https://jazzbutcher.com/images/19931019/93Oct19_sig.gif" />
			</div>
		</div>
	</div>
	<Footer />
</>

export default Letter;
