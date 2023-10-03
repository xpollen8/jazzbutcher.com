import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PhotoSet from '@/components/PhotoSet';

const first = [
	{ src: "/assets/images/first_gig/first_gig_1.jpg", alt: "Pat and guitarist" },
	{ src: "/assets/images/first_gig/first_gig_2.jpg", alt: "Pat and guitarist" },
	{ src: "/assets/images/first_gig/first_gig_3.jpg", alt: "Pat and bass player, rolo in back" },
]

const FirstGig = () => 
<>
	<Header section="first_gig" />
	<main>
		<PhotoSet title="First ever performance" description=<>
				This was posted by a gentleman named Chris Zero on The Jazz Butcher Facebook Group.
				<p />
				&quot;Patrick&apos;s first ever performance, 1974 Uppingham,
				age 17, with &apos;Chris Zero&apos; and &apos;others&apos; inc. &apos;Rolo&apos; on synth.
			</>
			credit="Chris Zero"
			credit_date="2022-10-08 17:21:44"
			photos={first}
		/>
	</main>
	<Footer />
</>

export default FirstGig;
