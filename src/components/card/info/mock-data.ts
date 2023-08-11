import { IInfo } from './interface';

export const organizersProps: IInfo = {
  type: 'Organizers',
  title: 'Siddhartha',
  subTitle: 'Lorem ipsum dolor sit amet, con sec tetur ad.',
  imgUrl:
    'https://res.cloudinary.com/dezqxmlny/image/upload/v1691243555/React%20Conference/Rectangle_215_wpfvdo.png',
};

export const speakersProps: IInfo = {
  type: 'Speakers',
  title: 'Ronald Richards',
  subTitle: 'Lorem ipsum dolor sit amet, con sec tetur ad.',
  imgUrl:
    'https://res.cloudinary.com/dezqxmlny/image/upload/v1691243555/React%20Conference/Rectangle_215_wpfvdo.png',
  socialLinks: {
    twitter: 'https://twitter.com',
    linkedin: 'https://linkedin.com',
    dribble: 'https://dribble.com',
    github: 'https://github.com',
  },
};

export const sponsorsProps: IInfo = {
  type: 'Sponsors',
  title: 'Louis Vuitton',
  subTitle: 'Lorem ipsum dolor sit amet, con sec tetur ad.',
  imgUrl:
    'https://res.cloudinary.com/dezqxmlny/image/upload/v1691243555/React%20Conference/Rectangle_215_wpfvdo.png',
};

export const schedulesProps: IInfo = {
  type: 'Schedules',
  title: 'February 11, 2014',
  subTitle: 'Wednesday',
  sessions: [
    {
      title: 'Registration and breakfast',
      end: '09:00',
      begin: '08:00',
    },
    {
      title: 'Opening',
      end: '09:15',
      begin: '09:00',
    },
    {
      title: 'Mysterious talk',
      end: '10:45',
      begin: '09:15',
    },
    {
      title: 'Mysterious talk',
      end: '10:45',
      begin: '09:15',
    },
    {
      title: 'Break',
      end: '11:15',
      begin: '10:45',
    },
  ],
};
