import useFetch from "./hooks/useFetch";
import useData from "./hooks/useData";
import { dataContext } from "./context/dataContext";
import Table from "./components/Table";
import { useLayoutEffect, useState } from "react";
import usePagination from "./hooks/usePagination";

function App() {
  let url = "http://localhost:5000/primas";
  const [fetchedData] = useFetch(url);

  return (
    <dataContext.Provider value={[fetchedData]}>
      <TableContainer />
    </dataContext.Provider>
  );
}

export default App;
