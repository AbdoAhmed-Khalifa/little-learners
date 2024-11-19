"use client";
import {
  BoltIcon,
  ChartBarIcon,
  ChartPieIcon,
} from "@heroicons/react/20/solid";
import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";
import { CardContent } from "../BenefitSectionComponents/BenefitsSection";
import BtnSlider from "../BtnSlider";
import CardOne from "../card-one";
import SectionHeader from "../SectionHeader";

export default function AwardsSection() {
  const awardsData: CardContent[] = [
    {
      title: "Outstanding Early Childhood Education Award",
      description:
        "Presented by the National Association for the Education of Young Children (NAEYC) in recognition of Little Learners Academy's commitment to delivering exceptional early childhood education and fostering a nurturing learning environment.",
      icon: <ChartPieIcon className="size-[34px]" />,
    },
    {
      title: "Innovative STEAM Education Award",
      description:
        "Awarded by the Education Excellence Association for our pioneering efforts in introducing innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that ignite creativity and critical thinking in young learners.",
      icon: <ChartBarIcon className="size-[34px]" />,
    },
    {
      title: "Environmental Stewardship Award",
      description:
        "Received from the Green Earth Society for our dedication to environmental education, sustainable practices, and fostering a love for nature in our students.",
      icon: <BoltIcon className="size-[34px]" />,
    },
    {
      title: "Environmental Stewardship Award",
      description:
        "Received from the Green Earth Society for our dedication to environmental education, sustainable practices, and fostering a love for nature in our students.",
      icon: <BoltIcon className="size-[34px]" />,
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    loop: true,
    slides: {
      origin: "center",
      perView: 1,
      spacing: 16,
    },
    breakpoints: {
      "(min-width:640px)": {
        slides: {
          origin: "center",
          perView: 1,
          spacing: 5,
        },
      },
      "(min-width: 870px)": {
        slides: {
          origin: "center",
          perView: 2,
          spacing: 5,
        },
      },
      "(min-width: 1200px)": {
        slides: {
          origin: "center",
          perView: 3,
          spacing: 5,
        },
      },
    },
  });

  //   // Handlers for slide buttons
  const slideLeft = () => {
    instanceRef.current?.prev();
  };

  const slideRight = () => {
    instanceRef.current?.next();
  };

  return (
    <section className="mx-5 mt-[120px] md:mx-10 lg:mx-20 lg:mt-[200px]">
      <SectionHeader
        sectiontitle="Our Awards and Recognitions"
        subtitle="Our Achievements"
        description="Little Learners Academy takes pride in our commitment to delivering high-quality education and outstanding student experiences. We are honored to have received various awards and recognitions for our dedication to early childhood education. These accolades reflect our team's relentless efforts in creating an exceptional learning environment for our students."
      />

      <div className="flex items-center justify-center gap-5">
        <div
          ref={sliderRef}
          className="keen-slider"
          style={{ minHeight: "300px" }}
        >
          {awardsData.map((item, index) => (
            <div className="keen-slider__slide px-2 py-10 sm:px-5" key={index}>
              <CardOne
                title={item.title}
                description={item.description}
                icon={item.icon}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-end">
        <section className="flex gap-5">
          <BtnSlider moveSlide={slideRight} direction="prev" />
          <BtnSlider moveSlide={slideLeft} direction="next" />
        </section>
      </div>
    </section>
  );
}
