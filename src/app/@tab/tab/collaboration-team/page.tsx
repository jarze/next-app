import Image from 'next/image';
import Link from 'next/link';

const data = [
	[
		'发电企业',
		'generate',
		[
			'国家能源集团',
			'雅砻江水电',
			'大唐集团',
			'中广核',
			'中国华电集团',
			'晶科电力',
			'中国华能集团',
			'山东能源集团',
		],
	],
	[
		'售电企业',
		'selling',
		[
			'国家电网公司',
			'成都综合能源',
			'华润电力',
			'北京融和晟源能源',
			'协鑫能源',
			'宏远创信',
			'晶科能源',
			'四川明星电力',
		],
	],
	[
		'用电企业',
		'use',
		[
			'凯德',
			'冶控集团',
			'五粮液',
			'舍得酒业',
			'SANY',
			'万达广场',
			'神龙汽车有限公司',
			'中国建材',
		],
	],
].map(i => ({
	title: i[0],
	key: i[1],
	data: new Array(i[2]?.length).fill(i[2]).map((j, index) => ({
		icon: `/collaboration/team/${i[1]}/${j[index]}.png`,
	})),
}));

export default async function Society({ searchParams }: any) {
	// const res = await fetch('http://localhost:3000/api/society');
	// const data: any = await res.json();
	const active = searchParams.link || data?.[0]?.key;
	return (
		<>
			<div className='absolute z-10 right-0 -top-3 whitespace-nowrap'>
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
									key={i.key as string}
									className='h-full py-2 mb-6 flex flex-col flex-wrap justify-between content-start gap-6 overflow-scroll'
								>
									{i?.data?.map?.((j: any, index) => (
										<div
											key={j.icon}
											// id={index ? '' : (i.key as string)}
											className='relative text-primary w-max flex flex-col items-center border border-primary bg-bg-img transition-shadow active:shadow-inner-primary'
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
