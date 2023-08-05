import { Meta, StoryObj } from '@storybook/react';
import Component from './index';

const meta: Meta<typeof Component> = {
  component: Component,
  decorators: [
    (Story) => (
      <div className="p-10">
        <Story />
      </div>
    ),
  ],
};

export default meta;

export const Organizers: StoryObj<typeof Component> = {
  args: {
    type: 'Organizers',
    title: 'Siddhartha',
    subTitle: 'Lorem ipsum dolor sit amet, con sec tetur ad.',
    imgUrl:
      'https://res.cloudinary.com/dezqxmlny/image/upload/v1691243555/React%20Conference/Rectangle_215_wpfvdo.png',
  },
  decorators: [
    (Story) => (
      <div className="p-14 bg-gray-thin rounded-lg">
        <Story />
      </div>
    ),
  ],
};

export const Speakers: StoryObj<typeof Component> = {
  args: {
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
  },
  decorators: [
    (Story) => (
      <div className="p-14 bg-gray-thin rounded-lg">
        <Story />
      </div>
    ),
  ],
};

export const Sponsors: StoryObj<typeof Component> = {
  args: {
    type: 'Sponsors',
    title: 'Louis Vuitton',
    subTitle: 'Lorem ipsum dolor sit amet, con sec tetur ad.',
    imgUrl:
      'https://res.cloudinary.com/dezqxmlny/image/upload/v1691243555/React%20Conference/Rectangle_215_wpfvdo.png',
  },
  decorators: [
    (Story) => (
      <div className="p-14 bg-gray-thin rounded-lg">
        <Story />
      </div>
    ),
  ],
};

export const Schedules: StoryObj<typeof Component> = {
  args: {
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
  },
  decorators: [
    (Story) => (
      <div className="p-14 bg-gray-thin rounded-lg">
        <Story />
      </div>
    ),
  ],
};
