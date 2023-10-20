import { parseDay, parseYear, ts2URI } from '@/lib/utils';
import Link from 'next/link';

type GigResults = {
	[key: string]: any;
	datetime?: string;
}

type Props_ResultNavigator = {
	uriPrefix: string
	searchParams?: string
	navPrev?: GigResults
	navNext?: GigResults
}

const ResultNavigator = (props: Props_ResultNavigator): React.ReactNode => {
	const setGUI = (uriPrefix: string, searchParams: string | undefined, chr: React.ReactNode, cls: string, datetime?: string) => {
		if (!datetime) return <></>;
		const day = parseDay(datetime);
		const uri = day ? ts2URI(datetime) : parseYear(datetime);
		if (!(uriPrefix && uri)) return <></>;

		const params = (searchParams) ? ('?' + searchParams) : '';

		return (
			<Link href={`${uriPrefix}/${uri}${params}`}>
				<div className={cls}>
					{chr}
				</div>
			</Link>
		)
	}
	const prev = setGUI(props.uriPrefix, props?.searchParams, <>&lt;</>, 'left-arrow', props?.navPrev?.datetime);
	const next = setGUI(props.uriPrefix, props?.searchParams, <>&gt;</>, 'right-arrow', props?.navNext?.datetime);
	return (
		<span className="smalltext space-x-2 ml-20 m-5">
				{prev}
				{next}
		</span>
	)
}

export default ResultNavigator;
