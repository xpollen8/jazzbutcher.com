import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Drugs from '../Drugs';

const ABCs = () => <>
	<Header section="abcs_of_drugs" />
	<main className="etc">
		<Drugs data={{
			header: "Caffeine",
			description: <>
				In its pure form, the stimulant/upper caffeine is a white powder. Caffeine is found in coffee and (in lesser concentrations) in tea. It&apos;s also a constituent of some soft drinks.
				</>,
			background: <>
				Coffee spread into Europe from north-east Africa via Arabia and Turkey, reaching the UK at the beginning of the 17th century. Coffee houses soon became popular as a meeting place for men, and licensing restrictions were imposed as a result of concern that such places encouraged political discussion and activity. A belief that coffee made men impotent led to a campaign against it. By the end of the 17th century, coffee had been largely superseded by tea as the fashionable non-alcoholic drink.
				<p />
				Caffeine is now taken by far more people than any other drug. Medicinally, it is used as a mild stimulant and in painkillers.
				</>,
			why: <>
				Caffeine speeds up the heart and breathing, reducing fatigue and aiding concentration. The effects come on about five minutes after it enters the system and last for several hours. Of course, people also drink coffee and tea socially, as a focus for breaks from work and other activities, and because they like the taste.
				</>,
			whynot: {
				shortterm: <>
					Caffeine can stop you getting to sleep, and even if you don&apos;t lose sleep, when the effects wear off you may feel more tired than you would have done otherwise. In large amounts caffeine can make you feel restless and anxious and give you a headache, the shakes and an upset stomach. Very large amounts can even lead to delirium and convulsions.
					</>,
				dependence: <>
					Some people feel psychologically dependent on caffeine, and there are also withdrawal symptoms, including fatigue, headaches, anxiety, depression and irritability.
					</>,
				longterm: <>
					People who consume a lot of caffeine on a daily basis may generally feel anxious, depressed and irritable and suffer from headaches and the shakes. High caffeine levels in the long term may also aggravate high blood pressure and stomach conditions.
					</>,
			},
			legal: <>
				There are no legal restrictions on caffeine.
				</>,
		}} />
	</main>
	<Footer />
</>

export default ABCs;
