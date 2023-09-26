import LetterHeader from '@/components/LetterHeader';
import SectionOptions from '@/components/SectionOptions';

const ETC = (props) => <>
	<div className="etc">
		<LetterHeader title="A repository of older Jazz Butcher website features" subhead="(c. 2003)" />
		The Jazz Butcher website first appeared online in February, 1994 - making it
		among the first 1,000 websites <b>in the world</b>. Over the years,
		an enormous amount of disparate information has accummulated here (some 4235 pages
		and counting!)
		<p />
		But some material - no matter how lovely - has a shelf-life.
		Links to this historical and ephemeral information will be preserved here.
		<p />
		<SectionOptions section="etc" />
	</div>
</>

export default ETC;
