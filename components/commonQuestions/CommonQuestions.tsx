import { cn } from "@/lib/utils"
import { HeadingOne } from "../primitives/Headings"
import { Container } from "../container"
import Image from "next/image"

type CommonQuestionsType = {
    heading?: string,
    className?: string,
}

export const CommonQuestions = ({ heading, className }: CommonQuestionsType) => {
    return <div className={cn("bg-black w-full py-3 md:py-4 xl:py-5", className)}>
        <Container className="flex flex-col justify-center items-center m-auto tracking-[0%]">
            <HeadingOne className="max-w-220 mb-6 md:mb-16 tracking-normal text-white">{heading}</HeadingOne>
            <div className="w-full flex justify-center">
                <div className="relative pb-56">

                    <div className="absolute inset-x-0 -top-6 h-24 bg-linear-to-b from-indigo-400/60 to-transparent blur-2xl"></div>

                    <div className="relative flex w-180 min-h-18
                rounded-2xl bg-black px-5 py-4 w-[307px] md:w-[590px]
                lg:w-[708px] xl:w-[918px] 2xl:w-[1100px]
                shadow-[0_10px_30px_rgba(0,0,0,0.6),0_0_180px_rgba(99,102,241,0.45)]
                ring-1 ring-white/5">

                        <textarea
                            rows={4}
                            placeholder="What do you want to ask Foxpush?"
                            className="flex-1 bg-transparent resize-none outline-none text-white text-lg
               placeholder-white/60 pr-4"
                        ></textarea>

                        <button
                            className="grid place-items-center size-11 rounded-full
               bg-white/10 text-white
               transition hover:bg-white/20 hover:-translate-y-0.5"
                        >
                            <Image src='/images/textarea_arrow.png' width={10} height={10} alt='arrow' />
                        </button>
                    </div>

                    <div className="absolute left-1/2 top-full w-[85%] h-36 -translate-x-1/2
                bg-[radial-gradient(ellipse_at_top,rgba(45,62,255,0.45),transparent_70%)]
                blur-3xl"></div>

                </div>
            </div>
        </Container>
    </div>
}