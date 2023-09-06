import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
	FIDDLER, dj, dooj, green, lix, nick, pat, paul, richard,
} from '@/lib/defines';

const Letter = () =>  {
	const title = <><Link href='/letters/19940413'>13Apr94</Link> | JBC DATES</>
	return ( <>
		<Header section='letters' title={title} />
		<div className="letter">
			After the <Link href="/letters/19930830/tour.html">European
			tour of early 1993</Link>, listed last time, we did this...
			<hr />
			<samp>
			<h2>1993</h2>
			<b>May</b>
			15 LONDON           {FIDDLER} Acoustic Room  {pat}
			<p />
			<b>August</b>
			<br />15 N&apos;HAMPTON        It&apos;s Got To Be Belgium      {pat}, {dooj}
			<br />27 SANTA MONICA     Congo Square                {pat}
			<br />29 LA JOLLA         Discafe                     {pat}
			<br /><p />
			<b>September</b>
			<br />3  LONDON           {FIDDLER} Acoustic Room  {pat}, {dooj}
			<br />9  LONDON           Powerhaus                   {pat}, {dooj} {lix}, {paul}
			<br />15 N&apos;HAMPTON        It&apos;s Got To Be Belgium      {pat}, {dooj}
			<p />
			<b>October</b>
			<br />20 N&apos;HAMPTON        It&apos;s Got To Be Belgium      {pat}, {richard}
			<br />22 N&apos;HAMPTON        The Rocking Horse           {pat}, {dooj} {richard}, {paul}
			<br />28 LONDON           Forum                       {pat}, {green}, {paul}
			<br />30 ST. QUENTIN      FESTIVALE DE DEVENIR        {pat}, {dooj} {richard}, {paul}
			<p />
			<b>November</b>
			<br />12 BREDA            Zinetti                     {pat}, {dooj} {richard}
			<br />13 COLMAR           Maison De La Jeunesse       {pat}, {dooj} {richard}
			<br />15 BESANCON         Tao&apos;s Blue                  {pat}, {dooj} {richard}
			<br />17 STRASBOURG       La Salamandre               {pat}, {dooj} {richard}
			<br />19 PARIS            Passage Du Nord-Ouest       {pat}, {dooj} {richard}
			<br />27 LONDON           The Venue                   {pat}, {dooj} {richard}
			<p />
			<b>December</b>
			<br />22 N&apos;HAMPTON        It&apos;s Got To Be Belgium      {pat}, {dooj}
			<br />23 N&apos;HAMPTON        The Rocking Horse           {pat}, {dj}
			<p />
			<h2>1994</h2>
			<p />
			<b>February</b>
			<br />1  HAMBURG          Logo                        {pat}, {dooj} {nick}, Curtis
			<br />2  BERLIN           Loft                        {pat}, {dooj} {nick}, Curtis
			<br />3  BREMEN           Roemer                      {pat}, {dooj} {nick}, Curtis
			<br />4  DORTMUND         Livestation                 {pat}, {dooj} {nick}, Curtis
			<br />5  BIELEFELD        Kamp                        {pat}, {dooj} {nick}, Curtis
			<br />6  FRANKFURT        Nahtleben                   {pat}, {dooj} {nick}, Curtis
			<br />8  GENEVA           L&apos;Usine                     {pat}, {dooj} {nick}, Curtis
			<br />9  FRIBOURG         Cafe Des Grandes Places     {pat}, {dooj} {nick}, Curtis
			<br />10 ZURICH           Palais Xtra                 {pat}, {dooj} {nick}, Curtis
			<br />11 BERN             I.S.C.                      {pat}, {dooj} {nick}, Curtis
			<br />12 MOUDON           Anciennes Prisons           {pat}, {dooj} {nick}, Curtis
			<br />15 TOULOUSE         Le Bikini                   {pat}, {dooj} {nick}, Curtis
			<br />16 CLERMONT-FERRAND Club 3000                   {pat}, {dooj} {nick}, Curtis
			<br />17 PARIS            Arapaho                     {pat}, {dooj} {nick}, Curtis
			<br />18 DORDRECHT        Odd Balls                   {pat}, {dooj} {nick}, Curtis
			<br />19 BREDA            Zinetti                     {pat}, {dooj} {nick}, Curtis
			<p />
			<b>March</b>
			<br />10 LONDON           Upstairs At The Garage      {pat}, {dooj} {paul}
			</samp>
		</div>
		<Footer />
	</>)
}
export default Letter;
