import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Letter = () =>  {
	const title = <><Link href='/letters/19930830'>30Aug93</Link> | Introduction</>
	return ( <>
		<Header section='letters' title={title} />
		<div className="letter">
		</div>
		<Footer />
	</>)
}

export default Letter;
/*
#define	intro.html
#live	if (getval(page) = intro.html)
	{headerLetters30Aug93(title=Introduction)}

	<center>
	A scan of this letter is <Link href="https://jazzbutcher.com/images/advert.gif">here</Link>..
	</center>
	<hr>
	I have <Link href="/letters/94Jun24/all_the_gigs.html">
	tapes of all manner of JBC live</Link>, tapes and recordings
	of radio sessions, all line-ups, all periods, all qualities
	of sound and performance.  I'll glady trade what you want,
	but I ONLY WANT the following recordings:
	<p>
	<ul>
	<li><Link href="/gigs/1993/Mar11.html"><b>Szene Wien</b>,
	Vienna{AU} - March 1993</Link>
	</li>
	<li><Link href="/gigs/1992/Jun5.html"><b>Roxy Theatre</b>,
	Hollywood, California - June 1992</Link>
	</li>
	<li><Link href="/gigs/1992/Jun13.html"><b>Liberty Lunch</b>,
	Austin, Texas - June 1992</Link>
	</li>
	<li><Link href="/gigs/1993/May15.html">{FIDDLER}
	Acoustic Room, London - May 1993</Link>
	</li>
	<li><Link href="/gigs/1992/Jun26.html"><b>Black Eg, Chicago
	Radio Session</b> - June 1992</Link>
	</li>
	<li><Link href="/gigs/1992/Jun3.html"><b>Sweetwater Saloon</b>,
	Los Osos, California - June 1992</Link>
	</li>
	</ul>
	<p>
	If you can help, let me know what you want.
	<p>
	<center>
	<Image width=243 height=111 alt="[signature]"
	src="https://jazzbutcher.com/images/19930830/93Aug30_sig.gif" />
	</center>

	{jbc_footer}
#live	endif
*/
