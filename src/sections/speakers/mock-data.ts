import { ISpeaker } from './interface';

export const speakerProps: ISpeaker = {
  speakers: [
    {
      type: 'Speakers',
      title: 'Siddhartha',
      subTitle: 'Lorem ipsum dolor sit amet, con sec tetur ad.',
      image: {
        url: 'https://res.cloudinary.com/dezqxmlny/image/upload/v1691243555/React%20Conference/Rectangle_215_wpfvdo.png',
        alt: 'organizer',
      },
      socialLinks: {
        twitter: 'https://twitter.com',
        linkedin: 'https://linkedin.com',
        dribble: 'https://dribble.com',
        github: 'https://github.com',
      },
    },
    {
      type: 'Speakers',
      title: 'Candide',
      subTitle:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et condimentum lectus in vel pellentesque arcu non odio. Ut dis eu dolor ac tellus vitae ut.',
      image: {
        url: 'https://res.cloudinary.com/dezqxmlny/image/upload/v1691243555/React%20Conference/Rectangle_215_wpfvdo.png',
        alt: 'organizer',
      },
      socialLinks: {
        twitter: 'https://twitter.com',
        linkedin: 'https://linkedin.com',
        dribble: 'https://dribble.com',
        github: 'https://github.com',
      },
    },
  ],
  isLoading: false,
};
