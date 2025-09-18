import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Drugs from '../Drugs';

const ABCs = () => <>
	<Header section="abcs_of_drugs" />
	<main className="etc">
		<Drugs data={{
			header: "Benzodiazepines (tranquillisers)",
			description: <>
				Benzodiazepines (benzos, tranx) are downers/depressants of a type called minor tranquillisers and hypnotics (sleeping pills). Common varieties/products include temazepam, diazepam (Valium), Librium, Ativan and Mogadon. They normally come as tablets or capsules that are swallowed.
				</>,
			background: <>
				Benzodiazepines were introduced in the 1960s and, because they are safer and have fewer unwanted side-effects, quickly replaced barbiturates as the main type of drug used to treat anxiety and insomnia. They are among the most widely prescribed drugs in the UK, though there have been concerns about inappropriate prescribing, and the number of prescriptions has fallen from an astounding 30 million in 1979 to about half that number in recent years. Non-medical use is not widespread, because these drugs do not generally have positive effects for those not suffering from anxiety or insomnia.
				</>,
			why: <>
				Benzodiazepines are mainly used to offset the after-effects of stimulants/uppers such as amphetamines, cocaine and ecstasy, but they are also used as a temporary replacement when opiates are not available. They can make you feel calm and relaxed. Higher doses can send you to sleep. The effects generally last between three and six hours.
				</>,
			whynot: {
				shortterm: <>
					Benzodiazepines can make you drowsy and forgetful, though these effects usually disappear with continued use. Fatal overdose is not impossible, but the difference between a dose that works and an overdose is much greater than with barbiturates.
					</>,
				dependence: <>
					There is a strong risk of psychological dependence with benzodiazepines, despite the fact that tolerance develops to the extent that they may produce almost none of the desired effects after a matter of months. There is also a risk of physical dependence – mild withdrawal symptoms, including insomnia, irritability, anxiety and vomiting may occur after several years&apos; use at prescribed doses. People who regularly use higher doses may experience more serious withdrawal symptoms including severe anxiety, panic attacks and convulsions. In extreme cases sudden withdrawal can be fatal.
					</>,
				longterm: <>
					Apart from the dangers of dependence and withdrawal, people have described long-term tranquilliser use as a &apos;chemical lobotomy&apos;, dulling perceptions and feelings.
					</>,
			},
			risks: <>
				Benzodiazepines can exaggerate the effects of alcohol, and mixing the two makes death from overdose much more likely.
				<p />
				Flunitrazepam (Rohypnol) – the drug implicated in &apos;date rape&apos; in the US - is sometimes offered as a substitute for temazepam, but it&apos;s much stronger and so carries a higher risk of overdose.
				</>,
			legal: <>
				Benzodiazepines are Class C drugs – all are illegal to supply but not to possess, with the exception of temazepam, which was made illegal to possess without a prescription because of a growing trend for injecting it.
			</>,
		}} />
	</main>
	<Footer />
</>

export default ABCs;
