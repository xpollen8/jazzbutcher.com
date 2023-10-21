import Header from '@/components/Header';
import LetterHeader from '@/components/LetterHeader';
import SectionOptions from '@/components/SectionOptions';

const ETC = () => <>
	<Header section="etc" />
		<main className="etc">
			<LetterHeader title="A repository of older Jazz Butcher website features" aux=<>
			The Jazz Butcher website first appeared online in February, 1994 - making it
			among the first 1,000 websites <b>in the world</b>. Over the years,
			an enormous amount of information has accummulated here.
			<p />
			But some material - no matter how lovely - has a shelf-life.
			Links to this historical and ephemeral information will be preserved here.
			</>
			/>
			<SectionOptions section="etc" />
	</main>
</>

export default ETC;
