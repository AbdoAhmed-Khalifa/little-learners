"use client";
import { useRef } from "react";

import Link from "next/link";
import Logo from "../Logo";

type sideMenueProps = {
  state: boolean;
  onClose: () => void;
};

export default function SideMenu({ state, onClose }: sideMenueProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  function handleCloseMenu(): void {
    onClose();
  }
  if (state) {
    dialogRef.current?.showModal();
  } else {
    dialogRef.current?.close();
  }
  return (
    <dialog
      ref={dialogRef}
      onClose={handleCloseMenu}
      className={`fixed left-0 top-0 z-10 m-0 min-h-screen w-3/4 max-w-sm bg-primary-95 lg:hidden`}
    >
      <div
        className="flex items-center justify-between p-2"
        onClick={handleCloseMenu}
      >
        <Logo background="" borderColor="" borderThickness="" />
        <button className="px-4 py-2 text-2xl" aria-label="Close Menu">
          &#10005;
        </button>
      </div>
      <ul
        className="mt-8 flex flex-col items-start font-[family-name:var(--font-outfit)] font-medium"
        onClick={handleCloseMenu}
      >
        <li className="w-full cursor-pointer border-solid border-b-dark-20 text-dark-20 transition duration-300 ease-in-out hover:border-b-2 hover:bg-primary-70">
          <Link href="/" className="inline-block w-full px-4 py-4">
            Home
          </Link>
        </li>
        <li className="w-full cursor-pointer border-solid border-b-dark-20 text-dark-20 transition duration-300 ease-in-out hover:border-b-2 hover:bg-primary-70">
          <Link href="/about" className="inline-block w-full px-4 py-4">
            About
          </Link>
        </li>
        <li className="w-full cursor-pointer border-solid border-b-dark-20 text-dark-20 transition duration-300 ease-in-out hover:border-b-2 hover:bg-primary-70">
          <Link href="/academics" className="inline-block w-full px-4 py-4">
            Academics
          </Link>
        </li>
        <li className="w-full cursor-pointer border-solid border-b-dark-20 text-dark-20 transition duration-300 ease-in-out hover:border-b-2 hover:bg-primary-70">
          <Link href="/admissions" className="inline-block w-full px-4 py-4">
            Admissions
          </Link>
        </li>
        <li className="w-full cursor-pointer border-solid border-b-dark-20 text-dark-20 transition duration-300 ease-in-out hover:border-b-2 hover:bg-primary-70">
          <Link href="/student-life" className="inline-block w-full px-4 py-4">
            Student Life
          </Link>
        </li>
        <li className="w-full cursor-pointer border-solid border-b-dark-20 text-dark-20 transition duration-300 ease-in-out hover:border-b-2 hover:bg-primary-70">
          <Link href="/contact-us" className="inline-block w-full px-4 py-4">
            Contact us
          </Link>
        </li>
      </ul>
    </dialog>
  );
}
