'use client';
import { useState } from 'react';
import Tabs from '@/components/Tabs';
import GenerateBackground from './components/GenerateBackground';
import Reform from './components/Reform';
import Policy from './components/Policy';

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
        <GenerateBackground />
      </Tabs.Panel>
      <Tabs.Panel tabKey="3" tab={'电改背景'}>
        <Reform />
      </Tabs.Panel>
    </Tabs>
  );
}
