import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import Logo from '@/components/atoms/Logo';
import Navigation from '@/components/atoms/Navigation';

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
      <Link href="/">
        <Logo variant={isHomePage} />
      </Link>
      <Navigation links={NavLinks} variant={isHomePage} />
    </header>
  );
}

export default Header;
