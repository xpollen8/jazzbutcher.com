import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Drugs from '../Drugs';

const ABCs = () => <>
	<Header section="abcs_of_drugs" />
	<main className="etc">
		<Drugs data={{
			header: "Alcohol",
			image: {
				alt: "drink",
				src: "https://v1.jazzbutcher.com/images/abcs_of_drugs/alcohol.gif",
				width: 200,
				height: 249,
			},
			description: <>
				Ethyl alcohol or ethanol, the type of alcohol found in drinks, is a depressant/downer produced by fermenting or distilling fruits, vegetables or grains. As a very rough guide, beer contains between 3.5% and 9% ethanol by volume, wine between 10% and 14%, and spirits 35–40%. The main effects of drinking depend on the amount of alcohol consumed rather than the type of drink, though many drinkers say that drinks vary in their effects. Weight, metabolism, how much you have eaten, how quickly you&apos;re drinking and how much you usually drink also affect how drunk you get on a given amount of alcohol. On average, women get drunk more quickly than men, partly because they tend to weigh less and partly because water forms a lower proportion of their body weight, so that the same amount of alcohol produces a higher concentration in the blood.
				</>,
			background: <>
				Alcohol has been widely used for social and religious purposes for thousands of years. Alcohol-related legislation in the UK dates from the late 19th century, when age restrictions were introduced. Restrictions on when alcohol could be sold were imposed during the First World War, to try to make sure workers in essential industries weren&apos;t drunk or hung-over.
				<p />
				More than 90% of the adult population drink alcohol.
				</>,
			why: <>
				The way alcohol affects you depends to quite a large extent on personality, mood and circumstances. The main desirable effects are that it can relieve tension, reduce anxiety and produce feelings of warmth and contentment. It also reduces inhibitions, acting as a social lubricant and giving you &apos;Dutch courage&apos;. Of course, people also like the taste of alcoholic drinks.
				<p />
				The effects come on after about 10 minutes and can last for several hours if you drink a large amount.
				</>,
			whynot: {
				shortterm: <>
					Losing your inhibitions is a good thing only up to a point, as many people have realised to their cost the morning after. In addition, emotional reactions when you&apos;re drunk can be very unpredictable. Some people become aggressive or tearful after only a couple of drinks, and the larger the amount, the more exaggerated these reactions can be. A great deal of violence is associated with alcohol. Also, the more you drink, the less well your brain and body work. Symptoms include slurring of speech, staggering, loss of memory and comprehension, and eventually unconsciousness. Fatal overdose is possible, though people who don&apos;t normally drink much will probably start throwing up well before levels become life-threatening, as long as they&apos;re not drinking very quickly. However, inhalation of vomit while someone is asleep or unconscious can also be fatal.
					<p />
					Hangovers are due partly to poisoning by alcohol and other constituents of drinks and partly to short-term withdrawal. Symptoms include headache (caused by dehydration), the shakes, tiredness, nausea, vomiting, depression and anxiety. Many people say certain drinks produce worse hangovers than others, and that mixing grape and grain (for example wine and beer) leads to the mother of them all. However, the amount of alcohol you consume is by far the most important factor.
				</>,
				dependence: <>
					Psychological dependence on alcohol can occur with the daily use of even moderate amounts. Alcohol can also lead to physical dependence, so that sudden withdrawal produces sweating, anxiety, the shakes, and nausea and vomiting. In severe cases, delirium (delirium tremens or the DTs), hallucinations, convulsions and even death are possible from withdrawal. According to the organisation Alcohol Concern, nearly 1 in 10 male drinkers and 1 in 20 female drinkers show psychological or physical signs of alcohol dependence.</>,
				longterm: <>
					Long-term alcohol use can directly harm most parts of the body. In particular, it often leads to heart and liver disease and inflammation of the stomach. The risk of serious disease increases in proportion to the amount you drink, though some people are naturally more resilient than others. Other problems include loss of appetite, vitamin deficiencies, infection, impotence and menstrual irregularity.
					<p />
					In addition, almost all drinkers seeking help say they feel anxious and depressed. These symptoms are likely to be made worse by other problems associated with alcohol dependence, such as strains on finances and relationships.
				</>
			},
			risks: <>
				It&apos;s particularly dangerous to combine alcohol with other downers/depressants, or with ecstasy or amphetamines in hot clubs (because of the danger of dehydration). Drinking water or soft drinks reduces the risk of dehydration - but see Ecstasy: Special Risks.
				<p />
				Accidents are more likely if you&apos;re drunk.
				</>,
			legal: <>
				You need a licence to sell alcohol, and it&apos;s illegal to sell alcohol to someone under 18 or give it to a child under five. It&apos;s also an offence to be drunk in a public place or to drive with too much alcohol in your system (more than 80mg of alcohol per 100ml of blood).
				</>
		}} />
	</main>
	<Footer />
</>

export default ABCs;
