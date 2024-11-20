import React from "react";
import PageHeader from "../_components/PageHeader";
import FeaturesSection from "../_components/features/FeaturesSection";
import StudentsLearnSection from "../_components/studentsLearn/StudentsLearnSection";
import RoomsGallerySection from "../_components/roomsGallery/RoomsGallerySection";

export default function Academics() {
  return (
    <>
      <PageHeader
        page="Academics"
        title="Nurturing Young Minds for Success."
        content="Welcome to our Academics page, where we take pride in providing a comprehensive and stimulating educational experience for your child. Our kindergarten school's academic program is thoughtfully designed to foster a love for learning while building a strong foundation of essential skills and knowledge. From language arts and mathematics to science and social studies, our curriculum is carefully crafted to spark curiosity and encourage active exploration."
      />
      <FeaturesSection />
      <StudentsLearnSection />
      <RoomsGallerySection />
    </>
  );
}
