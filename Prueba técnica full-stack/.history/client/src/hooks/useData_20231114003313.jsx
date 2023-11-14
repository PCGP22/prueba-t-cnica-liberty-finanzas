import { useState } from "react";

const useData = (newData) => {
  const [initialData, setInitialData] = useState(newData);
  const [filteredData, setFilteredData] = useState(newData);

  function resetData() {
    setFilteredData(data);
  }
  function filterData(filterCondition) {
    setFilteredData(data.filter(filterCondition));
  }

  return [setData, resetData, filteredData, filterData];
};

export default useData;
