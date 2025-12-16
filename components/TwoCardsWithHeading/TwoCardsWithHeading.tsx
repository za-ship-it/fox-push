import { cn } from "@/lib/utils"
import { HeadingOne } from "../primitives/Headings"
import { Container } from "../container"

type TwoCardsWithHeadingType = {
    heading?: string,
    className?: string,
    cards: {
        heading: string,
        description: string,
        image: string
    }[]
}

export const TwoCardsWithHeading = ({ heading, cards, className }: TwoCardsWithHeadingType) => {
    return <div className={cn("bg-[#F7F4F0] w-full py-6 md:py-20 xl:py-30", className)}>
        <Container className="flex flex-col justify-center items-center m-auto tracking-[0%]">
            <HeadingOne className="max-w-225 mb-6 md:mb-16">{heading}</HeadingOne>
            <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
                {
                    cards.map((item, index) => {
                        return <div key={index} className={cn("bg-no-repeat p-10 lg:p-12 rounded-[24px] h-85.75 md:h-73 lg:h-87 xl:h-109 bg-size-[50%,cover] bg-bottom-right text-white")} style={{
                            backgroundImage: `url(${item.image}), url('/images/homepage/towCardsWithHeading/bg.png')`,
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