import Link from 'next/link';
import React from 'react';

interface FooterLink {
  title: string;
  href: string;
}

interface FooterLinksProps {
  links: FooterLink[];
}

function FooterLinks(props: FooterLinksProps) {
  const { links } = props;

  return (
    <ul className="flex gap-4">
      {links.map((link, index) => (
        <li key={index}>
          <Link
            href={`${link.href}`}
            className="text-sm text-white text-opacity-50 hover:border-white hover:border-opacity-50 hover:text-white hover:text-opacity-50"
          >
            {link.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default FooterLinks;
