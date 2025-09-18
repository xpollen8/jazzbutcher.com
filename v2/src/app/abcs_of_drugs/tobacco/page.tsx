import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Drugs from '../Drugs';

const ABCs = () => <>
	<Header section="abcs_of_drugs" />
	<main className="etc">
		<Drugs data={{
			header: "Tobacco/nicotine",
			image: {
				alt: "nicotine",
				src: "https://v1.jazzbutcher.com/images/abcs_of_drugs/fags.gif",
				width: 200,
				height: 209,
			},
			description: <>
				Tobacco is the dried leaves of the plant Nicotiana tabacum. The drug it contains, nicotine, is a mild stimulant/upper.
				</>,
			background: <>
				Tobacco was first introduced into the UK in the 16th century. Increasing concerns (especially in the second half of this century) about the damage tobacco can do to health have been offset by the money it generates, not least for the government. However, there are now restrictions on advertising and, increasingly, on smoking in public places.
				<p />
				The UK General Household Survey in 1994/5 estimated that 28% of men and 26% of women smoked.
				</>,
			why: <>
				Nicotine stimulates the central nervous system and raises the heart rate and breathing rate, helping you keep going and maintain concentration. But paradoxically, smokers usually feel that the main effect is to relax them and reduce stress. As with drinking alcohol and smoking cannabis, people also enjoy the taste and sensation of smoking tobacco.
				<p />
				Nicotine acts almost instantaneously, and the levels decline very rapidly.
				</>,
			whynot: {
				shortterm: <>
					Nicotine is particularly habit-forming because of the brevity of the effects and because tolerance develops rapidly. A remarkably high proportion of people who start smoking go on to become psychologically dependent. Sudden withdrawal can cause symptoms such as headaches and insomnia as well as anxiety, depression and a craving to smoke.
					</>,
				longterm: <>
					Tobacco contains more than 4000 chemicals, many of which damage health. The well-documented risks include bronchitis, emphysema, lung cancer, heart disease, blood clots and ulcers. The risks increase in proportion to how much you smoke and how long ago you started.
					</>,
			},
			risks: <>
				Women who smoke during pregnancy tend to have underweight babies.
				<p />
				Women who both smoke and take the pill are more likely to develop blood clots and heart disease.
				</>,
			legal: <>
				It&apos;s illegal to sell tobacco to people under 16, though it&apos;s legal for people under 16 to buy and smoke it – only the seller can be prosecuted.
				</>,
			}}
		/>
	</main>
	<Footer />
</>

export default ABCs;
