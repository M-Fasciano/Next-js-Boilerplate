import React from 'react';

import FooterLinks from '@/components/atoms/FooterLinks';
import Logo from '@/components/atoms/Logo';

const footerLinks = [
  {
    title: 'About',
    href: '/about',
  },
  {
    title: 'Contact',
    href: '/contact',
  },
  {
    title: 'Terms of Use',
    href: '/terms-of-use',
  },
  {
    title: 'Privacy Policy',
    href: '/privacy-policy',
  },
];

function Footer() {
  return (
    <footer className="bg-blue">
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col items-center gap-6">
          <Logo />
          <p className="font-bold text-white">
            Empowering Fitness Connections, Locally
          </p>
          <FooterLinks links={footerLinks} />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
