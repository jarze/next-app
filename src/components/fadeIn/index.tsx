'use client';
import { useState, useLayoutEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export default function FadeIn({
	children,
	className,
}: React.HTMLAttributes<HTMLDivElement>) {
	const [show, setShow] = useState(false);
	const contentRef = useRef<HTMLDivElement>(null);
	const path = usePathname();

	useLayoutEffect(() => {
		setTimeout(() => {
			setShow(true);
		}, 100);
		return () => {
			setShow(false);
		};
	}, [path]);

	return (
		<div
			ref={contentRef}
			className={`${
				className || ''
			} opacity-0 data-[show=false]:duration-0 data-[show=true]:duration-300 data-[show=true]:opacity-100`}
			data-show={show}
		>
			{children}
		</div>
	);
}
