import React from 'react';

export interface IButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
}

function Button(props: IButtonProps) {
  const { children, disabled = false } = props;

  const classes = `rounded bg-lime-500 px-6 py-3 text-white${
    disabled ? ' disabled:bg-gray-400' : ''
  }`;

  return (
    <button className={classes} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
