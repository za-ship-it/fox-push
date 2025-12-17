import { Button } from "../ui/button"
import Image from "next/image"

export const clients = [
    { src: "/images/clients/bank.png", alt: "bank", width: 106.92, height: 45.26 },
    { src: "/images/clients/emaar.png", alt: "emaar", width: 105.67, height: 21.75 },
    { src: "/images/clients/samsung.png", alt: "samsung", width: 129.46, height: 20.66 },
    { src: "/images/clients/loreal.png", alt: "loreal", width: 131.66, height: 24.77 },
    { src: "/images/clients/hyundai.png", alt: "hyundai", width: 136.41, height: 21 },
    { src: "/images/clients/citibank.png", alt: "citibank", width: 114.74, height: 31.13 },
    { src: "/images/clients/meraas.png", alt: "meraas", width: 137.6, height: 36.14 },
    { src: "/images/clients/benz.png", alt: "benz", width: 180.62, height: 31.89 },
    { src: "/images/clients/amazon.png", alt: "amazon", width: 106.59, height: 33.41 },
];

export const HeroSection = () => {
    return <div className="w-full">
        <div className="lg:h-164.75 md:h-88.5 h-100 bg-black bg-[url('/images/heroSection.png')] bg-no-repeat bg-top">
            <div className="flex flex-col justify-end items-center h-full">
                <Button className="bg-white text-black font-medium text-xl hover:bg-white hover:text-black cursor-pointer mb-6 h-14 w-40">Get in touch</Button>
            </div>
        </div>
        <div className="flex flex-col justify-center items-center shadow-[0_-32px_30px_-10px_rgba(0,0,0,0.95)]">
            <p className="text-white sm:text-[14px] md:text-[12px] lg:text-[20px] font-medium 2xl:pt-36 xl:pt-20 lg:pt-12 md:pt-10 sm:pt-10">Trusted by more than50,000+ companies </p>
            <div className="overflow-x-hidden mt-12 md:pb-20 pb-10">
                <div className="animate-marquee flex gap-14">
                    {clients.map((client) =>
                        <Image
                            key={client.src}
                            src={client.src}
                            alt={client.alt}
                            width={client.width}
                            height={client.height}
                            className="object-contain"
                        />
                    )}
                </div>
            </div>
        </div>
    </div>
}