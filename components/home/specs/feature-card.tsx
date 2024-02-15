import Image from "next/image"
import Link from "next/link"
import { ArrowRightIcon } from "@radix-ui/react-icons"

interface Props {
  icon: string
  title: string
  desc: string
  link: string
}
function FeatureCard({ icon, title, desc, link }: Props) {
  return (
    <div className="parent mx-auto">
      <div className="card">
        <div className="logo">
          <span className="circle circle1"></span>
          <span className="circle circle2"></span>
          <span className="circle circle3"></span>
          <span className="circle circle4"></span>
          <span className="circle circle5">
            <Image src={icon} width={30} height={30} alt={title} />
          </span>
        </div>
        <div className="glass"></div>
        <div className="content">
          <span className="title">{title}</span>
          <span className="text">{desc}</span>
        </div>
        <div className="bottom">
          <div className="view-more">
            <button className="view-more-button">Read more</button>
            <ArrowRightIcon className="svg" />
          </div>
        </div>
      </div>
    </div>
    // <div
    //   className={` ${
    //     title === "Staking reward"
    //       ? " bg-gradient-to-bl from-[#2BADFD] to-[#1570EF] !text-muted"
    //       : "bg-background"
    //   } auth flex flex-col justify-between gap-8 rounded-md p-6 shadow-lg`}
    // >
    //   <div className="flex flex-col gap-3">
    //     {/* icon */}
    //     <Image src={icon} width={50} height={50} alt={title} />
    //     {/* title */}
    //     <h1 className=" text-[18px] font-semibold">{title}</h1>
    //     <p
    //       className={`${
    //         title === "Staking reward"
    //           ? " text-muted "
    //           : " text-muted-foreground"
    //       } text-base font-normal`}
    //     >
    //       {desc}
    //     </p>
    //   </div>
    //   <div>
    //     <Link
    //       className={`${
    //         title === "Staking reward"
    //           ? "text-muted"
    //           : "bg-gradient-to-b from-[#2BADFD] to-[#1570EF] bg-clip-text text-transparent"
    //       }  flex items-center gap-5 text-base font-semibold`}
    //       href={link}
    //     >
    //       Read more{" "}
    //       <span>
    //         <ArrowRightIcon
    //           className={`${
    //             title === "Staking reward"
    //               ? "text-muted "
    //               : "text-secondary-foreground"
    //           } h-[20px] w-[20px] `}
    //         />
    //       </span>
    //     </Link>
    //   </div>
    // </div>
  )
}

export default FeatureCard
