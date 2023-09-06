'use client';
import { useState } from 'react';

import Tabs from '@/components/Tabs';
import Introduction from './components/Introduction';
import Vision from './components/Vision';

export default function Page() {
  const [value, setValue] = useState('1');
  return (
    <Tabs
      activeKey={value}
      isCache={true}
      onChange={(value) => setValue(value)}
    >
      <Tabs.Panel tabKey="1" tab={'万益能源'}>
        <Introduction />
      </Tabs.Panel>
      <Tabs.Panel tabKey="2" tab={'使命愿景'}>
        <Vision />
      </Tabs.Panel>
    </Tabs>
  );
}
