import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Drugs from '../Drugs';

const ABCs = () => <>
	<Header section="abcs_of_drugs" />
	<main className="etc">
		<Drugs data={{
			header: "Cocaine/crack",
			image: {
				alt: "cocaine",
				src: "https://v1.jazzbutcher.com/images/abcs_of_drugs/crack.gif",
				width: 200,
				height: 198,
			},
			description: <>
				Cocaine (coke, charlie, snow, C) is a powerful stimulant/upper made from the leaves of the coca plant. It usually takes the form of a white powder, which can be injected or smoked with tobacco but is usually snorted up the nose.
				<p />
				Freebase is cocaine treated with chemicals to make it more suitable for smoking. Crack (crack, wash, rock, stone) is a form of freebase cocaine that comes in small rocks or pellets.
				</>,
			background: <>
				There is a long tradition of chewing coca leaves in the areas of South America where the plant grows. Cocaine was first extracted at the end of the last century, and it became a popular stimulant and tonic - for years, Coca-Cola contained small amounts of the drug. Sigmund Freud believed it could be used to treat depression and addiction. Cocaine has also been widely used as a local anaesthetic, and is still sometimes used in surgery. In the UK it was first controlled during the First World War, after rumours that troops were taking it.
				<p />
				Cocaine became popular in the music and entertainment industries in the 1970s and with &apos;yuppies&apos; in the 1980s. However, it has also come to be more widely used. An estimated 2% of the adult population (nearly three-quarters of a million people) have used it at some point.
				</>,
			why: <>
				Cocaine can make you feel elated, positive, confident and alert – strong both mentally and physically. The effects are in many ways similar to those of amphetamines, but cocaine wears off much more quickly – in less than two hours – and it&apos;s considered a smoother or more subtle drug. All the same it&apos;s a powerful stimulant, speeding up the heart and breathing. Some people say it improves sex.
				<p />
				The effects of crack are both more intense and more shortlived, lasting only a matter of minutes.
				</>,
			whynot: {
				shortterm: <>
					Sometimes people feel anxious and panicky while under the influence of cocaine, and any negative feelings will be worse with high doses or repeated doses. If you smoke a lot of crack over a short period, anxiety and paranoia can be still more intense, and you may become wildly overexcited and hyperactive. Overdose on cocaine or crack, leading to a heart attack or a stroke, is possible but rare.
					<p />
					After the effects wear off, people often feel tired and hungry and may also feel agitated, anxious, paranoid or depressed. Taking large amounts or smaller amounts in quick succession (and there&apos;s a great temptation to go back for more, because the effects wear off so quickly) make the come-down worse. However, the after-effects are not considered to be as bad as those of amphetamines.
					<p />
					Despite cocaine&apos;s reputation for going well with sex, some men find it difficult to get an erection or come after using the drug.
					</>,
				dependence: <>
					Cocaine does not lead to physical dependence – there are no heroin-type withdrawal symptoms if you stop taking it. But you can become psychologically dependent on the high and, as with amphetamines, a craving for the positive effects may be reinforced by a desire to escape the negative after-effects. Smoking crack is more likely to lead to dependence, because both the positive and the negative effects are more intense, and because crack wears off even more quickly, encouraging people to smoke it at frequent intervals.
					</>,
				longterm: <>
					Frequent long-term use of cocaine and crack can make people chronically anxious, excitable, paranoid and unable to sleep. As with amphetamines, loss of sleep and appetite can also leave long-term users very run down.
					</>,
			},
			risks: <>
				Many of the special risks of amphetamines also apply to cocaine. In addition:
				<p />
				Cocaine is expensive and the effects are shortlived, so even occasional users can seriously damage their bank balances.
				<p />
				Mixing cocaine and downers, especially heroin, to make a &apos;speedball&apos; is extremely dangerous.
				<p />
				Snorting cocaine frequently can permanently damage the inside of your nose.
				<p />
				Smoking crack can damage the lungs over time.
				</>,
			legal: <>
				Cocaine is a Class A drug.
				</>,
		}} />
	</main>
	<Footer />
</>

export default ABCs;
