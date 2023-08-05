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

export const Default: StoryObj<typeof Component> = {
  args: {
    title: 'Siddhartha',
    subTitle: `Lorem ipsum dolor sit amet, con sec tetur ad.`,
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
