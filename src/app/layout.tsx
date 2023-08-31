import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: '万益能源',
	description:
		'成立背景, 万益能源, 创业初心, 使命愿景, 业务介绍, 万益实力, 合作生态, 社会责任',
};

export default function RootLayout({ children, tab }: any) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				{children}
				{tab}
			</body>
		</html>
	);
}
