import Link from 'next/link';
import React from 'react';
import SectionItem from './SectionItem';

type SectionListProps = {
  sectionName: string;
  sectionUrl: string;
  sectionList: Array<{ label: string; url: string }>;
};

export default function SectionList({
  sectionName,
  sectionList,
  sectionUrl,
}: SectionListProps) {
  return (
    <div className=" sm:text-left">
      <Link href={sectionUrl} className="text-base font-semibold text-dark-15">
        {sectionName}
      </Link>

      <ul className="mt-6 space-y-4 text-sm">
        {sectionList.map((item, index) => (
          <SectionItem item={item} key={index} />
        ))}
      </ul>
    </div>
  );
}
