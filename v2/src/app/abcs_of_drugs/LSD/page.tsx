import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Drugs from '../Drugs';

const ABCs = () => <>
	<Header section="abcs_of_drugs" />
	<main className="etc">
		<Drugs data={{
			header: 'LSD',
			image: {
				alt: "LSD",
				src: "https://v1.jazzbutcher.com/images/abcs_of_drugs/acid.gif",
				width: 175,
				height: 161,
			},
			description: <>
			Lysergic acid diethylamide or LSD (acid) is a powerful hallucinogen made from ergot, a fungus that grows on rye and other grains. It&apos;s usually sold soaked in small pieces of blotting paper or (now less frequently) in small pills or microdots.	
				</>,
			background: <>
			LSD was first produced in 1938. In the 50s and 60s it was used in psychotherapy to help people recover repressed memories and emotions. In the 60s it became popular with hippies and other young people, and also with some writers and intellectuals. Such users tended to believe that LSD expanded the consciousness and led to spiritual experiences. The authorities disapproved, and in the UK LSD was first controlled by legislation in 1966.
			<p />
			Like everything associated with &apos;hippy values&apos;, LSD became very unfashionable in the late 70s, but the acid house dance scene of the late 80s led to a revival of interest, and the drug was easily incorporated into the subsequent rave and dance culture. An estimated 4% of the adult population (1.3 million people) have taken LSD at some point.
				</>,
			why: <>
				Whether LSD opens the doors of perception or just replaces them with warped, multi-coloured windows is open to question, but there&apos;s no doubt that it can radically alter the way you feel and perceive the world around you. Full hallucinations are rare, at least with normal doses, but it&apos;s common to see patterns and colours that don&apos;t really exist and also slight movement in solid, stationary objects. Familiar objects and people may seem unfamiliar, fascinating or hilarious. A feeling of increased self-awareness is also common, and some people report ecstatic or transcendental experiences, as if they&apos;ve moved beyond their bodies. The effects usually come on after between half an hour and an hour and can last anything between five and 24 hours, but eight to 12 hours is common.
				</>,
			whynot: {
				shortterm: <>
					LSD is unpredictable, even for experienced users. Things may seem fascinating or funny, but they may also seem alien and terrifying. You might feel dizzy, confused, anxious, panic-stricken or paranoid, or as if you&apos;re dying or losing your mind. To some extent the effects of the drug depend on how you feel when you take it – if you feel anxious or depressed anyway, you&apos;re more likely to have a bad trip. Friendly reassurance and efforts to divert the mind towards pleasant subjects may help a user who is having a hard time. Occasionally a bad trip may produce a longer-lasting disturbance, such as recurring anxiety attacks, but this will normally fade.
					<p />
					Even if you&apos;ve had a good trip, you may feel anxious and depressed the next day. Flashbacks – sudden recurrences of the experience of a trip – can occur a few days or even weeks later. These can be disturbing, especially if they happen at an awkward time, but they don&apos;t usually last long.
					<p />
					The intensity of experiences on LSD – both good and bad – depend on how much you take and how strong the tab or microdot is.
					</>,
				dependence: <>
					LSD does not produce physical dependence, and psychological dependence is rare because the drug stops working if you keep using it over three or four days. However, after a few more days, tolerance subsides, and some people feel a strong desire to keep repeating the experience.
					</>,
				longterm: <>
					Despite talk of &apos;acid casualties&apos;, there is no reliable evidence that LSD damages the brain. However, long-term use may increase anxiety and depression. More serious and prolonged psychological problems do occur, but it&apos;s difficult to know to what extent LSD causes them. However, it is thought that the drug can aggravate existing mental health problems, or bring hidden problems to the surface.
					</>,
			},
			legal: <>
				LSD is a Class A drug
				</>,
		}} />
	</main>
	<Footer />
</>

export default ABCs;
