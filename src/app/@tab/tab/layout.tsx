import Back from '@/components/back';
import Nav from '@/components/nav';

export default function Layout(props: any) {
	return (
		<Back>
			<div className='relative w-3/4 h-3/4'>
				<Nav />
				<div
					className='relative p-5 ml-[260px] h-full bg-black border-solid border-2 border-sky-500 overflow-hidden'
					id='content'
				>
					{props.children}
				</div>
			</div>
		</Back>
	);
}
