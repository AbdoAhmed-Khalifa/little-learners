import PageCardsSection from "./_components/pageCardComponents/PageCardsSection";

import BenefitsSection from "./_components/BenefitsSection";
import TestimoinalsSection from "./_components/TestimoinalsSection";
import FaqSection from "./_components/faqComponents/FaqSection";
import HeroSection from "./_components/HeroComponents/HeroSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <BenefitsSection />
      <TestimoinalsSection />
      <FaqSection />
      <PageCardsSection />
    </>
  );
}
