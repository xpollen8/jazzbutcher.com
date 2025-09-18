import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Drugs from '../Drugs';

const ABCs = () => <>
	<Header section="abcs_of_drugs" />
	<main className="etc">
		<Drugs data={{
			header: "Barbiturates",
			description: <>
				Barbiturates (barbs) are powerful downers/depressants of a type classed as hypnosedatives – drugs that sedate and, at higher doses, send you to sleep. They usually come in the form of tablets or coloured capsules, which are swallowed, but some people prepare barbiturates for injection. The commonest forms used illegally include Seconal, Tuinal and Nembutal.
				</>,
			background: <>
				Barbiturates have been around since the beginning of the 20th century and used to be widely prescribed to treat anxiety and sleeplessness. However, because of their associated risks, since the 1960s they have been largely supplanted by benzodiazepines. The widespread availability of benzodiazepines has also caused a decline in the illegal use of barbiturates.
				</>,
			why: <>
				Barbiturates have similar effects to alcohol. Small doses tend to make you feel relaxed, happy and sociable.
				</>,
			whynot: {
				shortterm: <>
					Larger doses will normally send you to sleep if you&apos;re inactive and in quiet surroundings, but if you&apos;re up and about they can lead to slurred speech, staggering, slowed reactions, confusion and intense, unpredictable emotions, including anxiety, depression and aggression. The breathing becomes more shallow and uneven, and overdose can cause death from breathing failure.
					</>,
				dependence: <>
					As with all sedatives, regular use carries a high risk of psychological dependence. Regular heavy users are also likely to experience withdrawal symptoms, including restlessness, anxiety, insomnia, irritability and, in extreme cases, delirium and convulsions. Sudden withdrawal from very high doses can be fatal.
					</>,
				longterm: <>
					Regular use leads to tolerance – you have to increase the amount you take to get the same effect. However, the amount needed to stop your breathing stays the same, so long-term, heavy users are at more risk of overdose. They also tend to be vulnerable to bronchitis and pneumonia.
					</>,
			},
			risks: <>
				The difference between a dose that works and a lethal dose is very small with barbiturates. As few as 10 pills can kill you. Partly for this reason, and partly because of the risk of skin abscesses and gangrene (if these drugs are injected into an artery by mistake), injecting barbiturates is considered one of the most dangerous forms of drug use.
				<p />
				Combining barbiturates with opiates and other downers, including alcohol, greatly increases the risks.
				<p />
				Heavy barbiturate use in the later stages of pregnancy can lead to withdrawal symptoms in newborn babies.
				</>,
			legal: <>
				Barbiturates are in Class B.
				</>,
		}} />
	</main>
	<Footer />
</>

export default ABCs;
