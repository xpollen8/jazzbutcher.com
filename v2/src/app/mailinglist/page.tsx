import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LetterHeader from '@/components/LetterHeader';
import MakeSimpleURI from '@/components/MakeSimpleURI';

const Missing = () => 
<>
	<Header section="mailinglist" />
	<div className="etc">
		<LetterHeader title="The mailing list is on hiatus.." subhead="(c. 2003)" />
		<div className="flex flex-wrap justify-around">
			<div>
				{[...Array(15)].map((x: any, idx: number) => { 
					const year = 1989 + idx;
					if (year === 2000) return <>-- {year} ARCHIVES LOST --</>;
					return <MakeSimpleURI key={idx} uri={`/mailinglist/${year}`} text={year + ''} />
				})}
			</div>
			<div style={{ maxWidth: '50%' }}>
				<div style={{ textDecoration: 'line-through' }}>
				The Jazz Butcher Conspiracy mailing list has been in existence
				since October 1989 and has a few hundred subscribers.  Several
				subscribers are in contact with the band, and report here.
				<p />
				This is the place for up-to-date information.
				For your convenience, the archives are here in their entirety,
				although they can lag several months depending on how busy I am :-|
				</div>
			</div>
		</div>
	</div>
	<Footer />
</>

export default Missing;
