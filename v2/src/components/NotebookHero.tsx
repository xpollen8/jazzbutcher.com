"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const NotebookHero = ({ arg }: any) => {
	const [ src, setSrc ] = useState();
	const images = [
		'lotga/LoTGA_44_Strata_1500.png',
		'lotga/LoTGA_60_Pile_1500.png',
		'lotga/LoTGA_60_WhenEggsAttack_1500.png',
		'lotga/LoTGA_78_Ornette_1500.png',
		'lotga/LoTGA_94_IslandPickings_1500.png',
	];
	useEffect(() => {
		setSrc('https://v1.jazzbutcher.com/images/notebooks/' + images[Math.floor(Math.random() * (images.length))]);
	});
	return src && <Link href={src}><Image className="mt-1" src={src} width={1500} height={500} alt='from LoTGA notebook' /></Link>
}

export default NotebookHero;
