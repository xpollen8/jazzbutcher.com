import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Drugs from '../Drugs';

const ABCs = () => <>
	<Header section="abcs_of_drugs" />
	<main className="etc">
		<Drugs >
			<b className="drugs_header">What is drug dependence/addiction?</b>
			<p />
			The vast majority of people who try drugs, or even use them repeatedly, do not become dependent on them. The question of why some people do become dependent is complicated. Different drugs have different potentials for leading to dependence, and this is dealt with under the separate headings for each drug or group of drugs. But the personality, state of mind and circumstances of the user - and the way they use a drug - are also crucial.
			<p />
			The words &apos;dependence&apos; and &apos;addiction&apos; are shorthand for a complex set of changes that can occur over time with repeated use of a drug. These changes involve the way someone thinks and behaves and the way in which their bodies adapt to and handle the drug. No one feature alone spells dependence, though individual features may be a clue or warning sign. Becoming dependent on a drug is often a long and subtle process, and it&apos;s difficult to identify the exact point at which repeated use slips into dependence.
			<p />
			People who are dependent on a drug continue to use it despite clear and repeated evidence that it&apos;s causing significant problems. They also spend increasing amounts of time obtaining the drug, taking it and recovering from it. Their thoughts tend to be dominated by a craving for the drug, which often results in neglect of their health, family and work. They may make repeated unsuccessful attempts to cut down their use or stop using altogether. All of this points to the main feature of drug dependence - a loss of control over drug taking. The drug is controlling the person rather than the other way around.
			<p />
			By the time this happens, a drug user&apos;s body has often (but not invariably) developed increased tolerance for the drug and also shows characteristic withdrawal symptoms if they stop taking a drug or reduce their consumption.
			<p />
			Tolerance to a drug means that someone gradually needs more to get the same effect. Over time this can result in their taking doses that would harm or even kill an inexperienced user.
			<p />
			Withdrawal symptoms result from the fact that the body has adapted to the presence of the drug, so it reacts to its absence. The characteristic withdrawal symptoms associated with alcohol, for instance, include the shakes, sickness and sweats. With heroin they include chills and sweats, cramps and aches and pains. These symptoms can be severe enough for people to want to make sure their bodies are never without the drug for too long. The early morning drink for someone dependent on alcohol is one example of this; a dependent heroin user&apos;s sometimes desperate search for the next fix is another.
		</Drugs>
	</main>
	<Footer />
</>

export default ABCs;
