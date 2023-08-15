import Sidebar from '@src/sections/sidebar';

const SidebarSectionBuilder = () => {
  return (
    <Sidebar
      sidebarItems={[
        {
          href: '/organizer',
          title: 'Organizer',
          active: true,
          icon: 'Top Bottom Arrow',
        },
        {
          href: '/speakers',
          title: 'Speakers',
          active: false,
          icon: 'Top Bottom Arrow',
        },
        {
          href: '/schedule',
          title: 'Schedule',
          active: false,
          icon: 'Top Bottom Arrow',
        },
        {
          href: '/sponsors',
          title: 'Sponsors',
          active: false,
          icon: 'Top Bottom Arrow',
        },
      ]}
    />
  );
};

export default SidebarSectionBuilder;
