import useFetch from "./hooks/useFetch";
import useData from "./hooks/useData";
import { dataContext } from "./context/dataContext";
import Table from "./components/Table";
import { useEffect, useReducer, useState } from "react";
import usePagination from "./hooks/usePagination";
import TableContainer from "./containers/tableContainer";
import Pagination from "./components/pagination";

function App() {
  let url = "http://localhost:5000/primas";
  const initialState = {
    data: {},
    dataToShow: {},
    currentPage: 1,
    maxPages: 1,
    contentPerPage: 8,
  };
  function reducer(state, action) {
    function divideData(data, state) {
      let dividedData = data.slice(
        (state.currentPage - 1) * state.contentPerPage,
        state.currentPage * state.contentPerPage
      );
      return dividedData;
    }
    function calculateMaxPages(data, state) {
      let maxPages = Math.ceil(data / state.contentPerPage);
      return maxPages;
    }
    const { type, payload } = action;
    console.log(payload);
    switch (type) {
      case "initialize":
        return {
          ...state,
          data: payload,
          dataToShow: divideData(payload, state),
          maxPages: calculateMaxPages(payload, state),
        };
      case "nextPage":
        if (state.currentPage < state.maxPages) {
          return { ...state, content: "Changed" };
        } else return state;
      case "change back":
        return { ...state, content: "Not Changed" };
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
      <Table />
      {/* <Pagination /> */}
    </dataContext.Provider>
  );
}

export default App;
