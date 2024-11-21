"use client";
import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import BtnSlider from "../BtnSlider";
import Image from "next/image";
import "keen-slider/keen-slider.min.css";
export default function RoomsSlider({
  title,
  description,
  images,
}: {
  title: string;
  description: string;
  images: string[];
}) {
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
          origin: "auto",
          perView: 2,
          spacing: 5,
        },
      },
      "(min-width: 1200px)": {
        slides: {
          origin: "auto",
          perView: 4,
          spacing: 5,
        },
      },
    },
  });
  const slideLeft = () => {
    instanceRef.current?.prev();
  };

  const slideRight = () => {
    instanceRef.current?.next();
  };
  return (
    <section className="mt-40 grid grid-cols-1 gap-x-10 gap-y-[60px]">
      <div className="space-y-6 rounded-xl border-2 border-dark-15 bg-white p-4 shadow-card xl:p-12">
        <div className="-mt-52 flex items-center justify-center gap-5">
          <div ref={sliderRef} className="keen-slider">
            {images.map((item, index) => (
              <div
                className="keen-slider__slide px-2 py-10 sm:px-5"
                key={index}
              >
                <Image
                  src={item}
                  alt="room"
                  width={400}
                  height={400}
                  className="h-full w-full"
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
        <h2 className="text-center font-raleway text-3xl font-bold text-dark-10 md:text-left">
          {title}
        </h2>
        <p className="text-center font-outfit text-xl font-medium text-dark-30 md:text-left">
          {description}
        </p>
      </div>
    </section>
  );
}
