function Pagination({ setNextPage, setPrevPage, setCurrentPage }) {
  let dispatch = useAppDispatch();
  let maxPages = useAppSelector((state) => state.dataReducer.totalPages);
  let currentPage = useAppSelector((state) => state.dataReducer.currentPage);
  let pagesButtons: number[] = [2, 3, 4, 5, 6];
  if (currentPage === 1 || currentPage === 2 || currentPage === 3)
    pagesButtons = [2, 3, 4, 5, 6];
  if (currentPage >= 4) {
    pagesButtons = [
      currentPage - 2,
      currentPage - 1,
      currentPage,
      currentPage + 1,
      currentPage + 2,
    ];
  }
  if (
    currentPage === maxPages - 1 ||
    currentPage === maxPages - 2 ||
    currentPage === maxPages
  ) {
    pagesButtons = [
      maxPages - 5,
      maxPages - 4,
      maxPages - 3,
      maxPages - 2,
      maxPages - 1,
    ];
  }

  return (
    <section className="pagination">
      <button
        className={`${currentPage === 1 && "disabled"}`}
        onClick={() => dispatch(setPrevPage())}>
        ❮
      </button>
      <button
        className={`${currentPage === 1 && "disabled"}`}
        onClick={() => dispatch(setCurrentPage(1))}>
        1
      </button>
      {currentPage > 4 && <p>•••</p>}
      {pagesButtons.map((p) => {
        if (p > 1 && p < maxPages)
          return (
            <button
              className={`${currentPage === p && "disabled"}`}
              key={p}
              onClick={() => dispatch(setCurrentPage(p))}>
              {p}
            </button>
          );
      })}
      {currentPage < maxPages - 3 && <p>•••</p>}
      {maxPages > 1 && (
        <button
          className={`${currentPage === maxPages && "disabled"}`}
          onClick={() => dispatch(setCurrentPage(maxPages))}>
          {maxPages}
        </button>
      )}
      <button
        className={`${currentPage === maxPages && "disabled"}`}
        onClick={() => dispatch(setNextPage())}>
        ❯
      </button>
    </section>
  );
}

export default Pagination;
