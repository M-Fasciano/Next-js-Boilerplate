import React from 'react';

import Links from '../Links';

interface FooterLinksProps {
  links: { title: string; href: string }[];
}

function FooterLinks(props: FooterLinksProps) {
  const { links } = props;

  return (
    <ul className="flex gap-4">
      <Links links={links} className="text-sm text-white text-opacity-50" />
    </ul>
  );
}

export default FooterLinks;
