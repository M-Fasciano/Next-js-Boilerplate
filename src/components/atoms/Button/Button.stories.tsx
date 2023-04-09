import type { Meta } from '@storybook/react';

import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'components/atoms/Buttons',
  component: Button,
  args: {
    children: 'Button',
  },
  argTypes: {
    children: { control: false },
  },
};

export default meta;

const colors = [
  'primary',
  'success',
  'danger',
  'warning',
  'indigo',
  'dark',
] as const;

const renderButton = (disabled: boolean, outline: boolean) => {
  return (
    <div className="space-x-1 md:space-x-6">
      {colors.map((color) => (
        <Button key={color} color={color} disabled={disabled} outline={outline}>
          {color.charAt(0).toUpperCase() + color.slice(1)}
        </Button>
      ))}
    </div>
  );
};

export const Normal = () => renderButton(false, false);

export const Outline = () => renderButton(false, true);

export const Disabled = () => renderButton(true, false);
