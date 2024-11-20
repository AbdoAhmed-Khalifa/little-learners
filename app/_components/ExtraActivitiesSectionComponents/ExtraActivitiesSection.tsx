import React from "react";
import SectionHeader from "../SectionHeader";
import {
  BeakerIcon,
  BoltIcon,
  MusicalNoteIcon,
  PaintBrushIcon,
  PuzzlePieceIcon,
  SparklesIcon,
} from "@heroicons/react/20/solid";
import CardOne from "../card-one";

export default function ExtraActivitiesSection() {
  const cardsData = [
    {
      icon: <BoltIcon className="size-[34px]" />,
      title: "Sports and Athletics",
      description:
        "Students can participate in various sports, from soccer and basketball to gymnastics and yoga. Sports help promote teamwork, physical fitness, and a sense of discipline.",
    },
    {
      icon: <PaintBrushIcon className="size-[34px]" />,
      title: "Art and Creativity",
      description:
        "Our art classes and creative workshops provide a platform for students to express their creativity through painting, drawing, and other artistic forms.",
    },
    {
      icon: <MusicalNoteIcon className="size-[34px]" />,
      title: "Music and Performing Arts",
      description:
        "Students can discover their musical talents through singing, playing musical instruments, and participating in drama and theater performances.",
    },
    {
      icon: <PuzzlePieceIcon className="size-[34px]" />,
      title: "Language Clubs",
      description:
        "Language clubs offer an opportunity for students to immerse themselves in different languages and cultures, fostering global awareness.",
    },
    {
      icon: <BeakerIcon className="size-[34px]" />,
      title: "Science Club",
      description:
        "The science club allows young scientists to explore the wonders of science through fun experiments and hands-on learning.",
    },
    {
      icon: <SparklesIcon className="size-[34px]" />,
      title: "Cooking and Culinary Arts",
      description:
        "Cooking classes introduce students to the joys of preparing and tasting delicious and healthy meals.",
    },
  ];
  return (
    <section className="mx-5 mt-[120px] md:mx-10 lg:mx-20 lg:mt-[200px]">
      <SectionHeader
        sectiontitle="Extracurricular Activities"
        subtitle="Our Activities"
        description="At Little Learners Academy, we believe in nurturing well-rounded individuals. Our extracurricular activities offer a diverse range of experiences that complement our academic curriculum and encourage students to explore their interests and passions. We offer a wide array of extracurricular activities, including"
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
