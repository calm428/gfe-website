"use client"

import * as React from "react"
import Image from "next/image"
import { useMDXComponent } from "next-contentlayer/hooks"

import { cn } from "@/lib/utils"

import { Callout } from "./callout"
import { MdxCard } from "./card"

const components = {
  h1: ({ className, ...props }: any) => (
    <h1
      className={cn(
        "mt-2 scroll-m-20 font-monument text-4xl font-bold tracking-wider",
        className
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }: any) => (
    <h2
      className={cn(
        "mt-10 scroll-m-20 pb-1 font-monument text-3xl font-semibold tracking-wider first:mt-0",
        className
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: any) => (
    <h3
      className={cn(
        "mt-8 scroll-m-20 font-goldman text-2xl tracking-wider",
        className
      )}
      {...props}
    />
  ),
  h4: ({ className, ...props }: any) => (
    <h4
      className={cn(
        "mt-8 scroll-m-20 font-monument text-xl font-semibold tracking-wider",
        className
      )}
      {...props}
    />
  ),
  h5: ({ className, ...props }: any) => (
    <h5
      className={cn(
        "mt-8 scroll-m-20 font-monument text-lg font-semibold tracking-wider",
        className
      )}
      {...props}
    />
  ),
  h6: ({ className, ...props }: any) => (
    <h6
      className={cn(
        "mt-8 scroll-m-20 font-monument text-base font-semibold tracking-wider",
        className
      )}
      {...props}
    />
  ),
  a: ({ className, ...props }: any) => (
    <a
      className={cn("font-medium underline underline-offset-4", className)}
      {...props}
    />
  ),
  p: ({ className, ...props }: any) => (
    <p
      className={cn(
        "leading-7 text-muted-foreground font-medium [&:not(:first-child)]:my-6",
        className
      )}
      {...props}
    />
  ),
  ul: ({ className, ...props }: any) => (
    <ul className={cn("my-6 ml-6 list-disc", className)} {...props} />
  ),
  ol: ({ className, ...props }: any) => (
    <ol className={cn("my-6 ml-6 list-decimal", className)} {...props} />
  ),
  li: ({ className, ...props }: any) => (
    <li className={cn("mt-2", className)} {...props} />
  ),
  blockquote: ({ className, ...props }: any) => (
    <blockquote
      className={cn(
        "mt-6 border-l-2 pl-6 italic [&>*]:text-muted-foreground",
        className
      )}
      {...props}
    />
  ),
  img: ({
    className,
    alt,
    ...props
  }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img className={cn("rounded-md border", className)} alt={alt} {...props} />
  ),
  hr: ({ ...props }) => <hr className="my-4 md:my-8" {...props} />,
  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 w-full overflow-y-auto">
      <table className={cn("w-full", className)} {...props} />
    </div>
  ),
  tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr
      className={cn("m-0 border-t p-0 even:bg-muted", className)}
      {...props}
    />
  ),
  th: ({ className, ...props }: any) => (
    <th
      className={cn(
        "border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }: any) => (
    <td
      className={cn(
        "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
  pre: ({ className, ...props }: any) => (
    <pre
      className={cn(
        "mb-4 mt-6 overflow-x-auto rounded-lg border bg-black py-4",
        className
      )}
      {...props}
    />
  ),
  code: ({ className, ...props }: any) => (
    <code
      className={cn(
        "relative rounded border px-[0.3rem] py-[0.2rem] font-mono text-sm",
        className
      )}
      {...props}
    />
  ),
  Image,
  Callout,
  Card: MdxCard,
}

interface MdxProps {
  code: string
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code)

  return (
    <div className="mdx flex-1 auth ">
      <Component components={components} />
    </div>
  )
}