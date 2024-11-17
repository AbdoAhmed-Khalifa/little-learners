import React from "react";

type sectionHeaderProps = {
  sectiontitle: string;
  subtitle: string;
  description: string;
};

export default function SectionHeader({
  sectiontitle,
  subtitle,
  description,
}: sectionHeaderProps) {
  return (
    <div className="mb-20 text-center font-outfit">
      <p className="mx-auto mb-3 w-fit rounded-md border-2 border-dark-20 px-4 py-2 text-lg font-medium">
        {subtitle}
      </p>
      <h2 className="font-raleway text-5xl font-bold leading-[78px] md:text-[58px]">
        {sectiontitle}
      </h2>
      <p className="text-[16px] leading-6 text-dark-20 md:text-[20px] md:leading-[30px] lg:px-52">
        {description}
      </p>
    </div>
  );
}
