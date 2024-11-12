import Image from "next/image";
import Link from "next/link";
import React from "react";

type logoProps = {
  background: string;
  borderColor: string;
  borderThickness: string;
  onClick?: () => void;
};

export default function Logo({
  background,
  borderColor,
  borderThickness,
  onClick,
}: logoProps) {
  return (
    <Link
      href="/"
      className={`flex items-center gap-[10] ${borderThickness} ${borderColor} ${background} px-6 py-5 capitalize`}
      onClick={onClick}
    >
      <Image
        src="/logo.png"
        width={40}
        height={40}
        className="h-[25px] w-[25px] sm:h-[34px] sm:w-[34px] lg:h-10 lg:w-10"
        alt="Logo of the website"
      />
      <p className="font-[family-name:var(--font-outfit)] text-xl font-medium md:text-sm">
        Little Learner
      </p>
    </Link>
  );
}
