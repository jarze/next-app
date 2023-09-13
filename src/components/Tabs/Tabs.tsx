import React, { ReactElement, useMemo } from 'react';
import TabItem from './TabItem';
import TabsContext from './context';

export type TTabsProp = {
  isCache?: boolean;
  children: ReactElement[];
  activeKey: string | number;
  onChange?: (value: any) => void;
};

export default function Tabs({
  children,
  activeKey,
  onChange,
}: TTabsProp): JSX.Element {
  const activePanel = useMemo(() => {
    return children.find((v) => v.props?.tabKey === activeKey);
  }, [activeKey, children]);

  return (
    <>
      <div className="flex flex-row justify-end">
        <TabsContext.Provider value={{ activeKey, onChange }}>
          {children.map((m) => {
            return (
              <TabItem key={m.props.tabKey} tabKey={m.props.tabKey}>
                {m.props.tab}
              </TabItem>
            );
          })}
        </TabsContext.Provider>
      </div>
      {activePanel}
    </>
  );
}
