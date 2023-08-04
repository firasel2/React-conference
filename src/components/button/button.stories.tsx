import type { Meta, StoryObj } from '@storybook/react';
import Component from './button';

const meta: Meta<typeof Component> = {
  component: Component,
  decorators: [
    (Story) => (
      <div className="p-5">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Button',
  },
};
