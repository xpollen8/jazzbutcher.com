import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Drugs from '../Drugs';

const ABCs = () => <>
	<Header section="abcs_of_drugs" />
	<main className="etc">
		<Drugs data={{
			header: "Ketamine",
			description: <>
				Like GHB, ketamine (special K, vitamin K, K) is an anaesthetic, but it also acts as a hallucinogen and painkiller. It&apos;s occasionally sold as a liquid for injection but usually comes as a powder or as tablets. Ketamine tablets are sometimes passed off as ecstasy.
				</>,
			why: <>
				As with other drugs with hallucinogenic properties, the experience of taking ketamine varies according to mood, personality and circumstances. There may be an initial speedy rush, after which effects include visual hallucinations and distortion of hearing, and a feeling of being detached – both from your body and from things around you.
				<p />
				If the drug is swallowed, the effects come on after about 20 minutes. They last for up to three hours.
				</>,
			whynot: {
				shortterm: <>
					The possible unpleasant effects of ketamine are pretty much as you&apos;d expect from an anaesthetic – numbness, slurred speech, blurred vision, confusion, lack of co-ordination and even paralysis. You may feel sick or throw up, especially if you&apos;ve eaten within a few hours of taking the drug. Some people say ketamine makes them aggressive. The higher the dose, the greater the risk of serious unpleasant effects, and overdose can result in heart or breathing failure. However, deaths from overdose are rare.
					</>,
				dependence: <>
					Ketamine does not produce physical dependence, but there is a risk of psychological dependence.
					</>,
				longterm: <>
					There has been little research into the long-term effects of ketamine, though one study has suggested that memory, vision and concentration may be affected.
					</>,
			},
			risks: <>
				It&apos;s particularly dangerous to mix ketamine with other downers/depressants, including alcohol.
				<p />
				Ketamine increases the risk of physical injury, both because it affects co-ordination and because you feel less pain.
				</>,
			legal: <>
				Possession of ketamine is not illegal, but it can only be legally supplied on prescription.
				</>,
		}} />
	</main>
	<Footer />
</>

export default ABCs;
