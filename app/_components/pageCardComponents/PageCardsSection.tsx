import { pageCardData } from "@/app/_constants";
import PageCard from "./PageCard";

export default function PageCardsSection() {
  return (
    <section className="grid grid-cols-1 gap-12 md:grid-cols-2 justify-items-center  xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm sm:mx-auto mx-10 my-20">

    {pageCardData.map((item, index) => (
      <PageCard key={index} title={item.title} description={item.description} />
    ))}
    </section>
  )
}
