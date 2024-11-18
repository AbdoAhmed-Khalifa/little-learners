import React from "react";
import { timeLineData } from "./TimeLine";
import Image from "next/image";

export default function TimeLineItem({
  year,
  title,
  description,
}: timeLineData) {
  return (
    <section className="flex flex-col items-start md:flex-row">
      <section className="flex">
        <div className="flex h-full items-center justify-center self-center">
          <div className="z-20 h-5 w-5 rounded-full border-2 border-dark-15 bg-white"></div>
          <div className="h-0.5 w-1/5 bg-black shadow-line"></div>
          <div className="z-20 h-5 w-5 rounded-full border-2 border-dark-15 bg-white"></div>
        </div>
        <section className="mr-10 flex items-center gap-x-5 rounded-xl border-2 border-dark-15 px-6 py-5 shadow-card lg:px-[50px] lg:py-[30px]">
          <Image
            src="./images/timeline.svg"
            width={60}
            height={60}
            className="h-[50] w-[50] md:h-[60] md:w-[60]"
            alt=""
          />
          <p className="font-raleway text-[38px] font-bold leading-[50px] md:text-[68px] md:leading-[88px]">
            {year}
          </p>
        </section>
      </section>
      <section className="ml-10 mt-5 flex flex-1 flex-col gap-y-3 md:ml-0 md:mt-0 md:gap-y-4">
        <h1 className="font-raleway text-[22px] font-bold leading-7 text-dark-10 md:text-[28px] md:leading-9">
          {" "}
          {title}
        </h1>
        <p className="font-outfit text-base font-medium text-dark-20 md:text-xl">
          {description}{" "}
        </p>
      </section>
    </section>
  );
}
