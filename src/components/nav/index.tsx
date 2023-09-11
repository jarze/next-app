'use client';
import { useMemo } from 'react';
import { usePathname, useSelectedLayoutSegments } from 'next/navigation';
import { routes as data } from '@/config';
import Link from 'next/link';
import './style.css';

export default function Page() {
	const path = usePathname();

	// 二级tab页
	const segments = useSelectedLayoutSegments();

	const routes = useMemo<any>(
		() =>
			data.find(i => {
				return path.startsWith(i.url);
			}) || {},
		[path]
	);

	return (
		routes?.title && (
			<nav
				className={`w-60 h-max basis-[510px] text-[48px] text-center ${
					segments?.length > 1 ? 'pointer-events-none' : ''
				}`}
			>
				<h2 className='mb-20 h-[133px] leading-[133px] text-[64px] nav-title'>
					{routes?.link ? (
						<Link replace href={routes?.url} className='block'>
							{routes.title}
						</Link>
					) : (
						routes?.title
					)}
				</h2>
				<ul className='relative m-0 list-none'>
					{routes?.children?.map?.((i: any) => (
						<li
							key={i.url}
							className='cursor-pointer transition duration-300 ease-linear mb-10 text-5xl text-primary leading-[2.5em] bg-bg-button border border-primary border-l-8 shadow-inner-primary active:bg-primary active:text-black active:shadow-primary data-[active=true]:bg-primary data-[active=true]:text-black data-[active=true]:shadow-primary'
							data-active={path.startsWith(i.url)}
						>
							<Link replace href={i.url} className='block'>
								{i.title}
							</Link>
						</li>
					))}
				</ul>
			</nav>
		)
	);
}
