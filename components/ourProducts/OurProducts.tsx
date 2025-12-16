'use client'
import { cn } from "@/lib/utils"
import { HeadingOne } from "../primitives/Headings"
import { Container } from "../container"
import { Button } from "../ui/button"
import { useState } from "react"

type OurProductsType = {
    heading?: string,
    className?: string,
    image: string,
    content: {
        heading: string,
        description: string
        type: string
    }[]
}

export const OurProducts = ({ heading, content, image, className }: OurProductsType) => {
    const [type, setType] = useState(content[0].type)
    const data = content.find(i => i.type == type)
    return <div className={cn("bg-[#F7F4F0] w-full py-6 md:py-20 xl:py-32", className)}>
        <Container className="flex flex-col justify-center items-center m-auto tracking-[0%]">
            <HeadingOne className="max-w-225 mb-6 md:mb-8">{heading}</HeadingOne>
            <div className="flex mb-6 md:mb-14 gap-3">
                {
                    content.map((item, index) => {
                        return <Button key={index} onClick={() => setType(item.type)} variant={'outline'} className={cn("!rounded-[99px] border-black text-black h-12", item.type == type && "bg-blue-500 hover:bg-blue-500 text-white border-transparent hover:text-white")}>{item.type}</Button>
                    })
                }
            </div>
            <div className="grid w-full grid-cols-1 gap-3 md:gap-6">
                <div className={cn("bg-no-repeat p-10 lg:p-12 lg:h-[464px] rounded-[24px] bg-cover md:bg-none bg-bottom lg:bg-center text-white")} style={{
                    backgroundImage: `url('/images/productBg.png')`,
                }}>
                    <h2 className="text-[24px] md:text-[36px] font-semibold lg:text-[48px] mb-1.5 md:mb-2 lg:mb-2.5">{data?.heading}</h2>
                    <p className="text-[12px] md:text-[16px] font-medium lg:text-[20px] max-w-175">{data?.description}</p>
                    <Button variant={'outline'} className="mt-4 md:mt-12 h-14 md:bg-transparent bg-white md:text-white text-black">Get in touch</Button>
                </div>
            </div>
        </Container>
    </div>
}