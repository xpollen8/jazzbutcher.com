import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LetterHeader from '@/components/LetterHeader';
import { expand } from '@/lib/defines';

const Letter = () =>
<>
	<Header section='letters' title={ [ '13Apr94;;/letters/19940413', 'Gigs' ] } />
	<main>
		<LetterHeader title=<>After the <Link href="/letters/19930830/tour.html">European tour of early 1993</Link></>
			subhead="listed last time, we did this..." />
		<samp>
		<h2>1993</h2>
		<b>May</b>
		15 LONDON           Mean Fiddler Acoustic Room  {expand('pat')}
		<p />
		<b>August</b>
		<br />15 N&apos;HAMPTON        It&apos;s Got To Be Belgium      {expand('pat')}, {expand('dooj')}
		<br />27 SANTA MONICA     Congo Square                {expand('pat')}
		<br />29 LA JOLLA         Discafe                     {expand('pat')}
		<br /><p />
		<b>September</b>
		<br />3  LONDON           Mean Fiddler Acoustic Room  {expand('pat')}, {expand('dooj')}
		<br />9  LONDON           Powerhaus                   {expand('pat')}, {expand('dooj')} {expand('lix')}, {expand('paul')}
		<br />15 N&apos;HAMPTON        It&apos;s Got To Be Belgium      {expand('pat')}, {expand('dooj')}
		<p />
		<b>October</b>
		<br />20 N&apos;HAMPTON        It&apos;s Got To Be Belgium      {expand('pat')}, {expand('richard')}
		<br />22 N&apos;HAMPTON        The Rocking Horse           {expand('pat')}, {expand('dooj')} {expand('richard')}, {expand('paul')}
		<br />28 LONDON           Forum                       {expand('pat')}, {expand('green')}, {expand('paul')}
		<br />30 ST. QUENTIN      FESTIVALE DE DEVENIR        {expand('pat')}, {expand('dooj')} {expand('richard')}, {expand('paul')}
		<p />
		<b>November</b>
		<br />12 BREDA            Zinetti                     {expand('pat')}, {expand('dooj')} {expand('richard')}
		<br />13 COLMAR           Maison De La Jeunesse       {expand('pat')}, {expand('dooj')} {expand('richard')}
		<br />15 BESANCON         Tao&apos;s Blue                  {expand('pat')}, {expand('dooj')} {expand('richard')}
		<br />17 STRASBOURG       La Salamandre               {expand('pat')}, {expand('dooj')} {expand('richard')}
		<br />19 PARIS            Passage Du Nord-Ouest       {expand('pat')}, {expand('dooj')} {expand('richard')}
		<br />27 LONDON           The Venue                   {expand('pat')}, {expand('dooj')} {expand('richard')}
		<p />
		<b>December</b>
		<br />22 N&apos;HAMPTON        It&apos;s Got To Be Belgium      {expand('pat')}, {expand('dooj')}
		<br />23 N&apos;HAMPTON        The Rocking Horse           {expand('pat')}, {expand('dj')}
		<p />
		<h2>1994</h2>
		<p />
		<b>February</b>
		<br />1  HAMBURG          Logo                        {expand('pat')}, {expand('dooj')} {expand('nick')}, Curtis
		<br />2  BERLIN           Loft                        {expand('pat')}, {expand('dooj')} {expand('nick')}, Curtis
		<br />3  BREMEN           Roemer                      {expand('pat')}, {expand('dooj')} {expand('nick')}, Curtis
		<br />4  DORTMUND         Livestation                 {expand('pat')}, {expand('dooj')} {expand('nick')}, Curtis
		<br />5  BIELEFELD        Kamp                        {expand('pat')}, {expand('dooj')} {expand('nick')}, Curtis
		<br />6  FRANKFURT        Nahtleben                   {expand('pat')}, {expand('dooj')} {expand('nick')}, Curtis
		<br />8  GENEVA           L&apos;Usine                     {expand('pat')}, {expand('dooj')} {expand('nick')}, Curtis
		<br />9  FRIBOURG         Cafe Des Grandes Places     {expand('pat')}, {expand('dooj')} {expand('nick')}, Curtis
		<br />10 ZURICH           Palais Xtra                 {expand('pat')}, {expand('dooj')} {expand('nick')}, Curtis
		<br />11 BERN             I.S.C.                      {expand('pat')}, {expand('dooj')} {expand('nick')}, Curtis
		<br />12 MOUDON           Anciennes Prisons           {expand('pat')}, {expand('dooj')} {expand('nick')}, Curtis
		<br />15 TOULOUSE         Le Bikini                   {expand('pat')}, {expand('dooj')} {expand('nick')}, Curtis
		<br />16 CLERMONT-FERRAND Club 3000                   {expand('pat')}, {expand('dooj')} {expand('nick')}, Curtis
		<br />17 PARIS            Arapaho                     {expand('pat')}, {expand('dooj')} {expand('nick')}, Curtis
		<br />18 DORDRECHT        Odd Balls                   {expand('pat')}, {expand('dooj')} {expand('nick')}, Curtis
		<br />19 BREDA            Zinetti                     {expand('pat')}, {expand('dooj')} {expand('nick')}, Curtis
		<p />
		<b>March</b>
		<br />10 LONDON           Upstairs At The Garage      {expand('pat')}, {expand('dooj')} {expand('paul')}
		</samp>
	</main>
	<Footer />
</>

export default Letter;
