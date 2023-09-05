'use client';

import { ReactSVG } from 'react-svg';

export default function Svg(params: any) {
	return (
		<ReactSVG
			onError={e => {
				console.error('React-svg:', e);
			}}
			{...params}
		/>
	);
}
