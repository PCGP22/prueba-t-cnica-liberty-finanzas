import { useState } from "react";

const useData = () => {
  const [data, setData] = useState({});

  function filterData(filterCondition) {
    setData(data.filter(filterCondition));
  }

  return [setData, filterData];
};

export default useData;
