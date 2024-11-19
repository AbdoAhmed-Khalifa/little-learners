import { EnvelopeIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
import React from "react";
export type teachersType = {
  name: string;
  avatar: string;
  qualification: string;
  description: string;
};
export default function TeamCard({
  name,
  avatar,
  qualification,
  description,
}: teachersType) {
  return (
    <section className="card flex flex-col md:p-10">
      <section className="flex items-center justify-between">
        <section className="flex items-center gap-x-3">
          <Image src={avatar} width={80} height={80} alt={name} className="" />
          <h1 className="font-raleway text-2xl font-extrabold">{name}</h1>
        </section>
        <Link
          href={"mailto:email@yahoo.com"}
          className="flex items-start justify-center rounded-md border-2 border-dark-15 bg-primary-90 p-[14px] hover:bg-primary-80"
        >
          <EnvelopeIcon className="size-6" />
        </Link>
      </section>
      <section className="mt-6 flex h-full flex-col gap-y-4 rounded-[10px] border-2 border-dark-15 bg-primary-90 p-6 font-outfit text-dark-20">
        <h2 className="text-xl font-semibold">{`Qualification: ${qualification}`}</h2>
        <p className="text-base font-medium">{description}</p>
      </section>
    </section>
  );
}
