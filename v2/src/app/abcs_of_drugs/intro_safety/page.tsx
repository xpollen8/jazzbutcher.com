import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Drugs from '../Drugs';

const ABCs = () => <>
	<Header section="abcs_of_drugs" />
	<main className="etc">
		<Drugs data={{
			header: "Drugs and general safety",
		}} >
			<p />
			All drugs, legal and illegal, have side-effects and may involve risks. The special problems associated with different types of drugs are dealt with under the drugs&apos; individual headings. However, some risks apply more or less across the board or are associated with the way drugs are taken.
			<p />
			Taking drugs on your own increases the risks. If you get into difficulties or simply have a bad time, friends may be able to help.
			<p />
			Though it may be tempting to take drugs (including alcohol) when you feel anxious, depressed or unable to cope, they may make you feel worse, particularly in the longer term. Also, if you&apos;re using drugs as a way of escaping from problems, you&apos;re more likely to become dependent.
			<p />
			Some drugs can alter the way you approach, negotiate and enjoy sex. But always remember that unprotected sex carries risks of unwanted pregnancy and infection with HIV and other sexually transmitted diseases.
			<p />
			Some drugs affect your ability to perform mental and physical tasks more than others, but they all change your mental or physical state to some degree. The only safe rule is not to drive, operate heavy machinery, or do anything that may put yourself or others at physical risk when you&apos;re under the influence of illegal drugs or alcohol. Consult your doctor or chemist if in doubt about prescription or over-the-counter medicines.
			<p />
			Drugs can affect unborn babies. You should get advice on any drugs you are taking, legal or illegal, if you&apos;re pregnant.
			<p />
			Mixing drugs (including alcohol or prescription medicines with illegal drugs) can be particularly dangerous.
			<p />
			Injecting is without doubt the most dangerous way of taking drugs. This is partly because it&apos;s easier to take an overdose if you inject, but also because of the risk of contracting HIV and hepatitis through sharing injecting equipment. People who inject drugs should therefore never share equipment. There are also particular dangers in injecting crushed tablets. For more information about safe injecting, contact one of the organisations listed in sources of help.
		</Drugs>
	</main>
	<Footer />
</>

export default ABCs;
