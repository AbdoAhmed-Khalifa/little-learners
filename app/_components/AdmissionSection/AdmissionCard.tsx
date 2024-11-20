import React from "react";

type AdmissionStepProps = {
  step: number;
  title: string;
  description: string;
  index: number;
};

export default function AdmissionCard({
  step,
  title,
  description,
  index,
}: AdmissionStepProps) {
  return (
    <section className="flex flex-col items-center sm:items-start">
      {index !== 0 && (
        <div className="relative flex flex-col items-center justify-center sm:left-[37.5px] sm:hidden">
          <div className="h-[50px] w-0.5 bg-black shadow-line"></div>
        </div>
      )}
      <div className="card px-6 py-2.5 font-raleway text-[40px] font-extrabold leading-[52px]">
        {step.toString().padStart(2, "0")}
      </div>
      <div className="relative flex flex-col items-center justify-center sm:left-[37.5px]">
        <div className="z-20 h-5 w-5 rounded-full border-2 border-dark-15 bg-white"></div>
        <div className="h-[30px] w-0.5 bg-black shadow-line"></div>
        <div className="z-20 h-5 w-5 rounded-full border-2 border-dark-15 bg-white"></div>
      </div>

      <section className="card flex h-full flex-col gap-y-4">
        <h3 className="font-raleway text-3xl font-bold text-dark-10">
          {title}
        </h3>

        <p className="font-outfit text-[16px] font-medium leading-6 text-dark-30">
          {description}
        </p>
      </section>
    </section>
  );
}
