import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EmbedMedia from '@/components/EmbedMedia';

const images_PhilipSnow = [
		{ src: "https://s3.amazonaws.com/assets.jazzbutcher.com/projects/TheInstitution/6+Sheldonian+1.jpg", alt: "Live Sheldonian #1" },
		{ src: "https://s3.amazonaws.com/assets.jazzbutcher.com/projects/TheInstitution/6+Sheldonian+2.jpg", alt: "Live Sheldonian #2" },
		{ src: "https://s3.amazonaws.com/assets.jazzbutcher.com/projects/TheInstitution/6+Sheldonian+3.jpg", alt: "Live Sheldonian #3" },
		{ src: "https://s3.amazonaws.com/assets.jazzbutcher.com/projects/TheInstitution/6+Sheldonian+4.jpg", alt: "Live Sheldonian #4" },
		{ src: "https://s3.amazonaws.com/assets.jazzbutcher.com/projects/TheInstitution/Institution_Shirt_1.jpg", alt: "shirt 1" },
		{ src: "https://s3.amazonaws.com/assets.jazzbutcher.com/projects/TheInstitution/Institution_Shirt_2.jpg", alt: "shirt 2" },
		{ src: "https://s3.amazonaws.com/assets.jazzbutcher.com/projects/TheInstitution/Institution_Shirt_3.jpg", alt: "shirt 3" },
];

const Photoset = ({ images, className, title, children }:
{ images: any[], className?: string, title?: string, children?: React.ReactNode }) => {
	return (
		<div className="border p-3 bg-slate-50">
			{(title) && (
			<center>
				<h1>{title}</h1><p />
			</center>
			)}
			<div className="flex flex-wrap grow gap-3 justify-center">
				{images.map(({ src, alt }: any, key: number) => (
					<div key={key} className="border drop-shadow-md outline p-1 bg-green-50">
						<Link href={src}>
							<Image src={src} width={250} height={250} alt={alt} />
							<center><p />{alt}</center>
						</Link>
					</div>
				))}
		</div>
		</div>
	)
}

const Institution = () => 
<>
	<Header section="prejbc" title="The Institution"/>
	<div className="gig_institution" />
	<Photoset images={images_PhilipSnow} title='Images from Philip Snow' />
<hr />
	<Image src="https://s3.amazonaws.com/assets.jazzbutcher.com/projects/TheInstitution/SB2 2.jpg" width={250} height={250} alt="inst 5" />
	<Image src="https://s3.amazonaws.com/assets.jazzbutcher.com/projects/TheInstitution/SB2 29b.jpg" width={250} height={250} alt="inst 6" />
	<Image src="https://s3.amazonaws.com/assets.jazzbutcher.com/projects/TheInstitution/SB2 30a.jpg" width={250} height={250} alt="inst 7" />

	<Image src="https://s3.amazonaws.com/assets.jazzbutcher.com/projects/TheInstitution/TheInstitution_signed.jpg" width={250} height={250} alt="signed1" />
	<Image src="https://s3.amazonaws.com/assets.jazzbutcher.com/projects/TheInstitution/TheInstitution_vinyl.jpg" width={250} height={250} alt="signed1" />

<p />
<hr />
<p />

	<EmbedMedia data={{ mediaurl: "https://s3.amazonaws.com/assets.jazzbutcher.com/projects/TheInstitution/Institution_JaneAndJon.mp3", title: "Jane And Jon", comment: "A side" }} />

	<EmbedMedia data={{ mediaurl: "https://s3.amazonaws.com/assets.jazzbutcher.com/projects/TheInstitution/Institution_Stephanie.mp3", title: "Stephanie", comment: "B side" }} />

<code>
<br />
<br />	https://www.discogs.com/release/5338218-The-Institution-Jane-And-Jon
<br />	7er:
<br />	Label:	Industrial Accident – SGS-112
<br />	Format:	
<br />	Vinyl, 7, 45 RPM, White Label
<br />	Country:	UK
<br />	Released:	1979
<br />	Genre:	Rock, Reggae
<br />	Style:	Post-Punk, Dub
<br />	
<br />	Credits
<br />	Bass – Rolo (3)
<br />	Drums – Rob Wilford
<br />	Guitar – Max Eider
<br />	Vocals, Saxophone – Pat Fish
<br />	
<br />	Issued on a hand-stamped white label in a plain white sleeve.
<br />	
<br />	Other original members included Johnathan Stephenson on Synthesizers and John Duvall on Drums.
<br />	Both left before the record was cut.
</code>

<p />
<hr />
<p />

	<EmbedMedia data={{ mediaurl: "https://s3.amazonaws.com/assets.jazzbutcher.com/projects/TheInstitution/Institution_JonathanStephenson_Vampire.mp3", title: "Vampire", comment: "Unknown provenance" }} />
	<EmbedMedia data={{ mediaurl: "https://s3.amazonaws.com/assets.jazzbutcher.com/projects/TheInstitution/Institution_Unknown_InnocentsAndEnglishmen.mp3", title: "Innocents And Englishman", comment: "Unknown provenance" }} />

<p />
<hr />
<p />

	<EmbedMedia data={{ mediaurl: "https://s3.amazonaws.com/assets.jazzbutcher.com/projects/TheInstitution/Institution_JonathanStephenson_InnocentsAndEnglishmen.mp3", title: "Innocents And Englishman", mediacredit: "Jonathan Stephenson", mediacrediturl: "https://www.youtube.com/channel/UCKfznmFizRjptR0VAw5Edgw", mediacreditdate: "2021-11-04" }} >
		<blockquote>
			Probably our masterpiece!  Words of course, Patrick, sax Patrick, and I think the music was a joint effort.
		</blockquote>
	</EmbedMedia>

	<EmbedMedia data={{ mediaurl: "https://s3.amazonaws.com/assets.jazzbutcher.com/projects/TheInstitution/Institution_JonathanStephenson_JaneAndJon.mp3", title: "Jane And Jon", mediacredit: "Jonathan Stephenson", mediacrediturl: "https://www.youtube.com/channel/UCKfznmFizRjptR0VAw5Edgw", mediacreditdate: "2021-10-14", comment: "different version from single" }} >
		<blockquote>
			About 1978. Pat Fish, Rolo McGinty, Pete Millson, Jonathan Stephenson, John Duvall. This track by Pete.
		</blockquote>
	</EmbedMedia>

	<EmbedMedia data={{ mediaurl: "https://s3.amazonaws.com/assets.jazzbutcher.com/projects/TheInstitution/Institution_JonathanStephenson_JeremyAiroplane.mp3", title: "Jeremy Airoplane", mediacredit: "Jonathan Stephenson", mediacrediturl: "https://www.youtube.com/channel/UCKfznmFizRjptR0VAw5Edgw", mediacreditdate: "2021-10-14" }} >
		<blockquote>
			About 1978. Pat Fish, Rolo McGinty, Pete Millson, Jonathan Stephenson, John Duvall. This track by Rolo.
		</blockquote>
	</EmbedMedia>

	<EmbedMedia data={{ mediaurl: "https://s3.amazonaws.com/assets.jazzbutcher.com/projects/TheInstitution/Institution_JonathanStephenson_LoveAndARecordContract.mp3", title: "Love And A Record Contract", mediacredit: "Jonathan Stephenson", mediacrediturl: "https://www.youtube.com/channel/UCKfznmFizRjptR0VAw5Edgw", mediacreditdate: "2021-10-14" }} >
		<blockquote>
			About 1978. Pat Fish, Rolo McGinty, Pete Millson, Jonathan Stephenson, John Duvall.  This track by Rolo
		</blockquote>
	</EmbedMedia>

	<EmbedMedia data={{ mediaurl: "https://s3.amazonaws.com/assets.jazzbutcher.com/projects/TheInstitution/Institution_JonathanStephenson_Stephanie.mp3", title: "Stephanie", mediacredit: "Jonathan Stephenson", mediacrediturl: "https://www.youtube.com/channel/UCKfznmFizRjptR0VAw5Edgw", mediacreditdate: "2021-10-14", comment: "different version from single" }} >
		<blockquote>
			About 1978. About 1978. Pat Fish, Rolo McGinty, Pete Millson, Jonathan Stephenson, John Duvall.   This track:  Pat
		</blockquote>
	</EmbedMedia>

	<Footer />
</>

export default Institution;
