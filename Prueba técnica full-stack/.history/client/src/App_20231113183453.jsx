import { useState, useEffect } from "react";

function App() {
  let url = "http://localhost:5000/primas";
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => setData(res))
      .then(console.log(data));
  });
  return <>Hola</>;
}

export default App;
