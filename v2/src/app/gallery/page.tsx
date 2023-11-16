import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionOptions from '@/components/SectionOptions';
import PhotoSet from '@/components/PhotoSet';

const gallery = [
	{
		src: "/images/20211006_portrait.jpg",
			credit: "Dave E. Barker",
			credit_date: "2015",
		},
	{
		src: "/images/20171021/20171021_mattjolly_1.jpg",
			credit: "Matt Jolly",
			credit_date: "2017",
		},
	{
		src: "/images/20170415/20170415_JazzButcher_Tidmarsh_P1040807.jpg",
			credit: "@PlanetruthPictures",
			credit_date: "2017",
		},
	{
		src: "/images/20150501/20150501_vulpe_truax_gig.jpg",
			credit: "Anne Vulpe",
			credit_date: "2015",
		},
	{
		src: "/images/2015_annavulpe_pat.jpg",
			credit: "Anne Vulpe",
			credit_date: "2015",
		},
	{
		src: "/images/20140822/20140822_johncannon_pat.jpg",
			credit: "John Cannon",
			credit_date: "2014",
		},
	{
		src: "/images/20121201/20121201_opal_krusch_patsmiles.jpg",
			credit: "opal_krusch",
			credit_date: "2012",
		},
	{
		src: "http://davidwhittemore.com/images/gallery/1Jan2000_pat.jpg",
			credit: "David Whittemore",
			credit_date: "2000",
		},
	{
		src: "/images/19920425/19920425_del_pat.jpg",
			credit: "David Whittemore",
			credit_date: "1992",
		},
	{
		src: "http://davidwhittemore.com/images/gallery/19901105_PatFirstAvenue.jpg",
			credit: "David Whittemore",
			credit_date: "1990",
		},
	{
		src: "/images/comedy3.jpg",
			credit: "David Whittemore",
			credit_date: "1990",
		},
	{
		src: "/images/19891119/19891119_del_patsat.jpg",
			credit: "David Whittemore",
			credit_date: "1989",
		},
	{
		src: "/images/19880611/19880611_del_cubbybear_11.jpg",
			credit: "David Whittemore",
			credit_date: "1988",
		},
	{
		src: "/images/1985/1985_mitch_jenkins_hamburg_pat_fish.jpg",
			credit: "Mitch Jenkins",
			credit_date: "1988",
			location: "Hamburg",
		},
	{
		src: "/images/1981/1981_barker_tonix_1.jpg",
			body: <>
The sleeve pic for Bath of Bacon was taken at a Tonix gig at the Clarendon, Hammersmith, London in 1981 by myself. They opened for a group called English Subtitles, who I’d just done a single with. This was the first time I met Pat. I asked them if they’d do a track for a compilation LP I was working on, ‘The Wonderful World of Glass Volume 1’ and they did. My friend and former bandmate Ciaran Harte, who was kind of a house producer for the label at that time, had a Teac four track in his flat in a tower block in Plaistow, East London and they recorded it there on the 12th floor or something.
			</>,
			credit: "David E. Barker",
			credit_date: "1981",
			location: "London",
		}
];

const Gallery = () => 
<>
	<Header section="gallery" />
	<main>
		<SectionOptions section='gallery' />
		<PhotoSet photos={gallery?.sort((a: any, b: any) => b?.credit_date - a?.credit_date)} />
	</main>
	<Footer />
</>

export default Gallery;
