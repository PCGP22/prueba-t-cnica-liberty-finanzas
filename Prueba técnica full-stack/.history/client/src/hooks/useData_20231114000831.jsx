import { useState } from "react";

const useData = (newData) => {
  const [data, setData] = useState(newData ?? []);
  const [filteredData, setFilteredData] = useState(data);

  function resetData() {}
};
