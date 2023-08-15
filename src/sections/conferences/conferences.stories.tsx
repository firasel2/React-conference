import { Meta, StoryObj } from '@storybook/react';
import Component from './index';
import { conferencesProps } from './mock-data';
import { ApolloWrapper } from '@src/app/ApolloWrapper';
import ConferenceSkeleton from './loading';

const meta: Meta<typeof Component> = {
  component: Component,
};

export default meta;

export const Default: StoryObj<typeof Component> = {
  args: conferencesProps,
  decorators: [
    (Story) => (
      <ApolloWrapper>
        <Story />
      </ApolloWrapper>
    ),
  ],
};

export const Skeleton: StoryObj<typeof Component> = {
  render: () => (
    <div className="p-10">
      <ConferenceSkeleton />
    </div>
  ),
};
