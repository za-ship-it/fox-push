import { MenuIcon } from "lucide-react"
import Logo from "../icons/Logo"
import { Navigation } from "./Navigation"


export const Header = () => {

    return <div className="max-w-345 m-auto py-11  2xl:px-0 flex items-center px-10 bg-red-200 justify-between">
        <Logo />
        <Navigation />
        <div className="flex">
            <button>Click</button>
            <div className="block lg:hidden">
                <MenuIcon />
            </div>
        </div>
    </div>
}