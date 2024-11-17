"use client";
import React, { useState } from "react";

const Accordion = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="h-full w-full">
      <div
        className={`overflow-hidden rounded-lg ${isOpen ? "bg-white" : "bg-primary-95"} h-full border-2 border-dark-15 px-6 py-6 shadow-md`}
      >
        <button
          className="flex w-full items-center justify-between gap-x-5 text-left text-lg font-semibold text-dark-15 focus:outline-none"
          onClick={toggleAccordion}
        >
          {question}
          <div
            className={`rounded-lg border-2 border-dark-15 px-2 pb-1 text-2xl text-dark-15 transition-transform duration-300 ${isOpen ? "bg-primary-95" : "bg-primary-97"}`}
          >
            {isOpen ? "−" : "+"}
          </div>
        </button>

        <div
          className={`accordion-content overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-40" : "max-h-0"
          }`}
        >
          <div className="mt-3 max-w-lg border-t-2 border-dark-15 py-3.5 font-medium text-dark-20">
            <p>{answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
