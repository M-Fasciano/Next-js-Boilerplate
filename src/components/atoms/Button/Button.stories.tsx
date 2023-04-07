import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'components/atoms/Buttons/Base Button',
  component: Button,
  args: {
    children: 'Button',
  },
  argTypes: {
    children: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Basic: Story = {};

export const Disabled: Story = {
  args: { disabled: true },
};
