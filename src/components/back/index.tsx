'use client';
import { useLayoutEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Page({ children }: any) {
	const router = useRouter();

	const [show, setShow] = useState(false);

	useLayoutEffect(() => {
		setTimeout(() => {
			setShow(true);
		}, 0);
		return () => {};
	}, []);

	return (
		<div
			data-back
			data-show={show}
			className='absolute top-0 left-0 right-0 bottom-0 flex align-middle justify-center items-center backdrop-blur z-20 transition scale-[1.1] opacity-0 duration-700 data-[show=true]:opacity-100 data-[show=true]:scale-100'
			onClick={(e: any) => {
				if (e.target?.dataset?.back) {
					e?.stopPropagation?.();
					router.back();
				}
			}}
		>
			{children}
		</div>
	);
}
