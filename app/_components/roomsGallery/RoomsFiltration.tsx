"use client";
import { useState } from "react";
import { roomsFilters } from "@/app/_constants";

export default function RoomsFiltration() {
  const [activeFilter, setActiveFilter] = useState("all");

  return (
    <div className="flex flex-wrap justify-center gap-3">
      {roomsFilters.map(({ id, label }) => {
        return (
          <button
            key={id}
            onClick={() => setActiveFilter(id)}
            className={`flex items-center gap-2 rounded-md border-2 border-dark-20 px-4 py-2 text-sm font-medium text-dark-10 transition-all duration-200 ease-in-out hover:bg-primary-97 ${
              activeFilter === id ? "bg-primary-95 shadow-sm" : "bg-white"
            }`}
          >
            <span>{label}</span>
          </button>
        );
      })}
    </div>
  );
}
