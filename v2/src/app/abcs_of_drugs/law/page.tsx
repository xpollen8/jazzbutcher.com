import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Drugs from '../Drugs';

const ABCs = () => <>
	<Header section="abcs_of_drugs" />
	<main className="etc">
		<Drugs data={{
			header: "Drugs and the law",
		}} >
			<p />
			The law on drugs is complicated, and sentencing is even more so. If you need advice or more detailed information, phone Release
			<p />
			The Misuse of Drugs Act divides illegal drugs into three main classes – A, B and C.

			<p /><b className="drugs_subheader">Class A</b><p />
			drugs (which include cocaine, crack, ecstasy, heroin, methadone, LSD, &apos;prepared&apos; magic mushrooms, and amphetamines prepared for injection) can attract a maximum penalty of seven years in prison and/or a fine for possession, and life in prison and/or a fine for supply.

			<p /><b className="drugs_subheader">Class B</b><p />
			drugs (which include amphetamines, cannabis and barbiturates) can attract a maximum penalty of five years in prison and/or a fine for possession, and 14 years in prison and/or a fine for supply.

			<p /><b className="drugs_subheader">Class C</b><p />
			drugs (which include anabolic steroids and tranquillisers) can attract a maximum of five years in prison and/or a fine for supply. It is not illegal to possess anabolic steroids and tranquillisers (except temazepam, which can attract a maximum penalty of two years in prison and/or a fine).
			<p />
			However, what actually happens to you if you get caught varies according to the quantity of the drug, the attitude of the local police and courts and whether – and how many times – you&apos;ve been caught before. The following are very broad guidelines.
			<p />
			If you are caught for the first time in possession of small amount of any drug, the police may do nothing, give you a warning, give you a formal caution (which means you&apos;ll have a criminal record) or prosecute you. You&apos;re more likely to be prosecuted if you&apos;re caught with a Class A drug, but if you are prosecuted for a first possession offence, even for a Class A drug, you&apos;ll probably only be fined.
			<p />
			Supply and possession with intent to supply are taken much more seriously, and it&apos;s important to realise that you can be charged with these offences simply for sharing your drugs or going to collect drugs for a group of friends who have pooled money.


			<p /><b className="drugs_subheader">Your rights</b><p />

			If you&apos;re arrested, you have the right to talk to a solicitor before answering any questions. In fact, you don&apos;t have to answer questions at all, though this might count against you later, and being polite is definitely a good idea. If you don&apos;t know a solicitor, you can ask for the duty solicitor or ring the Release helpline
			<p />
			You also have the right to ask the police to let a friend or relative know that you have been arrested.
			<p />
			If you&apos;re under 17, the police should not question you in the absence of your parents or guardians.
			<p />
			The police can hold you for a maximum of 24 hours, or 36 hours for a serious offence, at the end of which they must either charge you, let you go, or apply to a court to hold you for longer.
		</Drugs>
	</main>
	<Footer />
</>

export default ABCs;
