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
      <div className="mb-10 flex">
        <h3 className="border-r border-muted-foreground bg-gradient-to-b from-[#2BADFD] to-[#1570EF] bg-clip-text px-5 font-monument tracking-wider text-transparent">
          SUNBELT
        </h3>
        <h3 className="border-x border-muted-foreground px-5">
          Blogs and News
        </h3>
        <h3 className="border-l border-muted-foreground px-5">Article</h3>
      </div>

      <h1 className="mb-10 font-monument text-2xl tracking-wider">
        {doc.title}
      </h1>

      <div className="flex w-full flex-col gap-5 lg:flex-row-reverse">
        <div className="flex w-80 flex-col gap-2">
          <h1 className="mb-3 border-t-2 pt-4 font-monument text-primary">
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
          <h1 className="pb-2 text-center font-monument text-xl font-normal uppercase text-primary md:pb-3">
            Stay in the loop
          </h1>

          <Link
            style={{
              background:
                "linear-gradient(15deg, #22B4FD 32.53%, #2D79FF 77.26%)",
            }}
            className={cn(
              buttonVariants(),
              "hidden pt-2.5 font-monument font-normal tracking-widest md:block"
            )}
            href={"/blogs-and-news"}
          >
            View All News
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  )
}

export default page
