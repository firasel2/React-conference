import { ISponsor } from './interface';

export const sponsorProps: ISponsor = {
  sponsors: [
    {
      type: 'Sponsors',
      title: 'Louis Vuitton',
      subTitle: 'Lorem ipsum dolor sit amet, con sec tetur ad.',
      image: {
        url: 'https://res.cloudinary.com/dezqxmlny/image/upload/v1691243555/React%20Conference/Rectangle_215_wpfvdo.png',
        alt: 'sponsors',
      },
    },
    {
      type: 'Sponsors',
      title: 'Candide',
      subTitle:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et condimentum lectus in vel pellentesque arcu non odio. Ut dis eu dolor ac tellus vitae ut.',
      image: {
        url: 'https://res.cloudinary.com/dezqxmlny/image/upload/v1691243555/React%20Conference/Rectangle_215_wpfvdo.png',
        alt: 'sponsors',
      },
    },
  ],
  isLoading: false,
};
