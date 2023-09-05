import Image from 'next/image';
import Link from 'next/link';

const data = [
	['发电企业', 'generate', 8],
	['售电企业', 'selling', 8],
	['用电企业', 'use', 8],
].map(i => ({
	title: i[0],
	key: i[1],
	data: new Array(i[2]).fill(1).map((j, index) => ({
		icon: `/collaboration/team/${i[1]}/${index + 1}.png`,
	})),
}));

export default async function Society({ searchParams }: any) {
	// const res = await fetch('http://localhost:3000/api/society');
	// const data: any = await res.json();
	const active = searchParams.link || data?.[0]?.key;
	return (
		<>
			<div className='absolute z-10 left-0 -top-3 whitespace-nowrap'>
				{data.map(({ title, key }: any) => (
					<Link
						key={key}
						// href={{ hash: key }}
						href={{ query: { link: key }, hash: key }}
						className='text-white/40 mr-20 active:text-primary data-[active]:text-primary'
						replace
						shallow
						{...(active === key ? { ['data-active']: true } : {})}
					>
						{title}
					</Link>
				))}
			</div>
			<div className='relative border-box h-full overflow-hidden top-11'>
				{data.map(
					i =>
						active === i.key && (
							<>
								<div
									key={i.key}
									className='h-full py-2 mb-6 flex flex-col flex-wrap justify-between content-start gap-6 overflow-scroll'
								>
									{i?.data?.map?.((j: any, index) => (
										<div
											key={j.icon}
											// id={index ? '' : (i.key as string)}
											className='relative text-primary w-max flex flex-col items-center border border-primary bg-[#141A25]'
										>
											<Image
												src={j.icon}
												width={707}
												height={327}
												alt={i.title as string}
											/>
										</div>
									))}
								</div>
							</>
						)
				)}
			</div>
		</>
	);
}
