'use client';

import { useRouter } from 'next/navigation';

export default function Page({ children }: any) {
	const router = useRouter();
	return (
		<div
			data-back
			className='fixed top-0 left-0 right-0 bottom-0 flex align-middle justify-center items-center backdrop-blur-sm'
			onClick={(e: any) => {
				if (e.target?.dataset?.back) {
					router.back();
				}
			}}
		>
			{children}
		</div>
	);
}
