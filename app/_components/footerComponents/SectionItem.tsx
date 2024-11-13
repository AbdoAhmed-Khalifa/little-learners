import Link from 'next/link';
import React from 'react';

export default function SectionItem({
  item,
}: {
  item: { label: string; url: string };
}) {
  return (
    <li>
      <Link
        className="text-dark-20 text-base  transition font-medium hover:text-dark-20/75"
        href={item.url}
      >
        {item.label}
      </Link>
    </li>
  );
}
