import { ReactNode } from "react";
import CardOne from "../card-one";
import SectionHeader from "../SectionHeader";
import {
  BookOpenIcon,
  ChartBarIcon,
  StarIcon,
  SunIcon,
  PaintBrushIcon,
  PuzzlePieceIcon,
} from "@heroicons/react/20/solid";

export type CardContent = {
  title: string;
  description: string;
  icon: ReactNode;
};

export default function FeaturesSection() {
  const features: CardContent[] = [
    {
      title: "Thematic Learning",
      description:
        "Our curriculum is centered around engaging themes that capture children's imaginations. Each theme integrates multiple subjects, making learning enjoyable and relevant.",
      icon: <BookOpenIcon className="size-[34px]" />,
    },
    {
      title: "STEAM Education",
      description:
        "We offer innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that promote hands-on exploration, critical thinking, and problem-solving skills.",
      icon: <ChartBarIcon className="size-[34px]" />,
    },
    {
      title: "Language Immersion",
      description:
        "Through language immersion programs, children have the opportunity to learn a second language, enhancing cognitive development and global awareness.",
      icon: <PuzzlePieceIcon className="size-[34px]" />,
    },
    {
      title: "Art and Creativity",
      description:
        "Art is celebrated at Little Learners Academy. Our art-focused activities encourage self-expression, creativity, and the appreciation of various art forms.",
      icon: <PaintBrushIcon className="size-[34px]" />,
    },
    {
      title: "Outdoor Education",
      description:
        "Our expansive outdoor learning spaces provide a stimulating environment for children to explore nature, fostering a connection with the environment.",
      icon: <SunIcon className="size-[34px]" />,
    },
    {
      title: "Play-Based Learning",
      description:
        "Play is an integral part of early childhood education. Our play-based approach enhances social skills, emotional development, and imaginative thinking.",
      icon: <StarIcon className="size-[34px]" />,
    },
  ];
  return (
    <section className="mx-5 mt-[120px] md:mx-10 lg:mx-20 lg:mt-[200px]">
      <SectionHeader
        sectiontitle="Our Features"
        subtitle="Our Special Features"
        description="Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!"
      />
      <section className="mt-20 grid grid-cols-1 gap-x-10 gap-y-[60px] md:grid-cols-2 lg:grid-cols-3">
        {features.map(({ title, description, icon }) => (
          <CardOne
            key={title}
            title={title}
            description={description}
            icon={icon}
          />
        ))}
      </section>
    </section>
  );
}
