import Image from "next/image";
import { Container } from "../container";
import clsx from "clsx";
import { HeadingOne } from "../primitives/Headings";
import { Button } from "../ui/button";

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
        <Container className="w-full py-6 md:py-30 overflow-hidden">
            <HeadingOne className="text-white w-full mb-14">
                Connected growth,
                <br /> powered by insight.
            </HeadingOne>
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
            <div className="flex justify-center items-center mt-6 md:mt-10">
                <Button className="bg-blue-500 h-14 text-[20px] hover:bg-blue-500 hover:text-white cursor-pointer">See all case studies</Button>
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