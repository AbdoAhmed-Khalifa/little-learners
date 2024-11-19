import React from "react";
import MissionVisionsSection from "../_components/Mission&VisionsComponents/MissionVisionsSection";
import PageHeader from "../_components/PageHeader";
import TimeLineSection from "../_components/HistorySectionComponent/TimeLineSection";
import AwardsSection from "../_components/AwardsSectionComponenets/AwardsSection";
import TeamMembersSection from "../_components/TeamSectionComponents/TeamMembersSection";

export default function About() {
  return (
    <>
      <PageHeader
        page="Overview"
        title="Welcome to Little Learners Academy"
        content="A leading kinder garden school dedicated to providing a nurturing and stimulating environment for young learners. With a commitment to excellence in early education, we believe in shaping curious minds and building a strong foundation for a lifelong love of learning. Our holistic approach fosters intellectual, social, emotional, and physical development, ensuring that each child reaches their full potential."
      />
      <MissionVisionsSection />
      <AwardsSection />
      <TimeLineSection />
      <TeamMembersSection />
    </>
  );
}
