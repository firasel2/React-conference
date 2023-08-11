import { Meta, StoryObj } from '@storybook/react';
import Component from './index';
import { conferencesProps } from './mock-data';

const meta: Meta<typeof Component> = {
  component: Component,
};

export default meta;

export const Default: StoryObj<typeof Component> = {
  args: conferencesProps,
};
