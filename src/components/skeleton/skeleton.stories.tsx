import { Meta, StoryObj } from '@storybook/react';
import Component from '.';

const meta: Meta<typeof Component> = {
  component: Component,
};

export default meta;

export const Default: StoryObj<typeof Component> = {
  decorators: [
    (Story) => (
      <div className="p-10">
        <Story args={{ className: 'h-4 w-[15rem]' }} />
      </div>
    ),
  ],
};
