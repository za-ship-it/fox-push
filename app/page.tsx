import CaseStudies from "@/components/caseStudies/CaseStudies";
import { OurProducts } from "@/components/ourProducts/OurProducts";
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
      <CaseStudies />
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
