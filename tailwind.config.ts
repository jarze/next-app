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
			'bg-button': 'var(--color-button-bg)',
			...colors,
			black: 'var(--black)',
		},
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'bottom-line':
					'linear-gradient(to right, transparent 0%, rgb(var(--color-primary-rgb)) 50%, transparent 100%)',
			},
			boxShadow: {
				primary: '0px 0px 32px 1px rgb(var(--color-primary-rgb))',
				'inner-primary': 'inset 0px 0px 16px 1px rgb(var(--color-primary-rgb))',
			},
			animation: {
				'pulse-slow': 'pulse 3s linear infinite',
				'pulse-scale': 'pulse 3s linear infinite,scale 3s linear infinite',
				'pluse-shadow': 'pluse-shadow 3s linear infinite',
			},
			keyframes: {
				'pluse-shadow': {
					'0% ,67%, 100%': {
						'box-shadow':
							'inset 0px 0px 16px 1px rgb(var(--color-primary-rgb))',
					},
					'85%': {
						'box-shadow':
							'inset 0px 0px 32px 1px rgb(var(--color-primary-rgb)),0px 0px 32px 1px rgb(var(--color-primary-rgb))',
					},
				},
				scale: {
					'50%': {
						transform: 'scale(1.1)',
					},
				},
			},
		},
	},
	plugins: [],
};
export default config;
