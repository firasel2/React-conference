import Sidebar from '@src/sections/sidebar';
import { useParams, usePathname } from 'next/navigation';
import { ReactNode } from 'react';

const SidebarSectionBuilder = ({ children }: { children?: ReactNode }) => {
  const { id } = useParams();
  const pathName = usePathname();

  return (
    <Sidebar
      sidebarItems={[
        {
          id: '01',
          href: `/${id}/organizer`,
          title: 'Organizer',
          active: pathName.includes('/organizer'),
          icon: 'Top Bottom Arrow',
        },
        {
          id: '02',
          href: `/${id}/speakers`,
          title: 'Speakers',
          active: pathName.includes('/speakers'),
          icon: 'Top Bottom Arrow',
        },
        {
          id: '03',
          href: `/${id}/schedule`,
          title: 'Schedule',
          active: pathName.includes('/schedule'),
          icon: 'Top Bottom Arrow',
        },
        {
          id: '04',
          href: `/${id}/sponsors`,
          title: 'Sponsors',
          active: pathName.includes('/sponsors'),
          icon: 'Top Bottom Arrow',
        },
      ]}
    >
      {children}
    </Sidebar>
  );
};

export default SidebarSectionBuilder;
