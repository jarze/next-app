import './globals.css';
import type { Metadata } from 'next';
import Image from 'next/image';
import Particles from '@/components/particles';
// import { Inter } from 'next/font/google';

// const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: '万益能源',
	description:
		'成立背景, 万益能源, 创业初心, 使命愿景, 业务介绍, 万益实力, 合作生态, 社会责任',
	colorScheme: 'dark',
	themeColor: '#00FFEE',
	viewport: {
		viewportFit: 'cover',
		width: 'device-width',
	},
};

export default function RootLayout({ children, tab }: any) {
	return (
		<html lang='en'>
			<body>
				<Image
					src='/logo.svg'
					alt='万益能源'
					width={443}
					height={141}
					className='fixed left-16 top-16 -z-10'
				/>
				<Image
					src='/bg_lb.svg'
					alt=''
					width={443}
					height={141}
					className='fixed left-16 bottom-16 -z-10'
				/>
				<Image
					src='/bg_lb.svg'
					alt=''
					width={443}
					height={141}
					className='fixed right-16 top-16 -z-10 rotate-180'
				/>
				{children}
				{tab}
				<Particles />
			</body>
		</html>
	);
}
