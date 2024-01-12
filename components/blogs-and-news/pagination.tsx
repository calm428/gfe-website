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
          <div className="tracking-[0.5em] text-[#727C8F] px-6 xl:px-12 font-extrabold text-xl hidden lg:block -mt-1.5">
            .....
          </div>
        }
        nextLabel={
          <div className="flex gap-3 items-center font-monument text-[#727C8F]">
            <span className="hidden lg:block pt-0.5">Next</span>
            <ArrowRight />
          </div>
        }
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel={
          <div className="flex gap-3 items-center font-monument text-[#727C8F]">
            <ArrowLeft />
            <span className="hidden lg:block pt-0.5">Previous</span>
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
