"use client"

export function BenefitCard({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <div className="rounded-3xl bg-accent p-5">
      <h2 className="mt-5 font-monument text-xl tracking-wider">{title}</h2>
      <p className="mb-5 mt-2 text-sm text-muted-foreground">{description}</p>
    </div>
  )
}
