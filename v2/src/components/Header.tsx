import Link from 'next/link';
import type { Metadata, ResolvingMetadata } from 'next'
import { Nobr, parseYear, ts2URI } from '../lib/macros';
 
type Props = {
  params: {
		section: string
	}
}
 
export async function generateMetadata(
  { params }: Props,
  parent?: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const section = params.section
 
  // fetch data
  //const product = await fetch(`https://.../${id}`).then((res) => res.json())
 
  // optionally access and extend (rather than replace) parent metadata
  //const previousImages = (await parent).openGraph?.images || []
 
  return {
    title: `Jazz Butcher - ${section}`,
  }
}

const headerString: { [key: string]: React.ReactNode } = {
	Etc: <Link href="/etc"><b>Etc</b></Link>,
	Releases: <Link href="/albums"><b>Releases</b></Link>,
	Project: <b>Projects</b>,
	PreHistory: <b>Pre-JBC</b>,
	People: <Link href="/people"><b>Conspirators</b></Link>,
}

const headerText : { [key: string]: React.ReactNode } = {
	jbc:  <Link href="/"><b>The Jazz Butcher Conspiracy</b></Link>,
	gigs:  <Link href="/gigs"><b>Gigs</b></Link>,
	//gigyear: (y: number) => <Link href={`/gigs/${y}`}><b>{y}</b></Link>,
	people:  headerString.People,
	help:  <b>Help Us</b>,
	press:  <Link href="/press"><b>Press</b></Link>,
	lyrics:  <Link href="/lyrics"><b>Lyrics</b></Link>,
	news:  <b>News</b>,
	audio:  <b>Audio</b>,
	posters:  <Link href="/posters"><b>Posters</b></Link>,
	video:  <b>Video</b>,
	releases:  headerString.Releases,
	albums:  headerString.Releases,
	etc:  headerString.Etc,
	articles:  <>{headerString.Etc} | <b>Mailing List</b></>,
	prehistory:  <b>Pre-JBC</b>,
	project:  <b>Projects</b>,
	mad:  <>{headerString.Etc} | <b>How MAD Are You?</b></>,
	links:  <>{headerString.Etc} | <b>Pat&quot;s Recommended Links</b></>,
	letters:  <>{headerString.Etc} | <Link href="/letters"><b>Letters From Pat</b></Link></>,
	nightshift:  <>{headerString.PreHistory} | <b>Nightshift</b></>,
	institution:  <>{headerString.PreHistory} | <b>Institution</b></>,
	sonictonix:  <>{headerString.PreHistory} | <b>Sonic Tonix</b></>,
	thetonix:  <>{headerString.PreHistory} | <b>The Tonix</b></>,
	vaguelyfamiliar:  <>{headerString.Project} | <b>The Vaguely Familiar</b></>,
	cambodia:  <>{headerString.Project} | <b>Cambodia</b></>,
	mrblagdon:  <>{headerString.Project} | <b>Mr. Blagdon</b></>,
	sumosonic:  <>{headerString.Project} | <b>Sumosonic</b></>,
	wilson:  <>{headerString.Project} | <b>Wilson</b></>,
	eg:  <>{headerString.Project} | <b>The Black Eg</b></>,
	trivia:  <>{headerString.Etc} | <b>Trivia</b></>,
	tribute:  <>{headerString.Etc} | <b>Fan Tribute Project</b></>,
	//max:  <>{headerString.People} : ${max}</>,
	dronesclub:  <>{headerString.Project} | <b>The Drones Club</b></>,
	mailinglist:  <>{headerString.Etc} | <Link href="/articles"><b>Mailing List</b></Link></>,
	misc:  <b>Misc.</b>,
}

type GigResults = {
  [key: string]: any;
	datetime?: string;
}

type Props_MakeHeader = {
	project?: string,
	section?: string,
	title?: string,
	passthru?: string,
	navType?: 'Gig' | 'Year',
	navPrev?: GigResults,	// results object for prev gig/year
	navNext?: GigResults,	// results object for next gig/year
	home?: boolean,
	children?: React.ReactNode
}

const ResultNavigator = (props: Props_MakeHeader): React.ReactNode => {
	if (!props?.navType) return <></>;
	const setGUI = (type: string, chr: React.ReactNode, cls: string, datetime?: string) => {
		if (!datetime) return;
		const uri = (type === 'Gig') ? ts2URI(datetime) : parseYear(datetime);
		if (!uri) return;
		return (
			<Link href={`/gigs/${uri}`}>
				<div className={cls}>
					{chr}
				</div>
			</Link>
		)
	}
	const prev = setGUI(props.navType, <>&lt;</>, 'left-arrow', props?.navPrev?.datetime);
	const next = setGUI(props.navType, <>&gt;</>, 'right-arrow', props?.navNext?.datetime);
	return (
		<span className="smalltext" style={{ padding: '40px' }}>
				{prev}
				{next}
		</span>
	)
}

const MakeHeader = (props: Props_MakeHeader): React.ReactNode  => {

	return (
		<div className="homeContainer">
			<div className="homeHeader">
				{(props?.project) ? <>{headerString[props.project]}</> : <><Link href="/">The Jazz Butcher</Link></>}
				<span className="navsep"/>
				<Nobr>
					{(props?.section) && (
						<>
							{headerText[props.section.toLowerCase()]}
							{(props?.title) && <span className="navsep"/>}
						</>
					)}
					{(props?.passthru) && <>{props.passthru}</>}
					{(props?.title) && <i>{props.title}</i>}
					{(props?.home) && (
						<>
							<span style={{ marginLeft: '50px' }} />
							{props.home}
						</>
					)}
					<ResultNavigator {...props} />
				</Nobr>
			</div>
			{props?.children}
		</div>
	)
}

export default MakeHeader;
