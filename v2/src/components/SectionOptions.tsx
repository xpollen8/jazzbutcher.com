"use server"

import { sectionOptions} from '@/components/Header';
import MakeSimpleURI from '@/components/MakeSimpleURI';

const SectionOptions = (props: any) => {
	const section = props?.section;
	const options = sectionOptions(section || '') || [];
	return <>{options?.map(MakeSimpleURI)}</>;
}

export default SectionOptions;
