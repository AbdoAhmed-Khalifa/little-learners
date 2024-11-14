"use client";

import React, { useState } from "react";
import TestimonialsCard from "./TestimonialsCard";
import BtnSlider from "./BtnSlider";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

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
    name: "Alice Johnson",
    rating: 5,
    feedback: "This product has completely transformed our workflow!",
  },
  {
    id: 2,
    avatar: "/images/avatar2.png",
    name: "Mark Brown",
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
    name: "Sarah Lee",
    rating: 5,
    feedback: "The support and features are top-notch. Love working with this!",
  },
  // Add more testimonials as needed
];
export default function TestimoinalsSection() {
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
          spacing: 16,
        },
      },
      "(min-width: 768px)": {
        slides: {
          origin: "center",
          perView: 2,
          spacing: 16,
        },
      },
      "(min-width: 1024px)": {
        slides: {
          origin: "center",
          perView: 3,
          spacing: 16,
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
    <>
      <div className="flex items-center justify-center gap-5 p-10">
        <BtnSlider moveSlide={slideLeft} direction="prev" />
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
        <BtnSlider moveSlide={slideRight} direction="next" />
      </div>
    </>
  );
}
