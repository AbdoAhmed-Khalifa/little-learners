import Image from "next/image";
import React from "react";

type EventsCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  index: number;
};

export default function EeventsCards({
  title,
  description,
  imageUrl,
  index,
}: EventsCardProps) {
  return (
    <section className="card relative h-full p-10">
      <div className="relative">
        <div
          className={`absolute ${index % 2 === 0 ? "top-1/2 -translate-y-1/2" : "bottom-0"} -left-10 h-20 w-[calc(100%+80px)] border-y-2 border-dark-15 bg-primary-95`}
        ></div>
        <Image
          src={imageUrl}
          alt={title}
          width={250}
          height={200}
          className="relative z-10 h-auto w-full"
        />
      </div>
      <section className="mt-10 flex flex-col items-center justify-center gap-y-4 text-center">
        <h1 className="mt-4 font-raleway text-[22px] font-bold leading-7 text-dark-10 md:text-[28px] md:leading-9">
          {title}
        </h1>
        <p className="font-outfit text-[16px] font-medium leading-6 text-dark-30 md:text-[20px] md:leading-[30px]">
          {description}
        </p>
      </section>
    </section>
  );
}
