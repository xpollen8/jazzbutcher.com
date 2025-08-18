"use client"

import Link from 'next/link';
import Header from '@/components/Header';
import Tag from '@/components/Tag';
import Loading from '@/components/Loading';
import { type HashedType } from '@/lib/utils';
import useContributions from '@/lib/useContributions';
import { removeHTML } from '@/components/GenericWeb';

const truncate = (str: string, len: number) => {
	if (str.length < len) return str;
	return str.substr(0, len) + '..';
}

const ContributionsTable = ({ data, total }: any) => {
	return <>
	<table className="table-auto smalltext border w-full">
				<thead>
						<th className="font-bold p-2 border-b"> Credited </th>
						<th className="font-bold p-2 border-b"> Total </th>
						<th className="font-bold p-2 border-b"> Images </th>
						<th className="font-bold p-2 border-b"> Texts </th>
						<th className="font-bold p-2 border-b"> A/V </th>
						<th className="font-bold p-2 border-b"> First </th>
						<th className="font-bold p-2 border-b"> Recent </th>
				</thead>
				<tbody>
				{Object.keys(data)?.map((person: string, key: number) => {
					const { total, image, text, av, min, max } = data[person];
					return <tr key={key} className="odd:bg-gray-100">
						<td className="pr-3 border-b"> <Link href={`/contributions/${person}`}><b>{truncate(person, 25)}</b></Link> </td>
						<td className="text-end border-b"> {total} </td>
						<td className="text-end border-b"> {image} </td>
						<td className="text-end border-b"> {text} </td>
						<td className="text-end border-b"> {av} </td>
						<td className="text-end smalltext border-b"> {min?.replace(/9999-12-31/, '')} </td>
						<td className="text-end smalltext border-b"> {max?.replace(/0000-00-00/, '')} </td>
					</tr>
				})}
				</tbody>
	</table>
	</>
}

const Contributions = (props: any) => {
  const { data, isLoading, error} = useContributions({ all: true });
  if (!data) return;
  const { gigmedia, gigtext, gigsong } = data || {};
  const contributions: HashedType = {};
  const total = gigmedia?.results?.length + gigtext?.results?.length + gigsong?.results?.length;

	const addInfo = (contributions: HashedType, person: string, type: string, added: string) => {
		const useAdded = added?.substr(0, 10);
		if (!contributions[person]) {
			contributions[person] = {
				total: 0,
				image: 0,
				text: 0,
				av: 0,
				min: '9999-12-31',
				max: '0000-00-00'
			};
		}
		const p = contributions[person];
		p.total = p.total + 1;
		p[type] = p[type] + 1;
		if (useAdded > p.max) p.max = useAdded;
		if (added && useAdded < p.min) p.min = useAdded;
	}
	gigsong?.results?.forEach((r: any) => {
		if (!r?.mediaurl?.length) return;
		const person = removeHTML(r?.mediacredit) || '-UNKNOWN-';
		const datetime = r?.datetime;
		addInfo(contributions, person, 'av', r?.added);
	});
	gigtext?.results?.forEach((r: any) => {
		const person = removeHTML(r?.credit)|| '-UNKNOWN-';
		const datetime = r?.datetime;
		const added = r?.credit_date;
		addInfo(contributions, person, 'text', r?.credit_date);
	});
	gigmedia?.results?.forEach((r: any) => {
		const person = removeHTML(r?.credit)|| '-UNKNOWN-';
		const datetime = r?.datetime;
		const added = r?.credit_date;
		addInfo(contributions, person, 'image', r?.credit_date);
	});
	return <>
		<Header section='contributions' />
		<Loading isLoading={isLoading} >
		<main>
			<Tag>Website contributions since 1993</Tag>
			<ContributionsTable data={contributions} total={total} />
		</main>
		</Loading>
	</>
}

export default Contributions;
