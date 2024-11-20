import React from "react";
import PageHeader from "../_components/PageHeader";
import ExtraActivitiesSection from "../_components/ExtraActivitiesSectionComponents/ExtraActivitiesSection";
import StudentSupportSection from "../_components/StudentSupportSectionComponents/StudentSupportSection";

export default function StudentsLife() {
  return (
    <>
      <PageHeader
        title="Embracing Learning with Discovery and Joy"
        content="Welcome to our Student Life page, where the magic of childhood comes alive through the enriching experiences and adventures that our students embark on each day. At our kindergarten school, we believe that learning goes beyond textbooks, and we strive to create a holistic and engaging environment that nurtures every aspect of a child's development."
        page="Enriching Student Life"
      />
      <ExtraActivitiesSection />
      <StudentSupportSection />
    </>
  );
}
