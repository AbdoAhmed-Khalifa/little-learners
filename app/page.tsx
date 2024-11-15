import PageCardsSection from "./_components/pageCardComponents/PageCardsSection";

import BenefitsSection from "./_components/BenefitsSection";
import TestimoinalsSection from "./_components/TestimoinalsSection";
import FaqSection from "./_components/faqComponents/FaqSection";

export default function Home() {
  return (
    <div>
      Home
      <FaqSection />
      <PageCardsSection />
      <BenefitsSection />
      <TestimoinalsSection />
    </div>
  );
}
