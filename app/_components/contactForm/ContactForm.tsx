import Input from "./Input";

export default function ContactForm() {
  return (
    <div className="w-full space-y-24 rounded-lg border-2 border-dark-15 bg-white p-8 shadow-card">
      <div className="-mt-14 flex justify-center space-x-4">
        <ul className="flex justify-center gap-3 sm:justify-start">
          <li>
            <a
              href="#"
              rel="noreferrer"
              target="_blank"
              className="flex items-center gap-2 transition"
            >
              <span className="sr-only">Facebook</span>
              <div className="flex h-12 w-24 items-center justify-center rounded-lg border-2 border-dark-15 bg-primary-90 p-3">
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
              <div className="flex h-12 w-24 items-center justify-center rounded-lg border-2 border-dark-15 bg-primary-90 p-3">
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
              <div className="flex h-12 w-24 items-center justify-center rounded-lg border-2 border-dark-15 bg-primary-90 p-3">
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
      <form className="space-y-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Input
            id="parentName"
            label="Parent Name"
            type="text"
            placeholder="Enter Parent Name"
          />
          <Input
            id="emailAddress"
            label="Email Address"
            type="email"
            placeholder="Enter Email Address"
          />
          <Input
            id="phoneNumber"
            label="Phone Number"
            type="text"
            placeholder="Enter Phone Number"
          />
          <Input
            id="studentName"
            label="Student Name"
            type="text"
            placeholder="Enter Student Name"
          />
          <Input
            id="studentAge"
            label="Student Age"
            type="number"
            placeholder="Enter Student Age"
          />

          <div className="space-y-4">
            <label
              htmlFor="program"
              className="block text-sm font-medium text-[#4C4C4C]"
            >
              Program of Interest
            </label>
            <select
              id="program"
              className="block w-full rounded-md border-2 border-dark-15 bg-primary-99 p-4 shadow-sm placeholder:text-dark-35 focus:outline-primary-90"
            >
              <option>Select Program</option>
              <option>Program A</option>
              <option>Program B</option>
            </select>
          </div>
        </div>

        <div className="space-y-4">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-[#4C4C4C]"
          >
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            className="mt-1 block w-full rounded-md border-2 border-dark-15 bg-primary-99 p-4 shadow-sm placeholder:text-dark-35 focus:outline-primary-90"
            placeholder="Enter your Message"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full rounded-lg border-2 border-dark-15 bg-primary-75 p-4 hover:bg-primary-70 focus:outline-none focus:ring-2"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
