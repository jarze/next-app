'use client';

import { useEffect } from 'react';
import 'particles.js';
import particlesConfig from './particlesjs-config.json';

declare global {
	interface Window {
		particlesJS: any;
	}
}

export default function Page() {
	useEffect(() => {
		if (typeof window !== 'undefined') {
			window.particlesJS?.('bg-particle', particlesConfig);
		}
	}, []);

	return (
		<div
			id='bg-particle'
			className='fixed top-0 left-0 right-0 bottom-0 z-[-1]'
		></div>
	);
}
