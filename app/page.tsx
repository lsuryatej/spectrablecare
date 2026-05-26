import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { ProblemStatement } from "@/components/sections/ProblemStatement";
import { PersonaCards } from "@/components/sections/PersonaCards";
import { SocialProof } from "@/components/sections/SocialProof";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { FeaturesBento } from "@/components/sections/FeaturesBento";
import { FounderQuote } from "@/components/sections/FounderQuote";
import { CTABanner } from "@/components/sections/CTABanner";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ProblemStatement />
      <PersonaCards />
      <SocialProof />
      <HowItWorks />
      <FeaturesBento />
<FounderQuote />
      <CTABanner />
    </>
  );
}
