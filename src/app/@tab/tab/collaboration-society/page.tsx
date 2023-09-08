import Image from 'next/image';

const data = [
	{
		title: '中国节能协会',
		icon: '/collaboration/society/中国节能协会.png',
	},
	{
		title: '北京环境交易所',
		icon: '/collaboration/society/北京环境交易所.png',
	},
	{
		title: '四川省节能协会',
		icon: '/collaboration/society/四川省节能协会.png',
	},
	{
		title: '四川联合环境交易所',
		icon: '/collaboration/society/四川联合环境交易所.png',
	},
	{
		title: '四川省电力企业协会',
		icon: '/collaboration/society/四川省电力企业协会.png',
	},
	{
		title: '上海环境能源交易所',
		icon: '/collaboration/society/上海环境能源交易所.png',
	},
	{
		title: '重庆市低碳协会',
		icon: '/collaboration/society/重庆市低碳协会.png',
	},
	{
		title: '广州碳排放交易权',
		icon: '/collaboration/society/广州碳排放交易权.png',
	},
];

export default async function Society(params: any) {
	// const res = await fetch('http://localhost:3000/api/collaboration/society');
	// const data: any = await res.json();
	return (
		<div className='h-full py-2 flex flex-col flex-wrap justify-between content-start gap-6 overflow-x-auto'>
			{data?.map?.((i: any) => (
				<div
					key={i.title}
					className='relative text-primary w-max flex flex-col items-center border border-primary bg-bg-img transition-shadow active:shadow-inner-primary'
				>
					<Image src={i.icon} width={707} height={327} alt={i.title} />
					<span className='absolute bottom-8'>{i.title}</span>
				</div>
			))}
		</div>
	);
}
