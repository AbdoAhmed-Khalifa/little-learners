import React from "react";

export default function CardDescription({
  description,
}: {
  description: string;
}) {
  return <p className="text-base font-medium text-dark-30">{description}</p>;
}
