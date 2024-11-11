import Link from 'next/link';
import React from 'react';

export default function SectionList({
  sectionName,
  sectionList,
  sectionUrl,
}: {
  sectionName: string;
  sectionUrl: string;
  sectionList: Array<{ label: string; url: string }>;
}) {
  return (
    <div className=" sm:text-left">
      <Link href={sectionUrl} className="text-base font-semibold text-dark-15">
        {sectionName}
      </Link>

      <ul className="mt-6 space-y-4 text-sm">
        {sectionList.map((item, index) => (
          <li key={index}>
            <Link
              className="text-dark-20 text-base  transition font-medium hover:text-dark-20/75"
              href={item.url}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
