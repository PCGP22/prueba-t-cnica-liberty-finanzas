import useFetch from "./hooks/useFetch";
import useData from "./hooks/useData";
import { dataContext } from "./context/dataContext";
import Table from "./components/Table";
import { useEffect, useReducer, useState } from "react";
import Filters from "./components/Filters";
import usePagination from "./hooks/usePagination";
import TableContainer from "./containers/tableContainer";
import Pagination from "./components/pagination";

function App() {
  let url = "http://localhost:5000/primas";
  const initialState = {
    backupData: {},
    data: {},
    dataToShow: {},
    currentPage: 1,
    maxPages: 1,
    contentPerPage: 8,
  };
  function reducer(state, action) {
    function divideData(data, currentPage, state) {
      let dividedData = data.slice(
        (currentPage - 1) * state.contentPerPage,
        currentPage * state.contentPerPage
      );
      return dividedData;
    }
    function calculateMaxPages(data, state) {
      let maxPages = Math.ceil(data.length / state.contentPerPage);
      return maxPages;
    }
    const { type, payload } = action;
    switch (type) {
      case "initialize":
        return {
          ...state,
          backupData: payload,
          data: payload,
          dataToShow: divideData(payload, 1, state),
          maxPages: calculateMaxPages(payload, state),
        };
      case "prevPage":
        if (state.currentPage > 1) {
          return {
            ...state,
            currentPage: state.currentPage - 1,
            dataToShow: divideData(state.data, state.currentPage - 1, state),
          };
        } else return state;
      case "nextPage":
        if (state.currentPage < state.maxPages) {
          return {
            ...state,
            currentPage: state.currentPage + 1,
            dataToShow: divideData(state.data, state.currentPage + 1, state),
          };
        } else return state;
      case "setPage":
        return {
          ...state,
          currentPage: payload,
          dataToShow: divideData(state.data, payload, state),
        };
      case "filter":
        return {
          ...state,
          dataToShow: state.backupData.filter(
            (d) => d[payload.type] === payload.filter
          ),
        };
      default:
        return state;
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => dispatch({ type: "initialize", payload: data.primas }));
  }, [url]);

  return (
    <dataContext.Provider value={[state, dispatch]}>
      <p>{state.content}</p>
      <Filters />
      <Table />
      <Pagination />
    </dataContext.Provider>
  );
}

export default App;
