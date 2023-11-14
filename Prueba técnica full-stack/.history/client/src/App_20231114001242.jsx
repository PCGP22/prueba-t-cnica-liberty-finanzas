import useFetch from "./hooks/useFetch";
import useData from "./hooks/useData";
import { dataContext } from "./context/dataContext";

function App() {
  let url = "http://localhost:5000/primas";
  const [fetchedData] = useFetch(url);
  const [setData, resetData, filteredData, filterData] = useData(
    fetchedData.primas
  );

  return (
    <dataContext.Provider
      value={[
        setData,
        resetData,
        filteredData,
        filterData,
      ]}></dataContext.Provider>
  );
}

export default App;
