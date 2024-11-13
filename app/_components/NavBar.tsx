"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <ul className="hidden h-20 font-[family-name:var(--font-outfit)] text-[16px] font-medium leading-[24px] lg:flex">
      <Link
        className={`${pathname === "/" ? "bg-primary-75" : ""} flex items-center border-x-2 border-dark-15 px-[25px] py-4 transition-[background-color] duration-300 hover:bg-primary-80 lg:px-[30px] lg:py-5`}
        href="/"
      >
        <li>Home</li>
      </Link>
      <Link
        href="/about"
        className={`${pathname === "/about" ? "bg-primary-75" : ""} flex items-center border-r-2 border-dark-15 px-[25px] py-4 transition-[background-color] duration-300 hover:bg-primary-80 lg:px-[30px] lg:py-5`}
      >
        <li>About</li>
      </Link>
      <Link
        href="/academics"
        className={`${pathname === "/academics" ? "bg-primary-75" : ""} flex items-center border-r-2 border-dark-15 px-[25px] py-4 transition-[background-color] duration-300 hover:bg-primary-80 lg:px-[30px] lg:py-5`}
      >
        <li> Academics</li>
      </Link>
      <Link
        href="/admissions"
        className={`${pathname === "/admissions" ? "bg-primary-75" : ""} flex items-center border-r-2 border-dark-15 px-[25px] py-4 transition-[background-color] duration-300 hover:bg-primary-80 lg:px-[30px] lg:py-5`}
      >
        <li>Admissions</li>
      </Link>
      <Link
        href="student-life"
        className={`${pathname === "/student-life" ? "bg-primary-75" : ""} flex items-center border-r-2 border-dark-15 px-[25px] py-4 transition-[background-color] duration-300 hover:bg-primary-80 lg:px-[30px] lg:py-5`}
      >
        <li>Student life</li>
      </Link>
      <Link
        href="/contact-us"
        className={`${pathname === "/contact-us" ? "bg-primary-75" : ""} flex items-center px-[25px] py-4 transition-[background-color] duration-300 hover:bg-primary-80 lg:px-[30px] lg:py-5`}
      >
        <li>Contact us</li>
      </Link>
    </ul>
  );
}
