"use client"

import Link from 'next/link';
import Header from '@/components/Header';
import Tag from '@/components/Tag';
import Loading from '@/components/Loading';
import { type HashedType } from '@/lib/utils';
import useContributions from '@/lib/useContributions';
import { pluralize } from '@/lib/utils';
import { removeHTML } from '@/components/GenericWeb';
import { useState, useEffect } from 'react';

const truncate = (str: string, len: number) => {
	if (str.length < len) return str;
	return str.substr(0, len) + '..';
}

const ContributionsTable = ({ data, total, onClick, sortBy, sortOrder }: any) => {
	const setHeader = (e: any, header: string) => { e.preventDefault(); onClick(header); }
	const guessClass = (h: string) => {
		if (h !== sortBy) return '';
		return (sortOrder) ? 'sortAsc' : 'sortDesc';
	}
	return <>
		<table className="table-fixed smalltext border w-full">
			<thead className="text-end font-bold p-2 border-b">
					<th onClick={(e) => setHeader(e, 'person')} className={`text-start font-bold p-2 border-b ${guessClass('person')}`}> Credited </th>
					<th onClick={(e) => setHeader(e, 'total')} className={guessClass('total')}> Total </th>
					<th onClick={(e) => setHeader(e, 'image')} className={guessClass('image')}> Images </th>
					<th onClick={(e) => setHeader(e, 'text')} className={guessClass('text')}> Texts </th>
					<th onClick={(e) => setHeader(e, 'av')} className={guessClass('av')}> A/V </th>
					<th onClick={(e) => setHeader(e, 'min')} className={guessClass('min')}> First </th>
					<th onClick={(e) => setHeader(e, 'max')} className={guessClass('max')}> Recent </th>
			</thead>
			<tbody>
			{data?.map((obj: HashedType, key: number) => {
				const { person, total, image, text, av, min, max } = obj;
				return <tr key={key} className="odd:bg-gray-100 text-end">
					<td className="pr-3 text-start border-b"> <Link href={`/contributions/${person}`}><b>{truncate(person, 20)}</b></Link> </td>
					<td className="text-end border-b"> {total} </td>
					<td className="text-end border-b"> {image} </td>
					<td className="text-end border-b"> {text} </td>
					<td className="text-end border-b"> {av} </td>
					<td className="text-end monospace smalltext border-b"> {min?.replace(/9999-12-31/, '')} </td>
					<td className="text-end monospace smalltext border-b"> {max?.replace(/0000-00-00/, '')} </td>
				</tr>
			})}
			</tbody>
	</table>
	</>
}

const Contributions = (props: any) => {
	const [ sortOrder,setSortOrder ] = useState(false);
	const [ sortBy,setSortBy ] = useState('total');

  const { data, isLoading, error} = useContributions({ all: true });
  if (!data) return;

  const { gigmedia, gigtext, gigsong } = data || {};
  const contributions: HashedType = {};
	let total = 0;

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
		total = total + 1;
	}
	gigsong?.results?.forEach((r: any) => {
		if (!r?.mediaurl?.length) return;
		addInfo(contributions, r?.credit, 'av', r?.added);
	});
	gigtext?.results?.forEach((r: any) => {
		addInfo(contributions, r?.credit, 'text', r?.credit_date);
	});
	gigmedia?.results?.forEach((r: any) => {
		addInfo(contributions, r?.credit, 'image', r?.credit_date);
	});

	const sorted = Object.keys(contributions)?.map((person: string, key: number) => ({ person, ...contributions[person] }))?.sort((a: HashedType, b: HashedType) => {
		if (typeof a[sortBy] === 'number') {
			return (sortOrder) ?
				a[sortBy] - b[sortBy] :
				b[sortBy] - a[sortBy];
		} else {
			return (sortOrder) ?
				a[sortBy]?.toString().localeCompare(b[sortBy]?.toString()) :
				b[sortBy]?.toString().localeCompare(a[sortBy]?.toString());
		}
	});

	const onClick = (header: string) => {
		if (header == sortBy) {
			setSortOrder(!sortOrder);
		} else {
			setSortBy(header);
			setSortOrder(false);
		}
	}
	return <>
		<Header section='contributions' />
		<Loading isLoading={isLoading} >
		<main>
			<Tag>Website contributions since 1993 {pluralize(total)}</Tag>
			<ContributionsTable data={sorted} total={total} onClick={onClick} sortBy={sortBy} sortOrder={sortOrder} />
		</main>
		</Loading>
	</>
}

export default Contributions;
