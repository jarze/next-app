import Image from 'next/image';
import Link from 'next/link';
import { routes as data } from '@/config';
import Svg from '@/components/rsvg';

const pathRelative: any = {
	l_1: 'left-[418px] top-7',
	r_1: 'right-[418px] top-7',
	l_2: 'top-24',
	r_2: 'top-24',
	l_3: 'top-7',
	r_3: 'top-7',
};

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
					className='absolute bottom-0 h-[1080px] z-[-1] animate-pulse-slow'
					priority
				/>
			</div>
			<div className='w-2/3 h-3/4 z-10 grid grid-cols-2 gap-x-96 gap-y-14'>
				{data.map((i, index) => {
					const loc = `${index % 2 ? 'r' : 'l'}_${Math.ceil((index + 1) / 2)}`;
					return (
						<div
							key={i.title}
							className={`flex items-start ${
								index % 2 ? 'flex-row' : 'flex-row-reverse'
							}`}
						>
							<Svg
								src={`/line/${loc}.svg`}
								className='max-w-full overflow-hidden peer'
							/>
							<Link
								href={i.children?.[0]?.url || i.url}
								className={`peer-[:empty]:hidden transition inline-block px-24 py-4 whitespace-nowrap leading-normal bg-bg-button text-primary border border-primary shadow-inner-primary active:bg-primary active:text-black active:shadow-primary relative animate-pluse-shadow ${
									pathRelative[loc] || ''
								}`}
							>
								{i.title}
							</Link>
						</div>
					);
				})}
			</div>
		</main>
	);
}
