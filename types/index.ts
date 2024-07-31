import { SVGProps } from "react"
import { Icons } from "@/components/icons";

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

export type ProposalStatusType =
  | "PENDING"
  | "ACTIVE"
  | "CANCELED"
  | "DEFEATED"
  | "SUCCEEDED"
  | "QUEUED"
  | "EXPIRED"
  | "EXECUTED"

export interface NavItem {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
  icon?: keyof typeof Icons;
  label?: string;
  description?: string;
}

export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[];
}

export interface NavItemWithOptionalChildren extends NavItem {
  items?: NavItemWithChildren[];
}

export interface FooterItem {
  title: string;
  items: {
    title: string;
    href: string;
    external?: boolean;
  }[];
}

export type MainNavItem = NavItemWithOptionalChildren;

export type SidebarNavItem = NavItemWithChildren;
  