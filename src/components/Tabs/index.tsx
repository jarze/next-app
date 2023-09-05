import TabsComps, { TTabsProp } from './Tabs';
import Panel from './Panel';

interface CompoundedComponent
  extends React.ForwardRefExoticComponent<
    TTabsProp & React.RefAttributes<HTMLElement>
  > {
  Panel: typeof Panel;
}

const Tabs = TabsComps as CompoundedComponent;
Tabs.Panel = Panel;
export default Tabs;
