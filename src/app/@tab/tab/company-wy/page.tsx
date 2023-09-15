'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getGradientColors } from '@/utils/rgba';

export default function Home() {
  const [value, setValue] = useState('1');
  return (
    <div className="flex h-full items-center">
      <div className="flex ml-[340px] items-center">
        <div className=" flex flex-col  mt-24">
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
          <div className="flex flex-col items-center  mt-6">
            <i className="inline-block h-[102px] w-0 border border-dashed bg-primary" />
            <span className="ml-10 text-[40px] font-bold leading-10 mt-[30px]">
              2004年
            </span>
            <span className="ml-[68px] leading-10">华宇电力成立</span>
          </div>
        </div>

        <div className="relative flex ml-[120px]">
          <div className="absolute -top-[300px] left-[300px]">
            <Link href={'/tab/company-wy/ceo'}>
              <div className="text-primary text-3xl">
                <Image
                  className="h-[235px]"
                  src="/company/btn_ceo.png"
                  width={922}
                  height={235}
                  priority
                  alt={''}
                />
              </div>
            </Link>
          </div>
          {getGradientColors('#00FFFF', '#2BE32B', 14, 1).map((m) => (
            <i
              key={m}
              style={{ backgroundColor: m }}
              className={'h-[64px] w-[9px] inline-block mr-[106px]'}
            />
          ))}
        </div>
        <div className=" flex flex-col items-center mt-24">
          <Link href={'/tab/company-wy/wy'}>
            <Image
              className="h-[190px]"
              src="/company/logo_wyny.png"
              width={170}
              height={190}
              priority
              alt={''}
            />
          </Link>
          <div className="flex flex-col items-center mt-6">
            <i className="inline-block h-[102px] border border-dashed bg-primary" />
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
