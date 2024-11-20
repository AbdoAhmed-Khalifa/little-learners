import PageCardsSection from "./_components/pageCardComponents/PageCardsSection";

import TestimoinalsSection from "./_components/TestimonialsSectionComponents/TestimoinalsSection";
import FaqSection from "./_components/faqComponents/FaqSection";
import HeroSection from "./_components/HeroComponents/HeroSection";
import BenefitsSection from "./_components/BenefitSectionComponents/BenefitsSection";
import StudentsLife from "./student-life/page";

export default function Home() {
  return (
    <>
      <HeroSection />
      <BenefitsSection />
      <TestimoinalsSection />
      <FaqSection />
      <PageCardsSection />
      <StudentsLife />
    </>
  );
}
