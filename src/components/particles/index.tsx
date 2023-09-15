'use client';

import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import particlesConfig from './particlesjs-config.json';
import { loadSlim } from 'tsparticles-slim'; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.

declare global {
	interface Window {
		particlesJS: any;
	}
}

export default function Page() {
	const particlesInit = useCallback(async (engine: any) => {
		// console.log(engine);
		// you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
		// this loads the tsparticles package bundle, it's the easiest method for getting everything ready
		// starting from v2 you can add only the features you need reducing the bundle size
		//await loadFull(engine);
		await loadSlim(engine);
	}, []);

	// const particlesLoaded = useCallback(async (container: any) => {
	// 	await console.log(container);
	// }, []);

	return (
		<Particles
			id='tsparticles'
			options={particlesConfig as any}
			init={particlesInit}
			// loaded={particlesLoaded}
			className='fixed top-0 left-0 right-0 bottom-0 filter blur-[2px] z-[-1]'
		/>
	);
}
