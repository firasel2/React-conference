import { ISidebarItem } from '@components/sidebar-item/interface';
import { ReactNode } from 'react';

export interface ISidebar {
  sidebarItems: ISidebarItem[];
  setSidebarItems: (sidebarItems: ISidebarItem[]) => void;
  children?: ReactNode;
}
