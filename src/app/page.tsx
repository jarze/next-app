import Image from 'next/image';
import Link from 'next/link';
import { routes as data } from '@/config';
import Svg from '@/components/rsvg';

const pathRelative: any = {
	l_1: 'left-[425px] top-9',
	r_1: 'right-[425px] top-9',
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
					alt=''
					width={508}
					height={528}
					priority
					className='absolute mt-[-170px] ml-[-340px] z-10 mask-start'
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
			<div className='h-3/4 z-10 grid grid-cols-2 gap-x-96 gap-y-14'>
				{data.map((i, index) => {
					const loc = `${index % 2 ? 'r' : 'l'}_${Math.ceil((index + 1) / 2)}`;
					return (
						<div
							key={i.title}
							className={`drop flex items-start ${
								index % 2 ? 'flex-row' : 'flex-row-reverse'
							}`}
							style={{
								animationDelay: `${1100 * (index % 3)}ms`,
								animationDuration: `${10 + index}s`,
							}}
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
								<Image
									src={'/button/corner.svg'}
									width={430}
									height={140}
									aria-disabled
									alt=''
									className='absolute left-0 -top-2 scale-105 animate-ping-small'
								/>
								{i.title}
							</Link>
						</div>
					);
				})}
			</div>
		</main>
	);
}
