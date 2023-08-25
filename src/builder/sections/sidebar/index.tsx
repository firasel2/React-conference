'use client';

import Sidebar from '@src/sections/sidebar';
import { ISidebar } from '@src/sections/sidebar/interface';
import { useParams } from 'next/navigation';
import { ReactNode, useState } from 'react';

const SidebarSectionBuilder = ({ children }: { children?: ReactNode }) => {
  const { id } = useParams();

  const [sidebarItems, setSidebarItems] = useState<ISidebar['sidebarItems']>([
    {
      id: '01',
      href: `/${id}/organizer`,
      title: 'Organizer',
      activeKey: '/organizer',
      icon: 'Top Bottom Arrow',
    },
    {
      id: '02',
      href: `/${id}/speakers`,
      title: 'Speakers',
      activeKey: '/speakers',
      icon: 'Top Bottom Arrow',
    },
    {
      id: '03',
      href: `/${id}/schedule`,
      title: 'Schedule',
      activeKey: '/schedule',
      icon: 'Top Bottom Arrow',
    },
    {
      id: '04',
      href: `/${id}/sponsors`,
      title: 'Sponsors',
      activeKey: '/sponsors',
      icon: 'Top Bottom Arrow',
    },
  ]);

  return (
    <Sidebar sidebarItems={sidebarItems} setSidebarItems={setSidebarItems}>
      {children}
    </Sidebar>
  );
};

export default SidebarSectionBuilder;
