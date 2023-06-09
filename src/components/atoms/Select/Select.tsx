import { useRouter } from 'next/router';
import React from 'react';

import { style } from './Select.style';

interface SelectProps {
  setRadius?: any;
  withBorder?: boolean;
  children?: any;
}

function Select(props: SelectProps) {
  const { setRadius, withBorder, children } = props;
  const router = useRouter();
  const handleChange = (e: any) => {
    setRadius(e.target.value);
  };

  return (
    <div className="relative">
      <select
        className={withBorder ? `${style.border.default}` : `${style.noBorder}`}
        onChange={handleChange}
      >
        {children}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center text-gray-700">
        <img
          src={`${router.basePath}/assets/images/chevron.svg`}
          alt="chevron icon"
        />
      </div>
    </div>
  );
}

export default Select;
