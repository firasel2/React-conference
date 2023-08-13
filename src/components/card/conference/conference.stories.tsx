import { Meta, StoryObj } from '@storybook/react';
import Component from './index';
import { conferenceProps } from './mock-data';
import ConferenceCardSkeleton from './skeleton';

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
  args: conferenceProps,
};

export const Skeleton: StoryObj<typeof Component> = {
  args: conferenceProps,
  render: ConferenceCardSkeleton,
};
