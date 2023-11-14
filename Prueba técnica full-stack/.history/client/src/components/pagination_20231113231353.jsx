function Pagination({
  maxPages = 1,
  currentPage = 0,
  setNextPage,
  setPrevPage,
  setCurrentPage,
}) {
  //This pagination is somewhat complex because I've used it before in bigger proyects.
  //First, it initializes the pagination buttons to the first 6 numbers except for the number 1
  let pagesButtons = [2, 3, 4, 5, 6];
  //while the current page stays on the first three pages, show all first 6
  if (currentPage === 1 || currentPage === 2 || currentPage === 3) {
    pagesButtons = [2, 3, 4, 5, 6];
  }
  //As soon as we change to page 4 or more, let's follow the current page and
  //add two buttons to the left and two to the right
  if (currentPage >= 4) {
    pagesButtons = [
      currentPage - 2,
      currentPage - 1,
      currentPage,
      currentPage + 1,
      currentPage + 2,
    ];
  }
  //When approaching to the right end of the pagination, show the last 5 pages
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
        onClick={setPrevPage}>
        ❮
      </button>
      <button
        className={`${currentPage === 1 && "disabled"}`}
        onClick={() => setCurrentPage(1)}>
        1
      </button>
      {currentPage > 4 && <p>•••</p>}
      {pagesButtons.map((p) => {
        if (p > 1 && p < maxPages)
          return (
            <button
              className={`${currentPage === p && "disabled"}`}
              key={p}
              onClick={() => setCurrentPage(p)}>
              {p}
            </button>
          );
      })}
      {currentPage < maxPages - 3 && <p>•••</p>}
      {maxPages > 1 && (
        <button
          className={`${currentPage === maxPages && "disabled"}`}
          onClick={() => setCurrentPage(maxPages)}>
          {maxPages}
        </button>
      )}
      <button
        className={`${currentPage === maxPages && "disabled"}`}
        onClick={setNextPage}>
        ❯
      </button>
    </section>
  );
}

export default Pagination;
