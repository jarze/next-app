import request from '@/utils/request';
import Image from 'next/image';

export default async function Page() {
	const { data } = await request.get('/front/news/list');
	return (
		<div>
			{data?.newsData?.map?.((i: any) => (
				<div key={i.id}>
					<h1>{i.title}</h1>
					<Image
						src={`/api/file/preview/${i.pic}`}
						alt={i.title}
						width={500}
						height={300}
					/>
					<p>{i.desc}</p>
				</div>
			))}
		</div>
	);
}
