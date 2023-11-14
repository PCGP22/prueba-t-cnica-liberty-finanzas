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
    content: "Not Changed",
  };
  function reducer(state, action) {
    const { type, payload } = action;
    switch (type) {
      case "change":
        return { ...state, content: "Changed" };
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
      .then((data) => setData(data.primas));
  }, [url]);

  return (
    <dataContext.Provider value={[state, dispatch]}>
      <p>{state.content}</p>
      {/* <Table /> */}
      <Pagination />
    </dataContext.Provider>
  );
}

export default App;
