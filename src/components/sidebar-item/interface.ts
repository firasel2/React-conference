import { IconNames } from '@components/icons/interface';

export interface ISidebarItem {
  title: string;
  href: string;
  active?: boolean;
  icon?: IconNames;
}
