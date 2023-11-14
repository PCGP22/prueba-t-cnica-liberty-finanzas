import { useState } from "react";

const useData = (newData) => {
  const [data, setData] = useState(newData ?? []);
  const [filteredData, setFilteredData] = useState(data);

  function resetData() {
    setFilteredData(data);
  }
  function filterData(filterCondition) {
    setFilteredData(data.filter(filterCondition));
  }

  return [setData, resetData, filterData];
};
