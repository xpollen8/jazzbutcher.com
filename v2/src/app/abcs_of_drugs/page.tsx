import MyLink from '@/components/MyLink';
import Image from 'next/image'
import './style.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Drugs from './Drugs';

const ABCs = () => 
<>
	<Header section="abcs_of_drugs" />
	<main className="etc">
		<Drugs >
			<Image className="drugs_image" alt="pills" src="https://v1.jazzbutcher.com/images/abcs_of_drugs/pills.gif" width={255} height={266} />
			More and more people are using illegal drugs. Cannabis is by far the most popular, but many young people also take drugs such as LSD, amphetamines and ecstasy as a normal part of their social lives, much as other people have a few drinks.
			<p />
			One reason for this may be that a drug&apos;s legal status is a poor guide to its safety. For instance, alcohol, like heroin, can lead to serious personal and social problems, serious damage to mental and physical health and even death. Or, to compare illegal drugs, the Misuse of Drugs Act puts ecstasy and heroin in the same class, but heroin carries a far greater risk of dependence and associated problems.
			<p />
			So the need for straightforward information about both legal and illegal drugs is clear. This Website explains what the various drugs are, why people use them, and why they might wish they hadn&apos;t. There are also sections on the law and on general safety, and an extensive list of sources of advice and further information.
			<p />
			<hr />
			<p />
			<b className="drugs_header">Contents</b>
			<p />
			<div className="drugs_contents">
				<MyLink href="/abcs_of_drugs/intro">Introduction</MyLink><br />
				<MyLink href="/abcs_of_drugs/intro_safety">Drugs and general safety</MyLink><br />
				<MyLink href="/abcs_of_drugs/intro_difficulties">What to do if someone is in difficulties</MyLink><br />
				<MyLink href="/abcs_of_drugs/intro_addiction">What is drug dependence/addiction?</MyLink><br />
				<MyLink href="/abcs_of_drugs/intro_groups">Drug groups</MyLink>
				<p />
				<hr />
				<p />
				<MyLink href="/abcs_of_drugs/alcohol">Alcohol</MyLink><br />
				<MyLink href="/abcs_of_drugs/amphetamines">Amphetamines (speed)</MyLink><br />
				<MyLink href="/abcs_of_drugs/anabolic_steroids">Anabolic steroids</MyLink><br />
				<MyLink href="/abcs_of_drugs/barbiturates">Barbiturates</MyLink><br />
				<MyLink href="/abcs_of_drugs/benzodiazepines">Benzodiazepines (tranquillisers)</MyLink><br />
				<MyLink href="/abcs_of_drugs/caffeine">Caffeine</MyLink><br />
				<MyLink href="/abcs_of_drugs/cannabis">Cannabis</MyLink><br />
				<MyLink href="/abcs_of_drugs/cocaine_crack">Cocaine/crack</MyLink><br />
				<MyLink href="/abcs_of_drugs/ecstasy">Ecstasy</MyLink><br />
				<MyLink href="/abcs_of_drugs/GHB">GHB</MyLink><br />
				<MyLink href="/abcs_of_drugs/heroin">Heroin, methadone and other opiates</MyLink><br />
				<MyLink href="/abcs_of_drugs/ketamine">Ketamine</MyLink><br />
				<MyLink href="/abcs_of_drugs/LSD">LSD</MyLink><br />
				<MyLink href="/abcs_of_drugs/mushrooms">Magic mushrooms</MyLink><br />
				<MyLink href="/abcs_of_drugs/poppers">Nitrites (poppers)</MyLink><br />
				<MyLink href="/abcs_of_drugs/solvents">Solvents/glues and gases</MyLink><br />
				<MyLink href="/abcs_of_drugs/tobacco">Tobacco/nicotine</MyLink>
				<p />
				<hr />
				<p />
				<MyLink href="/abcs_of_drugs/law">Drugs and the law </MyLink><br />
				<MyLink href="/abcs_of_drugs/law_information">Sources of help and further information </MyLink>
			</div>
		</Drugs>
	</main>
	<Footer />
</>

export default ABCs;
