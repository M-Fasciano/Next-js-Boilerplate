import React from 'react';

import { colors, style } from './Button.style';

interface BtnPropsWithChildren {}

interface IBtnProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    BtnPropsWithChildren {
  block?: boolean;
  children: React.ReactNode;
  className?: string;
  color?: 'primary' | 'success' | 'danger' | 'warning' | 'indigo' | 'dark';
  disabled?: boolean;
  outline?: boolean;
  rounded?: boolean;
  size?: 'sm' | 'md' | 'lg';
  submit?: boolean;
  icon?: React.ReactNode;
}

type ButtonRef = React.ForwardedRef<HTMLButtonElement>;

const Button = React.forwardRef(
  (
    {
      block = false,
      children,
      color,
      disabled = false,
      outline,
      rounded,
      size = 'md',
      submit,
      icon,
      ...props
    }: IBtnProps,
    ref: ButtonRef
  ) => (
    <button
      ref={ref}
      {...props}
      type={submit ? 'submit' : 'button'}
      disabled={disabled}
      className={`${style.sizes[size]} ${style.default} ${
        block ? style.block : ''
      } ${disabled ? style.disabled : ''} ${
        rounded ? style.rounded : 'rounded'
      } ${
        color
          ? colors(outline, disabled)[color]
          : colors(outline, disabled).dark
      }`}
      color={color}
    >
      {icon}
      {icon ? ' ' : null}
      {children}
    </button>
  )
);

Button.displayName = 'Button';

export default Button;
