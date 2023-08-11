import { Meta, StoryObj } from '@storybook/react';
import Component from './index';
import {
  organizersProps,
  schedulesProps,
  speakersProps,
  sponsorsProps,
} from './mock-data';

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

export const Organizers: StoryObj<typeof Component> = {
  args: organizersProps,
  decorators: [
    (Story) => (
      <div className="p-14 bg-gray-thin rounded-lg">
        <Story />
      </div>
    ),
  ],
};

export const Speakers: StoryObj<typeof Component> = {
  args: speakersProps,
  decorators: [
    (Story) => (
      <div className="p-14 bg-gray-thin rounded-lg">
        <Story />
      </div>
    ),
  ],
};

export const Sponsors: StoryObj<typeof Component> = {
  args: sponsorsProps,
  decorators: [
    (Story) => (
      <div className="p-14 bg-gray-thin rounded-lg">
        <Story />
      </div>
    ),
  ],
};

export const Schedules: StoryObj<typeof Component> = {
  args: schedulesProps,
  decorators: [
    (Story) => (
      <div className="p-14 bg-gray-thin rounded-lg">
        <Story />
      </div>
    ),
  ],
};
