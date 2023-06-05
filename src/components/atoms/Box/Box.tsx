import React from 'react';

import { style } from './Box.style';

interface BoxProps {
  children: React.ReactNode;
  withBorder?: boolean;
  className?: string;
}

function Box(props: BoxProps) {
  const { children, withBorder = false, className = '' } = props;
  return (
    <div
      className={withBorder ? `${className || ''} ${style.border.default}` : ''}
    >
      {children}
    </div>
  );
}

export default Box;
