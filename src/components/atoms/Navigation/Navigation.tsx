import Link from 'next/link';
import React from 'react';

import { style } from './Navigation.style';

interface NavLink {
  title: string;
  href: string;
}

interface NavLinksProps {
  links: NavLink[];
  variant?: 'light' | 'dark';
}

function Navigation(props: NavLinksProps) {
  const { links, variant } = props;

  return (
    <ul className="flex gap-4">
      {links.map((link, index) => (
        <li key={index}>
          <Link
            href={`${link.href}`}
            className={
              variant === 'light'
                ? `${style.color.ligth}`
                : `${style.color.dark}`
            }
          >
            {link.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Navigation;
