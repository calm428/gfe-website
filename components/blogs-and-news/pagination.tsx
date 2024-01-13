"use client"

import { ArrowLeft, ArrowRight } from "lucide-react"
// @ts-ignore
import ReactPaginate from "react-paginate"

// @ts-ignore
const items: number[] = [...Array(33).keys()]

function PaginatedItems() {
  const pageCount = 78
  const handlePageClick = (event: any) => {
    // event.selected
  }

  return (
    <div className="container mt-10">
      <ReactPaginate
        breakLabel={
          <div className="-mt-1.5 hidden px-6 text-xl font-extrabold tracking-[0.5em] text-[#727C8F] lg:block xl:px-12">
            .....
          </div>
        }
        nextLabel={
          <div className="flex items-center gap-3 font-monument text-[#727C8F]">
            <span className="font-goldman text-xl hidden pt-0.5 lg:block">
              Next
            </span>
            <ArrowRight />
          </div>
        }
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel={
          <div className="flex items-center gap-3 font-monument text-[#727C8F]">
            <ArrowLeft />
            <span className="font-goldman text-xl font hidden pt-0.5 lg:block">
              Previous
            </span>
          </div>
        }
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageClassName="page-item"
      />
    </div>
  )
}

export default PaginatedItems
