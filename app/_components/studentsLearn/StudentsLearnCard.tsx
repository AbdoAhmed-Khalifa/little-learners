import Image from "next/image";

export default function StudentsLearnCard() {
  return (
    <section className="relative h-full rounded-xl border-2 border-dark-15 px-10 pb-[30px] pt-[50px] shadow-[6px_6px_0_2px_rgba(30,30,30,1)] shadow-[#1E1E1E] md:px-[35px] md:pb-[50px] md:pt-10">
      {/* Horizontally Centered Absolute Div */}

      {/* Content Section */}
      <section className="relative z-10 flex flex-col items-center justify-center gap-y-4 text-center md:gap-y-5">
        {/* Responsive Centered Image */}
        <div className="relative flex w-full items-center justify-center">
          <div className="absolute -top-[50px] left-1/2 h-[125%] w-24 -translate-x-1/2 rounded-bl-xl rounded-br-xl border-2 border-t-0 border-dark-15 bg-primary-95 md:-top-10 lg:h-[135%] xl:h-[125%]"></div>

          <Image
            src="/images/Language.png"
            alt="Student Learning"
            width={300}
            height={200}
            className="z-10 h-auto w-full"
          />
        </div>

        {/* Title */}
        <h1 className="mt-4 font-raleway text-[22px] font-bold leading-7 text-dark-10 md:text-[28px] md:leading-9">
          Students Learn
        </h1>

        {/* Description */}
        <p className="font-outfit text-[16px] font-medium leading-6 text-dark-30 md:text-[20px] md:leading-[30px]">
          Learn about the latest technological advancements and how they're
          revolutionizing the education industry.
        </p>
      </section>
    </section>
  );
}
