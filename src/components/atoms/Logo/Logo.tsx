import { useRouter } from 'next/router';
import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark';
  width?: number;
}

function Logo(props: LogoProps) {
  const router = useRouter();
  const { variant, width } = props;

  return (
    <img
      className="max-w-[140px] md:max-w-none"
      width={width}
      src={`${router.basePath}/assets/images/logo-${
        variant === 'light' ? 'light' : 'dark'
      }.svg`}
      alt="Location Fitness logo"
    />
  );
}

export default Logo;
