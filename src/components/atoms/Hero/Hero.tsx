import Image from 'next/image';
import React from 'react';

interface HeroProps {
  alt: string;
  path: string;
}

function Hero(props: HeroProps) {
  const { alt, path } = props;

  return <Image src={path} alt={alt} fill />;
}

export default Hero;
