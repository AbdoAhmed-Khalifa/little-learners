import React from "react";
import Accordion from "../Accordion";
import { faq } from "@/app/_constants";
import SectionHeader from "../SectionHeader";

export default function FaqSection() {
  return (
    <section className="mx-5 mt-[120px] md:mx-10 lg:mx-20 lg:mt-[200px]">
      <SectionHeader
        sectiontitle="Solutions For The Doubts"
        subtitle="Frequently Asked Questions"
        description="Find all the essential information you need in our FAQ section, designed to address the most frequently asked questions and help you make informed decisions for your child's education."
      />
      <section className="grid grid-cols-1 justify-items-center gap-x-4 gap-y-4 md:grid-cols-2">
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
