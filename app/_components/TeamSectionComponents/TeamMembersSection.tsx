import React from "react";
import SectionHeader from "../SectionHeader";
import TeamCard, { teachersType } from "./TeamCard";

const teachers: teachersType[] = [
  {
    name: "Ms. Sarah Anderson",
    avatar: "/images/team1.png", // Replace with actual image URLs
    qualification: "Bachelor's Degree in Early Childhood Education",
    description:
      "Ms. Sarah is a passionate educator with over 10 years of experience in guiding young minds. Her warm and nurturing approach creates a welcoming classroom environment where children feel comfortable to explore and learn.",
  },
  {
    name: "Mr. David Roberts",
    avatar: "/images/team2.png", // Replace with actual image URLs
    qualification: "Master's Degree in Elementary Education",
    description:
      "With a strong background in elementary education, Mr. David brings a creative and interactive teaching style to his classroom. His enthusiasm for learning inspires students to ask questions and think critically.",
  },
  {
    name: "Ms. Emily Hernandez",
    avatar: "/images/team3.png", // Replace with actual image URLs
    qualification: "Diploma in Child Psychology",
    description:
      "Ms. Emily's expertise in child psychology enables her to understand each child's unique needs and provide individualized support. Her caring nature fosters a strong sense of belonging and confidence in her students.",
  },
  {
    name: "Mr. Michael Turner",
    avatar: "/images/team4.png", // Replace with actual image URLs
    qualification: "Bachelor's Degree in Physical Education",
    description:
      "Mr. Michael's passion for physical fitness and sports shines through in his energetic classes. He encourages students to stay active, promoting teamwork and a healthy lifestyle.",
  },
  {
    name: "Ms. Jessica Lee",
    avatar: "/images/team5.png", // Replace with actual image URLs
    qualification: "Master's Degree in Special Education",
    description:
      "Ms. Jessica's specialization in special education allows her to create an inclusive and supportive learning environment for all students. She is dedicated to helping every child reach their full potential.",
  },
  {
    name: "Mr. William Parker",
    avatar: "/images/team6.png", // Replace with actual image URLs
    qualification: "Bachelor's Degree in Fine Arts",
    description:
      "Mr. William's background in fine arts brings creativity and imagination to his classroom. Through art projects and activities, he nurtures the artistic expression and self-confidence of his students.",
  },
];

export default function TeamMembersSection() {
  return (
    <section className="mx-5 mt-[120px] md:mx-10 lg:mx-20 lg:mt-[200px]">
      <SectionHeader
        sectiontitle="Our Benefits"
        subtitle="Children Deserve Bright Future"
        description="With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum, we aim to lay a strong foundation for your child's future."
      />
      <section className="mt-20 grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-10">
        {teachers.map((teacher) => (
          <TeamCard
            key={teacher.name}
            name={teacher.name}
            avatar={teacher.avatar}
            qualification={teacher.qualification}
            description={teacher.description}
          />
        ))}
      </section>
    </section>
  );
}
