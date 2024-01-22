import Image from "next/image"

function PartnersSection() {
  return (
    <div className="bg-muted py-[100px]">
      <div className="container items-center gap-6 flex justify-center flex-col md:flex-row">
        <h1 className="bg-gradient-to-b from-[#2BADFD] to-[#1570EF] bg-clip-text text-transparent  mb-4 text-center font-goldman text-3xl capitalize lg:mb-0">
          Partners
        </h1>
        <div className="md:ml-20 flex flex-wrap gap-3 sm:grid-cols-2 md:grid-cols-5 justify-center items-center">
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
