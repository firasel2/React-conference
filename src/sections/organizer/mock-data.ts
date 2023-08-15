import { IOrganizer } from './interface';

export const organizerProps: IOrganizer = {
  organizers: [
    {
      type: 'Organizers',
      title: 'Siddhartha',
      subTitle: 'Lorem ipsum dolor sit amet, con sec tetur ad.',
      image: {
        url: 'https://res.cloudinary.com/dezqxmlny/image/upload/v1691243555/React%20Conference/Rectangle_215_wpfvdo.png',
        alt: 'organizer',
      },
    },
    {
      type: 'Organizers',
      title: 'Candide',
      subTitle:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et condimentum lectus in vel pellentesque arcu non odio. Ut dis eu dolor ac tellus vitae ut.',
      image: {
        url: 'https://res.cloudinary.com/dezqxmlny/image/upload/v1691243555/React%20Conference/Rectangle_215_wpfvdo.png',
        alt: 'organizer',
      },
    },
  ],
  isLoading: false,
};
