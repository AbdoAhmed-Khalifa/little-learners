import { ReactNode } from "react";

export default function PageHeader({
  page,
  title,
  content,
  children,
}: {
  title: string;
  content: string;
  page: string;
  children?: ReactNode;
}) {
  return (
    <div className="mx-5 mt-10 rounded-xl border-2 border-dark-15 bg-white shadow-card md:mx-10 lg:mx-20">
      <div className="relative flex items-center justify-center pb-10 pt-24">
        <div className="absolute left-0 top-0">
          <svg
            width="130"
            height="130"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_123_2429)">
              <path
                d="M0 24.9957L24.9957 0H49.9914V24.9957L24.9957 49.9914H0V24.9957Z"
                fill="#FFBE99"
              />
              <path d="M49.9918 0H24.9961V24.9957H49.9918V0Z" fill="#262626" />
              <path
                d="M0 75.0043L24.9957 49.9915H49.9914V75.0043L24.9957 100H0V75.0043Z"
                fill="#FFBE99"
              />
              <path
                d="M49.9918 49.9915H24.9961V74.9872H49.9918V49.9915Z"
                fill="#262626"
              />
              <path
                d="M0 124.996L24.9957 100H49.9914V124.996L24.9957 149.991H0V124.996Z"
                fill="#FFBE99"
              />
              <path
                d="M49.9918 100H24.9961V124.996H49.9918V100Z"
                fill="#262626"
              />
              <path
                d="M0 174.987L24.9957 149.991H49.9914V174.987L24.9957 200H0V174.987Z"
                fill="#FFBE99"
              />
              <path
                d="M49.9918 149.991H24.9961V174.987H49.9918V149.991Z"
                fill="#262626"
              />
              <path
                d="M49.9912 24.9957L75.0041 0H99.9998V24.9957L75.0041 49.9914H49.9912V24.9957Z"
                fill="#FFBE99"
              />
              <path d="M99.9996 0H75.0039V24.9957H99.9996V0Z" fill="#262626" />
              <path
                d="M49.9912 75.0043L75.0041 49.9915H99.9998V75.0043L75.0041 100H49.9912V75.0043Z"
                fill="#FFBE99"
              />
              <path
                d="M99.9996 49.9915H75.0039V74.9872H99.9996V49.9915Z"
                fill="#262626"
              />
              <path
                d="M49.9912 124.996L75.0041 100H99.9998V124.996L75.0041 149.991H49.9912V124.996Z"
                fill="#FFBE99"
              />
              <path
                d="M99.9996 100H75.0039V124.996H99.9996V100Z"
                fill="#262626"
              />
              <path
                d="M100 24.9957L124.996 0H149.991V24.9957L124.996 49.9914H100V24.9957Z"
                fill="#FFBE99"
              />
              <path d="M149.992 0H124.996V24.9957H149.992V0Z" fill="#262626" />
              <path
                d="M149.991 24.9957L174.987 0H200V24.9957L174.987 49.9914H149.991V24.9957Z"
                fill="#FFBE99"
              />
              <path d="M199.983 0H174.987V24.9957H199.983V0Z" fill="#262626" />
              <path
                d="M100 75.0043L124.996 49.9915H149.991V75.0043L124.996 100H100V75.0043Z"
                fill="#FFBE99"
              />
              <path
                d="M149.992 49.9915H124.996V74.9872H149.992V49.9915Z"
                fill="#262626"
              />
            </g>
            <defs>
              <clipPath id="clip0_123_2429">
                <rect width="200" height="200" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>

        <div className="mx-12 grid grid-cols-1 items-center justify-center justify-items-center gap-10 text-center md:grid-cols-2 md:text-left lg:mx-20">
          <div className="flex flex-col items-center justify-center md:items-start">
            <button className="mb-4 rounded-md border-2 border-dark-15 px-3 py-1.5 font-outfit text-sm font-medium text-dark-20">
              {page}
            </button>
            <h1 className="font-raleway text-4xl font-bold text-dark-10">
              {title}
            </h1>
          </div>
          <div>
            <p className="mt-4 max-w-xl font-outfit font-medium text-dark-20">
              {content}
            </p>
            <div className="grid-col-1 mt-12 grid gap-2">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
