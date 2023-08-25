import { ISidebar } from './interface';

export const sidebarProps: ISidebar = {
  sidebarItems: [
    {
      id: '01',
      href: '/organizer',
      title: 'Organizer',
      active: true,
      icon: 'Top Bottom Arrow',
    },
    {
      id: '02',
      href: '/speakers',
      title: 'Speakers',
      active: false,
      icon: 'Top Bottom Arrow',
    },
    {
      id: '03',
      href: '/schedule',
      title: 'Schedule',
      active: false,
      icon: 'Top Bottom Arrow',
    },
    {
      id: '04',
      href: '/sponsors',
      title: 'Sponsors',
      active: false,
      icon: 'Top Bottom Arrow',
    },
  ],
  setSidebarItems: () => {},
};
