import './style.css';
import Link from 'next/link';
import Image from 'next/image';

const Drugs = ({ data, children }: any) => {
	const { header, image, background, description, why, whynot, risks, legal } = data || {};
	const { alt, src, width, height } = image || {};
	return <div className="drugs">
		<div style={{ background: 'red' }}>
			<Link href="/abcs_of_drugs"><Image alt="index" src="https://v1.jazzbutcher.com/images/abcs_of_drugs/homepic.gif" width={400} height={120} /></Link>
		</div>
		<hr />
		<div className="drugs_body">
		DO NOT consider this a source for current or accurate information!
		<br />
		This is an archived article from 1998, penned professionally by Peter Millson (Max Eider) for Channel 4.
		</div>
		<hr />
		<div className="drugs_body">
			{(!!data) && <>
				{(!!header) && <><b className="drugs_header">{header}</b></>}
				{(!!image) && <p><Image alt={alt} src={src} width={width} height={height} /></p>}
				{(!!description) && <><p />{description}<p /></>}
				{(!!background) && <><p /><hr /><p /><b className="drugs_subheader">Background</b><p />{background}<p /></>}
				{(!!why) && <><p /><hr /><p /><b className="drugs_subheader">Why people use it</b><p />{why}<p /></>}
				{(!!whynot) && <>
					<p /><hr /><p /><b className="drugs_subheader">Why people may wish they hadn&apos;t</b><p />
					{(!!whynot.shortterm) && <> <p /><b>In the short term</b><p />{whynot.shortterm} </>}
					{(!!whynot.dependence) && <> <p /><b>Dependence</b><p />{whynot.dependence} </>}
					{(!!whynot.longterm) && <> <p /><b>In the long term</b><p />{whynot.longterm} </>}
				</>}
				{(!!risks) && <><p /><hr /><p /><b className="drugs_subheader">Special risks</b><p />{risks}<p /></>}
				{(!!legal) && <><p /><hr /><p /><b className="drugs_subheader">Legal status</b><p />{legal}</>}
			</>}
			{children}
		</div>
		<hr />
		<div className="drugs drugs_footer">
			Produced by <Link href="http://www.bss.org" target="new">BSS</Link> to accompany <i>Drugs Uncovered</i> a season of programmes exploring drug-related issues, first shown on Channel 4 in autumn 1998<br />
			<br />
			Writer: Peter Millson<br />
			Editor: Paula Snyder<br />
			Consultant and additional material: Dr Ron Alcorn, consultant psychiatrist in problems of substance misuse<br />
			images: Science Photo Library, Network Photographers, Photofusion. All images copywrite control.<br />
			Design:BSS<br />
			<br />
			For printed copies of this publication, please send a postal order or cheque (made payable to Channel 4 Television) for &pound;1.00 (to cover postage and packing) to:<br />
			<br />
			The ABC of Drugs<br />
			PO Box 4000<br />
			Manchester M60 3LL<br />
			<br />
			Or you can telephone 0990 44 66 99.<br />
		</div>
		<hr />
		<Link href="/abcs_of_drugs"><Image alt="index" src="https://v1.jazzbutcher.com/images/abcs_of_drugs/abc_title.gif" width={219} height={53} /></Link>
	</div>
}

export default Drugs;
