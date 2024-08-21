import FaucetSection from "@/components/faucetdialog"

export default function faucetPage() {
    return(
    <div
        className="relative flex flex-col bg-cover bg-center justify-center items-center w-full h-full]"
        style={{
            backgroundImage: "url('/bgs/Patterns.svg'),url('/bgs/intro.jpg')",
        }}
        >
        <span className="flex justify-center mt-8 text-balance bg-gradient-to-b from-[#2BADFD] to-[#1570EF] bg-clip-text pb-1.5 font-sans text-4xl font-semibold text-transparent sm:text-5xl xl:text-6xl xl:leading-[72px]">
            GFE Faucet
        </span>
        <div className="relative flex justify-center items-center bg-white px-4 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10 ">
            <FaucetSection />
        </div>
    </div>
    )
}