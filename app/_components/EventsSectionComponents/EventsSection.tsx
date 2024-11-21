import React from "react";
import SectionHeader from "../SectionHeader";
import EeventsCards from "./EeventsCards";

type Events = {
  imageUrl: string;
  title: string;
  description: string;
};

const events: Events[] = [
  {
    imageUrl: "/images/event1.png",
    title: "Annual Sports Day",
    description:
      "A day filled with friendly competition, team spirit, and sportsmanship.",
  },
  {
    imageUrl: "/images/event2.png",
    title: "Cultural Festivals",
    description:
      "Celebrations of diverse cultural festivals, promoting cultural exchange and appreciation.",
  },
  {
    imageUrl: "/images/event3.png",
    title: "Art Exhibitions",
    description:
      "Showcasing our students' artistic talents through exhibitions and displays.",
  },
  {
    imageUrl: "/images/event4.png",
    title: "Science Fair",
    description:
      "A platform for budding scientists to present their innovative projects and experiments.",
  },
  {
    imageUrl: "/images/event5.png",
    title: "International Day",
    description:
      "A vibrant celebration of our diverse community, embracing cultures from around the world.",
  },
  {
    imageUrl: "/images/event6.png",
    title: "Graduation Ceremony",
    description:
      "A significant milestone as our Kindergarten students prepare to embark on their academic journey.",
  },
];

export default function EventsSection() {
  return (
    <section className="mx-5 mt-[120px] md:mx-10 lg:mx-20 lg:mt-[200px]">
      <SectionHeader
        sectiontitle="Events & Celebrations"
        subtitle="Our Events"
        description="At Little Learners Academy, we celebrate every milestone and create cherished memories for our students. Throughout the year, we host a variety of events and celebrations that bring the entire school community together. Some of our memorable events include"
      />
      <section className="mt-20 grid grid-cols-1 gap-x-10 gap-y-[60px] md:grid-cols-2 lg:grid-cols-3">
        {events.map((event, index) => (
          <EeventsCards
            key={event.title}
            title={event.title}
            description={event.description}
            imageUrl={event.imageUrl}
            index={index}
          />
        ))}
      </section>
    </section>
  );
}
