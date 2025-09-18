import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Drugs from '../Drugs';

const ABCs = () => <>
	<Header section="abcs_of_drugs" />
	<main className="etc">
		<Drugs data={{
			header: 'GHB',
			description: <>
				Gammahydroxybutyrate (GHB, but known as GBH or liquid E on the street) is an anaesthetic/sedative usually sold as a clear liquid in plastic bottles, which is swallowed, but it occasionally comes as capsules or a powder. It was originally used to put people to sleep before an operation.	
				</>,
			why: <>
				Small amounts of GHB make you feel relaxed, happy and less inhibited. Some people say that the effects are rather like those of ecstasy, though the drug is not a stimulant/upper and has more in common with a depressant/downer such as alcohol. Larger amounts lead to drowsiness and sedation. The effects come on after about 10 minutes and can last a day or more
				<p />
				GHB has been used by body-builders because it encourages the secretion of growth hormone by the brain.
				</>,
			whynot: {
				shortterm: <>
					High doses can lead to confusion, nausea, vomiting, stiffness, convulsions, collapse, coma and even death by breathing failure. However, there are no recorded cases of deaths from overdose.
					</>,
				longterm: <>
					Both physical and psychological dependence are possible, but there has been no research into the long-term effects of the drug.
					</>,
			},
			risks: <>
				The difference between a dose that produces the desired effects and an overdose is very small with GHB.
				<p />
				Using GHB with other downers – including alcohol – is particularly dangerous.
				<p />
				There is no way of knowing the strength of GHB, and it may contain dangerous impurities. Testing a very small amount may reduce the risks.
				</>,
			legal: <>
				GHB is not a controlled drug, but it&apos;s classed as a medicine, so production and supply could be illegal.
			</>
		}} />
	</main>
	<Footer />
</>

export default ABCs;
