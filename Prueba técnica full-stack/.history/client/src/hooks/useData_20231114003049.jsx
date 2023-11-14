import { useState } from "react";

const useData = () => {
  const [initialData, setInitialData] = useState(null);
  const [filteredData, setFilteredData] = useState(null);

  function setData(data) {
    setInitialData(data);
    setFilteredData(data);
  }

  function resetData() {
    setFilteredData(data);
  }
  function filterData(filterCondition) {
    setFilteredData(data.filter(filterCondition));
  }

  return [setData, resetData, filteredData, filterData];
};

export default useData;
