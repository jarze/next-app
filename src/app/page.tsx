import Image from 'next/image';
import Link from 'next/link';
import { routes as data } from '@/config';

export default function Home() {
	return (
		<main className='relative h-screen flex items-center justify-center text-[56px]'>
			<div className='absolute h-[1080px] w-[1220px] flex flex-col justify-center items-center z-[-1]'>
				<Image
					src='/c_start.png'
					alt='小益'
					width={508}
					height={528}
					priority
					className='absolute mt-[-215px] ml-[-300px] z-1'
				/>
				<Image
					className='dark:drop-shadow-[0_0_0.3rem_#ffffff70] relative top-10'
					src='/xiaoyi.svg'
					alt='小益 Logo'
					width={330}
					height={450}
					priority
				/>
				<Image
					src='/bottom.png'
					alt='小益'
					width={1213}
					height={1080}
					className='absolute bottom-0 h-[1080px] z-[-1]'
					priority
				/>
			</div>
			<div className='w-2/3 h-3/4 z-10 grid grid-cols-2 gap-x-96 gap-y-14'>
				{data.map(i => (
					<div key={i.title}>
						<Link
							href={i.children?.[0]?.url || i.url}
							className='home-button transition-colors inline-block px-24 py-4 whitespace-nowrap leading-normal'
						>
							{i.title}
						</Link>
					</div>
				))}
			</div>
		</main>
	);
}
