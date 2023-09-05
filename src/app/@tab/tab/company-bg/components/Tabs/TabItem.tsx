'use client';
import { ReactElement, useContext } from 'react';
import TabsContext from './context';

export type TPanelProp = {
  children: string | ReactElement;
  tabKey: string | number;
};

export default function TabItem({ children, tabKey }: TPanelProp): JSX.Element {
  const tabCtx = useContext(TabsContext);
  console.log('ssss', tabCtx);

  return (
    <div
      className={
        (tabCtx.activeKey === tabKey ? 'text-primary ' : 'text-white/[0.4]') + ' pr-[80px] '
      }
      onClick={() => tabCtx.onChange(tabKey)}
    >
      {children}
    </div>
  );
}
