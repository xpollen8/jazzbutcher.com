"use client";

import Link from 'next/link';
import Image from 'next/image';
import PhotoSet from '@/components/PhotoSet';
import { useState, useEffect } from 'react';

const images = [
	{ src: '/images/notebooks/lotga/LoTGA_44_Strata_1500.png', alt: 'Gents: I Bloody Hate Doing Strata' },
	{ src: '/images/notebooks/lotga/LoTGA_60_Pile_1500.png', alt: "Gents: Pile 'O with Sword" },
	{ src: '/images/notebooks/lotga/LoTGA_60_WhenEggsAttack_1500.png', alt: 'Gents: When Eggs Attack' },
	{ src: '/images/notebooks/lotga/LoTGA_78_Ornette_1500.png', alt: 'Gents: Have you any Ornette Coleman?' },
	{ src: '/images/notebooks/lotga/LoTGA_94_IslandPickings_1500.png', alt: 'Gents: Island Pickings' },
	{ src: '/images/notebooks/lotga/LoTGA_122_SolarCore_1500.png', alt: 'Gents: Nothing Less..' },
	{ src: '/images/notebooks/lotga/LoTGA_127_Certify_1500.png', alt: 'Gents: Certificate' },
	{ src: '/images/notebooks/lotga/LoTGA_134_Ignored_1500.png', alt: 'Gents: Better to be ignored..' },
	{ src: '/images/notebooks/lotga/LoTGA_156_Behead_1500.png', alt: 'Gents: BEHEAD those..' },
];

const NotebookHero = ({ arg }: any) => {
	const [ src, setSrc ] = useState('');
	const [ alt, setAlt ] = useState('');
	useEffect(() => {
		const img = images[Math.floor(Math.random() * (images.length))];
		if (img) {
			setSrc('https://v1.jazzbutcher.com' + img.src);
			setAlt(img.alt);
		}
	});
	if (!src?.length) return;
	return <Link href='/notebooks'><Image className="mt-1" src={src} width={1500} height={500} alt={alt} /></Link>
}

export const NotebookHeros = () => {
	return <PhotoSet title='Particularly Amusing Notebook Artwork' photos={images}  credit='Pat Fish' credit_date='2025-10-07' />
}

export default NotebookHero;
