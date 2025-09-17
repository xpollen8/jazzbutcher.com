import Link from 'next/link'
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
			<Image style={{ float: 'right', paddingLeft: '5px' }} alt="pills" src="https://v1.jazzbutcher.com/images/abcs_of_drugs/pills.gif" width={255} height={266} />
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
				<Link href="/abcs_of_drugs/intro">Introduction</Link><br />
				<Link href="/abcs_of_drugs/intro_safety">Drugs and general safety</Link><br />
				<Link href="/abcs_of_drugs/intro_difficulties">What to do if someone is in difficulties</Link><br />
				<Link href="/abcs_of_drugs/intro_addiction">What is drug dependence/addiction?</Link><br />
				<Link href="/abcs_of_drugs/intro_groups">Drug groups</Link>
				<p />
				<hr />
				<p />
				<Link href="/abcs_of_drugs/alcohol">Alcohol</Link><br />
				<Link href="/abcs_of_drugs/amphetamines">Amphetamines (speed)</Link><br />
				<Link href="/abcs_of_drugs/anabolic_steroids">Anabolic steroids</Link><br />
				<Link href="/abcs_of_drugs/barbiturates">Barbiturates</Link><br />
				<Link href="/abcs_of_drugs/benzodiazepines">Benzodiazepines (tranquillisers)</Link><br />
				<Link href="/abcs_of_drugs/caffeine">Caffeine</Link><br />
				<Link href="/abcs_of_drugs/cannabis">Cannabis</Link><br />
				<Link href="/abcs_of_drugs/cocaine_crack">Cocaine/crack</Link><br />
				<Link href="/abcs_of_drugs/ecstasy">Ecstasy</Link><br />
				<Link href="/abcs_of_drugs/GHB">GHB</Link><br />
				<Link href="/abcs_of_drugs/heroin">Heroin, methadone and other opiates</Link><br />
				<Link href="/abcs_of_drugs/ketamine">Ketamine</Link><br />
				<Link href="/abcs_of_drugs/LSD">LSD</Link><br />
				<Link href="/abcs_of_drugs/mushrooms">Magic mushrooms</Link><br />
				<Link href="/abcs_of_drugs/poppers">Nitrites (poppers)</Link><br />
				<Link href="/abcs_of_drugs/solvents">Solvents/glues and gases</Link><br />
				<Link href="/abcs_of_drugs/tobacco">Tobacco/nicotine</Link>
				<p />
				<hr />
				<p />
				<Link href="/abcs_of_drugs/law">Drugs and the law </Link><br />
				<Link href="/abcs_of_drugs/law_information">Sources of help and further information </Link>
			</div>
		</Drugs>
	</main>
	<Footer />
</>

export default ABCs;
