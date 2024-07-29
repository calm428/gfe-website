import { SVGProps } from "react"

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number
}

export type UserProfile = {
  id: string
  name: string
  email: string
  image: string
}

export interface IOption {
  value: string
  label: string
}

export interface ICategory {
  slug: string
  name: string
}

export interface ITag {
  slug: string
  name: string
}

export interface IHeading {
  id: string
  text: string
  tagName: string
}

export interface IProposal {
  title: string
  summary: string
  content: string
  actions: {
    type: string
    recipient: string
    amount: number
  }[]
}
