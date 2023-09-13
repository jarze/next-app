'use client';
import request from '@/utils/request';
import {
  ReactNode,
  useEffect,
  useRef,
  useState,
  forwardRef,
  useImperativeHandle,
} from 'react';
function preload(url: string) {
  return new Promise((resolve, reject) => {
    var req = new XMLHttpRequest();
    req.open('GET', url, true);
    req.responseType = 'blob';

    req.onload = function () {
      // Onload is triggered even on 404
      // so we need to check the status code
      if (this.status === 200) {
        var videoBlob = this.response;
        var vid = URL.createObjectURL(videoBlob); // IE10+
        resolve(vid);
      }
    };
    req.onerror = function () {
      console.error('加载视频失败:', url);
      reject(`加载视频失败:${url}`);
    };
    req.send();
  });
}
let video1Preload = preload('/video/zhuanchang.mp4');

export default forwardRef(function Video(props, refInstance) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoNode, setVideoNode] = useState<ReactNode>(<div />);
  const [hide, setHide] = useState<ReactNode>(true);
  useImperativeHandle(refInstance, () => ({
    play: () => {
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        setHide(false);
        onPlay();
        videoRef.current.play();
      }
    },
  }));
  useEffect(() => {
    Promise.allSettled([video1Preload]).then(([video1Url]) => {
      if (video1Url.status === 'fulfilled') {
        setVideoNode(<VideoCom url={video1Url.value} refObj={videoRef} />);
      }
    });
  }, []);
  const onPlay = () => {
    request.get('/front/light-on', { baseURL: '/api' });
  };
  const onPause = () => {
    const isPaused = videoRef.current?.paused;
    if (isPaused) {
      videoRef.current?.play();
    } else {
      videoRef.current?.pause();
    }
  };
  const onReturn = () => {
    videoRef.current?.pause();
    setHide(true);
  };
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
      }}
      className={`fixed w-[5760px] h-[1080px] z-40 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 overflow-hidden ${
        hide ? 'hidden' : ''
      }`}
    >
      <div className="absolute bottom-[35px] right-[360px] z-50 flex flex-col items-center">
        <li
          onClick={onPause}
          className=" inline-block w-[42px] h-[42px] bg-[url('/video/pause-btn.png')]"
        />

        <div
          onClick={onReturn}
          className="border border-primary rounded text-2xl p-5 mt-5"
        >
          返回软件
        </div>
      </div>

      {videoNode}
    </div>
  );
});

function VideoCom({ refObj, url }: any) {
  return (
    <video
      style={{
        overflowClipMargin: 'content-box',
      }}
      className=" !max-w-[7680px] object-contain overflow-clip overflow"
      src={url}
      ref={refObj}
    ></video>
  );
}
