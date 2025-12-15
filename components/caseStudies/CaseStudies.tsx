import Image from "next/image";
import { Container } from "../container";
import clsx from "clsx";

const sectionData = {
    title: "The smarter way to connect advertisers and publishers",
    cards: [
        {
            heading: "For Big Brands",
            description:
                "Scale you campaigns, connect with millions, and drive measurable impact worldwide.",
            backgroundImgUrl: "/images/example1.hpeg",
        },
        {
            heading: "For SMEs",
            description:
                "Get the tools to grow your business, reach the right people, and make every ad count -without complexity.",
            backgroundImgUrl: "/images/example1.hpeg",
        },
    ],
};

const poweredSectionData = [
    {
        imgUrl: "/images/homepage/case-study/one.png",
        btnOne: "Insights",
        btnTwo: "Automotive",
        cardHeading: "Driving qualified leads for a global automotive brand",
    },
    {
        imgUrl: "/images/homepage/case-study/two.png",
        btnOne: "Insights",
        btnTwo: "Automotive",
        cardHeading: "Driving qualified leads for a global automotive brand",
    },

];

export default function CaseStudies() {
    return (
        <Container className="w-full py-6W md:py-30 overflow-hidden">
            <h2 className="text-white w-full text-center font-semibold text-[24px] md:text-[48px] lg:text-[56px] xl:text-[64px] mb-14">
                Connected growth,
                <br /> powered by insight.
            </h2>
            <div className="flex justify-between gap-6">
                {poweredSectionData.map((item, index) => (
                    <CardItem item={item} key={index} />
                ))}
                <CardItem className="md:block hidden" item={{
                    imgUrl: "/images/homepage/case-study/three.png",
                    btnOne: "Insights",
                    btnTwo: "Automotive",
                    cardHeading: "Driving qualified leads for a global automotive brand",
                }} />
            </div>
        </Container>
    );
}

const CardItem = ({ item, className }: { item: any, className?: string }) => {
    return <div className={clsx(className)}>
        <div className={`relative w-full`}>
            <Image
                src={item.imgUrl}
                alt={item.cardHeading}
                width={425}
                height={565}
                className=" bg-black object-fill"
                sizes=""
            />
        </div>

        <div className="flex mt-3 md:mt-8 mb-2 md:mb-3 gap-2">
            <button className="rounded-xl h-8 px-5 border border-white text-white">
                {item.btnOne}
            </button>
            <button className="rounded-xl h-8 px-5 border border-white text-white">
                {item.btnTwo}
            </button>
        </div>

        <h4 className="text-white text-[12px] md:text-[24px] lg:text-[28px] xl:text-[32px]">{item.cardHeading}</h4>
    </div>
}