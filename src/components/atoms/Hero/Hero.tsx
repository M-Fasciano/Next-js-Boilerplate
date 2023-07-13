import Image from 'next/image';
import React from 'react';

interface HeroProps {
  alt: string;
  path: string;
  className?: string;
}

function Hero(props: HeroProps) {
  const { alt, path, className } = props;

  return <Image src={path} alt={alt} className={className} fill />;
}

export default Hero;
