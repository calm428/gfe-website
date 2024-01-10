import React from "react"

interface Props {
  step: number
  desc: string
}
function Step({ step, desc }: Props) {
  return (
    <div className="flex flex-col items-center gap-4">
      <div
        className={`block lg:hidden p-8 border-[20px] rounded-full ${
          step <= 2
            ? "border-[#019CF0]"
            : step === 3
            ? "border-[#F4A120]"
            : step === 3
            ? "border-[#BBDE00]"
            : "border-[#BAC82E]"
        }`}
      >
        <h1
          className={` font-mont auth text-[24px] font-semibold ${
            step <= 2
              ? "text-[#019CF0]"
              : step === 3
              ? "text-[#F4A120]"
              : step === 3
              ? "text-[#BBDE00]"
              : "text-[#BAC82E]"
          }`}
        >
          S {step}
        </h1>
      </div>
      <h1
        className={`  ${
          step <= 2
            ? "text-[#019CF0]"
            : step === 3
            ? "text-[#F4A120]"
            : step === 3
            ? "text-[#BBDE00]"
            : "text-[#BAC82E]"
        } font-monument font-semibold text-lg xl:text-[24px]`}
      >
        Stage {step}
      </h1>
      <p className="auth text-base text-center">{desc}</p>
    </div>
  )
}

export default Step
