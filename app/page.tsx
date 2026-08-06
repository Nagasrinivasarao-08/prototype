import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { ChallengesSection } from "@/components/sections/ChallengesSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { WhyAspire } from "@/components/sections/WhyAspire";
import { ComparisonSection } from "@/components/sections/ComparisonSection";
import { ProductHRMS } from "@/components/sections/ProductHRMS";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { TechCapabilities } from "@/components/sections/TechCapabilities";
import { DeliveryProcess } from "@/components/sections/DeliveryProcess";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { AwardsSection } from "@/components/sections/AwardsSection";
import { InsightsSection } from "@/components/sections/InsightsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="bg-[#FAFAFA] text-slate-900 min-h-screen font-sans selection:bg-slate-900 selection:text-white">
      {/* 1. Split Hero */}
      <Hero />
      
      {/* 2. Certifications & Partner Signals */}
      <TrustBar />
      
      {/* 3. Common Business Challenges */}
      <ChallengesSection />
      
      {/* 4. Core Services */}
      <FeaturesSection />
      
      {/* 5. Featured Portfolio */}
      <PortfolioSection />
      
      {/* 6. Why Aspire */}
      <WhyAspire />
      
      {/* 7. What Makes Us Different (Comparison Table) */}
      <ComparisonSection />
      
      {/* 8. ASC HRMS Product Solution */}
      <ProductHRMS />
      
      {/* 9. Industries */}
      <IndustriesSection />
      
      {/* Technology Capabilities & Delivery Methodology */}
      <TechCapabilities />
      <DeliveryProcess />
      
      {/* 10. Verbatim Client Testimonials */}
      <TestimonialsSection />
      
      {/* Recognition, Insights, FAQs, Contact */}
      <AwardsSection />
      <InsightsSection />
      <FAQSection />
      <ContactSection />
    </div>
  );
}
