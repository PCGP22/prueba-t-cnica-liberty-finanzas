import { paginationHooks } from "../hooks/pagination";

function Pagination() {
  //This pagination is somewhat complex because I've used it before in bigger proyects.
  //First, it initializes the pagination buttons to the first 6 numbers except for the number 1
  //The reason it doesn't includes the first page is because the first and last page buttons are always shown
  let pagesButtons = [2, 3, 4, 5, 6];
  //while the current page stays on the first three pages, show all first 6
  //The reason for the if, it's that I want the first 6 buttons to be shown when returning from the latest pages
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
    //The reason it doesn't includes the last page is because the first and last page buttons are always shown
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
        //About the class: When in first or last page the navigation chevrons will have a special class
        //The same happens when the button is the current page
        className={`${currentPage === 1 && "disabled"}`}
        onClick={setPrevPage}>
        ❮
      </button>
      {/* First button, always shown */}
      <button
        className={`${currentPage === 1 && "disabled"}`}
        onClick={() => setCurrentPage(1)}>
        1
      </button>
      {/* Adds three dots in case the current page is bigger than 4*/}
      {currentPage > 4 && <p>•••</p>}
      {/* Map through all pages defined in the first part*/}
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
      {/* Adds three dots in case the current page is getting closer to the right end*/}
      {currentPage < maxPages - 3 && <p>•••</p>}
      {/* If there's more than 1 page, show always the last page*/}
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
