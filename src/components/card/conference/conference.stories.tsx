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
    title: 'Freezing Edge 2023',
    subTitle: `The edge isn't bleeding, it's freezing!`,
    href: '/',
  },
};
