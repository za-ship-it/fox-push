"use client"
import { useState } from "react"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { ArrowUpRight, ChevronsUpDown, MenuIcon, Minus, Plus, X } from "lucide-react"
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import Logo from "../icons/Logo"
import Link from "next/link"
import { FacebookIcon, InstagramIcon, LinkdinIcon, TwitterIcon } from "../icons/SocialMedia"
import { NAVIGATION_DATA, NavigationDataType } from "./NAVIGATION_DATA"
import clsx from "clsx"

export const MobileNavigation = () => {
    return <div className="block lg:hidden">
        <Drawer direction="left">
            <DrawerTrigger className="cursor-pointer flex justify-center items-center"> <MenuIcon color="white" size={40} /></DrawerTrigger>
            <DrawerContent className="bg-black border-none">
                <DrawerHeader className="py-6 lg:py-10 px-6">
                    <div className="flex W justify-between">
                        <DrawerTitle className="hidden"></DrawerTitle>
                        <Logo />
                        <DrawerClose className="cursor-pointer">
                            <X color="white" className="size-6" />
                        </DrawerClose>
                    </div>
                </DrawerHeader>
                <div className="flex flex-col gap-8">
                    {
                        NAVIGATION_DATA.map(item => {
                            return <MenuItem title={item.title} items={item.items} key={item.title} href={item.href} />
                        })
                    }
                </div>

                <DrawerFooter className="px-6 pb-10">
                    <div className="flex flex-col-reverse md:flex-row justify-between items-start md:items-center md:gap-0 gap-8">
                        <ul className="flex gap-6.5">
                            <li>
                                <Link href={"/"}>
                                    <InstagramIcon />
                                </Link>
                            </li>
                            <li>
                                <Link href={"/"}>
                                    <FacebookIcon />
                                </Link>
                            </li>

                            <li>
                                <Link href={"/"}>
                                    <LinkdinIcon />
                                </Link>
                            </li>
                            <li>
                                <Link href={"/"}>
                                    <TwitterIcon />
                                </Link>
                            </li>

                        </ul>
                        <div className="flex gap-2 items-center justify-center">
                            <h2 className="text-white text-[32px] font-semibold">Get in touch</h2>
                            <ArrowUpRight color="white" className="size-10" />
                        </div>
                    </div>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    </div>
}

export function MenuItem({ title, items, href }: NavigationDataType[number]) {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <Collapsible
            open={isOpen}
            onOpenChange={setIsOpen}
            className="flex flex-col px-4"
        >
            <div className="flex items-center justify-between gap-4">
                {
                    !href ? <CollapsibleTrigger asChild className="cursor-pointer">

                        <button className="flex justify-center items-center gap-2">
                            <p className="text-white text-[32px] font-semibold gap-2 items-center justify-center">{title}</p>
                            {
                                !isOpen ? <Plus color="white" size={40} /> : <Minus color="white" size={40} />
                            }

                        </button>
                    </CollapsibleTrigger> : <Link href={href} className="text-white text-[32px] font-semibold gap-2 items-center justify-center">{title}
                    </Link>

                }

            </div>
            <div className={clsx(isOpen && "mt-4 flex flex-col gap-5")}>
                {
                    items?.map(item => {
                        return <CollapsibleContent key={item.title}>
                            <Link href={item.href} className="text-[#DCDCDC] flex gap-2">{item.description} <ArrowUpRight color="#DCDCDC" size={20} /></Link>

                        </CollapsibleContent>
                    })
                }
            </div>

        </Collapsible>
    )
}
