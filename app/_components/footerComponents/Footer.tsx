import Image from "next/image";
import SectionList from "./sectionList";
import { footerList } from "@/app/_constants";

export default function Footer() {
  return (
    <footer className="mx-10 rounded-xl border-2 border-dark-15 bg-white">
      <div className="max-w-screen font-outfit mx-auto px-7 pb-6 pt-16 sm:px-6 lg:px-24 lg:pt-24">
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

            <ul className="mt-8 flex flex-col justify-center gap-3 sm:justify-start">
              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="flex items-center gap-2 transition"
                >
                  <span className="sr-only">Email</span>
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg border-2 border-dark-15 bg-primary-97 p-1.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="size-6 fill-dark-15"
                    >
                      <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                      <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                    </svg>
                  </div>

                  <p className="text-base font-medium text-dark-15">
                    hello@littlelearners.com
                  </p>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="flex items-center gap-2 transition"
                >
                  <span className="sr-only">Phone</span>
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg border-2 border-dark-15 bg-primary-97 p-1.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="size-6 fill-dark-15"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>

                  <p className="text-base font-medium text-dark-15">
                    +91 91813 23 2309
                  </p>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="flex items-center gap-2 transition"
                >
                  <span className="sr-only">Location</span>
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg border-2 border-dark-15 bg-primary-97 p-1.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="size-6 fill-dark-15"
                    >
                      <path
                        fillRule="evenodd"
                        d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>

                  <p className="text-base font-medium text-dark-15">
                    Somewhere in the World
                  </p>
                </a>
              </li>
            </ul>
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
        <div className="mt-12 flex flex-col items-center border-y border-dark-15 py-6 md:flex-row md:justify-between">
          <div className="font-outfit flex items-center justify-center gap-4 text-sm font-medium text-dark-30 md:text-lg">
            <p>Term of Service</p>
            <div className="h-5 w-[1px] bg-dark-15 md:h-6 md:w-0.5"></div>
            <p>Privacy Policy</p>
            <div className="h-5 w-[1px] bg-dark-15 md:h-6 md:w-0.5"></div>
            <p>Cookie Policy</p>
          </div>
          <div>
            <ul className="mt-6 flex justify-center gap-3 sm:justify-start md:mt-0">
              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="flex items-center gap-2 transition"
                >
                  <span className="sr-only">Facebook</span>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg border-2 border-dark-15 bg-primary-90 p-3">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4687H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92187 17.3438 4.92187V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4687H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z"
                        fill="#262626"
                      />
                    </svg>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="flex items-center gap-2 transition"
                >
                  <span className="sr-only">Twitter</span>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg border-2 border-dark-15 bg-primary-90 p-3">
                    <svg
                      width="24"
                      height="20"
                      viewBox="0 0 24 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.55016 19.7502C16.6045 19.7502 21.5583 12.2469 21.5583 5.74211C21.5583 5.53117 21.5536 5.31554 21.5442 5.1046C22.5079 4.40771 23.3395 3.5445 24 2.55554C23.1025 2.95484 22.1496 3.21563 21.1739 3.32898C22.2013 2.71315 22.9705 1.74572 23.3391 0.606011C22.3726 1.1788 21.3156 1.58286 20.2134 1.80085C19.4708 1.01181 18.489 0.48936 17.4197 0.314295C16.3504 0.13923 15.2532 0.321295 14.2977 0.832341C13.3423 1.34339 12.5818 2.15495 12.1338 3.14156C11.6859 4.12816 11.5754 5.23486 11.8195 6.29054C9.86249 6.19233 7.94794 5.68395 6.19998 4.79834C4.45203 3.91274 2.90969 2.66968 1.67297 1.14976C1.0444 2.23349 0.852057 3.51589 1.13503 4.73634C1.418 5.95678 2.15506 7.02369 3.19641 7.72023C2.41463 7.69541 1.64998 7.48492 0.965625 7.10617V7.1671C0.964925 8.30439 1.3581 9.40683 2.07831 10.287C2.79852 11.1672 3.80132 11.7708 4.91625 11.9952C4.19206 12.1934 3.43198 12.2222 2.69484 12.0796C3.00945 13.0577 3.62157 13.9131 4.44577 14.5266C5.26997 15.14 6.26512 15.4808 7.29234 15.5015C5.54842 16.8714 3.39417 17.6144 1.17656 17.6109C0.783287 17.6103 0.390399 17.5861 0 17.5387C2.25286 18.984 4.87353 19.7516 7.55016 19.7502Z"
                        fill="#262626"
                      />
                    </svg>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="flex items-center gap-2 transition"
                >
                  <span className="sr-only">LinkedIn</span>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg border-2 border-dark-15 bg-primary-90 p-3">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.5195 0H1.47656C0.660156 0 0 0.644531 0 1.44141V18.5547C0 19.3516 0.660156 20 1.47656 20H18.5195C19.3359 20 20 19.3516 20 18.5586V1.44141C20 0.644531 19.3359 0 18.5195 0ZM5.93359 17.043H2.96484V7.49609H5.93359V17.043ZM4.44922 6.19531C3.49609 6.19531 2.72656 5.42578 2.72656 4.47656C2.72656 3.52734 3.49609 2.75781 4.44922 2.75781C5.39844 2.75781 6.16797 3.52734 6.16797 4.47656C6.16797 5.42188 5.39844 6.19531 4.44922 6.19531ZM17.043 17.043H14.0781V12.4023C14.0781 11.2969 14.0586 9.87109 12.5352 9.87109C10.9922 9.87109 10.7578 11.0781 10.7578 12.3242V17.043H7.79688V7.49609H10.6406V8.80078H10.6797C11.0742 8.05078 12.043 7.25781 13.4844 7.25781C16.4883 7.25781 17.043 9.23438 17.043 11.8047V17.043Z"
                        fill="#262626"
                      />
                    </svg>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8">
          <div className="text-center sm:flex sm:justify-center sm:text-left">
            <p className="text-sm font-medium text-dark-40 md:text-lg">
              Copyright © [2023] Little Learners Academy. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
