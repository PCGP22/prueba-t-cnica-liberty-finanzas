import useFetch from "./hooks/useFetch";
import useData from "./hooks/useData";
import { dataContext } from "./context/dataContext";
import Table from "./components/Table";

function App() {
  let url = "http://localhost:5000/primas";
  const [fetchedData] = useFetch(url);
  const [setData, resetData, filteredData, filterData] = useData();
  setData(fetchedData);

  return (
    <dataContext.Provider
      value={[setData, resetData, filteredData, filterData]}>
      <Table />
    </dataContext.Provider>
  );
}

export default App;
