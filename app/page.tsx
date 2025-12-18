import CaseStudies from "@/components/caseStudies/CaseStudies";
import { CommonQuestions } from "@/components/commonQuestions/CommonQuestions";
import { HeroSection } from "@/components/heroSection/HeroSection";
import { OurProducts } from "@/components/ourProducts/OurProducts";
import { ServicesSection } from "@/components/servicesSection/ServicesSection";
import { TwoCardsWithHeading } from "@/components/TwoCardsWithHeading/TwoCardsWithHeading";
import Image from "next/image";

const PRODUCT_CARD_DATA = [
  {
    type: "DSP",
    heading: "Demand-Side Platform(DSP)",
    description: "A performance-driven platform connecting advertisers to premium Arabic audiences, built for clarity, precision, and measurable growth."
  },
  {
    type: "SSP",
    heading: "Demand-Side Platform(SSP)",
    description: "A performance-driven platform connecting advertisers to premium Arabic audiences, built for clarity, precision, and measurable growth."
  },
  {
    type: "DMP",
    heading: "Demand-Side Platform(DMP)",
    description: "A performance-driven platform connecting advertisers to premium Arabic audiences, built for clarity, precision, and measurable growth."
  },
  {
    type: "App Performance",
    heading: "Demand-Side Platform(App Performance)",
    description: "A performance-driven platform connecting advertisers to premium Arabic audiences, built for clarity, precision, and measurable growth."
  },
]

export default function Home() {
  return (
    <>
      <HeroSection />
      <TwoCardsWithHeading heading="The smarter way to connect advertisers and publishers" cards={[
        {
          heading: "For Big Brands",
          description: "Scale your campaigns, connect with millions, and drive measurable impact worldwide.",
          image: '/images/homepage/towCardsWithHeading/one.png'
        },
        {
          heading: "For SMEs",
          description: "Get the tools to grow your business, reach the right people, and make every ad count — without complexity.",
          image: '/images/homepage/towCardsWithHeading/two.png'
        }
      ]} />
      <OurProducts image="/product" content={PRODUCT_CARD_DATA} heading="Our Products" className="!pt-0" />
      <ServicesSection heading="Powerful enough to drive results, precise enough to care" cards={[
        {
          heading: "Tools and Technology",
          description: "Smart, easy-to-use platforms that connect brands and publishers from running campaigns to managing ad space all in real time.",
          image: '/images/homepage/services-section/vector_line.png',
          className: 'bg-[position:center_bottom_5%]',
        },
        {
          heading: "Strategic Consulting",
          description: "Expert guidance to help you plan smarter, spend better, and grow faster — whether you’re a brand or a media owner.",
          image: '/images/homepage/services-section/three_targets.png',
          className: 'bg-[position:center_bottom_5%]',
        },
        {
          heading: "Organic Performance",
          description: "Boost your visibility without paid ads — through better search rankings, optimized content, and stronger engagement.",
          image: '/images/homepage/services-section/three_boxes.png',
          className: 'bg-[position:left_10%_bottom_5%]',
        },
        {
          heading: "Strategy and Planning",
          description: "Build campaigns with a clear roadmap — knowing who to reach, where to reach them, and how to make every impression count.",
          image: '/images/homepage/services-section/vector_line.png',
          className: 'bg-[position:center_bottom_5%]',
        },
        {
          heading: "Media",
          description: "Access premium placements across trusted publishers and channels to ensure your brand message reaches the right audience.",
          image: '/images/homepage/services-section/three_targets.png',
          className: 'bg-[position:center_bottom_5%]',
        },
        {
          heading: "Analytics",
          description: "Real-time insights that show what’s working, what’s not, and how to keep improving results — for brands and publishers alike.",
          image: '/images/homepage/services-section/three_boxes.png',
          className: 'bg-[position:left_10%_bottom_5%]',
        }
      ]} />
      <CaseStudies />
      <CommonQuestions heading="" />
      <div className="relative w-[98%] m-auto h-9.5 md:h-19.5 lg:h-26 xl:h-32.5 2xl:h-48.75 bg-black">
        <Image
          src="/images/footer.png"
          alt="Footer"
          fill
          className="object-fill"
          priority
        />
      </div>
    </>
  );
}
