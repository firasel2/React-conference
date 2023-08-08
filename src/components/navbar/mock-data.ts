import { INavbar } from './interface';

export const navbarProps: INavbar = {
  logo: {
    src: 'https://res.cloudinary.com/dezqxmlny/image/upload/v1691513611/React%20Conference/React_1_vl9ukb.png',
    alt: 'React Conference',
  },
  routes: [
    {
      label: 'About us',
      route: '/',
    },
    {
      label: 'What We do',
      route: '/',
    },
    {
      label: 'Our work',
      route: '/',
    },
    {
      label: 'Blog',
      route: '/',
    },
    {
      label: 'Say hi',
      route: '/',
    },
  ],
};
