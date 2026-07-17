import React from 'react'
import "../styles/Paginaation.css";

export default function Pagination({
  currentPage,
  totalPages,
  setSearchParams,
  searchParams={searchParams}
}) {
  const pagesPerGroup = 4;

  const currentGroup = Math.ceil(currentPage / pagesPerGroup);

  const startPage = (currentGroup - 1) * pagesPerGroup + 1;

  const endPage = Math.min(
    startPage + pagesPerGroup - 1,
    totalPages
  );

  const pageNumbers = [];

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">

      <button
        disabled={currentPage === 1}
        onClick={() =>
          setSearchParams({
            page: currentPage - 1,
          })
        }
      >
        Previous
      </button>

      {pageNumbers.map((page) => (
        <button
          key={page}
          className={currentPage === page ? "active" : ""}
          onClick={() =>
            setSearchParams({
              page,
            })
          }
        >
          {page}
        </button>
      ))}

      <button
        disabled={currentPage === totalPages}
        onClick={() =>
          setSearchParams({
            page: currentPage + 1,
          })
        }
      >
        Next
      </button>

    </div>
  );
}