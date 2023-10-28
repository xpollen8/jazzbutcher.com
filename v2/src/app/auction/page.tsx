import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Tag from '@/components/Tag';
import LetterHeader from '@/components/LetterHeader';
import MakeSimpleURI from '@/components/MakeSimpleURI';
import { expand } from '@/lib/defines';
import PhotoSet from '@/components/PhotoSet';

const letter = [
	{ src: "/assets//images/199708_JBC_Auction/199708_JBC_Auction_1.jpg", alt: "page 1" },
	{ src: "/assets//images/199708_JBC_Auction/199708_JBC_Auction_2.jpg", alt: "page 2" },
	{ src: "/assets//images/199708_JBC_Auction/199708_JBC_Auction_3.jpg", alt: "page 3" },
	{ src: "/assets//images/199708_JBC_Auction/199708_JBC_Auction_4.jpg", alt: "page 4" },
	{ src: "/assets//images/199708_JBC_Auction/199708_JBC_Auction_5.jpg", alt: "page 5" },
];

const bidAddress = 'del@......ive.com';

const AuctionFinePrint = () => (<>
	<b style={{ fontSize: '1.5em' }} >The rules of the game.</b>
	<div style={{ fontSize: '.8em' }}>
	<ol>
	<li>
	• Bids will <b>only</b> be accepted via email to {bidAddress}
	{' '}<u>The subject line must contain the item number and the body
	of the message must contain the value of your bid</u> -
	click on the item number to send a bid.
	</li>
	<li>
	• A bid becomes the winning bid if it is the highest in value
	and a 1 week period (7 days) has passed since that bid was received.
	Winning bidders will be notified regarding the payment protocol.
	</li>
	<li>
	• The minimum bid on an item is $10 US.
	</li>
	<li>
	• Bid increments shall be in even dollar amounts -
	no nickel-ing &amp; dime-ing items to death!
	</li>
	<li>
	• Winning bids need to be paid within 2 weeks or the item
	goes back on the auction block and the bid is dropped back
	down to the previous high bid and the 1 week clock resets.
	</li>
	<li>
	• Once payment has been received, items will be shipped from the
	US within 2 weeks.  There is a flat $5 US shipping charge per item.
	</li>
	<li>
	• The right is reserved to discontinue the auction at any time.
	</li>
	<li>
	• {expand('pat')} himself has sanctioned this event.  Duh!
	</li>
	</ol>
	</div>
</>)

const Body = () => (<>
	<Tag>The Jazz Butcher&apos;s Virtual Lawn Sale</Tag>
	<div className="flex flex-wrap p-3">
		<div className="w-1/2">
			<b style={{ fontSize: '1.5em' }} >What&apos;s going on here?</b>
			<blockquote>
				&nbsp;&nbsp;&nbsp;&nbsp;At one time, the Butcher had some memorabilia sitting around his home which he was sick of tripping over. So, we decided to have an auction.
			</blockquote>
			<blockquote>
				&nbsp;&nbsp;&nbsp;&nbsp;These were unique pieces. Concert tapes were signed. Posters and shirts were the last of their kind..
			</blockquote>
			<blockquote>
				&nbsp;&nbsp;&nbsp;&nbsp;But that was then and the auction is now over. What remains is simply an accounting of the items and their final bids.
			</blockquote>
			<blockquote>
				&nbsp;&nbsp;&nbsp;&nbsp;Basically, you blew it by not arriving sooner.
				For the record, there were a total of 299 bids over a period of one and a half months in late 1997. The auction ended on Tue Dec 23 00:13:07 PST 1997
			</blockquote>
		</div>
		<div className="w-1/2">
			<AuctionFinePrint />
		</div>
	</div>
	{/*
	<td valign=top width=50%>
	<br>
	<br>
	<div align=right>
	<font size=-1 face=palatino color=#3333ff>
	<i>
	&quot;Where the hell else will you get your hands on this stuff?&quot;
	</i>
	</font>
	</div>
	</td>
	</tr>
	</table>
	<p>
	<table border={0} cellspacing={0} cellpadding=6 style={{ width: '100%', background: '#ffffff }}>
	{auctionCompilations}
	{auctionConcerts}
	{auctionShirts}
	{auctionPosters}
	{auctionSpacemen}
	{auctionRecords}
	</table>
	*/}
</>)

const Auction = () => 
<>
	<Header section='auction' />
	<main className="etc">
		<LetterHeader title="Waaaay back in 1997..." subhead="Pat wanted me to auction off a few of his things" />
		<Body />
		(the auction results are forthcoming - lotta old HTML to clean up)
		<PhotoSet title="Pat's Original Letter" photos={letter} />
	</main>
	<Footer />
</>

export default Auction;
/*
const auctionRecords = () => (
	<tr>
	<td bgcolor=#dadada colspan=4><img src="https://v1.jazzbutcher.com/images/trumpet.gif" width=49 height=23 align=top hspace=10><Tag>Vinyl Department</Tag></td>
	</tr>
	<tr><td colspan=4>
	<i>Let&apos;s just get this quite clear - test pressings do NOT have
	sleeves - instead all test pressings come in their white paper
	&quot;bags&quot;</i>
	</td></tr>
	<tr><td><b><nobr>Item #</nobr></b></td><td><b>Bid</b></td><td><b>Status</b></td><td><b>Description</b></td></tr>
	<tr>
#	$14	tgatah@nervm.nerdc.ufl.edu	Wed, 29 Oct 1997 19:46:03 -0500
#	$20	n3xye@velocity.net	Mon, 03 Nov 1997 16:03:49 -0500
#	$25	ivan@gunnison.com	Mon, 17 Nov 1997 10:32:29 -0800
#	$30	tfrazer@dmfg.com	Fri, 21 Nov 1997 16:33:27 -0800
	<td valign=top>V001</td>
	<td valign=top>$30</td>
	<td valign=top>SOLD<br>
	tfrazer @
	</td>
	<td valign=top>${fishco}
	Test pressing white-label album
	</td>
	</tr>
	<tr>
#	$15	dmartin@phoenix.isn.net	Thu, 30 Oct 1997 02:42:39 -0800
#	$20	jay@ossuary.com	Thu, 30 Oct 1997 01:46:59 -0800
#	$40	speedbump@reuben.org	Thu, 30 Oct 1997 11:35:28 -0400
	<td valign=top>V002</td>
	<td valign=top>$40</td>
	<td valign=top>SOLD<br>
	speedbump @
	</td>
	<td valign=top>${bus}
	Test pressing white-label album
	Small drawing of The Love Bus by the Butcher on the bag.
	</td>
	</tr>
	<tr>
#	$14	billp@sonic.net	Thu, 30 Oct 1997 17:35:41 -0800
#	$20	uncletoe@gis.net	Sun, 02 Nov 1997 22:53:59 -0400
	<td valign=top>V003</td>
	<td valign=top>$20</td>
	<td valign=top>SOLD<br>
	uncletoe @
	</td>
	<td valign=top>${ill}
	Test pressing white-label album
	<br>1 of 2
	</td>
	</tr>
	<tr>
#	$10	marc_chernoff@mcgraw-hill.com	Fri, 31 Oct 1997 17:33:05 -0600
#	$13	jay@ossuary.com	Fri, 31 Oct 1997 15:48:20 -0800
#	$15	uncletoe@gis.net	Sun, 02 Nov 1997 11:56:26 -0400
#	$20	billp@sonic.net	Sun, 2 Nov 1997 14:12:32 -0800
	<td valign=top>V004</td>
	<td valign=top>$20</td>
	<td valign=top>SOLD<br>
	billp @
	</td>
	<td valign=top>${ill}
	Test pressing white-label album
	<br>2 of 2
	</td>
	</tr>
)

const auctionSpacemen = () => (
	<tr>
	<td bgcolor=#dadada colspan=4><img src="https://v1.jazzbutcher.com/images/pyramid.gif" width=28 height=25 align=top hspace=10><Tag>Spacemen 3 Articles</Tag></td>
	</tr>
	<tr><td colspan=4>
	<i>
	All originals.  All perfect condition.
	</i>
	</td></tr>
	<tr><td><b><nobr>Item #</nobr></b></td><td><b>Bid</b></td><td><b>Status</b></td><td><b>Description</b></td></tr>
	<tr>
#	$10	xibalba@no-fi.com	Mon, 1 Dec 97 13:11:16 -0800
#	$15	anelson@ucolick.org	Thu, 04 Dec 1997 14:11:17 -0800
#	$16	xibalba@no-fi.com	Fri, 5 Dec 97 13:27:36 -0800
#	$17	anelson@ucolick.org	Fri, 05 Dec 1997 14:06:00 -0800
#	$20	wnerini@drf.co	Wed, 10 Dec 1997 16:51:58 -0700
#	$21	anelson@ucolick.org	Thu, 11 Dec 1997 11:24:14 -0800
#	$23	xibalba@no-fi.com	Fri, 12 Dec 97 13:53:00 -0800
#	$24	anelson@ucolick.org	Fri, 12 Dec 1997 14:07:50 -0800
	<td valign=top>S001</td>
	<td valign=top>$24</td>
	<td valign=top>SOLD<br>
	anelson @</td>
	<td valign=top rowspan=2>Original Glass Records A3 two colour poster for the
	Spacemen 3&apos;s <b>Transparent Radiation</b> single.  A rather
	beautiful design that will be familiar to Spacemen fans everywhere.
	Good condition.
	</td>
	</tr>
	<tr><td align=right colspan=3>
	<a href="https://v1.jazzbutcher.com/images/poster_spacemen_transparent.jpg"><img border=0
		src="https://v1.jazzbutcher.com/images/poster_spacemen_transparent.gif"
		width=99 height=138></a></td>
	</tr>
	<tr>
#	$10	xibalba@no-fi.com	Mon, 1 Dec 97 13:11:17 -0800
#	$15	mrnobody@ripco.com	Sat, 06 Dec 1997 22:19:25 -0600
#	$17	xibalba@no-fi.com	Fri, 12 Dec 97 13:52:58 -0800
	<td valign=top>S002</td>
	<td valign=top>$17</td>
	<td valign=top>SOLD<br>
	xibalba @</td>
	<td valign=top rowspan=2>Original Glass Records A3 poster in black on gold
	promoting the <b>Perfect Prescription</b> album, featuring
	band photo.  Good condition.
	</td>
	</tr>
	<tr><td align=right colspan=3>
	<a href="https://v1.jazzbutcher.com/images/poster_spacemen_perfect.jpg"><img border=0
		src="https://v1.jazzbutcher.com/images/poster_spacemen_perfect.gif"
		width=99 height=139></a></td>
	</tr>
	<tr>
#	$200	cutter@bronze.lcs.mit.edu
	<td valign=top>S003</td>
	<td valign=top>$200</td>
	<td valign=top>HOLD<br>
	cutter @</td>
	<td valign=top rowspan=2>Ultra rare and extremely lovely two colour poster
	from Bomp Records to promote the Spacemen&apos;s proposed U.S. tour in
	1989.  The tour never took place.  Pyramid design in blue on red with
	excellent band photo.  Numbered print made and signed by the artist
	(Mad Jon!)  and also autographed by Sonic.
	62 x 48 cm.  Very good condition.  #19 of 150.
	</td>
	</tr>
	<tr><td align=right colspan=3>
	<a href="https://v1.jazzbutcher.com/images/poster_spacemen3_tour89.jpg"><img border=0
		src="https://v1.jazzbutcher.com/images/poster_spacemen3_tour89.gif"
		width=99 height=150></a></td>
	</tr>
)

const auctionPosters = () => (
	<tr>
	<td bgcolor=#dadada colspan=4><Tag>Art and Posters</Tag></td>
	</tr>
	<tr><td colspan=4>
	<i>
	Many of these are one-of-a-kind items, either hand-done or otherwise
	highly obscure.  Impress your friends.  Scare your pets!
	</i>
	</td></tr>
	<tr>
#	$10	indigo_eyes@hotmail.com	Mon, 01 Dec 1997 16:09:54 GMT
#	$15	wnerini@drf.com	Mon, 01 Dec 1997 15:43:28 -0700
#	$20	cek@graphics.stanford.edu	Wed, 3 Dec 1997 18:52:37 -0800 (PST)
#	$40	gsm1224@ix.netcom.com	Wed, 03 Dec 1997 19:05:59 -0800
#	$45	cek@graphics.stanford.edu	Fri, 5 Dec 1997 12:46:16 -0800 (PST)
#	$50	gsm1224@ix.netcom.com	Fri, 05 Dec 1997 17:25:04 -0800
#	$55	cek@graphics.stanford.edu	Mon, 8 Dec 1997 10:43:20 -0800 (PST)
#	$75	Nagely@aol.com	Tue, 9 Dec 1997 00:39:06 EST
#	$100	rlyons@bigfoot.com	Tue, 09 Dec 1997 04:52:39 -0500
	<td valign=top>A001</td>
	<td valign=top>$100</td>
	<td valign=top>SOLD<br>
	rlyons @</td>
	<td valign=top rowspan=2>Original hand-drawn poster for the very first
	Jazz Butcher show, <a href="${jbc_gigs}/1982/Jun12.html">12th
	June 1982</a>.  Later hand spray-painted by the Butcher
	at a party.  36 x 26 cm.  Fairish condition, given the spray job!
	</td>
	</tr>
	<tr><td align=right colspan=3>
	<a href="https://v1.jazzbutcher.com/images/19820612/19820612_poster.jpg"><img border=0
		src="https://v1.jazzbutcher.com/images/19820612/19820612_poster_250.jpg"></a></td>
	</tr>
	<tr>
#	$15	rlyons@bigfoot.com	Wed, 29 Oct 1997 21:32:41 -0500
#	$20	n3xye@velocity.net	Mon, 03 Nov 1997 16:02:59 -0500
#	$30	speedbump@reuben.org	Tue, 04 Nov 1997 09:47:52 -0400
#	$50	rlyons@bigfoot.com	Thu, 13 Nov 1997 01:12:09 -0500
	<td valign=top>A002</td>
	<td valign=top>$50</td>
	<td valign=top>SOLD<br>
	rlyons @
	</td>
	<td valign=top rowspan=2>Glossy black and white poster on card for a JBC show
	<a href="${jbc_gigs}/1986/Jul26.html">at The Subway, Windsor,
	Ontario, 26th July 1986</a>. Mad &quotSpy -vs- Spy&quot; illustration,
	signed Martin Stevens.  44 x 28 cm.
	In good condition.
	<br>1 of 4
	</td>
	</tr>
	<tr><td align=right colspan=3>
	<a href="https://v1.jazzbutcher.com/images/19860726/19860726_poster.jpg"><img border=0
		src="https://v1.jazzbutcher.com/images/19860726/19860726_poster_250.jpg"></a></td>
	</tr>
	<tr>
#	$15	JV_SEATTLE@compuserve.com	Thu, 30 Oct 1997 02:51:46 -0500
#	$20	gsm1224@ix.netcom.com	Mon, 3 Nov 1997 15:36:44 -0600 (CST)
#	$30	lyons@iglou.com	Wed, 05 Nov 1997 03:13:00 -0500
#	$40	mrnobody@ripco.com	Wed, 12 Nov 1997 22:09:47 -0600
	<td valign=top>A003</td>
	<td valign=top>$40</td>
	<td valign=top>SOLD<br>
	mrnobody @
	</td>
	<td valign=top rowspan=2>Glossy black and white poster on card for a JBC show
	<a href="${jbc_gigs}/1986/Jul26.html">at The Subway, Windsor,
	Ontario, 26th July 1986</a>. Mad &quot;Spy -vs- Spy&quot; illustration,
	signed Martin Stevens.  44 x 28 cm.
	In good condition.
	<br>2 of 4
	</td>
	</tr>
	<tr><td align=right colspan=3>
	<a href="https://v1.jazzbutcher.com/images/19860726/19860726_poster.jpg"><img border=0
		src="https://v1.jazzbutcher.com/images/19860726/19860726_poster_250"></a></td>
	</tr>
	<tr>
#	$15	JV_SEATTLE@compuserve.com	Thu, 30 Oct 1997 02:51:46 -0500
#	$20	rlyons@bigfoot.com	Mon, 03 Nov 1997 19:10:09 -0500
#	$25	gsm1224@ix.netcom.com	Tue, 4 Nov 1997 18:42:52 -0600 (CST)
#	$30	cek@graphics.stanford.edu	Thu, 6 Nov 1997 23:00:35 -0800 (PST)
#	$40	pmb32@columbia.edu	Tue, 11 Nov 1997 09:51:23 -0500 (EST)
#	$45	cek@graphics.stanford.edu	Fri, 21 Nov 1997 11:10:56 -0800 (PST)
#	$50	pmb32@columbia.edu	Mon, 1 Dec 1997 01:08:12 -0500 (EST)
	<td valign=top>A004</td>
	<td valign=top>$50</td>
	<td valign=top>SOLD<br>
	pmb32 @
	</td>
	<td valign=top rowspan=2>Glossy black and white poster on card for a JBC show
	<a href="${jbc_gigs}/1986/Jul26.html">at The Subway, Windsor,
	Ontario, 26th July 1986</a>. Mad &quot;Spy -vs- Spy&quot; illustration,
	signed Martin Stevens.  44 x 28 cm.
	In good condition.
	<br>3 of 4
	</td>
	</tr>
	<tr><td align=right colspan=3>
	<a href="https://v1.jazzbutcher.com/images/19860726/19860726_poster.jpg"><img border=0
		src="https://v1.jazzbutcher.com/images/19860726/19860726_poster_250"></a></td>
	</tr>
	<tr>
#	$15	dburns2@calstatela.edu	Oct 30, 1997 19:58:33
#	$18	JReick01@teleweb.net	Thu, 30 Oct 1997 22:13:56 -0500
#	$20	mrnobody@ripco.com	Sat, 01 Nov 1997 20:15:24 -0600
#	$25	pmb32@columbia.edu	Wed, 5 Nov 1997 00:50:15 -0500 (EST)
#	$35	comstock@MIT.EDU	Thu, 06 Nov 1997 20:31:51 -0500
	<td valign=top>A005</td>
	<td valign=top>$35</td>
	<td valign=top>SOLD<br>
	comstock @
	</td>
	<td valign=top rowspan=2>Glossy black and white poster on card for a JBC show
	<a href="${jbc_gigs}/1986/Jul26.html">at The Subway, Windsor,
	Ontario, 26th July 1986</a>. Mad &quot;Spy -vs- Spy&quot; illustration,
	signed Martin Stevens.  44 x 28 cm.
	In good condition.
	<br>4 of 4
	</td>
	</tr>
	<tr><td align=right colspan=3>
	<a href="https://v1.jazzbutcher.com/images/19860726/19860726_poster.jpg"><img border=0
		src="https://v1.jazzbutcher.com/images/19860726/19860726_poster_250"></a></td>
	</tr>
	<tr>
#	$35	ZineGreen@aol.com	Sat, 29 Nov 1997 19:42:40 -0500 (EST)
	<td valign=top>A006</td>
	<td valign=top>$35</td>
	<td valign=top>SOLD<br>
	ZineGreen @</td>
	<td valign=top>Promotional glossy colour poster for ${blue} album,
	featuring the front cover design.  96 x 48 cm.  Folded, but otherwise
	in immaculate condition.
	</td>
	</tr>
	<tr>
#	$15	fred@toastie.legend.co.uk	Wed, 3 Dec 1997 08:06:08 +0000
#	$15	wnerini@ww-web.com	Wed, 10 Dec 1997 00:48:58 -0700
#	$18	fred@toastie.legend.co.uk	Wed, 10 Dec 1997 07:56:21 +0000
#	$20	dixiecluck@hotmail.com	Sat, 13 Dec 1997 14:51:32 EST
#	$22	fred@toastie.legend.co.uk	Sun, 14 Dec 1997 13:48:32 +0000
	<td valign=top>A007</td>
	<td valign=top>$22</td>
	<td valign=top>SOLD<br>
	fred @</td>
	<td valign=top rowspan=2>Black and white pencil sketch of The Butcher about
	the time of ${fishco}, by the look of it.  Signed &quot;Russel
	&apos;92&quot; and originating in Canada.  44 x 28 cm.  Good condition.
	</td>
	</tr>
	<tr><td align=right colspan=3>
	<a href="https://v1.jazzbutcher.com/images/poster_pat_russel.jpg"><img border=0
		src="https://v1.jazzbutcher.com/images/poster_pat_russel.gif"
		width=99 height=148></a></td>
	</tr>
	<tr>
#	$10	indigo_eyes@hotmail.com	Mon, 01 Dec 1997 18:17:13 GMT
#	$20	gsm1224@ix.netcom.com	Wed, 03 Dec 1997 19:07:34 -0800
	<td valign=top>A008</td>
	<td valign=top>$20</td>
	<td valign=top>HOLD<br>
	gsm1224 @</td>
	<td valign=top rowspan=2>Black and white poster
	for &quot;The Happening&quot;
	<a href="${jbc_gigs}/1984/Sep1.html">at Northampton Art
	Centre, 1st September 1984</a>, featuring the Butcher, along with
	various local artists, loonies and members of ${haus}.
	40 x 28 cm.  Slightly battered but intact and unblemished,
	so fair condition.
	</td>
	</tr>
	<tr><td align=right colspan=3>
	<a href="https://v1.jazzbutcher.com/images/19840901/19840901_poster.jpg"><img border=0
		src="https://v1.jazzbutcher.com/images/19840901/19840901_poster_250.jpg"></a></td>
	</tr>
	<tr>
#	$25	wnerini@drf.com	Sun, 30 Nov 1997 11:17:10 -0700
#	$35	mwright@pro-ns.net	Sun, 30 Nov 1997 22:41:18 -0600
#	$40	wnerini@drf.com	Mon, 01 Dec 1997 12:05:09 -0700
#	$50	rlyons@bigfoot.com	Mon, 01 Dec 1997 15:59:06 -0500
#	$55	wnerini@drf.com	Mon, 01 Dec 1997 15:43:47 -0700
#	$60	rlyons@bigfoot.com	Mon, 01 Dec 1997 20:14:42 -0500
#	$65	wnerini@drf.com	Tue, 2 Dec 1997 01:05:32 -0700
#	$75	rlyons@bigfoot.com	Tue, 02 Dec 1997 13:51:36 -0500
#	$100	gsm1224@ix.netcom.com	Wed, 03 Dec 1997 19:08:11 -0800
#	$105	cek@graphics.stanford.edu	Tue, 9 Dec 1997 09:32:52 -0800 (PST)
	<td valign=top>A009</td>
	<td valign=top>$105</td>
	<td valign=top>SOLD<br>
	cek @</td>
	<td valign=top rowspan=2>Original black and white Glass Records promotional poster
	for the ${bath} album, featuring the cover photo and the exhortation
	to &quot;Wig Out To The Butcher Beat&quot;.  Rather battered and stained,
	but in one piece and where the hell else will you get your hands on one?
	42 x 30 cm.
	</td>
	</tr>
	<tr><td align=right colspan=3>
	<a href="https://v1.jazzbutcher.com/images/poster_bath.jpg"><img border=0
		src="https://v1.jazzbutcher.com/images/poster_bath.gif"
		width=99 height=142></a></td>
	</tr>
	<tr>
#	$10	dallant@onramp.net	Sun, 30 Nov 1997 22:00:42 -0600
#	$15	lschupra@erim-int.com	Mon, 01 Dec 1997 17:34:02 -0500
#	$20	tfrazer@dmfg.com	Tue, 02 Dec 1997 22:40:33 -0800
#	$25	cek@graphics.stanford.edu	Wed, 3 Dec 1997 18:51:42 -0800 (PST)
#	$30	tfrazer@dmfg.com	Wed, 03 Dec 1997 20:45:05 -0800
#	$35	cek@graphics.stanford.edu	Fri, 5 Dec 1997 12:45:30 -0800 (PST)
#	$40	billp@sonic.net	Sat, 6 Dec 1997 01:53:49 -0800
#	$45	lschupra@erim-int.com	Tue, 09 Dec 1997 12:56:04 -0500
#	$50	dallant@onramp.net	Wed, 10 Dec 1997 09:27:03 -0800
	<td valign=top>A010</td>
	<td valign=top>$50</td>
	<td valign=top>SOLD<br>
	dallant @</td>
	<td valign=top rowspan=2>Rather beautiful two colour card poster for the concert
	<a href="${jbc_gigs}/1996/Aug20.html">in Sa Pobla, Mallorca in August
	1996</a> after the band has split up!  See the J.B.C. receive
	sponsorship from Air Iberia, Beck&apos;s Beer and the local government,
	among others.  40 x 34 cm.  Pristine condition.
	</td>
	</tr>
	<tr><td align=right colspan=3>
	<a href="https://v1.jazzbutcher.com/images/19960820/19960820_poster.jpg"><img border=0
		src="https://v1.jazzbutcher.com/images/19960820/19960820_poster_250.jpg"></a></td>
	</tr>
#	<tr>
#	<td valign=top><a href="mailto:${bidAddress}?subject=Bid on A011">A011</a></td>
#	<td valign=top>$10</td>
#	<td valign=top>OPEN</td>
#	<td valign=top>Rather beautiful two colour card poster for the concert
#	<a href="${jbc_gigs}/1996/Aug20.html">in Sa Pobla, Mallorca in August
#	1996</a> after the band has split up!  See the J.B.C. receive
#	sponsorship from Air Iberia, Beck&apos;s Beer and the local government,
#	among others.  40 x 34 cm.  Pristine condition.
#	<br>2 of 2.
#	</td>
#	</tr>
	<tr>
#	$10	dallant@onramp.net	Sun, 30 Nov 1997 22:01:43 -0600
#	$15	wnerini@drf.com	Mon, 01 Dec 1997 12:05:44 -0700
#	$20	gsm1224@ix.netcom.com	Wed, 03 Dec 1997 19:09:23 -0800
#	$25	wnerini@drf.com	Thu, 4 Dec 1997 14:01:43 -0700
	<td valign=top>A012</td>
	<td valign=top>$25</td>
	<td valign=top>SOLD<br>
	wnerini @</td>
	<td valign=top>Enormous yellow and blue poster for a season of
	London club bands in Hamburg nightclub &quot;${PO}&quot; in December
	1984.  These were the first two dates that the J.B.C. ever played in
	Germany.  This has been on the Butcher&apos;s wall for a long time, and
	shows signs of Blu-Tak damage and a few blemishes, but it
	remains a striking poster.  84 x 60 cm.  Dodgy condition.
	</td>
	</tr>
	<tr>
#	$10	gsm1224@ix.netcom.com	Wed, 03 Dec 1997 19:10:33 -0800
	<td valign=top>A013</td>
	<td valign=top>$10</td>
	<td valign=top>HOLD<br>
	gsm1224 @</td>
	<td valign=top rowspan=2>A4 black and white poster hand-printed by Sonic of
	Spacemen 3/Spectrum to promote a Butcher
	<a href="${jbc_gigs}/1994/Jun24.html">show at a place in Rugby</a>
	called
	(I shit you not...) The Flying Teapot.  A small and messy poster in
	fair-to-grubby condition, but it is an original.
	</td>
	</tr>
	<tr><td align=right colspan=3>
	<a href="https://v1.jazzbutcher.com/images/19940624/19940624_poster2.jpg"><img border=0
		src="https://v1.jazzbutcher.com/images/19940624/19940624_poster2_250.jpg"></a></td>
	</tr>
	<tr>
#	$10	gsm1224@ix.netcom.com	Wed, 03 Dec 1997 19:10:48 -0800
#	$15	wnerini@drf.com	Thu, 4 Dec 1997 14:03:04 -0700
#	$20	Swishmail@aol.com	Tue, 9 Dec 1997 12:20:30 EST
#	$30	cek@graphics.stanford.edu	Tue, 9 Dec 1997 09:57:12 -0800 (PST)
#	$32	wnerini@drf.com	Tue, 9 Dec 1997 20:10:26 -0700
#	$40	Ablueman@aol.com	Wed, 10 Dec 1997 02:15:55 EST
#	$45	dallant@onramp.net	Wed, 10 Dec 1997 09:26:04 -0800
#	$50	wnerini@drf.com	Wed, 10 Dec 1997 13:35:29 -0700
#	$55	Ablueman@aol.com	Wed, 10 Dec 1997 20:07:47 EST
	<td valign=top>A014</td>
	<td valign=top>$55</td>
	<td valign=top>SOLD<br>
	Ablueman @</td>
	<td valign=top rowspan=2>A full colour poster for the same show
	<a href="${jbc_gigs}/1994/Jun24.html">(24th June 1994)</a>
	designed (and you&apos;ll think I&apos;m making this up, but it&apos;s true...)
	by Spacemen 3/Darkside bassist, Pete Baine.  36 x 40 cm in slightly
	ropey condition.
	</td>
	</tr>
	<tr><td align=right colspan=3>
	<a href="https://v1.jazzbutcher.com/images/19940624/19940624_poster.jpg"><img border=0
		src="https://v1.jazzbutcher.com/images/19940624/19940624_poster_250.jpg"></a></td>
	</tr>
	<tr>
#	$13	mercy_@hotmail.co	Wed, 03 Dec 1997 18:56:08 -0800
#	$15	gsm1224@ix.netcom.com	Wed, 03 Dec 1997 19:10:14 -0800
	<td valign=top>A015</td>
	<td valign=top>$15</td>
	<td valign=top>HOLD<br>
	gsm1224 @</td>
	<td valign=top rowspan=2>Glossy B&amp;W blow-up reprint of an article
	from the 6 November 1982 Mercury And Herald.  Tells the tale
	of the <a href="${jbc_gigs}/1982/Nov1.html">time the Jazz
	Butcher opened for Bauhaus</a>.  Lots of photos on cardstock.
	</td>
	</tr>
	<tr><td align=right colspan=3>
	<a href="https://v1.jazzbutcher.com/images/19821101/19821101_poster.jpg"><img border=0
		src="https://v1.jazzbutcher.com/images/19821101/19821101_poster_250.jpg"></a></td>
	</tr>
)

const auctionShirts = () => (
	<tr>
	<td bgcolor=#dadada colspan=4><Tag>Conspiratorial Leisure Wear</Tag></td>
	</tr>
	<tr><td colspan=4>
	<i>
	We only have a very few items here, so be quick and pay plenty.  Ha!
	</i>
	</td></tr>
	<tr><td><b><nobr>Item #</nobr></b></td><td><b>Bid</b></td><td><b>Status</b></td><td><b>Description</b></td></tr>
	<tr>
#	$15	megli@simslevel1.com	Wed, 5 Nov 1997 16:45:36 -0500
#	$20	a-erinly@microsoft.com	Thu, 6 Nov 1997 16:52:50 -0800
#	$25	megli@simslevel1.co	Fri, 7 Nov 1997 22:17:25 -0500
#	NONONONO
#	$27	megli@simslevel1.com	Wed, 19 Nov 1997 14:12:21 -0500
#	$29	megli@simslevel1.com	Wed, 19 Nov 1997 14:12:21 -0500
#	$31	megli@simslevel1.com	Sat, 29 Nov 1997 21:08:07 -0500
	<td valign=top>L001</td>
	<td valign=top>$32</td>
	<td valign=top>SOLD<br>
	tpip @
	</td>
	<td valign=top>Short sleeved t-shirt. ${planet} album cover.
	No official writing on it, but it has been signed by Julie,
	the Bimbo From Hell while the Butcher was wearing it at a gig
	<a href="${jbc_gigs}/1989/Oct14.html">at the Camdem in October 1989</a>.
	<br>Size L
	</td>
	</tr>
	<tr>
#	$15	billp@sonic.net	Sat, 1 Nov 1997 23:24:14 -0800
	<td valign=top>L002</td>
	<td valign=top>$15</td>
	<td valign=top>SOLD<br>
	billp @
	</td>
	<td valign=top>Short sleeved t-shirt. ${planet} album cover.
	No writing and no autographs.
	<br>Size XL
	</td>
	</tr>
	<tr>
#	$20	nora@toastie.legend.co.uk	Thu, 30 Oct 1997 08:37:50 +0000
#	$25	cek@graphics.stanford.edu	Thu, 6 Nov 1997 16:44:27 -0800 (PST)
#	$27	fred@toastie.legend.co.uk	Sat, 8 Nov 1997 21:49:18 +0000
#	$30	cek@graphics.stanford.edu	Mon, 10 Nov 1997 14:04:28 -0800 (PST)
#	$32	fred@toastie.legend.co.uk	Tue, 11 Nov 1997 08:16:03 +0000
#	$35	cek@graphics.stanford.edu	Thu, 13 Nov 1997 15:55:54 -0800 (PST)
#	$37	fred@toastie.legend.co.uk	Fri, 14 Nov 1997 07:57:02 +0000
#	$45	mwright@pro-ns.net	Wed, 19 Nov 1997 12:21:29 -0600
#	$55	ZineGreen@aol.com	Sat, 29 Nov 1997 19:39:17 -0500 (EST)
#	$65	mwright@pro-ns.net	Sun, 30 Nov 1997 22:48:11 -0600
#	$70	ZineGreen@aol.com	Sat, 6 Dec 1997 18:08:19 EST
	<td valign=top>L003</td>
	<td valign=top>$70</td>
	<td valign=top>SOLD<br>
	ZineGreen @
	</td>
	<td valign=top>Long sleeved white hooded top featuring the ${newinv}
	trumpet design in yellow and a &quot;hand-written&quot;-style
	Jazz Butcher logo in red.
	<br>1 of 2
	<br>Size XL
	</td>
	</tr>
	<tr>
#	$15	wnerini@drf.com	Fri, 31 Oct 1997 10:41:05 -0700
#	$20	JReick01@teleweb.net	Sun, 02 Nov 1997 10:52:21 -0500
	<td valign=top>L004</td>
	<td valign=top>$20</td>
	<td valign=top>SOLD<br>
	JReick01 @
	</td>
	<td valign=top>Long sleeved white hooded top featuring the ${newinv}
	trumpet design in yellow and a &quot;hand-written&quot;-style
	Jazz Butcher logo in red. Slight stain on shoulder.
	<br>2 of 2
	<br>Size XL
	</td>
	</tr>
	<tr>
#	$13	lonestar13@earthlink.net	Fri, 31 Oct 1997 12:22:49 +0000
#	$14	JOIAIN@aol.com	Sat, 1 Nov 1997 18:40:32 -0500 (EST)
#	$20	n3xye@velocity.net	Mon, 03 Nov 1997 16:02:23 -0500
#	$30	albri006@gold.tc.umn.edu	Tue, 4 Nov 1997 11:51:56 -0600
#	$33	lonestar13@earthlink.net	Rachel & Marco Mire
#	$35	albri006@gold.tc.umn.edu	Wed, 5 Nov 1997 11:16:43 -0600
	<td valign=top>L005</td>
	<td valign=top>$35</td>
	<td valign=top>SOLD<br>
	albri006 @
	</td>
	<td valign=top>A white short sleeved t-shirt featuring a black and
	white reproduction of the ${mitch} shot of Pat and Kizzy with
	the cars from ${fishco}.  This one of eleven shirts with which
	the Butcher&apos;s missus was arrested at the Canadian border in 1988.
	Spookily, it features the legend &quot;Fishpower USA 88&quot;
	<br>Size XL
	</td>
	</tr>
	<tr>
#	$15	wnerini@drf.com	Fri, 07 Nov 1997 13:40:57 -0700
	<td valign=top>L006</td>
	<td valign=top>$15</td>
	<td valign=top>SOLD<br>
	wnerini @
	</td>
	<td valign=top>An off-white, oft-washed shirt given to the Butcher by
	the Jersey Posse in 1989, short sleeved and featuring the legend
	&quot;From Hoboken To Atlanta&quot; (it should have said &quot;the
	hard way&quot; - ed.) and featuring beautiful decorations on the back,
	including the names of all involved.  Which, in an odd way, is why the
	Butcher is parting with it to the highest bidder.
	<br>Size XL
	</td>
	</tr>
)

const auctionCompilations = () => (<>
	<tr>
	<td bgcolor=#dadada colspan=4><img src="https://v1.jazzbutcher.com/images/cassettes.gif" align=middle hspace=10 width=47 height=40><Tag>Compilation Tapes</Tag></td>
	</tr>
	<tr><td colspan=4>
	<i>
	This section features on-demand compilation tapes culled
	from their master copies - sound quality is excellent on all of these.
	The price per tape is a fixed $15US, which includes shipping.
	<b>Place your order, and we make you a copy - got it?</b>
	</i>
	</td></tr>
	<tr>
#	+ sonia@primenet.com
#	gsm1224@ix.netcom.com
#	+ speedbump@reuben.org
#	jnicpon@juno.com
#	- mwright@pro-ns.net (Brian Kelly)
#	+ wnerini@drf.com
#	+ Relaxpanda@aol.com
#	+ comstock@MIT.EDU
#	+ monkeeman@email.msn.com
#	+ jlehman3@uni-goettingen.de
#	+ dave_tilley@mac.sas.com
#	+ Jim.Davies@comlab.ox.ac.uk
	<td valign=top><a href="mailto:${bidAddress}?subject=Purchase a copy of C001 for $15">C001</a></td>
	<td valign=top>$15</td>
	<td>&nbsp;</td>
	<td valign=top><b>Acoustic On The Radio</b>
	<br>Top quality sound on this compilation of three different radio
	sessions:
# KCRW #	<br><b>1</b>) ${pat} and ${green} live on <a href="${jbc_gigs}/1990/Nov24.html">KCRW 24Nov90</a>
	<br><b>2</b>) ${pat} solo on 91X, <a href="${jbc_gigs}/1993/Aug29_1200.html">San Diego 29Aug93</a>: songs and interview.
	<br><b>3</b>) ${pat} and ${pete} on France <a href="${jbc_gigs}/1993/Feb15.html">Inter, February 93</a>: songs and an interview in French.
	<br>~90 minutes
	</td>
	</tr>
	<tr>
#	+ sonia@primenet.com
#	+ uncletoe@gis.net
#	- mwright@pro-ns.net (Brian Kelly)
#	+ wnerini@drf.com
#	+ Relaxpanda@aol.com
#	istearns@nmcourt.fed.us
#	+ rlyons@bigfoot.com
#	+ Leisa.ReFalo@mci.com
#	+ dave_tilley@mac.sas.com
#	+ Jim.Davies@comlab.ox.ac.uk
#	+ monkeeman@email.msn.com
#	jhg@buffnet.net
	<td valign=top><a href="mailto:${bidAddress}?subject=Purchase a copy of C002 for $15">C002</a><br />Pat&apos;s Pick</td>
	<td valign=top>$15</td>
	<td>&nbsp;</td>
	<td valign=top><b>This Is Gothic Techno Folk</b>
	<br>Two concerts from 1991, fair sound quality on both sets.
	<br><b>1</b>) ${pat}, ${pete} and ${green} at The Mean Fiddler, London <a href="${jbc_gigs}/1991/Jun18.html">18Jun91</a>.
	<br><b>2</b>) ${pat}, ${pete} and, ${dooj} and a drum machine at Maxim Gorky, Stuttgart <a href="${jbc_gigs}/1991/Dec9.html">10Dec91</a>.
	</td>
	</tr>
	<tr>
#	+ sonia@primenet.com
#	+ wnerini@drf.com
#	dburns2@calstatela.edu
#	JOIAIN@aol.com
#	+ JReick01@teleweb.net
#	+ uncletoe@gis.net
#	seabo002@gold.tc.umn.edu
#	- gsm1224@ix.netcom.com
#	pmb32@columbia.edu
#	+ albri006@gold.tc.umn.edu
#	jnicpon@juno.com
#	- mwright@pro-ns.net (Brian Kelly)
#	+ Relaxpanda@aol.com
#	istearns@nmcourt.fed.us
#	+ Ed.Doxtator@ssa.co.uk
#	+ rlyons@bigfoot.com
#	+ Leisa.ReFalo@mci.com
#	+ dave_tilley@mac.sas.com
#	+ Jim.Davies@comlab.ox.ac.uk
#	+ jlehman3@uni-goettingen.de
#	+ monkeeman@email.msn.com
	<td valign=top><a href="mailto:${bidAddress}?subject=Purchase a copy of C003 for $15">C003</a><br />Pat&apos;s Pick</td>
	<td valign=top>$15</td>
	<td>
	<a href="https://v1.jazzbutcher.com/images/19931028/pass_28Oct93.jpg"><img
		src="https://v1.jazzbutcher.com/images/19931028/pass_28Oct93.gif" 
		border={0} width=75 height=113></a>
	</td>
	<td valign=top><b>Acoustic In The Dark</b>
	<br>A compilation of two shows from the winter of 1993.
	<br><b>1</b>) ${pat}, ${pete} and ${paul} supporting John Cale at The Forum, London <a href="${jbc_gigs}/1993/Oct28.html">28Oct93</a> ~33min
	<br><b>2</b>) ${pat} and ${dj}, performing at a Christmas party in Northampton <a href="${jbc_gigs}/1993/Dec23.html">23Dec93.</a> ~25min
	</td>
	</tr>
</>)

const auctionConcerts = () => (
	<tr>
	<td bgcolor=#dadada align=left colspan=4><img src="https://v1.jazzbutcher.com/images/cassettes.gif" align=middle hspace=10 width=47 height=40><Tag>Concert Tapes</Tag></td>
	</tr>
	<tr><td colspan=4>
	<i>
	Unless otherwise noted, cassettes includes Butcher-handlettered
	inserts and are signed. These were Pat&apos;s personal copies of these
	shows..
	</i>
	</td></tr>
	<tr><td><b><nobr>Item #</nobr></b></td><td><b>Bid</b></td><td><b>Status</b></td><td><b>Description</b></td></tr>
	<tr>
#	$20	sonia@primenet.com	Wed, 29 Oct 1997 21:01:15 -0500
#	$25	JReick01@teleweb.net	Sun, 02 Nov 1997 11:19:24 -0500
#	$40	gsm1224@ix.netcom.com	Mon, 3 Nov 1997 15:32:57 -0600 (CST)
	<td valign=top>T001</td>
	<td valign=top>$40</td>
	<td valign=top>HOLD<br>
	gsm1224 @
	</td>
	<td valign=top><a href="${jbc_gigs}/1984/Dec8.html"><b>${PO} : 8Dec84</b></a>
	<br>Sound Quality: 6 Performance: 7
	<br>${pat}, ${max}, ${dj}, ${owen}
	<br>B/W excerpt from <a href="${jbc_gigs}/1986/Mar7.html">Goldsmith&apos;s College : 7Mar86</a>.
	</td>
	</tr>
	<tr>
#	$20	dburns2@calstatela.edu	Oct 30, 1997 19:52:55
#	$25	wnerini@drf.com	Thu, 6 Nov 1997 10:21:44 -0700
#	$30	dburns2@calstatela.edu	Nov 13, 1997 20:25:05
#	$35	wnerini@drf.com	Fri, 14 Nov 1997 15:04:59 -0700
#	$40	indigo_eyes@hotmail.com	Tue, 25 Nov 1997 15:40:11 GMT
#	$45	wnerini@drf.com	Tue, 25 Nov 1997 10:38:16 -0700
#	$50	indigo_eyes@hotmail.com	Tue, 25 Nov 1997 18:00:43 GMT
#	$55	wnerini@drf.com	Tue, 25 Nov 1997 14:41:26 -0700
	<td valign=top>T002</td>
	<td valign=top>$55</td>
	<td valign=top>SOLD<br>
	wnerini @
	</td>
	<td valign=top><a href="${jbc_gigs}/1985/Apr25.html"><b>Melkweg, Amsterdam : 25Apr85</b></a>
	<br>Sound Quality: 6 Performance: 7
	<br>${pat}, ${max}, ${felix}, ${owen}
	<br>The soft songs come out best. Notable for diseased
	reading on <i>Knocking On Heaven&apos;s Door</i>.
	</td>
	</tr>
	<tr>
#	$15	adbell@iname.com	Thu, 30 Oct 1997 11:01:43 +1100
#	$50	aschi@bronze.lcs.mit.edu	Wed, 29 Oct 1997 19:02:32 -0500
#	$55	jay@ossuary.com	Thu, 30 Oct 1997 01:42:39 -0800
#	$75	aschi@bronze.lcs.mit.edu	Thu, 30 Oct 1997 20:00:32 -0500
#	$80	gsm1224@ix.netcom.com	Mon, 3 Nov 1997 15:34:20 -0600 (CST)
#	$90	aschi@bronze.lcs.mit.edu	Mon, 3 Nov 1997 18:51:22 -0500 (EST)
#	$93	gsm1224@ix.netcom.com	Fri, 14 Nov 1997 20:10:26 -0600 (CST)
#	$95	aschi@bronze.lcs.mit.edu	Sat, 15 Nov 1997 10:16:10 -0500 (EST)
#	$100	gsm1224@ix.netcom.com	Mon, 17 Nov 1997 19:46:43 -0600 (CST)
#	$110	aschi@bronze.lcs.mit.edu	Wed, 19 Nov 1997 20:24:47 -0500 (EST)
#	$120	gsm1224@ix.netcom.com	Wed, 03 Dec 1997 19:04:38 -0800
#	$130	aschi@bronze.lcs.mit.edu	Sat, 6 Dec 1997 11:23:32 -0500 (EST)
#	$135	dave_tilley@mac.sas.com	9 Dec 1997 15:23:09 -050
#	$140	aschi@bronze.lcs.mit.edu	Tue, 9 Dec 1997 20:15:11 -0500 (EST)
#	$145	dave_tilley@mac.sas.com	10 Dec 1997 11:07:35 -0500
#	$150	aschi@bronze.lcs.mit.edu	Wed, 10 Dec 1997 19:06:53 -0500 (EST
#	$155	dave_tilley@mac.sas.com		16 Dec 1997 16:00:25 -0500
	<td valign=top>T003<br />Pat&apos;s Pick</td>
	<td valign=top>$155</td>
	<td valign=top>SOLD<br>
	dave_tilley @
	</td>
	<td valign=top><a href="${jbc_gigs}/1986/Jul24.html"><b>Club R.P.M., Toronto : 24Jul86</b></a>
	<br>Sound Quality: 8 Performance: 8
	<br>${pat}, ${max}, ${felix}, ${owen}
	<br>Radio broadcast, a little light on Max in the mix here
	and there. Features Max&apos;s ${you} with a flute
	solo (!) by Pat. 
	</td>
	</tr>
	<tr>
#	$15	dburns2@calstatela.edu	Oct 30, 1997 19:54:27
#	$20	wnerini@drf.com	Wed, 12 Nov 1997 13:27:11 -0700
#	$25	dburns2@calstatela.edu	Nov 13, 1997 20:29:28
#	$25	starsail@scruznet.com	Mon Mar 16 14:06:46 PST 1998
	<td valign=top>T004</td>
	<td valign=top>$25</td>
	<td valign=top>SOLD<br>
	starsail @
	</td>
	<td valign=top><a href="${jbc_gigs}/1986/Nov14.html"><b>Markthalle, Hamburg : 14Nov86</b></a>
	<br>Sound Quality: 5 Performance: 8
	<br>${pat}, ${max}, ${green}, ${lohan}, ${owen}
	<br>Walkman recording struggles to deal with the enormous sound of the
	short-lived quintet. Includes <i>I&apos;m Waiting For My</i> Man with Pat on bass. 
	</td>
	</tr>
	<tr>
#	$20	JV_SEATTLE@compuserve.com	Thu, 30 Oct 1997 02:51:46 -0500
#	$25	jnicpon@juno.com	Thu, 06 Nov 1997 09:56:25 EST
#	$30	monkeeman@email.msn.com	Wed, 19 Nov 1997 18:21:09 -0500
#	$35	Gonzales.Edward@mayo.edu	Wed, 19 Nov 1997 16:51:58
#	$40	monkeeman@email.msn.com	Thu, 20 Nov 1997 18:08:31 -0500
#	$45	Gonzales.Edward@mayo.edu	Fri, 21 Nov 1997 17:00:52
#	$55	monkeeman@email.msn.com	Mon, 1 Dec 1997 18:43:48 -0500
	<td valign=top>T005</td>
	<td valign=top>$55</td>
	<td valign=top>SOLD<br>
	monkeeman @
	</td>
	<td valign=top><a href="${jbc_gigs}/1986/Dec2.html"><b>Szene Wien, Vienna : 2Dec86</b></a>
	<br>Sound Quality: 8 Performance: 7
	<br>${pat}, ${green}, ${lohan}, ${owen}
	<br>Two nights after Max&apos;s mid-tour departure, so lots of sax!
	</td>
	</tr>
	<tr>
#	$20	dburns2@calstatela.edu	Oct 30, 1997 19:55:19
#	$25	jnicpon@juno.com	Thu, 06 Nov 1997 09:56:25 EST
#	$30	Jim.Davies@comlab.ox.ac.uk	Fri, 07 Nov 1997 07:43:34 +0000
#	$35	monkeeman@email.msn.com	Wed, 19 Nov 1997 18:27:05 -0500
#	$40	Jim.Davies@comlab.ox.ac.uk	Mon, 01 Dec 1997 08:44:20 +0000
	<td valign=top>T006</td>
	<td valign=top>$40</td>
	<td valign=top>SOLD<br>
	Jim.Davies @
	</td>
	<td valign=top><a href="${jbc_gigs}/1987/Mar20.html"><b>Front Door To Babylon, London : 20Mar87</b></a>
	<br>Sound Quality: 7 Performance: 7
	<br>${pat}, ${green}
	<br>Short but ferociously intense duo set, featuring strong
	language and audience particpation.
	</td>
	</tr>
	<tr>
#	$20	dburns2@calstatela.edu	Oct 30, 1997 19:56:31
#	$25	speedbump@reuben.org	Tue, 04 Nov 1997 09:43:51 -0400
	<td valign=top>T007</td>
	<td valign=top>$25</td>
	<td valign=top>SOLD<br>
	speedbump @
	</td>
	<td valign=top><a href="${jbc_gigs}/1989/Apr6.html"><b>Le Troupeau, Paris : 6Apr89</b></a>
	<br>Sound Quality: 6 Performance: 6
	<br>${pat}
	<br>Features ${city} and the frankly unbelievable
	<i>Camelot</i>
	</td>
	</tr>
	<tr>
#	$20	dburns2@calstatela.edu	Oct 30, 1997 19:53:41
#	$25	jnicpon@juno.com	Thu, 06 Nov 1997 09:56:25 EST
#	$30	dburns2@calstatela.edu	Nov 13, 1997 20:30:05
	<td valign=top>T008</td>
	<td valign=top>$30</td>
	<td valign=top>HOLD<br>
	dburns2 @
	</td>
	<td valign=top><a href="${jbc_gigs}/1989/Jul7.html"><b>Grosse Freiheit 36, Hamburg : 7Jul89</b></a>
	<br>Sound Quality: 5 Performance: 7
	<br>${pat}
	<br>With a little help from Peter Astor on the encores.
	A very long set, with some odd cover versions.
	</td>
	</tr>
	<tr>
#	$20	JV_SEATTLE@compuserve.com	Thu, 30 Oct 1997 02:51:46 -0500
#	$25	JReick01@teleweb.net	Sun, 02 Nov 1997 11:17:40 -0500
	<td valign=top>T009</td>
	<td valign=top>$25</td>
	<td valign=top>SOLD<br>
	JReick01 @
	</td>
	<td valign=top><a href="${jbc_gigs}/1989/Jul10.html"><b>Cookie&apos;s, Frankfurt : 10Jul89</b></a>
	<br>Sound Quality: 8 (soundboard) Performance: 7
	<br>${pat}
	<br>Similar to the above, but featuring a version of
	${spooky} for no good reason.
	</td>
	</tr>
	<tr>
#	$15	andrew.rak@utoronto.ca	Sun, 2 Nov 1997 11:59:13 -0500
#	$20	CONUNDRUM@sprintmail.com	Mon, 03 Nov 1997 21:15:31 -0700
#	$25	andrew.rak@utoronto.ca	Tue, 4 Nov 1997 18:45:21 -0500
#	$30	Jim.Davies@comlab.ox.ac.uk	Fri, 07 Nov 1997 07:44:44 +0000
#	$35	andrew.rak@utoronto.ca	Thu, 13 Nov 1997 19:14:59 -0500
	<td valign=top>T010</td>
	<td valign=top>$35</td>
	<td valign=top>SOLD<br>
	andrew.rak @
	</td>
	<td valign=top><a href="${jbc_gigs}/1989/Nov17.html"><b>Lounge Ax, Chicago : 11Nov89</b></a>
	<br>Sound Quality: 6 Performance: 7
	<br>${pat}, ${paul}, ${larry}, ${richard}
	<br>The Big Planet tour, with some amusing covers and encores.
	</td>
	</tr>
# KCRW # 	<tr>
# KCRW # #	$15	adbell@iname.com		Thu, 30 Oct 1997 11:02:27 +1100
# KCRW # #	$50	aschi@bronze.lcs.mit.edu	Wed, 29 Oct 1997 19:03:32 -0500
# KCRW # #	check for $55 received Tue Nov 18 20:08:47 PST 1997
# KCRW # 	<td valign=top>T011<br />Pat&apos;s Pick</td>
# KCRW # 	<td valign=top>$50</td>
# KCRW # 	<td valign=top>SOLD<br>
# KCRW # 	aschi @
# KCRW # 	</td>
# KCRW # 	<td valign=top><a href="${jbc_gigs}/1989/Dec6.html"><b>KCRW, Santa Monica : 6Dec89</b></a>
# KCRW # 	<br>Sound Quality: 9 Performance: 8
# KCRW # 	<br>${pat}, ${paul}, ${larry}, ${richard}
# KCRW # 	<br>Live-to-air radio broadcast, featuring lengthy and embarrassing
# KCRW # 	interview together with 12 tunes, sympathetically recorded.
# KCRW # 	</td>
# KCRW # 	</tr>
	<tr>
#	$10	seabo002@gold.tc.umn.edu	Mon, 03 Nov 1997 12:36:55 CST
#	$15	n3xye@velocity.net	Mon, 03 Nov 1997 16:01:28 -0500
#	$17	seabo002@gold.tc.umn.edu	Tue, 04 Nov 1997 08:52:28 CST
#	$20	Jim.Davies@comlab.ox.ac.uk	Fri, 07 Nov 1997 07:45:46 +0000
#	$25	seabo002@gold.tc.umn.edu	Fri, 07 Nov 1997 13:18:21 CST
#	$30	Jim.Davies@comlab.ox.ac.uk	Mon, 17 Nov 1997 08:24:25 +0000
#	$35	monkeeman@email.msn.com	Thu, 20 Nov 1997 18:19:17 -0500
#	$45	jharbour@tanknde.com	Tue, 2 Dec 1997 07:03:27 -0800
#	$55	monkeeman@msn.com	Wed, 3 Dec 1997 18:43:05 -0500
#	$65	jharbour@tanknde.com	Sun, 7 Dec 1997 16:23:50 -0800
	<td valign=top>T012</td>
	<td valign=top>$65</td>
	<td valign=top>SOLD<br>
	jharbour @
	</td>
	<td valign=top><a href="${jbc_gigs}/1989/Dec10.html"><b>The Coach House, San Juan Capistrano : 10Dec89</b></a>
	<br>Sound Quality: 7 Performance: 8
	<br>${pat}, ${paul}, ${larry}, ${richard}
	<br>One of the band&apos;s Very Fast Nights.  Includes a version of ${engine}.
	</td>
	</tr>
	<tr>
#	$15	wnerini@drf.com	Wed, 29 Oct 1997 21:24:07 -0700
#	$25	jay@ossuary.com	Thu, 30 Oct 1997 01:44:52 -0800
#	$30	wnerini@drf.com	Thu, 30 Oct 1997 15:42:48 -0700
#	$35	speedbump@reuben.org	Tue, 04 Nov 1997 09:42:33 -0400
#	$50	wnerini@drf.com	Wed, 05 Nov 1997 13:49:17 -0700
	<td valign=top>T013</td>
	<td valign=top>$50</td>
	<td valign=top>SOLD<br>
	wnerini @
	</td>
	<td valign=top><a href="${jbc_gigs}/1989/Dec18.html"><b>Tipitina&apos;s, New Orleans : 18Dec89</b></a>
	<br>Sound Quality: 7 Performance: 8
	<br>${pat}, ${paul}, ${larry}, ${richard}
	<br>Radio broadcast from the concert, clear but a bit heavy on drums
	and vocals. Includes the <u>definitive</u> ${devil}.
	</td>
	</tr>
	<tr>
#	$15	krevis@animal.blarg.net	Fri, 31 Oct 1997 17:43:02 +1600 (PST)
#	$17	rusty@sirius.com	Sat, 01 Nov 1997 21:20:45 -0800
#	$18	CONUNDRUM@sprintmail.com	Mon, 03 Nov 1997 12:33:58 -0700
#	$20	rusty@sirius.com	Mon, 03 Nov 1997 20:12:08 -0800
#	$26	CONUNDRUM@sprintmail.com	Mon, 03 Nov 1997 21:17:21 -0700
#	$28	rusty@sirius.com	Sat, 08 Nov 1997 07:46:22 -0800
#	$30	mrnobody@ripco.com	Wed, 12 Nov 1997 22:04:22 -0600
#	$31	Rusty@sirius.com	Thu, 13 Nov 1997 21:50:53 -0800
#	$32	mrnobody@ripco.com	Fri, 14 Nov 1997 19:29:36 -0600
#	$35	Rusty@sirius.com	Sat, 15 Nov 1997 19:54:51 -0800
	<td valign=top>T014</td>
	<td valign=top>$35</td>
	<td valign=top>SOLD<br>
	Rusty @
	</td>
	<td valign=top><a href="${jbc_gigs}/1992/Jun5.html"><b>The Roxy, Los Angeles : 5Jun92</b></a>
	<br>Sound Quality: 6 Performance: 8
	<br>${pat}, ${pete}, ${dooj}, ${nick}
	<br>Fondly remembered show, featuring cameos from members of
	Downey Mildew and The Black Watch.
	</td>
	</tr>
	<tr>
#	$11	mercy@halcyon.com	Thu, 30 Oct 1997 17:42:57 -0800
#	$15	billp@sonic.net		Thu, 30 Oct 1997 21:37:30 -0800
#	$17	seabo002@gold.tc.umn.edu	Mon, 03 Nov 1997 12:37:45 CST
#	$20	Jim.Davies@comlab.ox.ac.uk	Fri, 07 Nov 1997 07:41:06 +0000
#	$25	seabo002@gold.tc.umn.edu	Fri, 07 Nov 1997 13:18:51 CST
#	$30	shasson@mcs.ne	Fri, 04 Jan 80 06:06:07 PS
#	$32	seabo002@gold.tc.umn.edu	Thu, 13 Nov 1997 21:13:19 CST
#	$35	jhg@buffnet.net	Tue, 14 Oct 1997 23:26:35 -0500
#	$36	Jim.Davies@comlab.ox.ac.uk	Mon, 17 Nov 1997 08:24:57 +0000
#	$40	gsm1224@ix.netcom.com	Wed, 19 Nov 1997 13:27:14 -0600 (CST)
#	$50	indigo_eyes@hotmail.com	Tue, 25 Nov 1997 18:05:43 GMT
#	$55	Jim.Davies@comlab.ox.ac.uk	Mon, 01 Dec 1997 08:48:43 +0000
#	$60	gsm1224@ix.netcom.com	Wed, 03 Dec 1997 19:06:26 -0800
	<td valign=top>T015<br />Pat&apos;s Pick</td>
	<td valign=top>$60</td>
	<td valign=top>SOLD<br>
	gsm1224 @
	</td>
	<td valign=top><a href="${jbc_gigs}/1994/Feb17.html"><b>Arapaho, Paris : 17Feb94</b></a>
	<br>Sound Quality: 6 Performance: 8
	<br>${pat}, ${dooj}, ${curt}, ${nick}
	<br>Last night of the European &quot;punk rock&quot; tour of 1994,
	featuring the Van Halen guitar sounds of Judge Curtis.  Caution:
	The Butcher speaks French.
	</td>
	</tr>
	<tr>
#	$10	mrnobody@ripco.com	Wed, 12 Nov 1997 22:08:32 -0600
	<td valign=top>T016</td>
	<td valign=top>$10</td>
	<td valign=top>SOLD<br>
	mrnobody @
	<br>
	<a href="https://v1.jazzbutcher.com/images/egdebut.jpg"><img
		src="https://v1.jazzbutcher.com/images/thumb_egdebut.gif"
		border={0} width=84 height=84></a></td>
	<td valign=top><a href="${jbc_gigs}/1994/Jun1.html"><b>The Black Eg Live In London : 1Jun94</b></a>
	<br>The ${damm} brothers make their &quot;first and only debut&quot;
	at London&apos;s Subliminal Revolutions club in the summer of 1994.
	3 Incredibly long assults, recorded so dubiously that you can&apos;t hear
	${karel}&apos;s wheelchair as it trundles past.
	</td>
	</tr>
	<tr>
#	$20	sonia@primenet.com	Wed, 29 Oct 1997 20:51:09 -0500
#	$45	jay@ossuary.com	Thu, 30 Oct 1997 01:45:39 -0800
	<td valign=top>T017</td>
	<td valign=top>$45</td>
	<td valign=top>SOLD<br>
	jay @
	</td>
	<td valign=top><b>The Undertakers : Keep Music Dead</b>
	<br>Formed as the house band of Slurp&apos;s Bar, Northampton, the
	Undertakers feature ${pat}, Mark Refoy and Jon Mattocks (${space},
	Spiritualized), and Tim Harris (Everything But The Girl, Doctor Didg).
	They don&apos;t rehearse, they only play covers, and a total of about 43
	people have ever seen them play live.  How cool is that?
	Sound quality is exactly the same as on the Velvet Underground&apos;s
	&quot;Live 69&quot; album (which is to say, pretty crappy).
	So now you know.
	Covers by: Can, Velvets, Creedence, Kraftwerk, Plastic Ono Band, etc.
	</td>
	</tr>
)

const auctionSections = () => (
	<nobr><font size=+1><b>Items listed by category.</b></font></nobr>
	<table border={0} cellspacing={0} cellpadding=0>
	<tr><td align=center>
	<img src="https://v1.jazzbutcher.com/images/cassettes.gif" align=top width=47 height=40>
	</td><td>
	<a href="${jbc_root}/auction.html?${encrypt(section=auctionConcerts)}">Concert Tapes</a>
	</td></tr>
	<tr><td align=center>
	&nbsp;
	</td><td>
	<a href="${jbc_root}/auction.html?${encrypt(section=auctionCompilations)}">Compilation Tapes</a>
	</td></tr>
	<tr><td align=center>
	<img src="https://v1.jazzbutcher.com/images/pyramid.gif" width=28 height=25 align=top>
	</td><td>
	<a href="${jbc_root}/auction.html?${encrypt(section=auctionSpacemen)}">Spacemen 3 Articles</a>
	</td></tr>
	<tr><td align=center>
	&nbsp;
	</td><td>
	<a href="${jbc_root}/auction.html?${encrypt(section=auctionShirts)}">Leisure Wear</a>
	<tr><td align=center>
	&nbsp;
	</td><td>
	<a href="${jbc_root}/auction.html?${encrypt(section=auctionPosters)}">Art and Posters</a>
	<tr><td align=center>
	<img src="https://v1.jazzbutcher.com/images/trumpet.gif" width=49 height=23 align=middle>
	</td><td>
	<a href="${jbc_root}/auction.html?${encrypt(section=auctionRecords)}">Vinyl Department</a>
	</td></tr>
	<tr><td align=center colspan=2>
	<br>
	<a href="${jbc_root}/auction.html?${encrypt(section=all)}">See it all in one big list!</a>
	</td></tr>
	</table>
)

*/
