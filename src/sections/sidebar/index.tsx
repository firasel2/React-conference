import SidebarItem from '@components/sidebar-item';
import { Fragment } from 'react';
import { ISidebar } from './interface';
import { usePathname } from 'next/navigation';

const Sidebar = ({ sidebarItems, children }: ISidebar) => {
  const pathName = usePathname();

  return (
    <section className="flex flex-col gap-5 md:gap-8 w-full lg:w-auto">
      {sidebarItems.length > 0 &&
        sidebarItems.map((sidebarItem, i) => (
          <Fragment key={i}>
            <SidebarItem {...sidebarItem} />
            {children && sidebarItem.active && children}
          </Fragment>
        ))}
    </section>
  );
};

export default Sidebar;
