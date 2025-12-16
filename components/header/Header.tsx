import { MenuIcon } from "lucide-react"
import Logo from "../icons/Logo"
import { Navigation } from "./Navigation"
import { MobileNavigation } from "./MobileNavigation"
import { Button } from "../ui/button"


export const Header = () => {
    return <header className="max-w-345 m-auto py-5 lg:py-11  2xl:px-0 flex items-center px-6 lg:px-10 justify-between">
        <Logo />
        <Navigation />
        <div className="flex justify-center items-center gap-2.5">
            <Button variant={"outline"}>Get in touch</Button>
            <MobileNavigation />
        </div>
    </header>
}