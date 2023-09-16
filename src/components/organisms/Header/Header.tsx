import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import Burger from '@/components/atoms/Burger';
import Logo from '@/components/atoms/Logo';
import Navigation from '@/components/molecules/Navigation';

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
  const [isOpen, setIsOpen] = useState(false);
  const isLightMode = router.pathname === '/' || isOpen ? 'light' : 'dark';

  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`${scrolling ? style.header.scrolled : ''} ${
        style.header.default
      }`}
    >
      <div className={style.header.inner}>
        <Link href="/" className={style.header.logoLink}>
          <Logo variant={isLightMode} scrolling={scrolling} />
        </Link>
        <Navigation
          links={NavLinks}
          variant={isLightMode}
          isOpen={isOpen}
          scrolling={scrolling}
        />
        <Burger isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </header>
  );
}

export default Header;
