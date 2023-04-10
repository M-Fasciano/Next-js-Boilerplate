import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { Meta } from '@storybook/react';

import Button from './Button';

library.add(fas);

const meta: Meta<typeof Button> = {
  title: 'components/atoms/Buttons',
  component: Button,
  args: {
    children: 'Button',
    size: 'md',
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

const renderButton = (
  disabled: boolean,
  outline: boolean,
  size: any,
  icon: React.ReactNode
) => {
  return (
    <div className="space-x-1 md:space-x-6">
      {colors.map((color) => (
        <Button
          key={color}
          color={color}
          disabled={disabled}
          outline={outline}
          size={size}
        >
          {icon}
          {icon ? ' ' : null}
          {color.charAt(0).toUpperCase() + color.slice(1)}
        </Button>
      ))}
    </div>
  );
};

export const Small = () => renderButton(false, false, 'sm', null);

export const Medium = () => renderButton(false, false, 'md', null);

export const Large = () => renderButton(false, false, 'lg', null);

export const Outline = () => renderButton(false, true, 'md', null);

export const Disabled = () => renderButton(true, false, 'md', null);

export const Icon = () =>
  renderButton(false, false, 'md', <FontAwesomeIcon icon="heart" />);
