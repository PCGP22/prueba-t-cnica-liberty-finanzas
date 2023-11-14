import useFetch from "./hooks/useFetch";
import useData from "./hooks/useData";
import { dataContext } from "./context/dataContext";
import Table from "./components/Table";
import { useEffect, useLayoutEffect, useState } from "react";
import usePagination from "./hooks/usePagination";
import TableContainer from "./containers/tableContainer";

function App() {
  let url = "http://localhost:5000/primas";
  const { setData, currentData } = usePagination();
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data.primas));
  }, [url]);
  console.log(currentData);

  return (
    <dataContext.Provider value={[currentData]}>
      {/* <TableContainer /> */}
    </dataContext.Provider>
  );
}

export default App;
