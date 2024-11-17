import Image from "next/image";
import SectionList from "./sectionList";
import { footerList } from "@/app/_constants";
import FooterIconsList from "./FooterIconsList";
import FooterMiddle from "./FooterMiddle";
import FooterBottom from "./FooterBottom";

export default function Footer() {
  return (
    <footer className="mx-5 my-10 rounded-xl border-2 border-dark-15 bg-white shadow-card md:mx-10">
      <div className="max-w-screen mx-auto px-7 pb-6 pt-16 font-outfit sm:px-6 lg:px-24 lg:pt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="flex justify-center sm:justify-start">
              <Image
                src="/desktopLogo.svg"
                alt="Logo"
                width={182}
                height={40}
              />
            </div>

            <p className="mt-6 max-w-md px-8 text-center text-base font-medium leading-relaxed text-dark-30 sm:max-w-sm sm:text-left md:px-0">
              We believe in the power of play to foster creativity,
              problem-solving skills, and imagination.
            </p>

            <FooterIconsList />
          </div>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:col-span-2">
            {footerList.map((item, index) => (
              <SectionList
                sectionName={item.sectionName}
                sectionList={item.sectionList}
                sectionUrl={item.url}
                key={index}
              />
            ))}
          </div>
        </div>
        <FooterMiddle />

        <div className="mt-8">
          <FooterBottom />
        </div>
      </div>
    </footer>
  );
}
