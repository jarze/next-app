'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getGradientColors } from '@/utils/rgba';
import TabCard from '@/components/TabCard';

export default function Home() {
  const [value, setValue] = useState('1');
  return (
    <div className="flex h-full items-center">
      <div className="flex">
        <div className="flex flex-col font-bold  text-primary w-[300px]">
          <span>万益能源创始人&CEO</span>
          <span>李媛霞</span>
          <Image
            className="h-[330px]"
            src="/company/photo_ceo.png"
            width={330}
            height={330}
            priority
            alt={''}
          />
        </div>
        <div className="relative">
          <TabCard styles="ml-4 mt-16 w-[1001px] h-[324px] px-6 pt-4 indent-12 leading-10">
            <p>
              任何能源的产生，都是牺牲生态环境换来的，面对日益恶化的环境和全球气候变暖，我们希望通过我们不断积累的数据及技术，提高能源使用效率，让能源得到最大程度的利用，助推能源领域的数字化进程，为能源绿色、低碳、可持续发展贡献力量，改善环境、共建绿色美好生活！
            </p>
            <p>
              我相信，只要我们不畏惧困难，有走在前列和勇立潮头的大胆开拓精神，有豁出去的勇气和魄力，把工作干在实处，发扬艰苦奋斗的精神，全力以赴，我们终将共同成就一项具有社会意义的伟大事业！
            </p>
          </TabCard>
        </div>
      </div>
      <div className="flex ml-[60px] items-center">
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

        <div className="relative flex ml-[60px]">
          {getGradientColors('#00FFFF', '#2BE32B', 14, 1).map((m) => (
            <i
              key={m}
              style={{ backgroundColor: m }}
              className={'h-[64px] w-[9px] inline-block mr-[50px]'}
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
