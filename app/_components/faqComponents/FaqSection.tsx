import React from "react";
import Accordion from "../Accordion";
import { faq } from "@/app/_constants";
import SectionHeader from "../SectionHeader";

export default function FaqSection() {
  return (
    <section className="mx-4 mt-[200px] md:mx-20">
      <SectionHeader
        sectiontitle="Solutions For The Doubts"
        subtitle="Frequently Asked Questions"
        description="Find all the essential information you need in our FAQ section, designed to address the most frequently asked questions and help you make informed decisions for your child's education."
      />
      <section className="mx-10 my-20 grid grid-cols-1 justify-items-center gap-12 gap-y-4 sm:mx-auto sm:max-w-screen-sm md:max-w-screen-md md:grid-cols-2 lg:max-w-screen-lg xl:max-w-screen-xl">
        {faq.map((item, index) => (
          <Accordion
            key={index}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </section>
    </section>
  );
}
