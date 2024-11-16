import { pageCardData } from "@/app/_constants";
import PageCard from "./PageCard";
import SectionHeader from "../SectionHeader";

export default function PageCardsSection() {
  return (
    <section className="mx-4 mt-[200px] md:mx-20">
      <SectionHeader
        sectiontitle="Explore More"
        subtitle="Navigate through our Pages"
        description="Your gateway to discovering a wealth of valuable information about our kindergarten school, Feel free to explore and learn more about the enriching experiences that await your child at our kindergarten school"
      />
      <section className="mx-10 my-20 grid grid-cols-1 justify-items-center gap-12 sm:mx-auto sm:max-w-screen-sm md:max-w-screen-md md:grid-cols-2 lg:max-w-screen-lg xl:max-w-screen-xl">
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
