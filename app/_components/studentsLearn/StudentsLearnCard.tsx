import Image from "next/image";

export default function StudentsLearnCard({
  title,
  image,
  description,
}: {
  title: string;
  image: string;
  description: string;
}) {
  return (
    <section className="relative h-full rounded-xl border-2 border-dark-15 px-10 pb-[30px] pt-[50px] shadow-[6px_6px_0_2px_rgba(30,30,30,1)] shadow-[#1E1E1E] md:px-[35px] md:pb-[50px] md:pt-10">
      <section className="relative z-10 flex flex-col items-center justify-center gap-y-4 text-center md:gap-y-5">
        <div className="relative flex w-full items-center justify-center">
          <div className="xs:h-[130%] absolute -top-[50px] left-1/2 h-[125%] w-24 -translate-x-1/2 rounded-bl-xl rounded-br-xl border-2 border-t-0 border-dark-15 bg-primary-95 sm:h-[119%] md:-top-10 md:h-[125%] lg:h-[135%] xl:h-[125%]"></div>

          <Image
            src={image}
            alt="Student Learning"
            width={300}
            height={200}
            className="z-10 h-auto w-full"
          />
        </div>

        <h1 className="mt-4 font-raleway text-[22px] font-bold leading-7 text-dark-10 md:text-[28px] md:leading-9">
          {title}
        </h1>

        <p className="font-outfit text-[16px] font-medium leading-6 text-dark-30 md:text-[20px] md:leading-[30px]">
          {description}
        </p>
      </section>
    </section>
  );
}
