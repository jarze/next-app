'use client';
import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { routes as data } from '@/config';
import './style.css';

const sortArray = (arr: Array<number>) => {
	const len = arr.length;
	const mid = Math.floor(len / 2);
	const part1 = arr.slice(0, mid);
	const part2 = arr.slice(mid).reverse();

	const result: number[] = [];

	for (let i = 0; i < mid; i++) {
		result.push(part1[i]);
		result.push(part2[i]);
	}

	return result;
};

const sorter: number[] = sortArray(
	new Array(data.length).fill(1).map((i, j) => j)
);

export default function Links() {
	const path = usePathname();
	const [open, setOpen] = useState(false);

	const activeSorter = useMemo(() => {
		const item = data.find(i => path.startsWith(i.url));
		if (!item) return 0;
		return sorter[data.indexOf(item)];
	}, [path]);

	return (
		<div
			className='z-30 absolute right-80 bottom-1/3 w-[388px] h-[388px] radial-wrapper text-lg transition'
			style={{ transform: `rotate(${60 * activeSorter}deg)` }}
		>
			<div
				data-show={open}
				className={`absolute top-0 left-0 right-0 bottom-0 scale-0 opacity-0 transition data-[show=true]:scale-100 data-[show=true]:opacity-100`}
			>
				{data.map((i, index) => (
					<div
						className='absolute top-0 left-0 right-0 bottom-0 text-center pointer-events-none'
						key={i.url}
						style={{ transform: `rotate(${60 * (6 - sorter[index])}deg)` }}
					>
						<Link
							href={i.link ? i.url : i.children?.[0]?.url || i.url}
							className='radial-btn text-primary font-medium transition relative pointer-events-auto active:text-black data-[active=true]:text-black'
							replace={path !== '/'}
							prefetch
							data-active={path.startsWith(i.url)}
						>
							{i.title}
						</Link>
					</div>
				))}
			</div>
			<Image
				src='/button/logo_circle.svg'
				width={188}
				height={188}
				alt='万益'
				className='absolute top-1/2 left-1/2 mt-[-94px] ml-[-94px] rounded-[94px] active:shadow-primary active:scale-105 transition cursor-pointer animate-spin'
				style={{ animationDuration: '16s' }}
				onClick={() => setOpen(p => !p)}
			/>
		</div>
	);
}
