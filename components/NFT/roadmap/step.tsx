interface Props {
  step: number
  desc: string
}
function Step({ step, desc }: Props) {
  return (
    <div className="flex flex-col items-center gap-4">
      <div
        className={`block rounded-full border-[20px] p-8 md:hidden ${
          step <= 2
            ? "border-[#019CF0]"
            : step === 3
              ? "border-[#F4A120]"
              : step === 3
                ? "border-[#BBDE00]"
                : "border-[#BAC82E]"
        }`}
      >
        <div
          className={` auth font-mont text-[24px] font-semibold ${
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
        </div>
      </div>
      <div
        className={`${
          step <= 2
            ? "text-[#019CF0]"
            : step === 3
              ? "text-[#F4A120]"
              : step === 3
                ? "text-[#BBDE00]"
                : "text-[#BAC82E]"
        } font-goldman text-lg font-semibold xl:text-[24px]`}
      >
        Stage {step}
      </div>
      <p className="auth text-center text-sm lg:text-base">{desc}</p>
    </div>
  )
}

export default Step
