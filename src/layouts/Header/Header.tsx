import React from 'react';

import Navigation from '@/components/atoms/Navigation';

const NavLinks = [
  {
    title: 'Find a trainer',
    href: '/find-a-trainer',
  },
  {
    title: 'Trainers',
    href: '/trainers',
  },
  {
    title: 'About',
    href: '/about',
  },
  {
    title: 'Help & Support',
    href: '/help-and-support',
  },
];

function Header() {
  return <Navigation links={NavLinks} variant="light" />;
}

export default Header;
