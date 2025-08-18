import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { linkExternal } from '@/lib/utils';
import SectionOptions from '@/components/SectionOptions';
import LetterHeader from '@/components/LetterHeader';
import Contributions from '@/components/Contributions';

const Help = () => <>
	<Header section='help' />
	<main>
		<LetterHeader title="Conspire with us!" aux=<>
			<blockquote>
				The JBC archives are encouraging assistance in documenting the band&apos;s history.
				<p />
				We have long trawled the underbelly of the Internet looking for JBC memorabilia: gig posters,
				ticket stubs, setlists, photos from concerts, bootlegs, gig reviews, etc.
				We know there is more such material &quot;out there&quot;, hidden in basements, or
				already housed on hard drives.
				<p />
				Share with us what you have! You&apos;ll receive proper credit and your contribution
				will live on in infamy.
			</blockquote>

			<b>Contact us here:</b>
			<blockquote>
				Click the &quot;speech bubble&quot; on the top right of the screen.
				Describe what you have to share, and we&apos;ll get right back to you.
			</blockquote>

			<b>Contact us on github:</b>
			<blockquote>
				If you&apos;re slightly technical (or willing to learn), {linkExternal('https://github.com/xpollen8/jazzbutcher.com', 'please join our preservation efforts on github.com')}
				<p />
				Thanks! Together, we can fill in the gaps in the JBC story.
			</blockquote>
      </>
		/>
		<br />
		<SectionOptions section={`help`} />
		<br />
		<Contributions label={`Recent community contribution`} />
		</main>
	<Footer />
</>

export default Help;
