'use client';
import { useState } from 'react';

import Tabs from '@/components/Tabs';
import Introduction from './components/Introduction';
import Vision from './components/Vision';

export default function Page() {
  const [value, setValue] = useState('1');
  return (
    <div
      data-no-wrapper
      className="bg-[url('/company/bg_vision_border.png')] h-[898px] w-[3107px] bg-[length:100%_100%] overflow-hidden pt-1"
    >
      <div className="bg-[url('/company/bg_vision.png')] h-[886px] w-[3102px] bg-cover pt-[75px] pl-[100px]">
        <Tabs
          activeKey={value}
          isCache={true}
          onChange={(value) => setValue(value)}
        >
          <Tabs.Panel tabKey="1" tab={'使命愿景'}>
            <Vision />
          </Tabs.Panel>
          <Tabs.Panel tabKey="2" tab={'万益能源'}>
            <Introduction />
          </Tabs.Panel>
        </Tabs>
      </div>
    </div>
  );
}
