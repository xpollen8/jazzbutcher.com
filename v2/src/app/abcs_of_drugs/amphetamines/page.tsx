import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Drugs from '../Drugs';

const ABCs = () => <>
	<Header section="abcs_of_drugs" />
	<main className="etc">
		<Drugs data={{
			header: 'Amphetamines (speed)',
			image: {
				alt: "speed",
				src: "https://v1.jazzbutcher.com/images/abcs_of_drugs/speed.gif",
				width: 214,
				height: 141,
			},
			description: <>
				Amphetamines (speed, billy, whizz, sulphate) are powerful synthetic stimulants/uppers. The commonest illegally made form, amphetamine sulphate powder, can be smoked, swallowed in a drink or injected in a solution, but it&apos;s usually snorted up the nose. The powder should be white, but can be pink or grey.
				<p />
				Crystal methamphetamine (meth, ice, crystal) is a very strong, pure, crystalline form of the drug, which is usually smoked. Amphetamine base, the base from which amphetamine sulphate powder is made, is also very strong and pure. Base is injected or wrapped in cigarette papers and swallowed.
				</>,
			background: <>
				Amphetamines were first introduced in the 1930s as a cure for nasal congestion, but they have long been used as a way of staying awake and boosting energy levels. In the 1950s and 1960s amphetamines were also widely prescribed to treat depression and help people lose weight. Amphetamines and amphetamine-like drugs currently available on prescription, such as Dexedrine and Ritalin, are mainly used to treat narcolepsy (uncontrollable sleeping fits) and, oddly enough, hyperactivity in children.
				<p />
				In the UK, the use of amphetamines for fun dates mainly from the 1960s, and they were controlled by legislation in 1964. Amphetamines are now common in the dance scene and, apart from cannabis, are the most commonly used illegal drug in the UK. According to government figures, an estimated 9% of the population have used amphetamines at some point in their lives.
				</>,
			why: <>
				Amphetamines have a similar effect to a rush of adrenalin – one that can last for anything between three and eight hours. Your breathing and heart speed up, your pupils dilate, your mouth dries up and you feel more energetic and alert. You may also feel more confident and positive, and become very talkative, believing your mind is on top form - though a straight listener might not agree. Loss of appetite is also common.
				</>,
			whynot: {
				shortterm: <>
					While experiencing the physical effects described above, people may mainly feel anxious and restless rather than confident and energetic, and all users have to cope with coming down. Taking amphetamines is like getting an advance on your energy reserves, and as these reserves are used up, you begin to feel tired and drained. You may also feel depressed.
					<p />
					If taken in large quantities, and especially if repeated high doses are taken over a few days, the possible unwanted effects are more serious. They include aggression, panic, paranoia, hallucinations and delirium. The physical effects of very high doses can include the shakes, uneven heartbeat, breathlessness, chest pain, seizure and even heart failure. But deaths caused directly by amphetamines are rare in people without heart problems or high blood pressure.
					</>,
				dependence: <>
					Some people become psychologically dependent on amphetamines, partly because these drugs can make you feel more confident and more able to cope, and partly because it&apos;s tempting to take more to counteract the effects of coming down. There are no heroin-type withdrawal symptoms if regular users give up abruptly, but long-term users may well feel generally tired, apathetic and continually hungry when they stop using.
					</>,
				longterm: <>
					Frequent users build up a tolerance, so larger doses are needed to obtain the same effect. This increases all the risks. Long-term users are prone to depression and paranoia, and some people develop psychosis. Sustained heavy use also increases the risk of damage to blood vessels and even heart failure. Other health problems may develop because users are generally run-down and not eating or sleeping properly.
					</>,
			},
			risks: <>
				Amphetamine sulphate powder is notoriously impure, often being cut by up to 95% with anything from paracetamol to chalk. This means injecting it could be lethal.
				<p />
				It&apos;s dangerous for people with high blood pressure, heart problems or breathing problems to take amphetamines.
				<p />
				Using amphetamines with other uppers, such as poppers, cocaine or ecstasy, is particularly dangerous, as it puts an added strain on the heart.
				<p />
				Stimulants tend to make you less aware of the effects of alcohol, and this can lead to excessive drinking and all that entails.
				<p />
				Long periods of dancing in hot clubs can lead to serious dehydration. Sipping water and taking rests can prevent this.
				</>,
			legal: <>
				Amphetamines are Class B drugs unless they are prepared for injection, in which case they are considered Class A.
				</>,
		}} />
	</main>
	<Footer />
</>

export default ABCs;
