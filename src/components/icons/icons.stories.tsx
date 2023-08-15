import { Meta, StoryObj } from '@storybook/react';
import Component from './index';
import { icons } from './interface';

const meta: Meta<typeof Component> = {
  component: Component,
  argTypes: {
    iconName: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;

export const Default: StoryObj<typeof Component> = {
  render: () => (
    <div className="p-10 flex items-center justify-center flex-wrap gap-6">
      {icons.map((flaticon, i) => (
        <div
          key={i}
          className="w-fit aspect-square flex flex-col items-center justify-center gap-2 px-3 py-1 rounded-md bg-gray-thin shadow-md"
        >
          <Component iconName={flaticon} />
          <span className="text-xs font-bold text-gray">{flaticon}</span>
        </div>
      ))}
    </div>
  ),
};
