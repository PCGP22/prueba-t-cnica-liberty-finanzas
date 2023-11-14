import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState({});
  useEffect(() => {
    let url = "http://localhost:5000/primas";
    fetch(url)
      .then((res) => res.json())
      .then((res) => setData(res));
  });
  console.log(data);
  return <>Hola</>;
}

export default App;
