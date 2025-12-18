import CaseStudies from "@/components/caseStudies/CaseStudies";
import { CommonQuestions } from "@/components/commonQuestions/CommonQuestions";
import { HeroSection } from "@/components/heroSection/HeroSection";
import { OurProducts } from "@/components/ourProducts/OurProducts";
import { ProductHeroSection } from "@/components/productHeroSection/ProductHeroSection";
import { ServicesSection } from "@/components/servicesSection/ServicesSection";
import { TwoCardsWithHeading } from "@/components/TwoCardsWithHeading/TwoCardsWithHeading";
import Image from "next/image";

export default function DspProducts() {
  return (
    <div className="w-full mt-[136px]">
      <ProductHeroSection heading="FoxPush DSP"
        description="Run smarter campaigns across every channel in one simple platform." />
    </div>
  );
}
