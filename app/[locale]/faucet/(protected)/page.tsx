import FaucetSection from "@/components/faucetdialog"

export default function faucetPage() {
    return(
    <div
        className="flex flex-col bg-cover bg-center"
        style={{
            backgroundImage: "url('/bgs/Patterns.svg'),url('/bgs/intro.jpg')",
        }}
    >
        <span className={`flex justify-center text-balance bg-gradient-to-b from-[#2BADFD] to-[#1570EF] bg-clip-text pb-1.5 font-sans text-4xl font-semibold text-transparent sm:text-5xl xl:text-6xl xl:leading-[72px] mt-8 sm:mt-10 md:mt-12 xl:mt-14`}>
            GFE Faucet
        </span>
        <div className={`flex justify-center items-center w-full bg-white pt-14 pb-8 mb-[5%] shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10 mb-12 sm:mb-16 md:mb-20 lg:mb-24 xl:mb-28 mt-5 md:mt-7 xl:mt-9`}>
            <FaucetSection />
        </div>
    </div>
    )
}