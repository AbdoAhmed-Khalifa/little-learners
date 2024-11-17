// components/HeroSection.js
export default function HeroSection() {
  return (
    <section className="mx-5 mt-10 flex flex-col items-center justify-between gap-x-6 md:mx-10 lg:mx-20 lg:flex-row">
      <div className="relative flex w-full justify-center lg:w-1/2">
        <img
          src="/images/heroImage.svg"
          alt="Kids enjoying"
          className="rounded-lg"
        />
      </div>

      <div className="mt-10 w-full text-center lg:mt-0 lg:w-1/2 lg:text-left">
        <span className="border-b-2 border-dark-15 pb-1 font-outfit text-lg font-medium">
          Welcome to Little Learners Academy
        </span>
        <h1 className="mt-2 font-raleway text-3xl font-extrabold lg:text-5xl">
          Where Young Minds Blossom and{" "}
          <span className="text-orange-500">Dreams Take Flight.</span>
        </h1>

        <p className="mt-6 font-outfit text-lg font-medium text-dark-20">
          Our kindergarten school provides a nurturing and stimulating
          environment, fostering a love for learning that lasts a lifetime. Join
          us as we embark on an exciting educational journey together!
        </p>

        <div className="shadow-stats mt-8 grid grid-cols-3 gap-4 rounded-xl border-2 border-dark-15 bg-primary-95 py-7">
          <div className="text-center text-dark-15">
            <h3 className="mb-3 text-4xl font-extrabold">+7000</h3>
            <p className="font-medium">Students Passed Out</p>
          </div>
          <div className="text-center text-dark-15">
            <h3 className="mb-3 text-4xl font-extrabold">+37</h3>
            <p className="font-medium">Awards & Recognitions</p>
          </div>
          <div className="text-center text-dark-15">
            <h3 className="mb-3 text-4xl font-extrabold">+15</h3>
            <p className="font-medium">Experienced Educators</p>
          </div>
        </div>
      </div>
    </section>
  );
}
