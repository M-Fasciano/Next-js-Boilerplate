import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

import Burger from '@/components/atoms/Burger';
import Logo from '@/components/atoms/Logo';
import Navigation from '@/components/molecules/Navigation';

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
  const [isOpen, setIsOpen] = useState(false);
  const isHomePage = router.pathname === '/' ? 'light' : 'dark';
  return (
    <header className="fixed z-10 flex w-full items-center gap-14 p-4 lg:px-10 lg:py-8">
      <div className="flex w-full items-center justify-between">
        <div className="flex w-full items-center justify-between gap-4 md:justify-start lg:gap-14">
          <Link href="/" className="relative z-10">
            <Logo variant={isHomePage} />
          </Link>
          <Navigation links={NavLinks} variant={isHomePage} isOpen={isOpen} />
          <Burger isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>
    </header>
  );
}

export default Header;
