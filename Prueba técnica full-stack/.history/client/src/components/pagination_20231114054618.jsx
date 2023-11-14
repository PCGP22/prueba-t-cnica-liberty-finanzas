import { useContext } from "react";
import { dataContext } from "../context/dataContext";

function Pagination() {
  const [state, dispatch] = useContext(dataContext);

  //   return <button onClick={() => dispatch({ type: "change" })}>Cambiar</button>;
  //   const { state.maxPages, state.currentPage, setstate.CurrentPage, setNextPage, setPrevPage } =
  // useContext(dataContext);
  //This pagination is somewhat complex because I've used it before in bigger proyects.
  //First, it initializes the pagination buttons to the first 6 numbers except for the number 1
  //The reason it doesn't includes the first page is because the first and last page buttons are always shown
  let pagesButtons = [2, 3, 4, 5, 6];
  //while the current page stays on the first three pages, show all first 6
  //The reason for the if, it's that I want the first 6 buttons to be shown when returning from the latest pages
  if (
    state.currentPage === 1 ||
    state.currentPage === 2 ||
    state.currentPage === 3
  ) {
    pagesButtons = [2, 3, 4, 5, 6];
  }
  //As soon as we change to page 4 or more, let's follow the current page and
  //add two buttons to the left and two to the right
  if (state.currentPage >= 4) {
    pagesButtons = [
      state.currentPage - 2,
      state.currentPage - 1,
      state.currentPage,
      state.currentPage + 1,
      state.currentPage + 2,
    ];
  }
  //When approaching to the right end of the pagination, show the last 5 pages
  if (
    state.currentPage === state.maxPages - 1 ||
    state.currentPage === state.maxPages - 2 ||
    state.currentPage === state.maxPages
  ) {
    //The reason it doesn't includes the last page is because the first and last page buttons are always shown
    pagesButtons = [
      state.maxPages - 5,
      state.maxPages - 4,
      state.maxPages - 3,
      state.maxPages - 2,
      state.maxPages - 1,
    ];
  }
  return (
    <section className="pagination">
      <button
        //About the class: When in first or last page the navigation chevrons will have a special class
        //The same happens when the button is the current page
        className={`${state.currentPage === 1 && "disabled"}`}
        onClick={() => dispatch({ type: "prevPage" })}>
        ❮
      </button>
      {/* First button, always shown */}
      <button
        className={`${state.currentPage === 1 && "disabled"}`}
        onClick={() => dispatch({ type: "setPage", payload: 1 })}>
        1
      </button>
      {/* Adds three dots in case the current page is bigger than 4*/}
      {state.currentPage > 4 && <p>•••</p>}
      {/* Map through all pages defined in the first part*/}
      {pagesButtons.map((p) => {
        if (p > 1 && p < state.maxPages)
          return (
            <button
              className={`${state.currentPage === p && "disabled"}`}
              key={p}
              onClick={() => dispatch({ type: "setPage", payload: p })}>
              {p}
            </button>
          );
      })}
      {/* Adds three dots in case the current page is getting closer to the right end*/}
      {state.currentPage < state.maxPages - 3 && <p>•••</p>}
      {/* If there's more than 1 page, show always the last page*/}
      {state.maxPages > 1 && (
        <button
          className={`${state.currentPage === state.maxPages && "disabled"}`}
          onClick={() =>
            dispatch({ type: "setPage", payload: state.maxPages })
          }>
          {state.maxPages}
        </button>
      )}
      <button
        className={`${state.currentPage === state.maxPages && "disabled"}`}
        onClick={() => dispatch({ type: "nextPage" })}>
        ❯
      </button>
    </section>
  );
}

export default Pagination;
