'use client';
import { useState } from 'react';
import Image from 'next/image';

import Tabs from '@/components/Tabs';

export default function Page() {
  const [value, setValue] = useState('1');
  const [page, setPage] = useState('1');
  return (
    <Tabs
      activeKey={value}
      isCache={true}
      onChange={(value) => setValue(value)}
    >
      <Tabs.Panel tabKey="1" tab={'省内电力交易'}>
        <Image
          src="/business/ele-province.png"
          className="h-[710px] ml-[700px] -mt-20"
          width={1390}
          height={710}
          priority
          alt={''}
        />
      </Tabs.Panel>
      <Tabs.Panel tabKey="2" tab={'跨省绿电交易'}>
        {page === '2' ? (
          <div className="flex -mt-[50px] ml-[250px]">
            <Image
              src="/business/business-ele-global.png"
              className="h-[626px]"
              width={1101}
              height={626}
              priority
              alt={''}
            />
            <div className="flex flex-col items-center ml-[100px] mt-[100px]">
              <Image
                src="/business/business-ele-north-1.png"
                className="h-[405px]"
                width={1215}
                height={405}
                priority
                alt={''}
              />
              <Image
                src="/business/business-ele-north-2.png"
                className="h-[36px] mt-[70px] ml-20"
                width={1038}
                height={36}
                priority
                alt={''}
              />
            </div>
            <Image
              onClick={() => {
                setPage('1');
              }}
              src="/business/icon_switch_left.png"
              className="h-[56px] absolute right-3 top-[300px]"
              width={56}
              height={56}
              priority
              alt={''}
            />
          </div>
        ) : (
          <div>
            <Image
              src="/business/illustrate-ele.png"
              className="h-[516px] ml-[150px] mt-12"
              width={2436}
              height={516}
              priority
              alt={''}
            />
            <Image
              onClick={() => {
                setPage('2');
              }}
              src="/business/icon_switch_right.png"
              className="h-[56px] absolute right-3 top-[300px]"
              width={56}
              height={56}
              priority
              alt={''}
            />
          </div>
        )}
      </Tabs.Panel>
    </Tabs>
  );
}
