import { useState, useEffect } from "react";

const useFetch = async (url) => {
  const [fetchedData, setFetchedData] = useState({});

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFetchedData(data));
  }, [url]);

  return fetchedData;
};

export default useFetch;
