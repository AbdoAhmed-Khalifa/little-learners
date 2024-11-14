import React from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/20/solid";

export default function BtnSlider({
  moveSlide,
  direction,
}: {
  moveSlide: (e: React.MouseEvent) => void;
  direction: string;
}) {
  return (
    <button
      onClick={moveSlide}
      className={`flex size-12 items-center justify-center rounded-lg border-2 border-dark-20 p-3 md:size-[58px] md:p-[14px] ${direction === "next" ? "btn-slide next" : "btn-slide prev"}`}
    >
      {direction === "next" ? (
        <ArrowRightIcon className="size-7" />
      ) : (
        <ArrowLeftIcon className="size-7" />
      )}
    </button>
  );
}
