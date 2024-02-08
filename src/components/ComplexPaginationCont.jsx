import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';
const ComplexPaginationCont = () => {
  const { meta } = useLoaderData();
  // console.log(meta);
  const { pageCount, page } = meta.pagination;
  const { pathname, search } = useLocation();
  const navigate = useNavigate();

  const handlePageChange = (pageNumber) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set('page', pageNumber);
    navigate(`${pathname}?${searchParams.toString()}`);
  };

  const addPageButton = ({ pageNumber, activeClass }) => {
    return (
      <button
        key={pageNumber}
        className={`join-item btn btn-xs sm:btn-md border-none ${
          activeClass ? 'bg-base-300 border-base-300' : null
        }`}
        onClick={() => {
          handlePageChange(pageNumber);
        }}
      >
        {pageNumber}
      </button>
    );
  };

  const renderPageButtons = () => {
    const pageButtons = [];

    // FIRST BUTTON
    pageButtons.push(addPageButton({ pageNumber: 1, activeClass: page === 1 }));

    // DOTS-1
    if (page > 2) {
      pageButtons.push(
        <button
          className="join-item btn btn-xs sm:btn-md border-none "
          key="dots-1"
        >
          ....
        </button>
      );
    }

    // ACTIVE/CURRENT PAGE
    if (page === 1 && page === pageCount) {
      pageButtons.push(addPageButton({ pageNumber: page, activeClass: true }));
    }

    // DOTS-2
    if (page < pageCount - 1) {
      pageButtons.push(
        <button
          className="join-item btn btn-xs sm:btn-md border-none "
          key="dots-2"
        >
          ....
        </button>
      );
    }

    // LAST BUTTON
    pageButtons.push(
      addPageButton({ pageNumber: pageCount, activeClass: page === pageCount })
    );
    return pageButtons;
  };

  if (pageCount < 2) {
    return;
  }
  return (
    <div className="mt-16 flex justify-end">
      <div className="join">
        <button
          className="join-item btn btn-xs sm:btn-md"
          onClick={() => {
            let prevPage = page - 1;
            if (prevPage < 1) prevPage = pageCount;
            handlePageChange(prevPage);
          }}
        >
          Prev
        </button>
        {renderPageButtons()}
        <button
          className="join-item btn btn-xs sm:btn-md"
          onClick={() => {
            let nextPage = page + 1;
            if (nextPage > pageCount) nextPage = 1;
            handlePageChange(nextPage);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};
export default ComplexPaginationCont;
