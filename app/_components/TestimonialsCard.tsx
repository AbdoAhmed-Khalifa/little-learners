import { StarIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import React from "react";

export default function TestimonialsCard({
  avatarUrl,
  fullName,
  feedback,
  rate,
}: {
  avatarUrl: string;
  fullName: string;
  feedback: string;
  rate: number;
}) {
  return (
    <section className="flex h-full flex-col items-center justify-center gap-6 rounded-[10px] border-2 border-dark-15 p-[30] shadow-card md:rounded-xl md:p-[30px] lg:p-[20]">
      <div className="flex flex-col items-center justify-center gap-[10px] md:gap-3">
        <Image
          width={66}
          height={66}
          className="md:h-20 md:w-20"
          src={avatarUrl}
          alt=" avatar"
        />
        <h1 className="font-outfit text-[20px] font-semibold leading-[30px] text-[#333333] md:text-[24px] md:leading-9">
          {fullName}
        </h1>
      </div>
      <div className="flex gap-[4px] md:gap-[5px]">
        {Array.from({ length: 5 }).map((_, index) => (
          <span
            key={index}
            className={`size-[20px] text-primary-65 md:size-6 ${index < rate ? "text-primary-65" : "text-dark-60"}`}
          >
            <StarIcon />
          </span>
        ))}
      </div>

      <p className="text-center font-outfit leading-6 text-[#333333] text-[16] md:text-[20px] md:leading-[30px]">
        {feedback}
      </p>
    </section>
  );
}
