import FaucetSection from "@/components/faucetdialog"
import Image from "next/image"
import leftPic from "@/public/bgs/left.svg"
import rightPic from "@/public/bgs/right.svg"

export default function faucetPage() {
    return(
    <div
        className="relative flex flex-col bg-cover bg-center justify-center items-center w-full h-full]"
        style={{
            backgroundImage: "url('/bgs/Patterns.svg'),url('/bgs/intro.jpg')",
        }}
        >
        <span className="flex justify-center text-balance bg-gradient-to-b from-[#2BADFD] to-[#1570EF] bg-clip-text pb-1.5 font-sans text-4xl font-semibold text-transparent sm:text-5xl xl:text-6xl xl:leading-[72px] sm:mt-10 md:mt-12 lg:mt-14 xl:mt-16">
            GFE Faucet
        </span>
        <div className="flex justify-center items-center w-full bg-white px-4 pt-10 pb-8 mb-[5%] shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10 mb-12 sm:mb-16 md:mb-20 lg:mb-24 xl:mb-28 mt-6 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-14">
            <FaucetSection />
        </div>
        <div className="absolute -bottom-6 left-0 z-0 flex w-full md:-bottom-10 lg:-bottom-16">
            <Image src={rightPic} alt="bg" className="w-1/2" />
            <Image src={leftPic} alt="bg" className="w-1/2" />
        </div>
    </div>
    )
}