"use client"

import { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { ICategory, ITag } from "@/types"
import {
  Accordion,
  AccordionItem,
  Listbox,
  ListboxItem,
  Skeleton,
} from "@nextui-org/react"
import { FaListUl } from "react-icons/fa"
import { FaTags } from "react-icons/fa6"
import { MdCategory } from "react-icons/md"
import useSWR from "swr"

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function Sidebar({ className }: { className?: string }) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [categories, setCategories] = useState<ICategory[]>([])
  const [tags, setTags] = useState<ITag[]>([])

  const { data: fetchedTagsData, error: fetchedTagsError } = useSWR(
    "/api/tags/get",
    fetcher
  )
  const { data: fetchedCategoriesData, error: fetchedCategoriesError } = useSWR(
    "/api/categories/get",
    fetcher
  )

  useEffect(() => {
    if (fetchedCategoriesData) {
      const _categories = fetchedCategoriesData.map((category: any) => ({
        slug: category.slug,
        name: category.name,
      }))

      setCategories([..._categories, { slug: "all", name: "All Categories" }])
    }
  }, [fetchedCategoriesData])

  useEffect(() => {
    if (fetchedTagsData) {
      const _tags = fetchedTagsData.map((tag: any) => ({
        slug: tag.slug,
        name: tag.name,
      }))

      setTags([..._tags, { slug: "all", name: "All Tags" }])
    }
  }, [fetchedTagsData])

  return (
    <div
      className={`sticky top-[81px] h-full w-full max-w-[250px] pt-4 ${className ? className : ""}`}
    >
      <Accordion
        variant="light"
        selectionMode="multiple"
        defaultExpandedKeys={["1", "2"]}
        showDivider={false}
      >
        <AccordionItem key="1" aria-label="Accordion 1" title="Categories">
          {fetchedCategoriesData ? (
            <Listbox>
              {categories.map((category) => (
                <ListboxItem
                  key={category.slug}
                  startContent={
                    category.slug === "all" ? (
                      <FaListUl className="size-4 text-primary" />
                    ) : (
                      <MdCategory className="size-4 text-primary" />
                    )
                  }
                  href={category.slug === "all" ? "/" : `/c/${category.slug}`}
                >
                  {category.name}
                </ListboxItem>
              ))}
            </Listbox>
          ) : (
            <>
              <Skeleton className="mb-2 h-6 w-full rounded-md" />
              <Skeleton className="mb-2 h-6 w-full rounded-md" />
              <Skeleton className="mb-2 h-6 w-full rounded-md" />
              <Skeleton className="mb-2 h-6 w-full rounded-md" />
              <Skeleton className="mb-2 h-6 w-full rounded-md" />
            </>
          )}
        </AccordionItem>
        <AccordionItem key="2" aria-label="Accordion 2" title="Tags">
          {fetchedTagsData ? (
            <Listbox>
              {tags.map((tag) => (
                <ListboxItem
                  key={tag.slug}
                  startContent={
                    tag.slug === "all" ? (
                      <FaListUl className="size-4 text-primary" />
                    ) : (
                      <FaTags className="size-4 text-primary" />
                    )
                  }
                  href={tag.slug === "all" ? "/" : `/tag/${tag.slug}`}
                >
                  {tag.name}
                </ListboxItem>
              ))}
            </Listbox>
          ) : (
            <>
              <Skeleton className="mb-2 h-6 w-full rounded-md" />
              <Skeleton className="mb-2 h-6 w-full rounded-md" />
              <Skeleton className="mb-2 h-6 w-full rounded-md" />
              <Skeleton className="mb-2 h-6 w-full rounded-md" />
              <Skeleton className="mb-2 h-6 w-full rounded-md" />
              <Skeleton className="mb-2 h-6 w-full rounded-md" />
            </>
          )}
        </AccordionItem>
      </Accordion>
    </div>
  )
}
