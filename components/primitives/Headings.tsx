import { cn } from "@/lib/utils"

export const HeadingOne = ({ className, children }: { className?: string, children: any }) => {
    return <h1 className={cn("text-center font-semibold text-[24px] md:text-[48px] lg:text-[56px] xl:text-[64px]", className)}>
        {children}
    </h1>
}