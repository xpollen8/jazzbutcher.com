import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Tag from '@/components/Tag';
import { linkExternal, linkInternal } from '@/lib/macros';

const Help = () => <>
	<Header section='help' />
	<main>
		<Tag>
			Conspire with us!
		</Tag>
		<blockquote>
			The JBC archives are actively seeking assistance to document the band&apos;s history.
			<p />
			We have long trawled the underbelly of the Internet looking for JBC memorabilia: gig posters,
			ticket stubs, setlists, photos from concerts, bootlegs, gig reviews, etc.
			We know there must be more such material &quot;out there&quot;, hidden away in attics, or
			already housed on hard drives.
			<p />
			Share with us what you have! You&apos;ll receive proper credit and your contribution
			will live on in infamy.
		</blockquote>

		<b>Contact us here:</b>
		<blockquote>
			Click the &quot;Add your own&quot; link in the Visitor Feedback section below.
			Tell us what you have to share, and we&apos;ll get right back to you.
		</blockquote>

		<b>Contact us on github:</b>
		<blockquote>
			If you&apos;re slightly technical (or willing to learn), {linkExternal('https://github.com/xpollen8/jazzbutcher.com', 'please join our preservation efforts on github.com')}
			<p />
			Thanks! Together, we can fill in the gaps in the JBC story.
		</blockquote>

		<Tag>
			<b>Top Conspirators!</b>
		</Tag>
		<blockquote>
			<ul>
				<li><b>Lito Vales</b>  - 2013-06-21
					<p>
					Pix: 
					{linkInternal('/gigs/2013/Jun17.html', '2013-06-17')},
					</p>
				</li>
				<li><b>Eddie Trojan</b>  - 2013-07-23
					<p>
					Setlist: 
					{linkInternal('/gigs/1990/Oct22.html', '1990-10-22')},
					</p>
				</li>
				<li><b>Neil Cooper</b>  - 2018-04-01
					<p>
					Setlist: 
					{linkInternal('/gigs/1983/Apr19_2030.html', '1983-04-19')},
					{linkInternal('/press/198306_all_that_thinks_and_moves_2.html', 'Earliest Known Gig Review')}
					</p>
				</li>
				<li><b>Eric Lillyblad</b>  - 2018-10-23
					<p>
					Ticket stubs:
					{linkInternal('/gigs/1989/Nov4.html', '1989-11-04')},
					{linkInternal('/gigs/1990/Nov14.html', '1990-11-14')},
					{linkInternal('/gigs/1992/May1.html', '1992-05-01')}
					</p>
				</li>
				<li><b>Kevin Carroll</b>  - 2018-09-04
					<p>
					Posters:
					{linkInternal('/gigs/1990/Nov17.html', '1990-11-17')},
					{linkInternal('/gigs/1994/Feb10.html', '1994-02-10')},
					{linkInternal('/gigs/1994/Mar10.html', '1994-03-10')},
					{linkInternal('/gigs/1994/Apr8.html', '1994-04-08')},
					</p>
				</li>
				<li><b>Pierre Guillaume</b>  - 2017-11-01
					<p>
					A ton of ticket stubs and other ephemera:
						{linkInternal('/gigs/1986/Apr4.html', '1986-04-04')},
						{linkInternal('/gigs/1986/Aug14.html', '1986-08-14')},
						{linkInternal('/gigs/1987/Aug2.html', '1987-08-02')},
						{linkInternal('/gigs/1987/Feb10.html', '1987-02-10')},
						{linkInternal('/gigs/1987/Feb2.html', '1987-02-02')},
						{linkInternal('/gigs/1987/May29.html', '1987-05-29')},
						{linkInternal('/gigs/1988/Apr8.html', '1988-04-08')},
						{linkInternal('/gigs/1988/Apr8.html', '1988-04-08')},
						{linkInternal('/gigs/1989/Sep1.html', '1989-09-01')},
						{linkInternal('/gigs/1990/Mar13.html', '1990-03-13')},
						{linkInternal('/gigs/1990/Mar14.html', '1990-03-14')},
						{linkInternal('/gigs/1990/Mar16.html', '1990-03-16')},
						{linkInternal('/gigs/1990/Sep15.html', '1990-09-15')},
						{linkInternal('/gigs/1991/Oct21.html', '1991-10-21')},
						{linkInternal('/gigs/1993/Feb16.html', '1993-02-16')},
						{linkInternal('/gigs/1993/Feb21_2000.html', '1993-02-21')},
						{linkInternal('/gigs/1993/Nov15.html', '1993-11-15')},
						{linkInternal('/gigs/1994/Feb17.html', '1994-02-17')},
						{linkInternal('/gigs/1994/Jul7.html', '1994-07-07')},
						{linkInternal('/gigs/1995/Dec21.html', '1995-12-21')},
						{linkInternal('/gigs/1995/Sep13_2000.html', '1995-09-13')},
						{linkInternal('/gigs/1995/Sep13.html', '1995-09-13')}
					</p>
				</li>
				<li><b>Andrew Brooksbank</b>  - 2018-12-29
					<p>
					Setlists:
					{linkInternal('/gigs/1985/Feb8.html', '1985-02-08')},
					{linkInternal('/gigs/1985/Apr17.html', '1985-04-17')},
					{linkInternal('/gigs/2017/Oct20_1900.html', '2017-10-20')},
					{linkInternal('/gigs/2017/Oct22_1900.html', '2017-10-22')},
					<br/>
					Gig photos:
					{linkInternal('/gigs/1986/Mar4.html', '1986-03-04')},
					{linkInternal('/gigs/1986/Oct29.html', '1986-10-29')},
					{linkInternal('/gigs/1989/Sep21.html', '1989-09-21')},
					{linkInternal('/gigs/2008/Jun5.html', '2008-06-05')},
					{linkInternal('/gigs/2017/Oct22_1900.html', '2017-10-22')},
					</p>
				</li>
				<li><b>Gene Solomon</b>  - 2019-03-10
					<p>
					Flyer, songlist for
					{linkInternal('/gigs/1992/May2_2030.html', '1992-05-02 (early)')},
					{linkInternal('/gigs/1992/May2_2330.html', '1992-05-02 (late)')}
					</p>
				</li>
				<li><b>Matt Condon</b>  - 2018-03-10
					<p>
					Pix:
					{linkInternal('/gigs/2013/Jun15.html', '2013-06-15')},
					{linkInternal('/gigs/2013/Jun17.html', '2013-06-17')},
					{linkInternal('/gigs/2018/Mar1_1930.html', '2018-03-01')},
					{linkInternal('/gigs/2018/May27_1930.htm', '2018-03-27')}
					Video: {linkInternal('/gigs/2013/Jun17.html', '2013-06-17')}
					</p>
				</li>
			</ul>
		</blockquote>
		</main>
	<Footer />
</>

export default Help;
