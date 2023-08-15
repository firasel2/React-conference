import { Meta, StoryObj } from '@storybook/react';
import Component from './index';
import { icons } from '../icons/interface';
import { ctaButtonProps } from './mock-data';

const meta: Meta<typeof Component> = {
  component: Component,
  argTypes: {
    icon: {
      control: 'select',
      options: icons,
    },
  },
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
  args: ctaButtonProps,
};
