"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { IOption } from "@/types"
import {
  Button,
  Input,
  SortDescriptor,
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  User,
} from "@nextui-org/react"
import { useAsyncList } from "@react-stately/data"
import dayjs from "dayjs"
import { useSession } from "next-auth/react"
import { CiSearch } from "react-icons/ci"
import { FaPlus, FaTags } from "react-icons/fa6"
import { MdCategory } from "react-icons/md"
import { useInView } from "react-intersection-observer"
import Select, { components, SingleValueProps } from "react-select"
import useSWR from "swr"
import { useDebouncedCallback } from "use-debounce"

function getParams(slug: string[]) {
  if (slug.length === 0)
    return {
      category: "all",
      tag: "all",
    }

  if (slug[0] === "c") {
    const category = slug[1]
    const tag = "all"

    return { category, tag }
  } else if (slug[0] === "tag") {
    if (slug[1] === "c") {
      const category = slug[2]
      const tag = slug[3]

      return { category, tag }
    } else {
      const category = "all"
      const tag = slug[1]

      return { category, tag }
    }
  }

  return { category: "all", tag: "all" }
}

const CSingleValue = ({ children, ...props }: SingleValueProps<IOption>) => (
  <components.SingleValue {...props}>
    <MdCategory className="mr-2 inline-block size-4 text-primary-600" />
    {children}
  </components.SingleValue>
)

const TSingleValue = ({ children, ...props }: SingleValueProps<IOption>) => (
  <components.SingleValue {...props}>
    <FaTags className="mr-2 inline-block size-4 text-primary-600" />
    {children}
  </components.SingleValue>
)

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function Page({ params }: { params: { slug: string[] } }) {
  const router = useRouter()
  const { data: session, status } = useSession()
  const { ref: loaderRef, inView } = useInView()
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const [categories, setCategories] = useState<IOption[]>([])
  const [defaultCategoryOption, setDefaultCategoryOption] =
    useState<IOption | null>(null)
  const [tags, setTags] = useState<IOption[]>([])
  const [defaultTagOption, setDefaultTagOption] = useState<IOption | null>(null)
  const [hasMore, setHasMore] = useState(true)
  const [currentSortDescriptor, setCurrentSortDescriptor] =
    useState<SortDescriptor>()
  const { category, tag } = getParams(params.slug || [])
  const limit = 20

  const {
    data: fetchedTagsData,
    isLoading: tagFetchLoading,
    error: fetchedTagsError,
  } = useSWR("/api/tags/get", fetcher)
  const {
    data: fetchedCategoriesData,
    isLoading: categoryFetchLoading,
    error: fetchedCategoriesError,
  } = useSWR("/api/categories/get", fetcher)

  const handleCategoryChange = (option: IOption) => {
    if (tag === "all") {
      if (option.value === "all") router.push("/")
      else router.push(`/c/${option.value}`)
    } else {
      if (option.value === "all") router.push(`/tag/${tag}`)
      router.push(`/tag/c/${option.value}/${tag}`)
    }
  }

  const handleTagChange = (option: IOption) => {
    if (category === "all") {
      if (option.value === "all") router.push("/")
      router.push(`/tag/${option.value}`)
    } else {
      if (option.value === "all") router.push(`/c/${category}`)
      router.push(`/tag/c/${category}/${option.value}`)
    }
  }

  let list = useAsyncList({
    async load({ signal, cursor }) {
      const sort = currentSortDescriptor
        ? currentSortDescriptor.column
        : "createdAt"
      const order = currentSortDescriptor
        ? currentSortDescriptor.direction === "ascending"
          ? "asc"
          : "desc"
        : "desc"
      const res = await fetch(
        cursor ||
          `/api/topics/get?${searchParams.get("keyword") ? `keyword=${searchParams.get("keyword")}&` : ""}category=${category}&tag=${tag}&skip=0&limit=${limit}&sort=${sort}&order=${order}`,
        { signal }
      )
      let json = await res.json()

      setHasMore(json.next !== null)

      return {
        items: json.topics,
        cursor: json.next || undefined,
      }
    },
  })

  const handleKeywordChange = useDebouncedCallback((value: string) => {
    if (value.trim() !== "") {
      const keyword = value.trim()
      router.push(`?keyword=${keyword}`)
    } else {
      router.push(pathname)
    }
  }, 300)

  useEffect(() => {
    if (fetchedCategoriesData) {
      const _categories = fetchedCategoriesData.map((category: any) => ({
        value: category.slug,
        label: category.name,
      }))

      setCategories([..._categories, { value: "all", label: "All Categories" }])
      setDefaultCategoryOption(
        [..._categories, { value: "all", label: "All Categories" }].find(
          (item) => item.value === category
        )
      )
    }
  }, [fetchedCategoriesData])

  useEffect(() => {
    if (fetchedTagsData) {
      const _tags = fetchedTagsData.map((tag: any) => ({
        value: tag.slug,
        label: tag.name,
      }))

      setTags([..._tags, { value: "all", label: "All Tags" }])
      setDefaultTagOption(
        [..._tags, { value: "all", label: "All Tags" }].find(
          (item) => item.value === tag
        )
      )
    }
  }, [fetchedTagsData])

  useEffect(() => {
    inView && list.loadMore()
  }, [inView])

  useEffect(() => {
    list.reload()
  }, [searchParams, currentSortDescriptor])

  return (
    <div className="w-full px-2">
      <h1 className="mx-auto mt-16 bg-gradient-to-b from-[#2BADFD] to-[#1570EF] bg-clip-text text-center text-3xl font-bold tracking-wider text-transparent sm:text-4xl">
        Welcome to the GFE Governance Forum
      </h1>
      <p className="mx-auto text-center text-sm">
        Participate in key discussions and decision-making.
      </p>
      <div className="my-8">
        <Input
          type="text"
          variant="underlined"
          aria-label="Search"
          placeholder="Search"
          startContent={<CiSearch />}
          className="mx-auto w-full max-w-md"
          defaultValue={searchParams.get("keyword") || ""}
          onChange={(e) => {
            handleKeywordChange(e.target.value)
          }}
        />
      </div>
      <div className="mt-8 flex w-full flex-wrap justify-between gap-2 px-4">
        <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row">
          <Select
            className="basic-single"
            isLoading={categoryFetchLoading}
            isSearchable
            value={defaultCategoryOption}
            name="category"
            options={categories}
            components={{
              SingleValue: CSingleValue,
            }}
            onChange={(value) => handleCategoryChange(value as IOption)}
          />
          <Select
            className="basic-single"
            isLoading={tagFetchLoading}
            isSearchable
            value={defaultTagOption}
            defaultValue={defaultTagOption}
            name="tag"
            options={tags}
            components={{
              SingleValue: TSingleValue,
            }}
            onChange={(value) => handleTagChange(value as IOption)}
          />
        </div>
        <div className="ml-auto">
          {status === "authenticated" ||
            (true && (
              <Button
                color="primary"
                startContent={<FaPlus />}
                className="bg-gradient-to-r from-[#2D79FF] to-[#22B4FD]"
              >
                <Link href="/topic/new">New Topic</Link>
              </Button>
            ))}
        </div>
      </div>
      <div className="">
        <Table
          aria-label="Example table with infinite pagination"
          sortDescriptor={currentSortDescriptor}
          onSortChange={(descriptor: SortDescriptor) => {
            setCurrentSortDescriptor(descriptor)
          }}
          bottomContent={
            hasMore ? (
              <div className="flex w-full justify-center">
                <Spinner ref={loaderRef} color="primary" />
              </div>
            ) : null
          }
          shadow="none"
        >
          <TableHeader>
            <TableColumn key="topic" className="w-full">
              Topic
            </TableColumn>
            <TableColumn
              key="replies"
              align="center"
              allowsSorting
              className="hidden xs:table-cell"
            >
              Replies
            </TableColumn>
            <TableColumn
              key="views"
              align="center"
              allowsSorting
              className="hidden sm:table-cell"
            >
              Views
            </TableColumn>
            <TableColumn key="createdAt" allowsSorting className="min-w-32">
              Activity
            </TableColumn>
          </TableHeader>
          <TableBody items={list.items}>
            {(item: any) => (
              <TableRow
                key={item.id}
                className="cursor-pointer rounded-md border-b hover:bg-primary-300/20"
                onClick={() => {
                  router.push(`/topics/${item.slug}`)
                }}
              >
                <TableCell>
                  <p className="line-clamp-3 text-sm font-medium sm:text-base">
                    {item.title}
                  </p>
                  <div className="mt-1 flex flex-wrap gap-1">
                    <div className="rounded-full text-xs text-primary-600">
                      <MdCategory className="mr-1 inline" />
                      {item.category.name}
                    </div>
                    {item.tags.map((tag: any) => (
                      <div
                        key={tag.name}
                        className="rounded-full text-xs text-primary-600"
                      >
                        <FaTags className="mr-1 inline" />
                        {tag.name}
                      </div>
                    ))}
                  </div>
                </TableCell>
                <TableCell align="center" className="hidden xs:table-cell">
                  {item.replies}
                </TableCell>
                <TableCell align="center" className="hidden sm:table-cell">
                  {item.views}
                </TableCell>
                <TableCell>
                  <User
                    name={item.author.name || ""}
                    description={dayjs(item?.createdAt || "").format(
                      "MMM D, YYYY"
                    )}
                    avatarProps={{
                      src: item.author.image || "",
                    }}
                    classNames={{
                      name: "whitespace-nowrap",
                    }}
                  />
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
