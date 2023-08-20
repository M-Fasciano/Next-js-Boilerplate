import React from 'react';

import FooterLinks from '@/components/atoms/FooterLinks';
import Logo from '@/components/atoms/Logo';

const footerLinks = [
  {
    title: 'Cookies',
    href: 'cookies',
  },
  {
    title: 'Terms of Use',
    href: 'terms-of-use',
  },
  {
    title: 'Privacy Policy',
    href: 'privacy-policy',
  },
  {
    title: 'Site map',
    href: 'site-map',
  },
];

function Footer() {
  return (
    <footer className="bg-secondary-light-0">
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col items-center gap-6">
          <Logo variant="light" />
          <p className="font-bold text-white">
            Empowering Fitness Connections, Locally
          </p>
          <FooterLinks links={footerLinks} />
          <p className="text-xs text-white text-opacity-50">
            © Copyright {new Date().getFullYear()} - All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
