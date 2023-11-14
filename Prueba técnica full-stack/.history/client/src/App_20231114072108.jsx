import { dataContext } from "./context/dataContext";
import Table from "./components/Table";
import { useEffect, useReducer } from "react";
import Pagination from "./components/pagination";
import reducer from "./hooks/Reducer";
import Header from "./components/Header";

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

  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => dispatch({ type: "initialize", payload: data.primas }));
  }, [url]);

  return (
    <dataContext.Provider value={[state, dispatch]}>
      <Header />
      <Table />
      <Pagination />
    </dataContext.Provider>
  );
}

export default App;
