import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Drugs from '../Drugs';

const ABCs = () => <>
	<Header section="abcs_of_drugs" />
	<main className="etc">
		<Drugs data={{
			header: "Drug groups"
		}}>
			<p />
			Not all the drugs listed fit neatly into these categories, but many can be broadly classed as:
			Depressants, which reduce brain activity (for example alcohol, gases and glues, tranquillisers)
			<p />
			Stimulants, which increase brain activity (for example cocaine, amphetamines, ecstasy, nitrites, anabolic steroids, nicotine)
			<p />
			Hallucinogens, which alter the way you perceive things (for example LSD, magic mushrooms, cannabis)
			<p />
			Analgesics, which reduce physical and emotional pain (for example heroin and other opiates)
		</Drugs>
	</main>
	<Footer />
</>

export default ABCs;
