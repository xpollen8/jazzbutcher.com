import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Tag from '@/components/Tag';
import MakeSimpleURI from '@/components/MakeSimpleURI';

import { max, del } from '@/lib/defines';

const ETC = () => <>
	<Header section='Etc' />
	<Tag>
		A repository of older Jazz Butcher website features
	</Tag>
	<div className="etc">
		The Jazz Butcher website first appeared online in February, 1994 - making it
		among the first 1,000 websites <b>in the world</b>. Over the years,
		an enormous amount of disparate information has accummulated here (some 4235 pages
		and counting!)
		<p />
		But some material - no matter how lovely - has a shelf-life. Links to this historical and ephemeral information will be preserved here.
		<p />
		<MakeSimpleURI uri='/articles' text="Mailing List" aux='(1989-2003)'>
			The genesis of this Jazz Butcher website was the mailing list that {del} maintained.
			During the 15 years it was active, several hundred technically-inclined JBC fans kept in touch and posted
			thousands of email messages.
		</MakeSimpleURI>
		<MakeSimpleURI uri='/letters' text="Post From Pat" aux='(1991-1994)'>
			Just prior to gaining Internet access for himself, Pat would update the
			website&apos;s maintainer the old-fashioned way: through type-written correspondence.
			<i>Post From Pat</i> covers news and answers to fan questions in 9 lengthy letters.
			An enjoyable read.
		</MakeSimpleURI>
		<MakeSimpleURI uri='/mad' text="Are You Mad?" aux='(1998)'>
			Pat was in posession of a ridiculous photo of a fan doing a ridiculous thing
			- while wearing a JBC t-shirt. He mused that others in compomising attair
			might compete to be top loon, if the call were put out on the JBC mailing list. So that&apos;s what happened.
		</MakeSimpleURI>
		<MakeSimpleURI uri='/abcs_of_drugs' text="ABC's Of Drugs" aux='(1998)'>
			This is a trip.
			{max}, as a writer for Channel 4, produced a series on mind-altering drugs,
			which - due to its absolute brilliance - was mirrored here before it left the Channel 4 website.
		</MakeSimpleURI>
		<MakeSimpleURI uri='/tribute' text="Fan Tribute CD" aux='(2000)'>
			Some brainiac on the old JBC mailing list decided that it would be fun to have the
			many JBC musician fans take a whack at doing a cover tune tribute album.
			The outcome is surprisingly not as cringe-worthy as it could have been.
		</MakeSimpleURI>
		<MakeSimpleURI uri='/press/20040512_wilson_about.html' text="Wilson Explainer" aux='(2002)'>
			Pat provides an early history for his side-project Wilson.
		</MakeSimpleURI>
		<MakeSimpleURI uri='/trivia' text="JBC Trivia" aux='(2002)'>
			{del} created a multiple-choice JBC trivial
			test. Take the challenge: is Emil still pig?
		</MakeSimpleURI>
		<MakeSimpleURI uri='/links' text="Pat&apos;s Links" aux='(2003)'>
			Net-side bands and whatnot that Pat wanted to highlight.
		</MakeSimpleURI>
		<MakeSimpleURI uri='/tomhall' text="Tom Hall Memorial" aux='(2003)'>
			The passing of Northampton-based folk music legend Tom Hall prompted many -
			Pat included - to pen heartfelt memorials.
		</MakeSimpleURI>
		</div>
	<Footer />
</>

export default ETC;
