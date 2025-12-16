import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { FacebookIcon, InstagramIcon, LinkdinIcon, TwitterIcon } from "../icons/SocialMedia"


const FooterProducts = {
    title: 'Products',
    links: [{ text: 'DSP', path: '/' }, { text: 'DMP', path: '/' }, { text: 'SSP', path: '/' }, { text: 'App performance', path: '/' }]
}

const FooterLegal = {
    title: 'Legal',
    links: [{ text: 'Privacy Policy', path: '/' }, { text: 'Cookie Policy', path: '/' }, { text: 'Terms of Use', path: '/' }, { text: 'GDPR', path: '/' }]
}

const FooterIndustries = {
    title: 'Industries',
    links: [{ text: 'E-commerce', path: '/' }, { text: 'Automotive', path: '/' }, { text: 'FMCG', path: '/' }, { text: 'Financial Services', path: '/' }, { text: 'Healthcare and Pharmaceuticals', path: '/' }, { text: 'App Based Startups', path: '/' }, { text: 'Telecommunications', path: '/' }, { text: 'Real Estate', path: '/' }, { text: 'Travel, Tourism and Transportation', path: '/' }, { text: 'Public Sector and Non-Profit', path: '/' }]
}

const FooterSolutions = {
    title: 'Solutions',
    links: [{ text: 'Strategy and Planning', path: '/' }, { text: 'Strategic Consulting', path: '/' }, { text: 'Organic Performance', path: '/' }, { text: 'Tools and Technology', path: '/' }, { text: 'Media', path: '/' }, { text: 'Analytics', path: '/' }]
}

const FooterCompany = {
    title: 'Company',
    links: [{ text: 'About us', path: '/' }, { text: 'Case studies', path: '/' }, { text: 'Insights', path: '/' }, { text: 'Get in Touch', path: '/' }]
}

export const Footer = () => {
    return (
        <>
            <footer
                className="bg-[url('/images/footerBackground.png')] bg-no-repeat bg-cover bg-center pt-6 lg:pt-28 px-4 lg:px-24 text-white"
            >
                <div className="grid grid-cols-1 lg:grid-cols-[30%_70%] gap-2">
                    <p className="text-[24px] font-semibold max-w-89.25">Connecting you with the right media, the right partners, and the right audience.</p>
                    <div className="hidden lg:grid-cols-4  md:grid-cols-2 grid-cols-1 gap-auto md:grid">
                        <div>
                            <FooterItem item={FooterProducts} />
                            <FooterItem item={FooterLegal} className="mt-16" />
                        </div>
                        <FooterItem item={FooterIndustries} />
                        <FooterItem item={FooterSolutions} />
                        <div>
                            <FooterItem item={FooterCompany} />
                            <div className="flex mt-8 gap-3">
                                <Link href={"/"}>
                                    <InstagramIcon />
                                </Link>
                                <Link href={"/"}>
                                    <FacebookIcon />
                                </Link>
                                <Link href={"/"}>
                                    <LinkdinIcon />
                                </Link>
                                <Link href={"/"}>
                                    <TwitterIcon />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="grid gap-y-6 grid-cols-2 gap-auto md:hidden py-6">
                        <FooterItem item={FooterSolutions} />
                        <div>
                            <FooterItem item={FooterCompany} />
                            <div className="flex mt-8 gap-3">
                                <Link href={"/"}>
                                    <InstagramIcon />
                                </Link>
                                <Link href={"/"}>
                                    <FacebookIcon />
                                </Link>
                                <Link href={"/"}>
                                    <LinkdinIcon />
                                </Link>
                                <Link href={"/"}>
                                    <TwitterIcon />
                                </Link>
                            </div>
                        </div>
                        <FooterItem item={FooterIndustries} />
                        <FooterItem item={FooterProducts} />
                        <FooterItem item={FooterLegal} />


                    </div>
                </div>
                <div className="flex gap-2  justify-between  md:mt-14 mt-1 flex-wrap-reverse lg:flex-nowrap">
                    <div className="flex-1 xl:mb-10">
                        <div className="relative h-25 mb-4 md:mb-0 md:h-44.75 flex flex-col justify-end items-end  w-100 lg:w-125 xl:w-200  shrink-0">
                            <Image
                                src="/images/footerLogo.svg"
                                alt="logo"
                                fill
                                priority
                            />
                        </div>
                    </div>
                    <div className="flex flex-col justify-end items-end md:mb-10">
                        <p className="text-[16px]  font-medium lg:ml-4">Copyright ©2025 FoxPush. All Rights Reserved</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

const FooterItem = ({ item, className }: { item: any, className?: String }) => {
    return <div className={cn(className, 'flex flex-col gap-2 md:gap-4.5')}>
        <p className="text-[18px] font-medium">{item.title}</p>
        <div className="flex flex-col gap-2 md:gap-3">
            {item.links.map((link: { text: String, path: String }, index: number) => <Link href={'/'} className={cn(
                "text-[16px] font-medium",
            )} key={link.text + index.toString()}>{link.text}</Link>)}
        </div>
    </div>
}
