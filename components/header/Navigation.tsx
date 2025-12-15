"use client"

import * as React from "react"
import Link from "next/link"
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react"


import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { NAVIGATION_DATA } from "./NAVIGATION_DATA"
import Image from "next/image"



export function Navigation() {
    return (
        <div className="flex-1  justify-center items-center hidden lg:flex">
            <NavigationMenu viewport={false}>
                <NavigationMenuList className="flex-wrap">
                    {
                        NAVIGATION_DATA.map(({ title, items, href }) => {
                            return <NavigationMenuItem key={title}>
                                {
                                    href ? <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                        <Link href={href}>{title}</Link>
                                    </NavigationMenuLink> : <NavigationMenuTrigger>{title}</NavigationMenuTrigger>
                                }
                                {
                                    !!items?.length && <NavigationMenuContent className="rounded-3xl! p-0 m-0">
                                        <div className="bg-card-border-gradient p-px min-w-94" >
                                            <ul className="bg-black p-3">
                                                {
                                                    items.map((navItem) => {
                                                        return <li key={navItem.title} className="">
                                                            <Link href={navItem.href ?? ""} className="flex items-center gap-3 py-3">
                                                                <Image alt={navItem.title} width={48} height={48} src={`/images/header/products/${navItem.icon}`} />
                                                                <div>
                                                                    <h2 className="text-white mb-1 text-base">{navItem?.title}</h2>
                                                                    <p className="text-white text-sm">{navItem?.description}</p>
                                                                </div>
                                                            </Link>
                                                        </li>
                                                    })
                                                }
                                            </ul>
                                        </div>

                                    </NavigationMenuContent>
                                }
                            </NavigationMenuItem>
                        })
                    }
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    )
}
