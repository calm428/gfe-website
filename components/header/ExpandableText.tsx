import { useState } from "react"

interface Props {
  description: string
  maxChars?: number
}
const ExpandableText = ({ description, maxChars = 100 }: Props) => {
  const [isExpanded, setExpanded] = useState(false)
  if (description.length <= maxChars) return <p>{description}</p>
  const text = isExpanded ? description : description.substring(0, maxChars)
  return (
    <p
      style={{ transition: "all" }}
      className="font-mont text-[12px] text-muted-foreground"
    >
      {text}...
    </p>
  )
}

export default ExpandableText
