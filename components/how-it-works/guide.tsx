"use client"

import Image from "next/image"

type Step = {
  index: number
  title: string
  description: string
  icon: string
}

const steps: Step[] = [
  {
    index: 1,
    title: "Sign Up",
    description:
      "Embark on your journey by completing our simple and secure registration process. Start your experience today and take the first step towards financial growth and opportunity.",
    icon: "/images/how-it-works/signup.svg",
  },
  {
    index: 2,
    title: "Buy Power",
    description:
      "Acquire mining power effortlessly through a variety of convenient methods. Our platform offers a range of flexible options for purchasing power.",
    icon: "/images/how-it-works/buy-power.svg",
  },
  {
    index: 3,
    title: "Write Mining Plan",
    description:
      "Drafting a customized mining plan is your key to success. Our platform guides you through the process of creating a strategic mining plan tailored to your goals.",
    icon: "/images/how-it-works/write-mining-plan.svg",
  },
  {
    index: 4,
    title: "Mining Pool",
    description:
      "Take control of your mining experience by setting your preferred mining pool and payout parameters. Tailor your payout settings to align with your financial goals",
    icon: "/images/how-it-works/mining-pool.svg",
  },
  {
    index: 5,
    title: "Get Reward",
    description:
      "Reap the fruits of your mining efforts effortlessly as you accumulate rewards. Our platform ensures a seamless process for receiving your well-deserved returns.",
    icon: "/images/how-it-works/get-reward.svg",
  },
  {
    index: 6,
    title: "Maintenance",
    description:
      "Enjoy a smooth mining experience with our user-friendly platform that simplifies machine operation and maintenance. Our intuitive tools empower you to optimize.",
    icon: "/images/how-it-works/maintenance.svg",
  },
]

function StepComponent({ step }: { step: Step }) {
  return (
    <div className="relative mx-auto my-2 flex max-w-xl items-start gap-4 rounded-xl bg-white p-8 shadow-md">
      <div className="absolute right-2 top-3 font-monument text-2xl font-bold text-black/5">
        0{step.index}
      </div>
      <div
        className="flex h-12 w-12 items-center justify-center rounded-xl"
        style={{
          background: "linear-gradient(37deg, #22B4FD 2.42%, #2D79FF 80.84%)",
          minWidth: "3rem",
        }}
      >
        <Image
          src={step.icon}
          alt={step.title}
          width={100}
          height={100}
          className="h-8 w-8"
        />
      </div>
      <div className="flex flex-col gap-2">
        <div className="font-monument text-xl">{step.title}</div>
        <div className="font-mont text-sm text-muted-foreground">
          {step.description}
        </div>
      </div>
    </div>
  )
}

export default function GuideSection() {
  return (
    <div className="flex flex-col items-center justify-between pb-4">
      <div className="pb-5 text-center font-goldman text-5xl font-normal text-primary  md:pb-10">
        Mining Step-by-Step
      </div>
      <div className="text-md max-w-5xl text-center font-mont text-muted-foreground">
        Embark on your mining journey with our intuitive step-by-step guide.
        From setting up your equipment to selecting the right mining pool, our
        platform walks you through each crucial stage of the process.
      </div>
      <div className="mt-12 grid w-full grid-cols-1 lg:grid-cols-2">
        <div className="hidden items-center justify-center lg:flex">
          <Image
            src="/images/how-it-works/bg1.png"
            alt="how-it-works"
            width={1072}
            height={1111}
            className="mx-auto h-auto w-full"
          />
        </div>
        <div>
          {steps.map((step) => (
            <StepComponent key={step.title} step={step} />
          ))}
        </div>
      </div>
    </div>
  )
}
