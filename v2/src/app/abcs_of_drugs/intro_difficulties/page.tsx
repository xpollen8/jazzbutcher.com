import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Drugs from '../Drugs';

const ABCs = () => <>
	<Header section="abcs_of_drugs" />
	<main className="etc">
		<Drugs data={{
			header: "What to do if someone is in difficulties",
			image: {
				alt: "help",
				src: "https://v1.jazzbutcher.com/images/abcs_of_drugs/recovery.gif",
				width: 447,
				height: 71,
			},
		}} >
			<p />
			If someone who has taken drugs gets very anxious or panicky, take them somewhere quiet and warm, and reassure them that they will gradually feel better. Don&apos;t leave them alone.
			<p />
			If someone is overheating and becoming dehydrated after dancing a lot (symptoms may include fainting, feeling sick, headache, sudden tiredness, cramps and stopping sweating) they should immediately take a rest and slowly sip about a pint of water. Splashing cool water on the face and neck can help lower the body temperature. People who use drugs such as ecstasy and amphetamines and go dancing are advised to take regular breaks and sip water throughout the evening - about a pint an hour is recommended by the Health Education Authority.
			<p />
			If someone seems on the verge of passing out, don&apos;t leave them alone to sleep it off - they may throw up while unconscious and choke. Put them in the recovery position, loosen any tight clothing that might restrict the breathing, and try to keep them awake by talking to them. Never give someone black coffee to wake them up - it may have the opposite effect, speeding up the body&apos;s absorption of the drugs they&apos;ve taken. If the person shows no signs of revival, call an ambulance.
			<p />
			If someone actually passes out, put them in the recovery position, loosen any clothing that might restrict the breathing and call an ambulance. If you know what sort of drugs they&apos;ve been taking, tell the crew. You won&apos;t get into trouble for doing this, and it could save someone&apos;s life.
			<p />
			Mouth-to-mouth resuscitation can also save someone&apos;s life if they have stopped breathing. First-aid courses teaching this and other techniques are available from St John Ambulance (0171 235 5231) or the Red Cross (0171 235 5454).
		</Drugs>
	</main>
	<Footer />
</>

export default ABCs;
