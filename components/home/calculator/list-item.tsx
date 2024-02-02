import Image from "next/image"

interface Props {
  text: string
}
function ListItem({ text }: Props) {
  return (
    <div className="flex items-center gap-4">
      <Image src={"/advantages/check.svg"} width={20} height={20} alt="icon" />
      <h2 className="font-muted-foreground auth text-base">{text}</h2>
    </div>
  )
}

export default ListItem
