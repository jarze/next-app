'use client';
import { useMemo } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { routes as data } from '@/config';
import Link from 'next/link';

export default function Page({ children }: any) {
	const router = useRouter();
	const path = usePathname();

	const routes = useMemo(
		() =>
			data.find(i => {
				console.log(path.startsWith(i.url), path, i.url);
				return path.startsWith(i.url);
			})?.children || [],
		[path]
	);

	return (
		<nav
			id='sidenav-1'
			className='absolute left-0 top-0 z-[1035] h-full w-60 overflow-hidden bg-transparent'
		>
			<ul className='relative m-0 list-none px-[0.2rem]'>
				{routes.map(i => (
					<li className='relative' key={i.url}>
						<Link
							replace
							href={i.url}
							className='flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10'
						>
							<span>{i.title}</span>
							<span>{i.url === path ? 'active' : ''}</span>
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}
