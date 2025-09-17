import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Drugs from '../Drugs';

const ABCs = () => <>
	<Header section="abcs_of_drugs" />
	<main className="etc">
		<Drugs data={{
			header: "Anabolic steroids",
			image: {
				alt: "steroids",
				src: "https://v1.jazzbutcher.com/images/abcs_of_drugs/steroids.gif",
				width: 196,
				height: 184,
			},
			description: <>
				Most synthetic anabolic steroids (&apos;roids) are derived from the male sex hormone testosterone. Their trade names include Anadrol, Anavar, Durabolin, Dianabol, Stanozolol and Sustanon. They are swallowed or injected. Medically, they are used to treat thrombosis (the clotting of blood vessels) and anaemia and to help build up wasted muscles after illness.
				</>,
			why: <>
				As well as directly helping to build up muscles, in combination with exercise and the right diet, anabolic steroids also appear to increase aggression, so that body-builders and athletes (including anyone who is highly motivated to work out and get fitter) can train harder. Many users also believe that they directly improve athletic performance, though this is disputed. Anabolic steroids can also increase the sex drive.
				</>,
			whynot: {
				shortterm: <>
					Some users have claimed that anabolic steroids can lead to extreme aggression and violence - so-called &apos;roid rage&apos;.
					</>,
				dependence: <>
					Athletes and body-builders may come to feel psychologically dependent on anabolic steroids, and withdrawal can lead to tiredness and depression.
					</>,
				longterm: <>
					Research suggests that long-term use may cause acne, the shakes, liver and kidney problems and high blood pressure. Anabolic steroids can also stop young people from growing properly. In men, long-term use may shrink the testicles, reduce both the sex drive and the sperm count and lead to the development of breasts. Women may grow facial hair and develop a deep voice. Psychological problems including mood swings, depression, general irritability and paranoia have also been reported.
					</>,
			},
			risks: <>
				Taking anabolic steroids with stimulants/uppers can be dangerous.
				<p />
				Many anabolic steroids are made in illegal laboratories, so their purity and strength is not reliable.
				</>,
			legal: <>
				Anabolic steroids that have not been prescribed are in Class C, amongst a number of drugs in that class that you can legally possess but not supply.
			</>,
		}} />
	</main>
	<Footer />
</>

export default ABCs;
