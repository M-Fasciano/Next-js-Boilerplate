import { useRouter } from 'next/router';
import React from 'react';

interface LogoProps {
  width?: number;
}

function Logo(props: LogoProps) {
  const router = useRouter();
  const { width } = props;

  return (
    <img
      width={width}
      src={`${router.basePath}/assets/images/logo-light.svg`}
      alt="Location Fitness logo"
    />
  );
}

export default Logo;
