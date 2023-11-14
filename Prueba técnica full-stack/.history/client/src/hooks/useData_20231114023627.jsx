import { useState } from "react";

const useData = () => {
  const [data, setData] = useState({});

  function filterData(filterCondition) {
    setData(data.filter(filterCondition));
  }

  return [data, setData, filterData];
};

export default useData;
