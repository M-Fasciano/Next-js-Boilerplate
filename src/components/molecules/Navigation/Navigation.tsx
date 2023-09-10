import Link from 'next/link';
import React from 'react';

import Button from '@/components/atoms/Button';

import Links from '../../atoms/Links';
import { style } from './Navigation.style';

interface NavLinksProps {
  links: { title: string; href: string }[];
  variant?: 'light' | 'dark';
  isOpen: boolean;
}

function Navigation(props: NavLinksProps) {
  const { links, variant, isOpen } = props;

  return (
    <nav
      className={`${
        isOpen
          ? 'absolute left-0 top-0 flex h-screen w-full flex-col justify-around bg-secondary-light-0 text-center'
          : 'hidden'
      } w-full items-center md:flex md:justify-between`}
    >
      <ul className={'flex flex-col gap-4 md:flex-row lg:gap-14'}>
        <Links
          links={links}
          className={
            variant === 'light' ? `${style.color.ligth}` : `${style.color.dark}`
          }
        />
      </ul>
      <ul
        className={
          variant === 'light'
            ? `${style.default} ${style.color.ligth}`
            : `${style.default} ${style.color.dark}`
        }
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
