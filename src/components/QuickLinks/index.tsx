'use client';
import Link from 'next/link';
import { usePathname, useSelectedLayoutSegments } from 'next/navigation';
import { routes as data } from '@/config';
import './style.css';

export default function Links() {
	const path = usePathname();

	return (
		<div className='z-30 absolute right-16 bottom-16 w-[388px] h-[388px] radial-wrapper text-lg'>
			{data.map((i, index) => (
				<div
					className='absolute top-0 left-0 right-0 bottom-0 text-center pointer-events-none'
					key={i.url}
					style={{ transform: `rotate(${60 * index}deg)` }}
				>
					<Link
						href={i.link ? i.url : i.children?.[0]?.url || i.url}
						className='radial-btn text-primary active:text-black font-medium transition relative pointer-events-auto'
						replace={path !== '/'}
					>
						{i.title}
					</Link>
				</div>
			))}
		</div>
	);
}
