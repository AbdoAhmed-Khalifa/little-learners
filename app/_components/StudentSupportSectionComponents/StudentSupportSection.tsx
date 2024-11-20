import React from "react";
import SectionHeader from "../SectionHeader";
import CardOne from "../card-one";
import {
  BookOpenIcon,
  LightBulbIcon,
  UsersIcon,
} from "@heroicons/react/20/solid";

export default function StudentSupportSection() {
  const cardsData = [
    {
      icon: <LightBulbIcon className="size-[34px]" />,
      title: "Counseling",
      description:
        "Professional counselors offer guidance and support to students, addressing their emotional and social well-being.",
    },
    {
      icon: <BookOpenIcon className="size-[34px]" />,
      title: "Learning Support",
      description:
        "Our educators provide additional assistance to students who may require extra support in their academic journey.",
    },
    {
      icon: <UsersIcon className="size-[34px]" />,
      title: "Parent-Teacher Collaboration",
      description:
        "We foster a strong partnership with parents to ensure seamless communication and mutual support in a child's development.",
    },
  ];
  return (
    <section className="mx-5 mt-[120px] md:mx-10 lg:mx-20 lg:mt-[200px]">
      <SectionHeader
        sectiontitle="Student Support"
        subtitle="Our Support"
        description="At Little Learners Academy, we are committed to providing a supportive and nurturing environment that meets the unique needs of each student. Our student support services include"
      />
      <section className="mt-20 grid grid-cols-1 gap-x-10 gap-y-[60px] md:grid-cols-2 lg:grid-cols-3">
        {cardsData.map((cardOne) => (
          <CardOne
            key={cardOne.title}
            title={cardOne.title}
            description={cardOne.description}
            icon={cardOne.icon}
          />
        ))}
      </section>
    </section>
  );
}
