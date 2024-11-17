"use client";

import React, { useState } from "react";
import TestimonialsCard from "./TestimonialsCard";
import BtnSlider from "./BtnSlider";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import SectionHeader from "./SectionHeader";
import { useResponsiveState } from "../_hooks/useResponsiveHook";

export interface Testimonial {
  id: number;
  avatar: string; // URL or path to the avatar image
  name: string;
  rating: number; // Rating out of 5
  feedback: string;
}
export const testimonials: Testimonial[] = [
  {
    id: 1,
    avatar: "/images/avatar1.png",
    name: "Alice J",
    rating: 5,
    feedback: "This product has completely transformed our workflow!",
  },
  {
    id: 2,
    avatar: "/images/avatar2.png",
    name: "Mark B",
    rating: 4,
    feedback: "Incredible experience! Highly recommended for all developers.",
  },
  {
    id: 3,
    avatar: "/images/avatar3.png",
    name: "Sarah Lee",
    rating: 5,
    feedback: "The support and features are top-notch. Love working with this!",
  },
  {
    id: 4,
    avatar: "/images/avatar3.png",
    name: "Sarah L",
    rating: 5,
    feedback: "The support and features are top-notch. Love working with this!",
  },
  // Add more testimonials as needed
];
export default function TestimoinalsSection() {
  const isMobile = useResponsiveState("(min-width: 640px)");
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
      "(min-width: 1140px)": {
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
        sectiontitle="our Testimonials"
        subtitle="Their Happy Words 🤗"
        description="Our testimonials are heartfelt reflections of the nurturing environment we provide, where children flourish both academically and emotionally."
      />
      <div className="flex items-center justify-center gap-5 p-10">
        {isMobile && <BtnSlider moveSlide={slideRight} direction="prev" />}
        <div ref={sliderRef} className="keen-slider">
          {testimonials.map((item, index) => (
            <div className="keen-slider__slide p-3" key={index}>
              <TestimonialsCard
                avatarUrl={item.avatar}
                fullName={item.name}
                rate={item.rating}
                feedback={item.feedback}
              />
            </div>
          ))}
        </div>
        {isMobile && <BtnSlider moveSlide={slideLeft} direction="next" />}
      </div>
      {!isMobile && (
        <div className="flex items-center justify-center gap-5">
          <BtnSlider moveSlide={slideRight} direction="prev" />
          <BtnSlider moveSlide={slideLeft} direction="next" />
        </div>
      )}
    </section>
  );
}
