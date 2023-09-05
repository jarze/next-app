import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		colors: {
			primary: 'rgba(var(--color-primary-rgb), <alpha-value>)',
			bgButton: 'var(--color-button-bg)',
			...colors,
		},
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'bottom-line':
					'linear-gradient(to bottom, rgb(var(--color-primary-rgb))',
			},
		},
	},
	plugins: [],
};
export default config;
