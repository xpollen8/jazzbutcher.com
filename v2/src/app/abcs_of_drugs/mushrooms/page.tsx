import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Drugs from '../Drugs';

const ABCs = () => <>
	<Header section="abcs_of_drugs" />
	<main className="etc">
		<Drugs data={{
			header: "Magic mushrooms",
			image: {
				alt: "mushrooms",
				src: "https://v1.jazzbutcher.com/images/abcs_of_drugs/mushrooms.gif",
				width: 200,
				height: 201,
			},
			description: <>
				Magic mushrooms contain natural hallucinogens. The most commonly used type in the UK is a species called Psilocybe semilanceata, the liberty cap, but other mushrooms of the Psilocybe and Paneolus genera, as well as the species Amanita muscaria (fly agaric), are also used. Psilocybe and Paneolus mushrooms are small, with pointed caps; fly agaric has a wide red cap with white spots (but see Special Risks below). Magic mushrooms are eaten or boiled and mixed with tea and drunk.	
				</>,
			background: <>
				Hallucinogenic mushrooms – and any number of other hallucinogenic plants – have been used in rituals and sacred ceremonies for thousands of years. Their modern use as a recreational drug dates mainly from the 1970s.
				</>,
			why: <>
				At low doses mushrooms induce a fairly mild high – you might feel relaxed and euphoric and laugh a lot. At higher doses the effects are similar to those of LSD, but they don&apos;t last as long – usually between four and nine hours.
				</>,
			whynot: {
				shortterm: <>
					Like LSD, magic mushrooms can make you feel anxious and even terrified, and in some cases disturbance can persist after the effects of the drug have worn off. However, people normally recover quite quickly without help.
					<p />
					You may well have stomach pains, feel sick or actually throw up after taking mushrooms.
					</>,
				dependence: <>
					Magic mushrooms do not produce physical dependence and, again like LSD, they are unlikely to lead to psychological dependence because tolerance builds up very quickly with repeated doses and the desired effects disappear. Sensitivity to the drug returns after a few days.
					</>,
				longterm: <>
					There has been no research into the long-term effects.
					</>,
			},
			risks: <>
				Without question, the biggest danger posed by magic mushrooms is poisoning yourself by taking the wrong sort. Identifying mushrooms is tricky, and taking species related to magic mushrooms – and looking very like them – can be fatal.
				</>,
			legal: <>
				Magic mushrooms are not illegal, but the drugs psilocin and psylocybin are – they are in Class A, like LSD. The crucial point is whether mushrooms containing these drugs have been prepared. Quite what this means is up to the courts, but it could be enough just to crush them.
				</>,
		}} />
	</main>
	<Footer />
</>

export default ABCs;
