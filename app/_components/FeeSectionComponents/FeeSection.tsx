import React from "react";
import FeeTable from "./FeeTable";
import SectionHeader from "../SectionHeader";
const headers = [
  "Program",
  "Age Group",
  "Annual Tuition",
  "Registration Fee",
  "Activity Fee",
];

const data1 = [
  ["Nursery", "2 - 3 Years", "$1,686", "$162", "$12"],
  ["Pre - Kindergartens", "3 - 4 Years", "$2,686", "$220", "$16"],
  ["Kindergarten", "4 - 5 Years", "$3,686", "$340", "$20"],
];
const data2 = [
  ["Nursery", "$12"],
  ["Pre - Kindergartens", "$16"],
  ["Kindergarten", "$20"],
];
const colHeaders2 = ["Additional Services"];

export default function FeeSection() {
  return (
    <section className="mx-5 mt-[120px] md:mx-10 lg:mx-20 lg:mt-[200px]">
      <SectionHeader
        sectiontitle="Fee Structure"
        subtitle="Our Features"
        description="Our fee structure is transparent, and we strive to keep our fees competitive within the education sector. The fees vary based on the program, age group, and any additional services chosen."
      />
      <section className="card mt-20 p-10">
        <FeeTable data={data1} headers={headers} />
        <FeeTable data={data2} headers={colHeaders2} />
      </section>
    </section>
  );
}
