import Link from 'next/link';
import React from 'react';

interface LinksProps {
  title: string;
  href: string;
}

interface LinkListProps {
  links: LinksProps[];
  className?: string;
}

function Links(props: LinkListProps) {
  const { links, className } = props;

  return (
    <>
      {links.map((link, index) => (
        <li key={index}>
          <Link href={`/${link.href}`} className={className}>
            {link.title}
          </Link>
        </li>
      ))}
    </>
  );
}

export default Links;
