import useFetch from "./hooks/useFetch";
import { dataContext } from "./context/dataContext";

function App() {
  let url = "http://localhost:5000/primas";
  const [fetchedData] = useFetch(url);
  const [data, setData] = useState({});

  return <dataContext.Provider value={data}></dataContext.Provider>;
}

export default App;
