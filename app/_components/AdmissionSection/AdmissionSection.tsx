import React from "react";
import SectionHeader from "../SectionHeader";
import AdmissionCard from "./AdmissionCard";

type AdmissionStepType = {
  step: number;
  title: string;
  description: string;
};

const admissionSteps: AdmissionStepType[] = [
  {
    step: 1,
    title: "Inquiry",
    description:
      "Submit an inquiry form through our website or contact our admissions office to express your interest in Little Learners Academy.",
  },
  {
    step: 2,
    title: "School Tour",
    description:
      "Schedule a personalized school tour to explore our campus, meet our staff, and gain insights into our nurturing learning environment.",
  },
  {
    step: 3,
    title: "Application Form",
    description:
      "Complete the application form and provide the required documents, including your child's birth certificate, medical records, and any previous academic records (if applicable).",
  },
  {
    step: 4,
    title: "Parent Interview",
    description:
      "We value parent engagement, and a meeting with our admissions team allows us to understand your child's needs and ensure Little Learners Academy aligns with your family's expectations.",
  },
  {
    step: 5,
    title: "Student Assessment",
    description:
      "For certain age groups, a student assessment may be conducted to understand their developmental progress and ensure the best placement.",
  },
  {
    step: 6,
    title: "Acceptance",
    description:
      "Once the admission process is complete, you will receive an official acceptance letter from Little Learners Academy.",
  },
];

export default function AdmissionSection() {
  return (
    <section className="mx-5 mt-[120px] md:mx-10 lg:mx-20 lg:mt-[200px]">
      <SectionHeader
        sectiontitle="Admission Process"
        subtitle="Process"
        description="Embark on a remarkable educational journey with us! Our Admission and Enrollment process is the gateway to providing your child with an exceptional learning experience at our kindergarten school"
      />
      <section className="mt-20 grid grid-cols-1 gap-x-10 gap-y-0 sm:grid-cols-2 sm:gap-y-[40px] lg:grid-cols-3">
        {admissionSteps.map((item, index) => (
          <AdmissionCard
            key={item.title}
            title={item.title}
            description={item.description}
            step={item.step}
            index={index}
          />
        ))}
      </section>
    </section>
  );
}
