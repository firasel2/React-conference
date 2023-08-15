import { Meta, StoryObj } from '@storybook/react';
import Component from './index';
import { sidebarProps } from './mock-data';

const meta: Meta<typeof Component> = {
  component: Component,
};

export default meta;

export const Default: StoryObj<typeof Component> = {
  args: sidebarProps,
  decorators: [
    (Story) => (
      <div className="p-10">
        <Story />
      </div>
    ),
  ],
};
