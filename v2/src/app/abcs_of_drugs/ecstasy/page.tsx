import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Drugs from '../Drugs';

const ABCs = () => <>
	<Header section="abcs_of_drugs" />
	<main className="etc">
		<Drugs data={{
			header: "Ecstasy",
			image: {
				alt: "ecstasy",
				src: "https://v1.jazzbutcher.com/images/abcs_of_drugs/ecstasy.gif",
				width: 200,
				height: 146,
			},
			description: <>
				Ecstasy or 3,4,methylenedioxymethamphetamine (E or MDMA for short; also called XTC, pills, jubes, smarties, doves and so on) is a mind-altering stimulant, combining some of the effects of amphetamines and LSD. It&apos;s usually sold in capsules or tablets, which vary widely in colour, size – and rather more importantly – content.
				</>,
			background: <>
				A natural version of MDMA is found in nutmeg and oil of sassafras. The drug was first synthesised in 1912 and was used for a time in some psychiatric treatments in Switzerland and the US. In the UK, the Misuse of Drugs Act was amended to cover all amphetamine compounds in 1977, but it wasn&apos;t until the late 80s that ecstasy started to become widely available. It is very much linked with the dance and club scene. About 2% of the adult population (an estimated 730,000 people) are thought to have tried ecstasy.
				</>,
			why: <>
				Physically, the effects are similar to those of amphetamines. Your heart and breathing speed up and your body temperature rises, your mouth dries up, your jaw tightens and you lose your appetite. You may also feel a laxative effect. However, these symptoms aren&apos;t generally why people use the drug.
				<p />
				The psychological effects of ecstasy vary to some extent according to mood and circumstances – and, of course, according to what the tablets actually contain. It can make you feel relaxed and calm as well as energetic, exhilarated and able to experience things with more intensity – especially music. Ecstasy is also commonly said to make you feel warmer towards or more in tune with other people. It probably doesn&apos;t actually increase the sex drive, but many people say it improves sex.
				<p />
				The effects usually take 30 to 60 minutes to come on and can last for several hours.
				</>,
			whynot: {
				shortterm: <>
					Some people feel unsteady and nauseous or actually throw up after taking ecstasy. Like amphetamines, ecstasy can make you anxious and paranoid, and however you feel while the drug is working, when the effects wear off you will feel tired, and you may feel anxious and depressed. Some people report having LSD-type &apos;flashbacks&apos; - a recurrence of the feelings experienced on the drug. All of these problems are more likely to occur and to be more serious with high and repeated doses.
					<p />
					An estimated 60–70 deaths have been directly associated with ecstasy use. Most of these seem to have been caused by a combination of exhaustion, overheating and dehydration (see special risks below), though a few people have suffered heart attacks or brain haemorrhage brought on by the stimulant effect of the drug. A very small number have died as a result of drinking too much water, because ecstasy can cause a condition which leads to a build-up of water in the cells of the brain, causing it to swell.
					</>,
				dependence: <>
					Ecstasy does not produce physical dependence, and though many young people use the drug repeatedly, the vast majority do so on an occasional basis. However, psychological dependence is possible.
					</>,
				longterm: <>
					You can build up a tolerance to ecstasy, so you have to take more to get the desired effect, and if this happens you&apos;re more at risk from toxic side-effects such as nausea and dizziness. Other symptoms reported by long-term users include general anxiety, panic attacks, depression, insomnia and confusion. And as with amphetamines, long-term users may become generally run-down. One study has suggested that ecstasy can cause liver damage.
					<p />
					Experiments have also shown that, in animals, ecstasy can permanently damage brain nerve pathways and nerve terminals, possibly leading to serious mood problems and brain disease in later life. However, the relevance of these experiments to humans is not clear.
					</>,
			},
			risks: <>
				Ecstasy is dangerous for anyone suffering from high blood pressure, a heart condition, diabetes, asthma or epilepsy.
				<p />
				Ecstasy tablets often contain other drugs or non-active substances. Some adulterated tablets may be dangerous. Testing a small amount first may reduce the risks.
				<p />
				Ecstasy raises body temperature, and this combined with dehydration and exhaustion from long spells of dancing in a hot club can be dangerous. Sipping water – no more than about a pint an hour – and taking regular rests will help. Alcohol makes dehydration worse.
				<p />
				It&apos;s particularly dangerous to mix ecstasy with anti-depressants or other stimulants.
				</>,
			legal: <>
				Ecstasy is a Class A drug.
				</>,
		}} />
	</main>
	<Footer />
</>

export default ABCs;
