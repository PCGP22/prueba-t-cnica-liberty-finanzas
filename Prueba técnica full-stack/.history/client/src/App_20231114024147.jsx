import useFetch from "./hooks/useFetch";
import useData from "./hooks/useData";
import { dataContext } from "./context/dataContext";
import Table from "./components/Table";
import { useEffect } from "react";

function App() {
  let url = "http://localhost:5000/primas";
  const [fetchedData] = useFetch(url);
  const [data, setData] = useState();
  useEffect(() => {
    setData(fetchedData.primas);
  }, [url]);

  return (
    <dataContext.Provider value={[data, setData]}>
      <Table />
    </dataContext.Provider>
  );
}

export default App;
