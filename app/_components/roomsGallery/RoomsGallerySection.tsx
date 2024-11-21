import { rooms } from "@/app/_constants";
import SectionHeader from "../SectionHeader";
import RoomsFiltration from "./RoomsFiltration";
import RoomsSlider from "./RoomsSlider";

export default function RoomsGallerySection() {
  return (
    <section className="mx-5 mt-[120px] md:mx-10 lg:mx-20 lg:mt-[200px]">
      <SectionHeader
        sectiontitle="Our Gallery"
        subtitle="Our Rooms Gallery"
        description="Step into our Gallery and immerse yourself in a visual journey of cherished moments and unforgettable experiences at our kindergarten school."
      />
      <RoomsFiltration />
      <div>
        {rooms.map((item, index) => (
          <RoomsSlider {...item} key={index} />
        ))}
      </div>
    </section>
  );
}
