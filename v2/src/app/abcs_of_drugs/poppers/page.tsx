import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Drugs from '../Drugs';

const ABCs = () => <>
	<Header section="abcs_of_drugs" />
	<main className="etc">
		<Drugs data={{
			header: "Nitrites (poppers)",
			image: {
				alt: "poppers",
				src: "https://v1.jazzbutcher.com/images/abcs_of_drugs/poppers.gif",
				width: 200,
				height: 212,
			},
			description: <>
				The stimulants/uppers amyl and butyl nitrites (alkyl nitrites or poppers) are liquids derived from nitrous oxide or &apos;laughing gas&apos;. Yellow in colour, they are highly flammable. The name &apos;poppers&apos; derives from the small glass capsules in which amyl nitrite is supplied on prescription, which make a popping noise when broken open. Nowadays nitrites for recreational use are mainly sold in small bottles, from which the vapour is inhaled.
				</>,
			background: <>
				Amyl nitrite was discovered in 1857. Because it widens the blood vessels, it was used ­ and is still sometimes used - as a treatment for the heart condition angina. The non-medical use of amyl nitrite first became popular during the 1960s. Butyl nitrite has never been used medically and is now the most common nitrite used recreationally.
				<p />
				Amyl nitrite is, in theory, only available from chemists, but butyl nitrite can be sold anywhere, and is available in some clothes shops, record shops and sex shops and in some clubs and bars.
				</>,
			why: <>
				The widening of the blood vessels caused by nitrites lowers the blood pressure and so makes the heart beat more quickly, pumping blood to the brain. This results in a dizzy rush of energy, heightening sensory experiences, after which you may feel light-headed for a few minutes. Some gay men use nitrites because they relax the muscles, making anal sex easier. Nitrites are also said to delay and prolong orgasm, but the effects last for five minutes at the most.
				</>,
			whynot: {
				shortterm: <>
					Some people experience a thumping headache, flushes, dizziness and nausea, and despite nitrites&apos; reputation for improving sex, they may prevent some men from getting an erection. There is also a small risk that a user will black out. Repeated use can cause a rash around the mouth and nose.
					</>,
				dependence: <>
					Nitrites do not lead to physical or psychological dependence, though some people may come to feel reliant on them in specific situations, particularly for having sex. Tolerance develops after two or three weeks of frequent use, but sensitivity is regained after a few days&apos; abstinence.
					</>,
				longterm: <>
					There are no known long-term adverse effects from inhaling nitrites.
					</>,
			},
			risks: <>
				Nitrites will burn the skin if spilled on it.
				<p />
				Nitrites can be fatal if swallowed, and should not be used at all by anyone with low blood pressure, a heart or breathing problem, or glaucoma. Using other stimulants at the same time greatly increases the risks.
				<p />
				Mixing nitrites with new drug Viagra, which is designed as a temporary cure for impotence, is highly dangerous and can be fatal, as both lower the blood pressure.
				</>,
			legal: <>
				It&apos;s not illegal to possess nitrites or to sell butyl nitrite. In theory only licensed chemists can sell amyl nitrite.
				</>,
		}} />
	</main>
	<Footer />
</>

export default ABCs;
