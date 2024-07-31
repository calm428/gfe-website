import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { FC } from "react";

interface PaginationProps {
  currentPage: number;
  numPages: number;
  goToPage: (page: number) => void;
}

const TablePagination: FC<PaginationProps> = ({
  currentPage,
  numPages,
  goToPage,
}) => {
  const totalPages = numPages;
  const maxPagesToShow = 3;
  let start = Math.max(1, currentPage + 1 - Math.floor(maxPagesToShow / 2));
  const end = Math.min(totalPages, start + maxPagesToShow - 1);
  start = Math.max(1, end - maxPagesToShow + 1);

  const handleGoToPage = (page: number) => {
    goToPage(page - 1);
  };

  return (
    <Pagination>
      <PaginationContent>
        {currentPage !== 0 && (
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={() => handleGoToPage(currentPage - 1)}
            />
          </PaginationItem>
        )}

        {start > 2 && (
          // Show "1" if there are pages before start page to indicate truncation
          <PaginationItem key="1">
            <PaginationLink
              onClick={() => handleGoToPage(1)}
              isActive={currentPage === 0}
              href="#"
            >
              1
            </PaginationLink>
          </PaginationItem>
        )}

        {start > 2 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}

        {Array.from({ length: end - start + 1 }, (_, i) => start + i).map(
          (page) => (
            <PaginationItem key={page}>
              <PaginationLink
                onClick={() => handleGoToPage(page)}
                isActive={page === currentPage + 1}
                href="#"
                key={page}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          ),
        )}

        {end < totalPages - 1 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}

        {end < totalPages && (
          <PaginationItem key={totalPages}>
            <PaginationLink
              onClick={() => handleGoToPage(totalPages)}
              isActive={currentPage + 1 === totalPages}
              href="#"
            >
              {totalPages}
            </PaginationLink>
          </PaginationItem>
        )}

        {currentPage + 1 !== totalPages && (
          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={() => handleGoToPage(currentPage + 1)}
            />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
};

export default TablePagination;
