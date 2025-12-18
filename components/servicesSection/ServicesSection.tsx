import { cn } from "@/lib/utils"
import { HeadingOne } from "../primitives/Headings"
import { Container } from "../container"

type ServicesSectionType = {
    heading?: string,
    className?: string,
    cards: {
        heading: string,
        description: string,
        image: string,
        className: string
    }[]
}

export const ServicesSection = ({ heading, cards, className }: ServicesSectionType) => {
    return <div className={cn("bg-[#F7F4F0] w-full py-3 md:py-4 xl:py-5", className)}>
        <Container className="flex flex-col justify-center items-center m-auto tracking-[0%]">
            <HeadingOne className="max-w-220 mb-6 md:mb-16 tracking-normal">{heading}</HeadingOne>
            <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-6">
                {
                    cards.map((item, index) => {
                        return <div key={index} className={cn("bg-no-repeat p-10 lg:p-12 rounded-[24px] h-101.75 md:h-101.75 lg:h-124 xl:h-124  text-white bg-black", item.className)} style={{
                            backgroundImage: `url(${item.image})`,
                        }}>
                            <h2 className="text-[24px] md:text-[36px] font-semibold lg:text-[48px] mb-1.5 md:mb-2 lg:mb-2.5">{item.heading}</h2>
                            <p className="text-[12px] md:text-[16px] font-medium lg:text-[20px] max-w-85.25">{item.description}</p>


                        </div>
                    })
                }
            </div>
        </Container>
    </div>
}