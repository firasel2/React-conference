import SidebarItem from '@components/sidebar-item';
import React from 'react';
import { ISidebar } from './interface';

const Sidebar = ({ sidebarItems }: ISidebar) => {
  return (
    <section className="flex flex-col gap-8">
      {sidebarItems.map((sidebarItem, i) => (
        <SidebarItem key={i} {...sidebarItem} />
      ))}
    </section>
  );
};

export default Sidebar;
