import { IconNames } from '@components/icons/interface';

export interface ISidebarItem {
  id: string;
  title: string;
  href: string;
  activeKey?: string;
  active?: boolean;
  icon?: IconNames;
}
