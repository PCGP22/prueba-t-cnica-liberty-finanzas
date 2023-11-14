import { useState } from "react";

const usePagination = (quantityPerPage, data) => {
  const [maxPages, setMaxPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState(data);

  useEffect(() => {
    //Failsafe in case the data is still loading
    if (data.length > 0) {
      // Divides the data, in groups of "quantityPerPage"
      let dividedData = data.slice(
        (currentPage - 1) * quantityPerPage,
        currentPage * quantityPerPage
      );
      setCurrentData(dividedData);
    }
  }, [currentPage]);

  function setNextPage() {
    if (currentPage < maxPages) {
      setCurrentPage(currentPage + 1);
    }
  }
  function setPrevPage() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  return [
    maxPages,
    currentPage,
    setCurrentPage,
    currentData,
    setNextPage,
    setPrevPage,
  ];
};

export default usePagination;
