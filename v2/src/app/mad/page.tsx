import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LetterHeader from '@/components/LetterHeader';
import { dateDiff } from '@/lib/macros';
import { curt, terry } from '@/lib/defines';

const madness = [
	{
		image: 'Nbrody',
		caption: 'Mad Brody Culpepper',
		description: <>
	Most probably taken in the Neveda desert during
	the burningman festival.
	</>
	},
	{
		image: 'Onariver',
		caption: 'Mad Terence Walpole',
		description: <>
	Discoverer of &quot;Moscow Drug Club&quot;
	and Black Eg recording artist.
	</>
	},
	{
		email: 'syd@lamneth.com',
		image: 'kazoo',
		caption: 'Steven J Hall',
		description: <>
	Unfortunately, I don&apos;t have any JBCwear (but I want some - give me a
	source!), but here I am playing the kazoo to the D.R.I.N.K. trombone
	solo, while driving from New Orleans to Atlanta for the <Link href='/gigs/1998/May1.html'>5/1/98 Pat&Max show.</Link>
	I was annoying the hell out of the passenger/photographer.
	</>
	},
	{
		email: 'ed@dowcarter.com',
		image: 'fullhorror',
		caption: 'Dr Edward Carter',
		description: <>
	enclosed, one scan of me wearing a jazz-butcher (actually chris&apos; 
	jbc-list) t-shirt on &quot;Fifteen to One&quot;, a nationally-broadcast daytime 
	quiz show.
	This is the &quot;souvenir&quot; print they kindly send after your humiliation.
	Even if this borders on the tragic rather than the mad, I would like
	to point out that I qualify by virtue of being surrounded by the insane,
	the old and the unemployable (who, together, constitute the entire 
	audience and competitor pool).
	</>
	},
	{
		email: 'uncletoe@mindspring.com',
		image: 'lito',
		caption: 'Lito Vales',
		description: <>
	Here&apos;s a pic i found of me sporting the good ol&apos; &quot;condition blue&quot;
	t-shirt in my old painting studio.
	</>
	},
	{
		email: 'mercy@mail1.halcyon.com',
		image: 'roger_t',
		caption: 'Roger Pace',
		description: <>
	Still doesn&apos;t understand why British cats don&apos;t like good 
	&apos;ol american catnip, but believes if more muscicians were named fish 
	the world would be a better place for cats.
	</>
	},
	{
		email: 'mercy@mail1.halcyon.com',
		image: 'Fern_T',
		caption: 'Fern Frangooles',
		description: <>
	A young puppy still finding her music, and due to 
	indoctrination attempts by her people is considering the merits of JBC 
	records as chew toys.
	</>
	},
	{
		email: 'KENbmiller@aol.com',
		image: 'ken_m',
		caption: 'Ken Miller',
		description: <>
	After being off from work for 9 days straight and not shaving,
	generally being nutty with a cardboard box. There are some other ones
	involving a goat grazing on some trash, but you can&apos;t really see
	the JB shirt in those, so I didn&apos;t send them.
	</>
	},
	{
		email: 'monkeeman@msn.com',
		image: 'MadRob',
		caption: 'Robert Ferin',
		description: <>
	This picture depicts the very start of my maddening as I attempt
	to play my JBC vinyl in my CD player in my home-made JBC shirt.
	You don&apos;t want to know what happened next, it is much too disturbing.
	Please make a special note of my madness in that I am wearing vintage
	1970 &quot;high fidelity&quot; headphones.  I want my JBC!
	</>
	},
	{
		email: 'tdestes@ix.netcom.com',
		image: '467photo',
		caption: 'David Estes',
		description: <>
	My JBC leisure-wear once included a Condition Blue and a Big Planet Scary 
	Planet shirt but my equally 
	mad wife had a bad habit of maintaining her &quot;natural&quot; red hair while wearing 
	the above mentioned shirts.  
	This led to some anger on my part and the demise of the leisure wear.  The 
	photo attached was in the 
	press recently. If they only knew who the driver was the article would have 
	said: &quot;DO NOT ride this train, 
	DRIVER IS MAD!&quot;
	</>
	},
	{
		email: 'LoveDesign@excite.com',
		image: 'madJoe2',
		caption: 'Joseph Tampieri',
		description: <>
	This is a picture of my son Joseph, he is 11 months old and a great Jazz
	Butcher Fan. As you can see he is not wearing a JBC shirt because  they
	don&apos;t make them in his size, but we can honestly say we are enticing him out
	of his favourite hiding place (the laundry basket) with a copy of our
	&quot;Waiting for the love bus&quot; CD in one hand and the cry of &quot;Pat Fish is coming
	to get you!&quot; It always works. 
	</>
	}
]

const Mad = () => <>
	<Header section='mad' />
	<div className="etc">
		<LetterHeader title="Contest Invocation" />
		<blockquote className="annotation">
			Sitting around the house with {curt} and {terry} a week or so ago - we came up with a plot.
			<p />
			It occurred to us that we could liven up the site and have 
			ourselves a deep larrrf if we were to entice those who use the
			site to join in a little competition entitled
			<p />
			<b>&quot;HOW MAD ARE YOU?&quot;</b>
			<p />
			Folks send in photos of themselves, their loved ones, their family
			pets, whatever...being MAD in jbc leisurewear. The maddest ones
			win prizes, which we have prepared over here (home-made CDs of
			Jazz Butcher-type slush produced in the living room on a commission
			basis, basically).
			<p />
			It may be, of course, that Mad Brody Culpepper 
			and Mad Terence Walpole have already got this thing sown up.
			<p />
			Love, Pat,
			{dateDiff('1998-11-20 15:58:55')}
		</blockquote>

		<LetterHeader title="-- The Deranged --" />

		<div>
			{madness.map(({ email, image, caption, description } :
			{
				email?: string
				image: string
				caption: string
				description: React.ReactElement
			}, key: number): React.ReactNode => {
				const img = `images/mad/${image}`;
				return <LetterHeader key={key} title={caption}
					subhead=<>
						<Image
							className="border rounded-lg"
							src={`https://jazzbutcher.com/${img}_500.jpg`}
							height='500'
							width='500'
							alt={caption} />
						{description}
					</>
				/>
			})}
		</div>

		<LetterHeader title="Contest Results" />
		<blockquote className="annotation">
			Here, as promised, are the results of the Icelandic Jury.
			<p />
			Winners: Mad Brody Culpepper (it wuz always gonna happen...)
			<br/>
			Mad Doctor Ed (I often watch that show myself, Ed...)
			<br/>
			Mad Roger &quot;The Cat&quot; Pace (even if he cheated, any cat that work
			Adobe Photoshop all by himself deserves a prize!)
			<p />
			Each of the above should send in a mailing address. They will then receive
			a CD of soppy shite from the archives of NN1.
			<p />
			Honorable mentions to
			: Nearly-Mad Ken Miller (we love the old carboard-box-on-the-head
			routine round these parts) and Dave Estes, mad enough to travel from
			Olympia to Hamburg to see a bunch of old boys getting drunk and
			giggling. These gentlemen receive nothing until we get into the same
			room as them. We shall then buy them a beer and mock them ruthlessly
			(for that is the kind of guys we are).   Thanks to one and all who
			entered the competition and livened up our long winter evenings
			through the Magic Of The Internet.
			<p />
			Later. Love, Pat    xxx
			<br/>
			{dateDiff('1999-03-03 19:16:16')}
		</blockquote>
	</div>
	<Footer />
</>

export default Mad;
