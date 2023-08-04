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
    label: 'Click Here',
    href: '/',
    isOpenNewTab: true,
  },
};
