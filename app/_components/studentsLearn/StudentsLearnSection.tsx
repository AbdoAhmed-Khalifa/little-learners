import React from "react";
import SectionHeader from "../SectionHeader";
import StudentsLearnCard from "./StudentsLearnCard";

export default function StudentsLearnSection() {
  return (
    <section className="mx-5 mt-[120px] md:mx-10 lg:mx-20 lg:mt-[200px]">
      <SectionHeader
        sectiontitle="Our Features"
        subtitle="Our Special Features"
        description="Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!"
      />
      <section className="mt-20 grid grid-cols-1 gap-x-10 gap-y-[60px] md:grid-cols-2 lg:grid-cols-3">
        <StudentsLearnCard />
        <StudentsLearnCard />
        <StudentsLearnCard />
        <StudentsLearnCard />
        <StudentsLearnCard />
      </section>
    </section>
  );
}
