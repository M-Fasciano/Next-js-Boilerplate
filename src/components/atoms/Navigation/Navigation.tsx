import React from 'react';

import Links from '../Links';
import { style } from './Navigation.style';

interface NavLinksProps {
  links: { title: string; href: string }[];
  variant?: 'light' | 'dark';
  isOpen: boolean;
}

function Navigation(props: NavLinksProps) {
  const { links, variant, isOpen } = props;

  return (
    <ul className={`${isOpen ? 'flex gap-4 lg:gap-14' : 'hidden'}`}>
      <Links
        links={links}
        className={
          variant === 'light' ? `${style.color.ligth}` : `${style.color.dark}`
        }
      />
    </ul>
  );
}

export default Navigation;
