import Image from 'next/image';
import React from 'react';

interface HeroProps {
  alt: string;
  path: string;
  className?: string;
}

function Hero(props: HeroProps) {
  const { alt, path, className } = props;

  const isLocal =
    process.env.NODE_ENV === 'test' && !path.startsWith('/')
      ? `/${path}`
      : path;

  return <Image src={isLocal} alt={alt} className={className} fill />;
}

export default Hero;
