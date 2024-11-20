import React from "react";

type TableProps = {
  headers: string[]; // Array of column headers
  data: string[][]; // Array of arrays for table body rows
};
export default function FeeTable({ headers, data }: TableProps) {
  return (
    <section className="table-scroll overflow-x-auto p-4">
      <table className="z-10 w-full border-collapse text-left font-outfit font-medium">
        <thead className="border-2 border-dark-15">
          <tr className="">
            {headers.map((header, index, arr) => (
              <th
                colSpan={arr.length === 1 ? 2 : 0}
                key={index}
                className="border-2 border-dark-15 bg-primary-95 px-[30px] py-[18px]"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-primary-95">
              {row.map((cell, colIndex) => (
                <td
                  key={colIndex}
                  className="border-2 border-dark-15 px-[30px] py-[24px]"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
