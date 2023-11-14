import useFetch from "./hooks/useFetch";
import { dataContext } from "./context/dataContext";

function App() {
  let url = "http://localhost:5000/primas";
  const [fetchedData] = useFetch(url);
  const [data, setData] = useState(fetchedData.primas);

  return <dataContext.Provider value={(data, setData)}></dataContext.Provider>;
}

export default App;
