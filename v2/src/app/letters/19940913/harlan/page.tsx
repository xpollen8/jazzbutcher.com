import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
} from '@/lib/defines';

const Letter = () =>  {
	const title = <><Link href='/letters/19940913'>13Sep94</Link> | Harlan</>
	return ( <>
		<Header section='letters' title={title} />
		<div className="letter">
	<b>THE <Link href="/lyrics/harlan.html">
	HARLAN</Link> THING</b>
	<p />
	<samp>
	&gt; Date: Thu, 14 Jul 1994 23:18:05 -0400<br />
	&gt; From: Christopher Camfield (ccamfiel@undergrad.math.uwaterloo.ca)<br />
	&gt; Subject: Harlan<br />
	&gt; I just wanted to mention that I recently started reading Harlan<br />
	&gt; Ellison&apos;s stories, and got a complete blast (and a bit of a chill)<br />
	&gt; when I recognized what the lines in the song about Jeffy are about<br />
	&gt; (&quot;Jeffy is 5... the same as he was in 1959...&quot; I think it goes) -<br />
	&gt; one of Harlan&apos;s stories is called Jeffy, and it&apos;s a classic.<br />
	&gt; Quite spooky.<br />
	&gt; The other thing that flipped in my mind was what &quot;We&apos;re not alone&quot;<br />
	&gt;  meant. I figured, before reading any of the stories, that it meant<br />
	&gt; there were aliens out there or something.
	</samp>
	<blockquote className="annotation">
	Yes, indeed, Chris.  You got it.  &quot;Jefy Is Five&quot; is one
	of a number of Harlan Ellison story-titles that litter
	the lyrics to the song that
	bears his name.  Like:
	<blockquote>
	&quot;Time&apos;s A-Wastin&apos;&quot;
	<br />&quot;I Have No Mouth And I Must Scream&quot;
	<br />&quot;A Boy And His Dog&quot;
	<br />&quot;Alone Against Tomorrow&quot;
	</blockquote>
	It&apos;s what I call a T-Rex Letter.  You know, where fans of a group
	write a letter about that group, quoting all their song titles?  One
	of those.  In an introduction to one of his collections, Mr. Ellison
	writes that he tells these stories to tell people that &quot;You Are Not
	Alone&quot;... because we&apos;re ALL IN THE SHIT TOGETHER!
	<p />
	What a dude!
	<p />
	(He does, incidentally, keep his number in the L.A. phone
	book.  That line is true.  So, I should warn you, is
	the one about his not suffering fools.  He is an impatient
	man, and should not be approached for quotable quotes
	on the subject of the JBC by those who could do without
	being told to... uh... go someplace else.
	</blockquote>
		</div>
		<Footer />
	</>)
}

export default Letter;
