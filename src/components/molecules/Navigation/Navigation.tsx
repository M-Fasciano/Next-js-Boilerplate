import Link from 'next/link';
import React from 'react';

import Button from '@/components/atoms/Button';

import Links from '../../atoms/Links';
import { style } from './Navigation.style';

interface NavLinksProps {
  links: { title: string; href: string }[];
  variant?: 'light' | 'dark';
  isOpen?: boolean;
  scrolling?: boolean;
}

function Navigation(props: NavLinksProps) {
  const { links, variant, isOpen, scrolling } = props;

  return (
    <nav
      className={`${isOpen ? style.nav.open : style.nav.close} ${
        style.nav.default
      }`}
    >
      <ul className={`${style.ul.default}`}>
        <Links
          links={links}
          className={`${variant === 'light' ? style.ul.ligth : style.ul.dark} ${
            scrolling ? style.ul.ligth : ''
          }`}
        />
      </ul>
      <ul
        className={`${variant === 'light' ? style.ul.ligth : style.ul.dark} ${
          style.ul.default
        } ${scrolling ? style.ul.ligth : ''}`}
      >
        <li>
          <Link href="/login">Log in</Link>
        </li>
        <li>
          <Link href="/signup">
            <Button color="success">Sign up</Button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
