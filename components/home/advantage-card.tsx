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
    <div className="rounded-3xl bg-[#E7F0FD] p-8">
      <img className="w-16" src={icon}></img>
      <h2 className="mt-5 font-monument text-xl tracking-wider">{title}</h2>
      <p className="mt-2 text-muted-foreground transition-all duration-500">
        {text}
      </p>
    </div>
  )
}
