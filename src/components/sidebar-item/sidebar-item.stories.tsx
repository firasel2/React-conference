import { Meta, StoryObj } from '@storybook/react';
import Component from './index';
import { sidebarItemProps } from './mock-data';

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
  args: sidebarItemProps,
};
