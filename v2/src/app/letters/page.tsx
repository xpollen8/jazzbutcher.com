import Image from 'next/image';
import MyLink from '@/components/MyLink';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Tag from '@/components/Tag';
import LetterHeader from '@/components/LetterHeader';
import MakeSimpleURI from '@/components/MakeSimpleURI';

export const toDavidWhittemore = {
	name: 'David Whittemore',
	description: `
				Just prior to gaining Internet access for himself, Pat would update the website&apos;s maintainer the old-fashioned way: through type-written correspondence.
				Pat's letters to David bootstrapped the jazzbutcher.com website contents.
	`,
	letters: [
		{ uri: "/letters/19900214", text: "1990-02-14", aux: "Cult Of The Basement" },
		{ uri: "/letters/19910201", text: "1991-02-01", aux: 'the "Hunter S. Thompson" letter' },
		{ uri: "/letters/19930830", text: "1993-08-30", aux: "The Albums, The Bands, LoveBus, 93 Euro Tour" },
		{ uri: "/letters/19931019", text: "1993-10-19", aux: "Eider, The Fall, News" },
		{ uri: "/letters/19940413", text: "1994-04-13", aux: "94 Euro Tour, Two Gigs, News, 93/94 Tours" },
		{ uri: "/press/94stop_press.html", text: "1994-05-20", aux: "Press Release" },
		{ uri: "/letters/19940624", text: "1994-06-24", aux: "All the gigs, Pat's Top 20 Gigs (circa)" },
		{ uri: "/letters/19940913", text: "1994-09-13", aux: "Gig reviews, jbc-list rebuttals, etc" },
		{ uri: "/letters/artwork.html", text: "1994", aux: "Sketches culled from the above letters" },
	],
};

export const toJamesDuval = {
	name: 'James Duval',
	letters: [
		{ uri: "/letters/JamesDuval/19960929", text: "1996-09-29" },
		{ uri: "/letters/JamesDuval/19970610", text: "1997-06-10" },
	],
};

const toAndrewBrooksbank = {
	name: 'Andrew Brooksbank',
	description: `coming soon`,
};

const toDavidJ = {
	name: 'David J',
	description: `coming soon`,
};

const letters = [
	toDavidWhittemore,
	toJamesDuval,
	toDavidJ,
	toAndrewBrooksbank,
];

export const letterMeta = (meta: any, key: number) => {
	const { name, description, letters } = meta;
	return (
		<div key={key} style={{ border: '1px solid black', background: '#efefef', padding: '.5em' }}>
			<h1 className='tag'>Letters to {name}</h1>
			{description}
			<p />
			{letters?.map(MakeSimpleURI)}
		</div>
	);
}

const Letters = () => 
<>
	<Header section='letters' />
	<main>
		<LetterHeader title="Pat Fish's letters to fans and friends"
			subhead=<>
			<div className="min-w-[50%]">
			Scans of some physical letters sent by Pat Fish.
			<div className="m-1">
				<center>
				<Image alt="[PatFishInfo]" width={289} height={139} src="https://v1.jazzbutcher.com/images/pat_sig.gif" />
				</center>
			</div>
			</div>
			</>
		/>
		<div style={{ display: 'grid', gap: '1em' }}>
			{letters.map(letterMeta)}
		</div>
	</main>
	<Footer />
</>

export default Letters;
