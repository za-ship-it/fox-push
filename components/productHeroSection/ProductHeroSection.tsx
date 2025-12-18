'use client'
import { cn } from "@/lib/utils"
import { HeadingOne } from "../primitives/Headings"
import { Container } from "../container"
import { Button } from "../ui/button"
import { useState } from "react"

type ProductHeroSectionType = {
    heading: string,
    description: string
}

export const ProductHeroSection = ({ heading, description }: ProductHeroSectionType) => {
    return <div className="grid w-full grid-cols-1 gap-3 md:gap-6">
        <div className={cn("bg-no-repeat p-10 lg:p-12 lg:h-164.75 md:h-88.5 h-100 bg-cover md:bg-none bg-bottom lg:bg-center text-white")} style={{
            backgroundImage: `url('/images/productBg.png')`,
        }}>
            <Container className="flex flex-col justify-center  m-auto tracking-[0%]" >
                <div>
                    <h2 className="text-[48px] md:text-[64px] font-semibold lg:text-[80px] mb-2 md:mb-4 lg:mb-6">{heading}</h2>
                    <p className="text-[12px] md:text-[16px] lg:text-[20px] max-w-175">{description}</p>
                    <Button variant={'outline'} className="mt-4 md:mt-12 h-14 md:bg-transparent bg-white md:text-white text-black">Get in touch</Button>
                </div>
            </Container>
        </div>
    </div>
}