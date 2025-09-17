import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Drugs from '../Drugs';

const ABCs = () => <>
	<Header section="abcs_of_drugs" />
	<main className="etc">
		<Drugs data={{
			header: "Cannabis",
			image: {
				alt: "cannabis",
				src: "https://v1.jazzbutcher.com/images/abcs_of_drugs/cannabis.gif",
				width: 200,
				height: 159,
			},
			description: <>
				Cannabis (puff, draw, dope, blow, spliff and so on) comes from the plant Cannabis sativa. Broadly speaking it can be classed as a hallucinogen which alters perceptual function, but it is also a relaxant. The main psychoactive ingredient is a tetrahydrocannabinol (THC) – delta-9-tetrahydrocannabinol, to be precise. Cannabis is sold in two main forms – marijuana and resin.
				<p />
				Marijuana (grass, bush, weed, herb) is the dried leaves and flowers of the plant. It can be smoked on its own in a pipe or in a joint/spliff, but in the UK is normally mixed with tobacco. Particularly strong varieties, including Skunk, Purple Haze and Northern Lights, are now quite widely available. Sinsemilla, made from the flowering tops of an unfertilised female plant, is also very strong.
				<p />
				Cannabis resin or hashish (hash) is a brown or greenish-brown solid. It&apos;s stronger than standard varieties of grass. It can be eaten but is usually smoked with tobacco or neat in a pipe. A dark, sticky, powerful oil can be made from the resin, but cannabis oil is not common in the UK.
				</>,
			background: <>
				Cannabis was used both medically and for pleasure in ancient China and later in India. In the UK it was first legally controlled in 1928, though its widespread use as a recreational drug has later origins, in the 1950s and 1960s. The medical use of cannabis was banned in 1973, despite evidence that the drug can relieve muscular spasm in multiple sclerosis and glaucoma as well as nausea in patients undergoing drug treatment for cancer. Cannabis can also be used as an appetite stimulant.
				<p />
				Cannabis is the most popular illegal drug in the UK. Recent surveys suggest that, by their mid twenties, about two in five young people will have used it. Partly for this reason, and partly because there is no conclusive evidence that in itself it has significant ill effects, the illegal status of this drug in particular is controversial.
				</>,
			why: <>
				Many people enjoy the taste of cannabis smoke and the rituals associated with using it, just as they do with alcohol. As far as the effects are concerned, small amounts can make you feel relaxed, happy, talkative and giggly. Many users also feel that their senses are heightened, particularly with reference to colours and music. With large amounts, or very strong cannabis, there may be mild, pleasurable hallucinations of colours, patterns and slight movement in objects. The effects can last several hours. If you eat hashish, the effects come on more slowly and last longer.
				</>,
			whynot: {
				shortterm: <>
					Cannabis can make you anxious, panicky, paranoid, confused or depressed, particularly if you&apos;re very stoned. Short-term memory loss and difficulty in concentration are also common. It&apos;s possible that the drug may aggravate existing mental disorders.
					</>,
				dependence: <>
					Cannabis does not produce physical dependence, but psychological dependence is possible.
					</>,
				longterm: <>
					It&apos;s likely that smoking cannabis, like smoking tobacco, can cause bronchitis and other breathing disorders, and it&apos;s certainly true that people who smoke a lot of joints with tobacco are damaging their lungs more than people who smoke filtered cigarettes.
					<p />
					Some people say they suffer from general anxiety, paranoia or depression as a result of regular, long-term use of cannabis, and certain people who are stoned all the time tend to be lethargic and not at their sharpest mentally. However, there is no conclusive evidence that cannabis causes any lasting damage to mental or physical health. Long-term cannabis smoking has been linked with cancers, but the link is disputed. Similarly, there is conflicting evidence on whether frequent cannabis use in pregnancy can lead to premature birth.
					<p />
					There is also controversy about whether cannabis use leads to other drug use. It&apos;s statistically true that cannabis users are more likely to take other drugs, as are people who smoke tobacco or drink. But there is no evidence of a causal link.
					</>,
			},
			legal: <>
				Cannabis is a Class B drug.
				</>,
		}} />
	</main>
	<Footer />
</>

export default ABCs;
