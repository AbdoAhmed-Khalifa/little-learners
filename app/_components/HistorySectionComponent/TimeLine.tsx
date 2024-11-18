import TimeLineItem from "./TimeLineItem";

export type timeLineData = {
  year: string;
  title: string;
  description: string;
};

const timelineData: timeLineData[] = [
  {
    year: "2023",
    title: "Resilience and Future Horizons",
    description:
      "Adapting to new challenges, we remained committed to our mission of providing an exceptional early education.",
  },
  {
    year: "2017",
    title: "Innovation and Technology",
    description:
      "Innovation became the driving force behind our kindergarten's progress, embracing the latest educational technologies.",
  },
  {
    year: "2012",
    title: "Expansion and Recognition",
    description:
      "These years marked a period of expansion and recognition for our school.",
  },
  {
    year: "2005",
    title: "Inception and Growth",
    description:
      "Established in 2005, our kindergarten school began its journey with a vision to provide a nurturing space.",
  },
];

export default function TimeLine() {
  return (
    <section className="timelinsec flex flex-col gap-y-[50] rounded-xl border-2 border-dark-15 py-[50] pl-[10] pr-5 shadow-card md:p-[60px] lg:p-[80px]">
      {timelineData.map((item, index) => (
        <TimeLineItem
          key={index}
          year={item.year}
          title={item.title}
          description={item.description}
        />
      ))}
    </section>
  );
}
