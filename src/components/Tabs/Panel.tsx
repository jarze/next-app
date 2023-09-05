import { ReactElement, useContext } from 'react';
import TabsContext from './context';

export type TPanelProp = {
  children: string | ReactElement;
  tab: string | ReactElement;
  tabKey: string | number;
};

export default function Panel({ children }: TPanelProp): JSX.Element {
  return <div className='mt-[50px]'>{children}</div>;
}
