import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';
const PaginationContainer = () => {
  const { meta } = useLoaderData();

  const { pageCount, page } = meta.pagination;
  const { pathname, search } = useLocation();
  const navigate = useNavigate();

  // let pages = Array.from({ length: pageCount }, (_, index) => {
  //   return index + 1;
  // });
  // /products?page=2
  let pages = Array.from({ length: pageCount }).map((_, index) => index + 1);
  // console.log(pages);

  const handlePageChange = (pageNumber) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set('page', pageNumber);
    navigate(`${pathname}?${searchParams.toString()}`);
    // console.log(searchParams);
    // console.log(search);
    // console.log(pathname);
    // console.log(pageNumber);
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
        {pages.map((pageNumber) => {
          return (
            <button
              key={pageNumber}
              className={`join-item btn btn-xs sm:btn-md border-none ${
                pageNumber === page ? 'bg-base-300 border-base-300' : null
              }`}
              onClick={() => {
                handlePageChange(pageNumber);
              }}
            >
              {pageNumber}
            </button>
          );
        })}
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
export default PaginationContainer;
