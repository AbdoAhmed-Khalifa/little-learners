import React from "react";

export default function Input({
  label,
  type,
  placeholder,
  id,
}: {
  label: string;
  type: string;
  placeholder: string;
  id: string;
}) {
  return (
    <div className="space-y-4">
      <label htmlFor={id} className="block text-sm font-medium text-[#4C4C4C]">
        {label}
      </label>
      <input
        type={type}
        id={id}
        className="block w-full rounded-md border-2 border-dark-15 bg-primary-99 p-4 shadow-sm placeholder:text-dark-35 focus:outline-primary-90"
        placeholder={placeholder}
      />
    </div>
  );
}
