import React from 'react';

import Links from '../Links';
import { style } from './Navigation.style';

interface NavLinksProps {
  links: { title: string; href: string }[];
  variant?: 'light' | 'dark';
}

function Navigation(props: NavLinksProps) {
  const { links, variant } = props;

  return (
    <ul className="flex gap-4 lg:gap-14">
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
