import Hero from "@/components/hero/Hero";
import TrustSocialProof from "@/components/sections/TrustSocialProof";
import ProblemSection from "@/components/sections/ProblemSection";
import Capabilities from "@/components/sections/Capabilities";
import InteractiveShowcase from "@/components/product/InteractiveShowcase";
import LiveCallInterface from "@/components/product/LiveCallInterface";
import DashboardMockup from "@/components/product/DashboardMockup";
import HowItWorks from "@/components/sections/HowItWorks";
import Comparison from "@/components/sections/Comparison";
import Security from "@/components/sections/Security";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <TrustSocialProof />
      <ProblemSection />
      <Capabilities />
      <InteractiveShowcase />
      <LiveCallInterface />
      <DashboardMockup />
      <HowItWorks />
      <Comparison />
      <Security />
      <Pricing />
      <FAQ />
      <CTASection />
    </div>
  );
}
