import useFetch from "./hooks/useFetch";
import useData from "./hooks/useData";
import { dataContext } from "./context/dataContext";
import Table from "./components/Table";

function App() {
  let url = "http://localhost:5000/primas";
  const [fetchedData] = useFetch(url);
  const [data, setData, filterData] = useData();
  setData(fetchedData.primas);

  return (
    <dataContext.Provider value={[data, setData, filterData]}>
      <Table />
    </dataContext.Provider>
  );
}

export default App;
