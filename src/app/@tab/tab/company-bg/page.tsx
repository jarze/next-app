'use client';
import { useState } from 'react';
import Policy from './components/Policy';
import Tabs from '@/components/Tabs';

export default function Page() {
  const [value, setValue] = useState('1');
  return (
    <Tabs
      activeKey={value}
      isCache={true}
      onChange={(value) => setValue(value)}
    >
      <Tabs.Panel tabKey="1" tab={'政策背景'}>
        <Policy />
      </Tabs.Panel>
      <Tabs.Panel tabKey="2" tab={'发电侧结构背景'}>
        <div>11111</div>
      </Tabs.Panel>
    </Tabs>
  );
}
