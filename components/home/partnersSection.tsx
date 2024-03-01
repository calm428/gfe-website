import Image from "next/image"

function PartnersSection() {
  return (
    <div className="bg-muted py-[100px]">
      <div className="container flex flex-col items-center justify-center gap-6 md:flex-row">
        <h3 className="mb-4 bg-gradient-to-b from-[#2BADFD] to-[#1570EF] bg-clip-text  text-center font-goldman text-3xl capitalize text-transparent lg:mb-0">
          Partners
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-3 sm:grid-cols-2 md:ml-20 md:grid-cols-5">
          {/* company logos */}
          <div className="flex items-center justify-center rounded-md bg-background px-6 py-4">
            <Image
              src={"/logos/logo2.svg"}
              width={200}
              height={100}
              alt="company"
            />
          </div>
          <div className="flex items-center justify-center rounded-md bg-background px-6 py-4">
            <Image
              src={"/logos/logo3.svg"}
              width={200}
              height={100}
              alt="company"
            />
          </div>
          <div className="flex items-center justify-center rounded-md bg-background px-6 py-4">
            <Image
              src={"/logos/logo4.svg"}
              width={100}
              height={100}
              alt="company"
            />
          </div>
          <div className="flex items-center justify-center rounded-md bg-background px-6 py-4 ">
            <Image
              src={"/logos/logo1.svg"}
              width={120}
              height={100}
              alt="company"
            />
          </div>

          <div className="flex items-center justify-center rounded-md bg-background px-6 py-4">
            <Image
              src={"/logos/logo5.svg"}
              width={100}
              height={100}
              alt="company"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PartnersSection
