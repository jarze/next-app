'use client';
import { useState, useCallback, useRef } from 'react';

interface LightenItemProps extends React.HTMLAttributes<HTMLDivElement> {
	/** active 间隔 */
	time?: number;
}

export default function LightenItem({
	children,
	className,
	time = 3500,
}: LightenItemProps) {
	const [active, setActive] = useState(false);
	const timer = useRef<any>();

	const handleClick = useCallback(
		(to: boolean) => {
			setActive(to);
			if (to && time) {
				clearTimeout(timer.current);
				timer.current = setTimeout(() => {
					setActive(false);
				}, time);
			}
		},
		[time]
	);

	return (
		<div
			onClick={() => handleClick(!active)}
			data-active={active}
			className={`${className} bg-bg-img transition-shadow overflow-clip data-[active=true]:shadow-inner-primary-l`}
		>
			{children}
		</div>
	);
}
