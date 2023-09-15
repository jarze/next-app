'use client';
import React, { useRef, useCallback, cloneElement, useContext } from 'react';
import Video from '.';

const VideoContext = React.createContext<Function>(() => {});

export default VideoContext;

export const VideoProvider = ({ children }: any) => {
	const videoRef = useRef<HTMLVideoElement>(null);

	const play = useCallback(() => {
		videoRef?.current?.play?.();
	}, [videoRef]);
	return (
		<VideoContext.Provider value={play}>
			{children}
			<Video ref={videoRef} />
		</VideoContext.Provider>
	);
};

export const VideoPlay = ({ children }: any) => {
	const play = useContext(VideoContext);
	return cloneElement(children, { onClick: play });
};
