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
    title: '🥈Silver Sponsors',
    sponsors: [
      {
        alt: 'Circooles',
        url: 'https://res.cloudinary.com/dezqxmlny/image/upload/v1691236746/React%20Conference/Vector_2_pzlmus.png',
      },
      {
        alt: 'Catalog',
        url: 'https://res.cloudinary.com/dezqxmlny/image/upload/v1691236746/React%20Conference/Vector_3_z9aeke.png',
      },
      {
        alt: 'GoFore',
        url: 'https://res.cloudinary.com/dezqxmlny/image/upload/v1691236746/React%20Conference/image_1_rcjx6e.png',
      },
    ],
  },
};
