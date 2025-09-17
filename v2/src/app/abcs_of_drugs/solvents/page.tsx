import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Drugs from '../Drugs';

const ABCs = () => <>
	<Header section="abcs_of_drugs" />
	<main className="etc">
		<Drugs data={{
			header: "Solvents/glues and gases",
			description: <>
				These are products whose vapours act as downers/depressants when inhaled. They include various glues, cleaning fluids and paints, gas lighter fuel, petrol and the gases in aerosols and fire extinguishers. Studies have suggested that 7–10% of young people at secondary school have experimented with inhalants of this type.
				</>,
			why: <>
				The effects are in some ways similar to those of alcohol – you can lose your inhibitions and feel happy and social. They come on very quickly and last no more than an hour.
				</>,
			whynot: {
				shortterm: <>
					As with alcohol, the effects of solvents and gases depend partly on your mood, personality and the situation you&apos;re in. They tend to intensify emotions, so if you feel depressed anyway they may make you feel worse. They can also make you feel giddy and drowsy, and some people feel sick. Hallucinations are possible. Afterwards, you may get a hangover.
					<p />
					Large doses can make you feel out of control and confused, and you may even pass out. Overdose, particularly with lighter fuel and strong solvents, can be fatal, though most deaths involving glues and gases are caused by suffocation or accidents (see Special Risks).
					</>,
				dependence: <>
					A small number of young people become psychologically dependent on solvents and gases, but there are no significant physical withdrawal symptoms.
					</>,
				longterm: <>
					Long-term use may cause problems with the kidneys and liver, and with brain function. Permanent damage is possible but rare. However, people who habitually inhale gases or solvents often become generally tired, run-down and depressed.
					</>,
			},
			risks: <>
				If you pass out, death though inhalation of vomit is possible.
				<p />
				If you pass out with a plastic bag over your head, and there&apos;s no one to help you, you&apos;ll probably suffocate.
				<p />
				Aerosols or butane gas sprayed directly into the mouth freeze the throat, which can go into spasm, resulting in breathing difficulties or suffocation.
				<p />
				Some substances, including aerosol gases and cleaning fluids, make the heart more sensitive to excitement and strenuous exercise. This has been known to cause heart problems.
				<p />
				Dangerous accidents are more likely if you&apos;re under the influence of gases and glues, because you have less control over your body and you may pass out.
				</>,
			legal: <>
				It&apos;s not illegal to possess or inhale solvents, but it is illegal for a shopkeeper to sell them to people under 18 if they think they are likely to be misused.
				</>,
		}} />
	</main>
	<Footer />
</>

export default ABCs;
