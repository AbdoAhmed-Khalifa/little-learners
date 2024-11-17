import { missionAndVision } from "@/app/_constants";
import SectionHeader from "../SectionHeader";
import MissionVisionsCard from "./MissionVisionsCard";

export default function MissionVisionsSection() {
  return (
    <section className="mx-5 mt-[120px] md:mx-10 lg:mx-20 lg:mt-[200px]">
      <SectionHeader
        sectiontitle="Our Mission & Visions"
        subtitle="Mission & Visions"
        description="We are here to provide a nurturing and inclusive environment where young minds can thrive, fostering a love for learning and personal growth."
      />
      <section className="grid grid-cols-1 justify-items-center gap-10 md:grid-cols-2">
        {missionAndVision.map((item, index) => (
          <MissionVisionsCard
            key={index}
            title={item.title}
            icon={item.icon}
            description={item.description}
          />
        ))}
      </section>
    </section>
  );
}
