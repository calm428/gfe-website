import { FC } from "react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { allDocs } from "contentlayer/generated"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import Card from "@/components/blogs-and-news/Card"
import { Mdx } from "@/components/mdx"

interface PageProps {
  params: {
    slug: string
  }
}

async function getDocFromParams(slug: string) {
  const doc = allDocs.find((doc) => doc.slugAsParams == slug)

  if (!doc) notFound()

  return doc
}

const page: FC<PageProps> = async ({ params }) => {
  const doc = await getDocFromParams(params.slug)
  console.log(doc.headings)
  return (
    <div className="container mt-10 pb-32">
      <div className="flex mb-10">
        <h3 className="px-5 border-r border-muted-foreground font-monument tracking-wider text-transparent bg-clip-text bg-gradient-to-b from-[#2BADFD] to-[#1570EF]">
          SUNBELT
        </h3>
        <h3 className="px-5 border-l border-r border-muted-foreground">
          Blogs and News
        </h3>
        <h3 className="px-5 border-l border-muted-foreground">Article</h3>
      </div>

      <h1 className="font-monument text-2xl tracking-wider mb-10">
        {doc.title}
      </h1>

      <div className="flex flex-col lg:flex-row-reverse w-full gap-5">
        <div className="flex flex-col w-80 gap-2">
          <h1 className="font-monument text-primary mb-3 border-t-2 pt-4">
            Table of content
          </h1>
          {doc.headings.map((heading: any, index: number) => (
            <Link href={`#${heading.slug}`} className="p-2 hover:bg-accent">
              {heading.text}
            </Link>
          ))}
        </div>
        <Mdx code={doc.body.code} />
      </div>

      <div className="mt-16">
        <div className="flex justify-between">
          <h1 className="text-center font-monument font-normal text-xl text-primary md:pb-3 pb-2 uppercase">
            Stay in the loop
          </h1>

          <Link
            style={{
              background:
                "linear-gradient(15deg, #22B4FD 32.53%, #2D79FF 77.26%)",
            }}
            className={cn(
              buttonVariants(),
              "font-monument tracking-widest pt-2.5 font-normal hidden md:block"
            )}
            href={"/blogs-and-news"}
          >
            View All News
          </Link>
        </div>

        <div className="mt-8 grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  )
}

export default page
