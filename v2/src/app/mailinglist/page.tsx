import Header from '@/components/Header';
import LetterHeader from '@/components/LetterHeader';
import MakeSimpleURI from '@/components/MakeSimpleURI';

const MailingList = () => 
<>
	<Header section="mailinglist" />
		<main>
			<LetterHeader title="The Jazz Butcher mailing list" />
			<p />
			<div className="flex justify-around">
				<div style={{ maxWidth: '90%' }}>
					The jbc-list existed from October 1989 until early 2004
					at which point manual spam filtering became too burdensome.
					Several of the hundreds of subscribers were in contact with the band.
					<p />
					{[...Array(16)].map((x: any, idx: number) => { 
						const year = 1989 + idx;
						return <MakeSimpleURI key={idx} uri={`/mailinglist/${year}`} text={year + ''} />
					})}
				</div>
		</div>
	</main>
</>

export default MailingList;
