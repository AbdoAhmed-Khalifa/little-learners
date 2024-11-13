import React, { ReactNode } from "react";

export default function CardOne({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: ReactNode;
}) {
  return (
    <section className="relative rounded-xl border-2 border-dark-15 pb-[30px] pl-[30px] pr-10 pt-[50px] shadow-[6px_6px_0_2px_rgpa(30,30,30,1)] shadow-[#1E1E1E] md:px-[50px] md:pb-[50px] md:pt-20">
      <span className="absolute -top-7 left-[24px] inline-block rounded-lg border-2 border-dark-15 bg-primary-80 p-4 md:-top-[35px] md:left-[30px] md:rounded-xl md:p-5">
        {icon}
      </span>
      <section className="flex flex-col gap-y-4 md:gap-y-5">
        <h1 className="font-raleway text-[22px] font-bold leading-7 text-dark-10 md:text-[28px] md:leading-9">
          {title}
        </h1>
        <p className="font-outfit text-[16px] font-medium leading-6 text-dark-30 md:text-[20px] md:leading-[30px]">
          {description}
        </p>
      </section>
    </section>
  );
}
