import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Drugs from '../Drugs';

const ABCs = () => <>
	<Header section="abcs_of_drugs" />
	<main className="etc">
		<Drugs data={{
			header: "Heroin, methadone and other opiates",
			image: {
				alt: "opiates",
				src: "https://v1.jazzbutcher.com/images/abcs_of_drugs/heroin.gif",
				width: 196,
				height: 219,
			},
			description: <>
				Heroin (smack, skag, H, junk, brown) is produced from morphine, which, like codeine, is produced from opium, which is in turn produced from the Asian poppy. These drugs are the natural opiates. There are also synthetic opiates, including dipipanone (Diconal), pethidine and methadone (Physeptone). All these drugs are painkillers but can also be broadly considered as depressants/downers.
				<p />
				Heroin is twice as powerful as morphine. When pure, it&apos;s a white powder, but street heroin tends to be brown. It can be snorted up the nose, injected in a solution or heated on tin foil and smoked (&apos;chasing the dragon&apos;). Opium is a brown, sticky solid, and is smoked or swallowed. Methadone (meth, linctus) usually comes as a green, syrupy liquid or as tablets, which are swallowed, or in ampoules for injection.
				</>,
			background: <>
				Opiates have been used for centuries. Laudanum – opium prepared in an alcoholic solution – was taken from the 16th century onwards as a painkiller and a cure for &apos;nerves&apos; and diarrhoea. Morphine was first extracted in a pure form in the early 19th century, and heroin was introduced at the end of the 19th century. Codeine and morphine are still commonly used as painkillers.
				<p />
				Opium legislation has a long history: the first restrictions were introduced in 1868. The current illegal market in heroin dates mainly from the 1960s and 1970s. According to government figures, up to 1% of the adult population (about a quarter of a million people) have used heroin at some point in their lives.
				</>,
			why: <>
				Heroin, like the other opiates, reduces pain, both physical and emotional. In the short term it stops you worrying and makes you feel safe, warm and contented. Physically, these drugs slow down the heart and breathing, and higher doses produce drowsiness. However, opiates impair mental and physical functioning less than true downers/depressants such as alcohol and tranquillisers.
				<p />
				Methadone does not produce such an intense high as heroin, but the effects last longer – up to 24 hours. For dependent heroin users, methadone is primarily used as a way of avoiding withdrawal symptoms.
				</>,
			whynot: {
				shortterm: <>
					First-time users may feel sick or actually throw up. With high doses, people can black out and even enter coma. Death from breathing failure is possible. The impurities of street heroin can lead to illness or death if the drug is injected. Death from methadone overdose is also a risk, particularly for people who haven&apos;t built up a tolerance.
					</>,
				dependence: <>
					Some people take heroin or other opiates on an occasional basis, but these drugs can be very difficult to control, particularly if you&apos;re using them because you feel troubled, anxious or unable to cope. Psychological dependence is the biggest risk, but after as little as a few weeks of frequent doses, users also experience physical withdrawal symptoms (&apos;cold turkey&apos;) if they stop using abruptly. These include a runny nose and sneezing, diarrhoea, vomiting, sweats, chills, cramps and insomnia. The desire to avoid these symptoms is an additional reason for continual use. Abrupt withdrawal from heroin is not considered as dangerous as abrupt withdrawal from alcohol, however.
					<p />
					Estimates put the number of people dependent on heroin at up to 200,000. Though methadone is used as a substitute for heroin, some dependent users say that methadone is harder to give up.
					</>,
				longterm: <>
					Opiates may stop you worrying about things you don&apos;t want to worry about, but they tend to make you care less about everything, including relationships, study, work and interests. It can also affect your motivation to look after yourself at a basic level, leading to general health problems. Men may experience impotence or loss of sex drive, and women may have irregular periods. Breathing problems and constipation are quite common. In addition, regular injecting in itself has many dangers.
					<p />
					Tolerance builds up, so that you have to increase the amount you take to get the same effect. However, after a while, the pleasurable effects may disappear altogether, and dependent users may find themselves taking the drug just to feel &apos;normal&apos;.
					</>,
			},
			risks: <>
				Sometimes unexpectedly pure heroin finds its way onto the streets, leading people to overdose. Testing a small amount of newly bought heroin may reduce the risk.
				<p />
				Using opiates with downers such as tranquillisers or alcohol can lead to coma or breathing failure.
				<p />
				Using opiates during pregnancy may result in your having an underweight baby, and newborn babies may suffer severe withdrawal symptoms.
				</>,
			legal: <>
				Heroin, morphine, opium, methadone, dipipanone and pethidine are all Class A. Codeine is Class B unless prepared for injection, in which case it&apos;s considered Class A.
				</>,
		}} />
	</main>
	<Footer />
</>

export default ABCs;
