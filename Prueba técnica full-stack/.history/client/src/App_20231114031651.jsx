import useFetch from "./hooks/useFetch";
import useData from "./hooks/useData";
import { dataContext } from "./context/dataContext";
import Table from "./components/Table";
import { useLayoutEffect, useState } from "react";
import usePagination from "./hooks/usePagination";
import TableContainer from "./containers/tableContainer";

function App() {
  let url = "http://localhost:5000/primas";
  const [fetchedData] = useFetch(url);

  useLayoutEffect(() => {
    console.log(fetchedData);
  }, [fetchedData]);
  console.log(fetchedData);

  return (
    <dataContext.Provider value={[fetchedData]}>
      <TableContainer />
    </dataContext.Provider>
  );
}

export default App;
