import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Tag from '../../components/Tag';
import MakeSimpleURI from '../../components/MakeSimpleURI';

import { max, del } from '../../lib/defines';

const ETC = () => <>
	<Header section='Etc' />
	<Tag>
		A repository of older Jazz Butcher website features
	</Tag>
	<blockquote>
		<p>
		The Jazz Butcher website first appeared online in February, 1994 - making it
		among the first 1,000 websites <b>in the world</b>. Over the years,
		an enormous amount of disparate information has accummulated here (some 4235 pages
		and counting!)
		</p>
		<p>
		But some material - no matter how lovely - has a shelf-life. Links to this historical and ephemeral information will be preserved here.
		</p>
	</blockquote>
		<div className="listItem">
	        <b>
		    <MakeSimpleURI uri='/articles' text="Mailing List" />
			</b> (1989-2003)
			<blockquote>
			The genesis of this Jazz Butcher website was the mailing list that {del} maintained.
			During the 15 years it was active, several hundred technically-inclined JBC fans kept in touch and posted
			thousands of email messages.
			</blockquote>
		</div>
		<div className="listItem">
	        <b>
			<MakeSimpleURI uri='/letters' text="Post From Pat" />
			</b> (1991-1994)
			<blockquote>
			Just prior to gaining Internet access for himself, Pat would update the
			website&apos;s maintainer the old-fashioned way: through type-written correspondence.
			<i>Post From Pat</i> covers news and answers to fan questions in 9 lengthy letters.
			An enjoyable read.
			</blockquote>
		</div>
		<div className="listItem">
			<b>
			<MakeSimpleURI uri='/mad' text="Are You Mad?" />
			</b> (1998)
			<blockquote>
			Pat was in posession of a ridiculous photo of a fan doing a ridiculous thing
			- while wearing a JBC t-shirt. He mused that others in compomising attair
			might compete to be top loon, if the call were put out on the JBC mailing list. So that&apos;s what happened.
			</blockquote>
		</div>
		<div className="listItem">
			<b>
			<MakeSimpleURI uri='/abcs_of_drugs' text="ABC's Of Drugs" />
			</b> (1998)
			<blockquote>
			<p>
			This is a trip.
			</p>
			<p>
			{max}, as a writer for Channel 4, produced a series on mind-altering drugs,
			which - due to its absolute brilliance - was mirrored here before it left the Channel 4 website.
			</p>
			</blockquote>
		</div>
		<div className="listItem">
			<b>
			<MakeSimpleURI uri='/tribute' text="Fan Tribute CD" />
			</b> (2000)
			<blockquote>
			Some brainiac on the old JBC mailing list decided that it would be fun to have the
			many JBC musician fans take a whack at doing a cover tune tribute album.
			The outcome is surprisingly not as cringe-worthy as it could have been.
			</blockquote>
		</div>
		<div className="listItem">
			<b>
			<MakeSimpleURI uri='/press/20040512_wilson_about.html' text="Wilson Explainer" />
			</b> (2002)
			<blockquote>
			Pat provides an early history for his side-project Wilson.
			</blockquote>
		</div>
		<div className="listItem">
			<b>
			<MakeSimpleURI uri='/trivia' text="JBC Trivia" />
			</b> (2002)
			<blockquote>
			{del} created a multiple-choice JBC trivial
			test. Take the challenge: is Emil still pig?
			</blockquote>
		</div>
		<div className="listItem">
			<b>
			<MakeSimpleURI uri='/links' text="Pat&apos;s Links" />
			</b> (2003)
			<blockquote>
			Net-side bands and whatnot that Pat wanted to highlight.
			</blockquote>
		</div>
		<div className="listItem">
			<b>
			<MakeSimpleURI uri='/tomhall' text="Tom Hall Memorial" />
			</b> (2003)
			<blockquote>
			The passing of Northampton-based folk music legend Tom Hall prompted many -
			Pat included - to pen heartfelt memorials.
			</blockquote>
		</div>
		<Footer />
</>

export default ETC;
