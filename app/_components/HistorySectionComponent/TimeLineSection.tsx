import React from "react";
import SectionHeader from "../SectionHeader";
import TimeLine from "./TimeLine";

export default function TimeLineSection() {
  return (
    <section className="mx-5 mt-[120px] md:mx-10 lg:mx-20 lg:mt-[200px]">
      <SectionHeader
        sectiontitle="Our History"
        subtitle="Our Progressive Journey"
        description="Founded with a passion for early education in 2005, our kindergarten school boasts a rich history of empowering young learners to reach their potential through innovative teaching methods and a supportive learning environment"
      />
      <TimeLine />
    </section>
  );
}
