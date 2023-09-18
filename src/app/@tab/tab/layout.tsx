import Back from '@/components/back';
import Nav from '@/components/nav';
import FadeIn from '@/components/fadeIn';

export default function Layout(props: any) {
	return (
		<Back>
			<div
				data-back
				className='relative w-[70%] h-5/6 flex flex-row-reverse gap-20'
			>
				<Nav />
				<div
					id='content'
					className='relative h-full px-32 py-24 min-w-0 min-h-0 max-w-[3170px] overflow-hidden flex-1 text-3xl'
				>
					<FadeIn className='relative h-full'>{props.children}</FadeIn>
				</div>
			</div>
		</Back>
	);
}
