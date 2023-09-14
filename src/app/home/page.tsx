import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
	return (
		<Link href='/' replace className='fixed top-0 left-0 right-0 bottom-0 z-40'>
			<Image
				src={'/placeholder.png'}
				width={5760}
				height={1080}
				alt='数据改变未来'
				className='w-full h-full object-cover'
			/>
		</Link>
	);
}
