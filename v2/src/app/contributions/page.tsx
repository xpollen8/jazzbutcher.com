"use client"

import Link from 'next/link';
import Header from '@/components/Header';
import Tag from '@/components/Tag';
import Loading from '@/components/Loading';
import { type HashedType } from '@/lib/utils';
import useContributions from '@/lib/useContributions';
import { truncate, pluralize } from '@/lib/utils';
import { removeHTML } from '@/components/GenericWeb';
import { useState, useEffect } from 'react';
import ContributionChart from '@/components/ContributionChart';

const ContributionsTable = ({ data, total, onClick, sortBy, sortOrder }: any) => {
	const setHeader = (e: any, header: string) => { e.preventDefault(); onClick(header); }
	const guessClass = (h: string) => {
		if (h !== sortBy) return '';
		return (sortOrder) ? 'sortAsc' : 'sortDesc';
	}
	return <>
		<table className="table-auto smalltext border w-full">
			<thead className="text-end font-bold p-2 border-b">
				<tr>
					<th onClick={(e) => setHeader(e, 'person')} className={`w-1/4 text-start font-bold p-2 border-b ${guessClass('person')}`}> Credited </th>
					<th onClick={(e) => setHeader(e, 'total')} className={guessClass('total')}> Total </th>
					<th onClick={(e) => setHeader(e, 'image')} className={guessClass('image')}> Images </th>
					<th onClick={(e) => setHeader(e, 'text')} className={guessClass('text')}> Texts </th>
					<th onClick={(e) => setHeader(e, 'av')} className={guessClass('av')}> A/V </th>
					<th onClick={(e) => setHeader(e, 'min')} className={guessClass('min')}> First </th>
					<th onClick={(e) => setHeader(e, 'max')} className={`pr-2 ${guessClass('max')}`}> Recent </th>
				</tr>
			</thead>
			<tbody>
			{data?.map((obj: HashedType, key: number) => {
				const { person, total, image, text, av, min, max } = obj;
				return <tr key={key} className="odd:bg-gray-100 text-end">
					<td className="pl-2 text-start border-b"> <Link href={`/contributions/${encodeURIComponent(person)}`}><b>{truncate(person, 40)}</b></Link> </td>
					<td className="text-end border-b"> {total} </td>
					<td className="text-end border-b"> {image} </td>
					<td className="text-end border-b"> {text} </td>
					<td className="text-end border-b"> {av} </td>
					<td className="text-end monospace smalltext border-b"> {min?.replace(/9999-12-31/, '')} </td>
					<td className="pr-2 text-end monospace smalltext border-b"> {max?.replace(/0000-00-00/, '')} </td>
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

  const { gigmedia, gigtext, gigsong, press, pressmedia, media, lyricmedia } = data || {};
  const contributions: HashedType = {};
	let total = 0;

	const chartData: any[] = [];
	const addInfo = (contributions: HashedType, person: string, type: string, added: string, datetime: string, accummulate?: boolean) => {
		const useAdded = added?.substring(0, 10);
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
		if (accummulate) p.total = p.total + 1;
		if (accummulate) p[type] = p[type] + 1;
		if (useAdded > p.max) p.max = useAdded;
		if (added && useAdded < p.min) p.min = useAdded;
		if (accummulate) total = total + 1;
		chartData.push({
			added,
			datetime,
			count: 1,
		});
	}
	gigsong?.results?.forEach((r: any) => {
		if (!r?.mediaurl?.length) return;
		addInfo(contributions, r?.credit, 'av', r?.added, r?.datetime, true);
	});
	gigtext?.results?.forEach((r: any) => {
		addInfo(contributions, r?.credit, 'text', r?.credit_date, r?.datetime, true);
	});
	gigmedia?.results?.forEach((r: any) => {
		addInfo(contributions, r?.credit, 'image', r?.credit_date, r?.datetime, true);
	});
	lyricmedia?.results?.forEach((r: any) => {
		if (r?.type === 'image') {
			addInfo(contributions, r?.credit, 'image', r?.credit_date, r?.datetime, true);
		} else {
			addInfo(contributions, r?.credit, 'av', r?.credit_date, r?.datetime, true);
		}
	});
	pressmedia?.results?.forEach((r: any) => {
		if (r?.type === 'image') {
			addInfo(contributions, r?.credit, 'image', r?.credit_date, r?.dtpublished, true);
		} else {
			addInfo(contributions, r?.credit, 'av', r?.credit_date, r?.dtpublished, true);
		}
	});
	press?.results?.forEach((r: any) => {
		if (r?.credit) addInfo(contributions, r?.credit, 'text', r?.dtadded, r?.dtpublished, true);
	});
	press?.results?.forEach((r: any) => {
		if (r?.publication) addInfo(contributions, r?.publication, 'text', r?.dtadded, r?.dtpublished, false);
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
			<ContributionChart data={chartData} stacked={true} />
			<ContributionsTable data={sorted} total={total} onClick={onClick} sortBy={sortBy} sortOrder={sortOrder} />
		</main>
		</Loading>
	</>
}

export default Contributions;
