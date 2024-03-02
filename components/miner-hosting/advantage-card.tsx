import Image from "next/image"

export function AdvantageCard({
  icon,
  title,
  text,
}: {
  icon: string
  title: string
  text: string
}) {
  return (
    <div className="container max-w-[350px] rounded-3xl bg-[#E7F0FD] p-8">
      <Image
        width={50}
        height={50}
        className="w-16"
        src={icon}
        alt="icon"
      ></Image>
      <h2 className="auth mt-5 text-xl font-bold uppercase tracking-wider">
        {title}
      </h2>
      <p className="auth mt-2 font-medium transition-all duration-500">
        {text}
      </p>
    </div>
  )
}
