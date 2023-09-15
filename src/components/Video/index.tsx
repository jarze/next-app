'use client';
import request from '@/utils/request';
import Image from 'next/image';
import {
	ReactNode,
	useRef,
	useState,
	forwardRef,
	useImperativeHandle,
} from 'react';

const videoUrl = '/video/zhuanchang.mp4';

export default forwardRef(function Video(props, refInstance) {
	const videoRef = useRef<HTMLVideoElement>(null);
	const [hide, setHide] = useState<ReactNode>(true);
	const [paused, setPaused] = useState<boolean>(true);
	useImperativeHandle(
		refInstance,
		() => ({
			play: () => {
				if (videoRef.current) {
					setHide(false);
					onPlay();
					videoRef.current?.play?.();
				}
			},
		}),
		[videoRef]
	);

	const onPlay = () => {
		request.get('/front/light-on', { baseURL: '/api' });
		setPaused(false);
	};
	const onPause = () => {
		const isPaused = videoRef.current?.paused;
		setPaused(!isPaused);
		if (isPaused) {
			videoRef.current?.play();
		} else {
			videoRef.current?.pause();
		}
	};
	const onReturn = () => {
		if (!videoRef.current) return;
		videoRef.current?.pause();
		setHide(true);
		videoRef.current.currentTime = 0;
	};
	return (
		<div
			onClick={e => {
				e.stopPropagation();
			}}
			className={`fixed w-[5760px] h-[1080px] z-40 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 overflow-hidden ${
				hide ? 'hidden' : ''
			} bg-black transition-opacity opacity-0 data-[show=true]:opacity-100`}
			data-show={!hide}
		>
			<div className='absolute bottom-[35px] right-[360px] z-50 flex flex-col items-center'>
				<li
					onClick={onPause}
					className={`inline-block w-[42px] h-[42px] active:shadow-primary cursor-pointer`}
				>
					{paused ? (
						<Image
							width={42}
							height={42}
							objectFit='contain'
							alt='播放视频'
							src={'/video/play-btn.png'}
						/>
					) : (
						<Image
							width={42}
							height={42}
							objectFit='contain'
							alt='暂停视频'
							src={'/video/pause-btn.png'}
						/>
					)}
				</li>
				<div
					onClick={onReturn}
					className='border border-primary text-2xl px-10 py-5 mt-5 text-primary shadow-inner-primary active:text-black active:bg-primary active:shadow-primary cursor-pointer'
				>
					返回软件
				</div>
			</div>
			<video
				style={{
					overflowClipMargin: 'content-box',
				}}
				className=' !max-w-[7680px] object-contain overflow-clip overflow'
				ref={videoRef}
				onEnded={() => {
					setPaused(true);
				}}
				preload='auto'
			>
				<source src={videoUrl} type='video/mp4' />
			</video>
		</div>
	);
});
