import {
  AcademicCapIcon,
  UserGroupIcon,
  HeartIcon,
  PuzzlePieceIcon,
  UserIcon,
  UsersIcon,
} from "@heroicons/react/20/solid";
import { ReactNode } from "react";
import CardOne from "./card-one";
import SectionHeader from "./SectionHeader";

type CardContent = {
  title: string;
  description: string;
  icon: ReactNode;
};
export default function BenefitsSection() {
  const cardOneContent: CardContent[] = [
    {
      title: "Holistic Learning Approach",
      description:
        "Our curriculum focuses on nurturing cognitive, social, emotional, and physical development, ensuring a well-rounded education.",
      icon: <AcademicCapIcon className="size-[34px]" />,
    },
    {
      title: "Experienced Educators",
      description:
        "Our passionate and qualified teachers create a supportive and stimulating learning environment.",
      icon: <UserGroupIcon className="size-[34px]" />,
    },
    {
      title: "Nurturing Environment",
      description:
        "We prioritize safety and provide a warm and caring atmosphere for every child.",
      icon: <HeartIcon className="size-[34px]" />,
    },
    {
      title: "Play-Based Learning",
      description:
        "We believe in the power of play to foster creativity, problem-solving skills, and imagination.",
      icon: <PuzzlePieceIcon className="size-[34px]" />,
    },
    {
      title: "Individualized Attention",
      description:
        "Our small class sizes enable personalized attention, catering to each child's unique needs.",
      icon: <UserIcon className="size-[34px]" />,
    },
    {
      title: "Parent Involvement",
      description:
        "We foster a strong parent-school partnership to ensure seamless communication and collaboration.",
      icon: <UsersIcon className="size-[34px]" />,
    },
  ];

  return (
    <section className="mx-5 mt-[120px] md:mx-10 lg:mx-20 lg:mt-[200px]">
      <SectionHeader
        sectiontitle="Our Benefits"
        subtitle="Children Deserve Bright Future"
        description="With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum, we aim to lay a strong foundation for your child's future."
      />
      <section className="mt-20 grid grid-cols-1 gap-x-10 gap-y-[60px] md:grid-cols-2 lg:grid-cols-3">
        {cardOneContent.map((cardOne) => (
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
