import { pageCardData } from "@/app/_constants";
import PageCard from "./PageCard";
import SectionHeader from "../SectionHeader";

export default function PageCardsSection() {
  return (
    <section className="mx-5 mt-[120px] md:mx-10 lg:mx-20 lg:mt-[200px]">
      <SectionHeader
        sectiontitle="Explore More"
        subtitle="Navigate through our Pages"
        description="Your gateway to discovering a wealth of valuable information about our kindergarten school, Feel free to explore and learn more about the enriching experiences that await your child at our kindergarten school"
      />
      <section className="grid grid-cols-1 justify-items-center gap-10 md:grid-cols-2">
        {pageCardData.map((item, index) => (
          <PageCard
            key={index}
            title={item.title}
            description={item.description}
          />
        ))}
      </section>
    </section>
  );
}
