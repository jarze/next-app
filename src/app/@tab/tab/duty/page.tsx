'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const photoList = [
  '/duty/photo_1.png',
  '/duty/photo_2.png',
  '/duty/photo_3.png',
  '/duty/photo_4.png',
  '/duty/photo_5.png',
  '/duty/photo_6.jpg',
  '/duty/photo_7.jpg',
  '/duty/photo_8.jpg',
  '/duty/photo_9.jpg',
  '/duty/photo_10.jpg',
  '/duty/photo_11.png',
  '/duty/photo_12.png',
];
const order = [[1, 2], [3, 5], [4]];

export default function Page() {
  const [currentImageList, setCurrentImageList] = useState([
    '/duty/photo_1.png',
    '/duty/photo_2.png',
    '/duty/photo_3.png',
    '/duty/photo_4.png',
    '/duty/photo_5.png',
  ]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((value) => {
        let newvalue = value + 1;
        newvalue = newvalue > 2 ? 0 : newvalue;
        const newOrder = order[newvalue];
        setCurrentImageList((list) => {
          newOrder.forEach((m) => {
            let index = Math.floor(Math.random() * 12);
            console.log('list');

            while (list.includes(photoList[index])) {
              index = Math.floor(Math.random() * 12);
            }
            list[m] = photoList[index];
          });
          return [...list];
        });
        return newvalue;
      });
    }, 3000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="relative flex justify-center items-center h-full w-full">
      <div className="flex flex-row">
        <div className="flex flex-col">
          <div className="flex flex-row">
            <div className="flex justify-center items-center px-[69px] w-[1021px] h-[346px] bg-gradient-to-r from-[#F07026] to-[#1BD7CB] leading-10">
              <span>
                公司在发展壮大的同时，成立“华宇万益志愿者服务队”定期开展各项志愿者活动，积极投入社会公益事业。用自己的实际行动，担当起社会责任，传承中华文明品德，不断回报社会。
              </span>
            </div>
            <Image
              className={`ml-6 h-[346px] ${
                order[count].includes(1) ? 'animate-pluse-in-out' : ''
              } `}
              src={currentImageList[0]}
              width={495}
              height={346}
              alt={''}
            />
          </div>
          <div className="flex flex-row mt-6">
            <Image
              className={`h-[346px] ${
                order[count].includes(2) ? 'animate-pluse-in-out' : ''
              } `}
              src={currentImageList[1]}
              width={495}
              height={346}
              alt={''}
            />
            <Image
              className={`ml-6 h-[346px] ${
                order[count].includes(3) ? 'animate-pluse-in-out' : ''
              } `}
              src={currentImageList[2]}
              width={495}
              height={346}
              alt={''}
            />
            <Image
              className={`ml-6 h-[346px] ${
                order[count].includes(4) ? 'animate-pluse-in-out' : ''
              } `}
              src={currentImageList[3]}
              width={495}
              height={346}
              alt={''}
            />
          </div>
        </div>
        <Image
          className={`ml-6 h-[707px] ${
            order[count].includes(5) ? 'animate-pluse-in-out' : ''
          } `}
          src={currentImageList[4]}
          width={1154}
          height={707}
          alt={''}
        />
      </div>
    </div>
  );
}
