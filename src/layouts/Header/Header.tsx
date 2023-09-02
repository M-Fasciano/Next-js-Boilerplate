import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import Button from '@/components/atoms/Button';
import Logo from '@/components/atoms/Logo';
import Navigation from '@/components/atoms/Navigation';

import { style } from './Header.style';

const NavLinks = [
  {
    title: 'Find a trainer',
    href: 'find-a-trainer',
  },
  {
    title: 'Trainers',
    href: 'trainers',
  },
  {
    title: 'About',
    href: 'about',
  },
  {
    title: 'Help & Support',
    href: 'help-and-support',
  },
];

function Header() {
  const router = useRouter();
  const isHomePage = router.pathname === '/' ? 'light' : 'dark';

  return (
    <header className="fixed z-10 flex w-full items-center gap-14 p-4 lg:px-10 lg:py-8">
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-4 lg:gap-14">
          <Link href="/">
            <Logo variant={isHomePage} />
          </Link>
          <Navigation links={NavLinks} variant={isHomePage} />
        </div>
        <div
          className={
            isHomePage === 'light'
              ? `${style.default} ${style.color.ligth}`
              : `${style.default} ${style.color.dark}`
          }
        >
          <Link href="/login">Log in</Link>
          <Link href="/signup">
            <Button color="success">Sign up</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
