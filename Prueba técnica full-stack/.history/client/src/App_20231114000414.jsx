import useFetch from "./hooks/useFetch";
import useData from "./hooks/useData";
import { dataContext } from "./context/dataContext";

function App() {
  let url = "http://localhost:5000/primas";
  const [data] = useFetch(url);

  return <dataContext.Provider value={data}></dataContext.Provider>;
}

export default App;
