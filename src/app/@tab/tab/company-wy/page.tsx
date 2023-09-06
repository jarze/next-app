'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getGradientColors } from '@/utils/rgba';

export default function Home() {
  const [value, setValue] = useState('1');
  return (
    <div className="flex h-full items-center">
      <Link href={'/tab/company-wy/ceo'}>
        <Image
          className="h-[141px]"
          src="/company/btn_init_vision.png"
          width={716}
          height={141}
          priority
          alt={''}
        />
      </Link>
      <div className="ml-[240px]">
        <div className="mb-[60px] flex items-end">
          <Link href={'/tab/company-wy/hy'}>
            <Image
              className="h-[175px]"
              src="/company/logo_hydl.png"
              width={241}
              height={175}
              priority
              alt={''}
            />
          </Link>
          <div className="ml-[370px] text-primary text-3xl">
            深耕电力行业近20年，用科技赋能传统
          </div>
          <Link href={'/tab/company-wy/wy'}>
            <Image
              className="ml-[410px] h-[190px]"
              src="/company/logo_wyny.png"
              width={170}
              height={190}
              priority
              alt={''}
            />
          </Link>
        </div>
        <div className="ml-[120px]">
          {getGradientColors('#00FFFF', '#2BE32B', 14, 1).map((m) => (
            <i
              key={m}
              style={{ backgroundColor: m }}
              className={'h-[64px] w-[9px] inline-block mr-[106px]'}
            />
          ))}
        </div>
        <div className="relative flex">
          <div className="flex flex-col items-center">
            <i className="inline-block h-[102px] w-0 border border-dashed bg-primary" />
            <div className="flex justify-center items-center mt-4 w-12 h-12 border border-primary rounded-full">
              <i className="inline-block h-2 w-2 rounded-full bg-primary" />
            </div>
            <span className="ml-10 text-[40px] font-bold leading-10 mt-[30px]">
              2004年
            </span>
            <span className="ml-[68px] leading-10">华宇电力成立</span>
          </div>
          <div className="ml-[1248px] flex flex-col items-center">
            <i className="inline-block h-[102px] border border-dashed bg-primary" />
            <div className="flex justify-center items-center mt-4 w-12 h-12 border border-primary rounded-full">
              <i className="inline-block h-2 w-2 rounded-full bg-primary" />
            </div>
            <span className="ml-10 text-[40px] font-bold leading-10 mt-[30px]">
              2016年
            </span>
            <span className="ml-[68px] leading-10">万益能源成立</span>
          </div>
        </div>
      </div>
    </div>
  );
}
