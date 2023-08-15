import { Meta, StoryObj } from '@storybook/react';
import Component from './index';
import { scheduleProps } from './mock-data';

const meta: Meta<typeof Component> = {
  component: Component,
};

export default meta;

export const Default: StoryObj<typeof Component> = {
  args: scheduleProps,
  decorators: [
    (Story) => (
      <div className="p-14 bg-gray-thin flex flex-col gap-6">
        <Story />
      </div>
    ),
  ],
};
