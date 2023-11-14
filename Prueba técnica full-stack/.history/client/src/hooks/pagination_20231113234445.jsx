import { useState } from "react";

const paginationHooks = (data) => {
  const [maxPages, setMaxPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState(data);

  let quantityPerPage = 5;

  useEffect(() => {
    if (data.length > 0) {
      //Failsafe in case the data is still loading
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
