'use client';
import { useState } from 'react';
import Image from 'next/image';

import Tabs from '@/components/Tabs';
const list = [
  {
    value: 'I-REC',
  },
  {
    value: 'CEA',
  },
  {
    value: 'CQEA',
  },
  {
    value: 'HBEA',
  },
  {
    value: 'VCUS',
  },
  {
    value: 'CCER',
  },
  {
    value: 'GEC',
  },
];
export default function Page() {
  const [value, setValue] = useState('1');
  return (
    <Tabs
      activeKey={value}
      isCache={true}
      onChange={(value) => setValue(value)}
    >
      <Tabs.Panel tabKey="1" tab={'碳减排项目开发'}>
        <Image
          src="/business/carbon-development.png"
          className="h-[557px] ml-[700px] mt-20"
          width={1570}
          height={557}
          priority
          alt={''}
        />
      </Tabs.Panel>
      <Tabs.Panel tabKey="2" tab={'碳交易业务'}>
        <div className="flex flex-col items-center mt-[150px]">
          <div className="flex">
            {list.map((m) => {
              return (
                <div
                  className=" text-[#030322] text-[55px] mr-[128px] w-[200px] h-[200px] rounded-full bg-primary leading-[200px] text-center"
                  key={m.value}
                >
                  {m.value}
                </div>
              );
            })}
          </div>
          <div className="mt-[100px] mr-20">
            提供全国市场碳配额（CEA)、地方市场碳配额（CQEA、HBEA
            等）、CCER、VCUs、GCC、国际绿证（I-REC)、国内绿证（GEC）等现货 /
            远期资源及撮合交易服务。
          </div>
        </div>
      </Tabs.Panel>
    </Tabs>
  );
}
